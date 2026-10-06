#!/usr/bin/env python3
"""
start_public_server.py
Starts a local HTTP server and creates a public HTTPS tunnel using localhost.run.
Provides an instant live public link for anyone on the internet to access the website.
"""
import http.server
import socketserver
import subprocess
import threading
import sys
import time
import re
import os

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and caching headers for public access
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, must-revalidate')
        super().end_headers()

def start_http():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"[Local Server] Running on http://localhost:{PORT}")
        httpd.serve_forever()

def start_tunnel():
    time.sleep(1)
    print("[Public Tunnel] Connecting to localhost.run to generate public HTTPS link...")
    cmd = [
        "ssh",
        "-o", "StrictHostKeyChecking=no",
        "-o", "ServerAliveInterval=30",
        "-o", "ServerAliveCountMax=3",
        "-R", f"80:localhost:{PORT}",
        "nokey@localhost.run"
    ]
    try:
        proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
        for line in proc.stdout:
            sys.stdout.write(line)
            sys.stdout.flush()
            # Match public domain (e.g. https://xxxx.lhr.life)
            match = re.search(r'(https?://[a-zA-Z0-9.-]+\.lhr\.life)', line)
            if match:
                url = match.group(1)
                print("\n" + "=" * 60)
                print(f"🎉 LIVE PUBLIC LINK: {url}")
                print(f"Anyone anywhere in the world can access your website here!")
                print("=" * 60 + "\n")
                with open("PUBLIC_URL.txt", "w") as f:
                    f.write(url + "\n")
    except Exception as e:
        print(f"[Tunnel Error] {e}")

if __name__ == "__main__":
    t_http = threading.Thread(target=start_http, daemon=True)
    t_http.start()
    start_tunnel()
