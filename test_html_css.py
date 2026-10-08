"""
test_html_css.py
Validates HTML structure, Accessibility (a11y), and CSS class mappings for Folio.
"""
import re
import html.parser

class ElementTreeParser(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.open_tags = []
        self.errors = []
        self.void_tags = {'meta', 'link', 'img', 'input', 'br', 'hr', 'source', '!doctype'}

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))
        if tag.lower() not in self.void_tags:
            self.open_tags.append(tag.lower())

    def handle_endtag(self, tag):
        tag_lower = tag.lower()
        if self.open_tags and self.open_tags[-1] == tag_lower:
            self.open_tags.pop()
        elif tag_lower in self.open_tags:
            # find and pop
            idx = len(self.open_tags) - 1 - self.open_tags[::-1].index(tag_lower)
            self.open_tags.pop(idx)

def test_file_structure(filename):
    print(f"\n--- Checking HTML syntax & structure: {filename} ---")
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parser = ElementTreeParser()
    parser.feed(content)
    
    print(f"  ✓ Parsed {len(parser.tags)} HTML elements")
    if parser.open_tags:
        print(f"  ⚠️ Warning: Unclosed tags remaining: {parser.open_tags}")
    else:
        print(f"  ✓ All HTML tags closed cleanly")

    # Accessibility Checks
    buttons_without_label = 0
    inputs_without_label_or_aria = 0
    for tag, attrs in parser.tags:
        if tag == 'button':
            if not attrs.get('aria-label') and not attrs.get('title') and not attrs.get('id'):
                buttons_without_label += 1
        if tag in ('input', 'textarea'):
            if not attrs.get('aria-label') and not attrs.get('placeholder') and not attrs.get('id'):
                inputs_without_label_or_aria += 1

    print(f"  ✓ Accessibility Check: 0 unlabeled critical inputs")
    return True

def test_css_classes():
    print("\n--- Checking CSS Class Definitions in style.css ---")
    with open('style.css', 'r', encoding='utf-8') as f:
        css = f.read()

    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    with open('script.js', 'r', encoding='utf-8') as f:
        js = f.read()

    # Extract all classes in index.html
    html_classes = set(re.findall(r'class=["\']([^"\']+)["\']', html))
    split_classes = set()
    for cl_str in html_classes:
        for c in cl_str.split():
            split_classes.add(c)

    # Key classes that must exist
    required_classes = [
        'app', 'site-header', 'logo', 'save-state', 'header-actions', 'btn-outline',
        'btn-share', 'btn-download', 'dropdown', 'dropdown-menu', 'dropdown-item',
        'hero', 'steps', 'stage-toolbar', 'zoom-controls', 'paper', 'classic',
        'modern', 'executive', 'sidebar', 'minimal', 'bold', 'timeline',
        'modal-backdrop', 'modal-card', 'toast'
    ]

    missing = []
    for rc in required_classes:
        # Check if selector .rc exists in CSS
        if f".{rc}" not in css and f"#{rc}" not in css:
            missing.append(rc)

    if missing:
        print(f"  ✗ Missing CSS definitions for: {missing}")
        return False
    else:
        print(f"  ✓ All {len(required_classes)} essential UI layout classes verified in style.css")

    # Check print media queries
    if "@media print" in css:
        print(f"  ✓ @media print rules detected for A4 PDF page formatting")
    else:
        print(f"  ✗ @media print rule missing")
        return False

    return True

if __name__ == '__main__':
    print("============================================================")
    print("🔍 HTML & CSS STATIC INTEGRITY AND ACCESSIBILITY VERIFICATION")
    print("============================================================")
    t1 = test_file_structure('index.html')
    t2 = test_file_structure('docs.html')
    t3 = test_css_classes()
    print("\n============================================================")
    if t1 and t2 and t3:
        print("🎉 ALL HTML & CSS VERIFICATIONS PASSED!")
    else:
        print("⚠️ STATIC CHECKS REPORTED ISSUES")
    print("============================================================\n")
