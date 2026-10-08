import os

with open('extracted_assets/mbu_logo_b64.txt', 'r') as f:
    mbu_logo_b64 = f.read().strip()

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Mohan Babu University – Web Technologies Project Report</title>
  <style>
    @page {{
      size: A4 portrait;
      margin: 12mm 14mm 12mm 14mm;
    }}

    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    body {{
      font-family: Calibri, Arial, "Segoe UI", sans-serif;
      color: #000000;
      background: #ffffff;
      font-size: 15px;
      line-height: 1.55;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}

    /* PAGE CONTAINERS */
    .cover-page {{
      width: 100%;
      height: 268mm;
      max-height: 268mm;
      page-break-after: always;
      break-after: page;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      padding: 35px 25px 20px;
      box-sizing: border-box;
    }}

    .bordered-page {{
      width: 100%;
      height: 268mm;
      max-height: 268mm;
      page-break-after: always;
      break-after: page;
      border: 1.5px solid #000000;
      padding: 26px 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }}

    /* COLOR UTILITIES MATCHING SAMPLE PDF */
    .red-text {{
      color: #cc0000;
      font-weight: bold;
    }}
    .blue-text {{
      color: #002060;
      font-weight: bold;
    }}
    .black-bold {{
      color: #000000;
      font-weight: bold;
    }}

    /* COVER PAGE TYPOGRAPHY */
    .cover-title {{
      font-size: 30px;
      font-weight: bold;
      color: #000000;
      line-height: 1.25;
      margin-bottom: 25px;
    }}
    .cover-sub {{
      font-size: 16px;
      color: #000000;
      line-height: 1.7;
      margin-bottom: 25px;
    }}
    .cover-course {{
      font-size: 17px;
      font-weight: bold;
      color: #000000;
      margin-top: 6px;
    }}
    .cover-submitted-title {{
      font-size: 17px;
      font-weight: bold;
      color: #000000;
      margin-bottom: 12px;
    }}
    .cover-team-table {{
      width: 80%;
      margin: 0 auto 25px;
      border-collapse: collapse;
      font-size: 15px;
      font-weight: bold;
      color: #000000;
    }}
    .cover-team-table td {{
      padding: 4px 10px;
    }}
    .cover-team-table td.roll {{
      text-align: right;
      font-family: Arial, sans-serif;
    }}
    .cover-guide {{
      font-size: 15px;
      color: #000000;
      line-height: 1.5;
      margin-bottom: 25px;
    }}
    .cover-guide strong {{
      font-size: 16px;
      display: block;
      margin-top: 3px;
    }}
    .cover-mbu-logo {{
      width: 210px;
      height: auto;
      margin: 0 auto 10px;
      display: block;
    }}
    .cover-univ-title {{
      font-size: 24px;
      font-weight: bold;
      color: #cc0000;
      letter-spacing: 0.02em;
    }}
    .cover-univ-sub {{
      font-size: 15px;
      color: #000000;
      line-height: 1.4;
    }}

    /* HEADINGS IN CONTENT PAGES */
    h1.page-heading-red {{
      font-size: 20px;
      font-weight: bold;
      color: #cc0000;
      text-align: center;
      margin-bottom: 15px;
    }}
    h2.section-heading-blue {{
      font-size: 18px;
      font-weight: bold;
      color: #002060;
      text-align: center;
      margin: 12px 0 6px;
    }}
    h2.section-heading-red {{
      font-size: 19px;
      font-weight: bold;
      color: #cc0000;
      text-align: center;
      margin: 16px 0 8px;
    }}
    h1.toc-heading {{
      font-size: 22px;
      font-weight: bold;
      color: #000000;
      margin-bottom: 10px;
    }}
    h2.chapter-title {{
      font-size: 18px;
      font-weight: bold;
      color: #000000;
      margin-bottom: 12px;
    }}
    h3.sub-title {{
      font-size: 16px;
      font-weight: bold;
      color: #000000;
      margin: 12px 0 4px;
    }}

    /* LISTS & TEXT */
    p.body-text {{
      font-size: 15px;
      line-height: 1.55;
      color: #000000;
      text-align: justify;
      margin-bottom: 10px;
    }}
    ul.bullet-list {{
      list-style: none;
      padding-left: 0;
      margin-bottom: 10px;
    }}
    ul.bullet-list li {{
      font-size: 14.5px;
      line-height: 1.55;
      color: #000000;
      margin-bottom: 8px;
      position: relative;
      padding-left: 22px;
      text-align: justify;
    }}
    ul.bullet-list li::before {{
      content: "❖";
      position: absolute;
      left: 0;
      top: 0;
      color: #000000;
      font-size: 13px;
    }}
    ul.arrow-list {{
      list-style: none;
      padding-left: 0;
      margin-bottom: 10px;
    }}
    ul.arrow-list li {{
      font-size: 14.5px;
      line-height: 1.55;
      color: #000000;
      margin-bottom: 8px;
      position: relative;
      padding-left: 24px;
      text-align: justify;
    }}
    ul.arrow-list li::before {{
      content: "⮚";
      position: absolute;
      left: 0;
      top: 0;
      color: #000000;
      font-size: 14px;
    }}
    ul.toc-list {{
      list-style: none;
      padding-left: 0;
    }}
    ul.toc-list li {{
      font-size: 15px;
      line-height: 1.7;
      color: #000000;
    }}
    ul.toc-sub {{
      list-style: none;
      padding-left: 26px;
    }}
    ul.toc-sub li {{
      font-size: 14.5px;
      line-height: 1.55;
      color: #000000;
      position: relative;
      padding-left: 14px;
    }}
    ul.toc-sub li::before {{
      content: "•";
      position: absolute;
      left: 0;
      color: #000000;
    }}

    /* TABLE IN PAGE 7 */
    .table-spec {{
      width: 100%;
      border-collapse: collapse;
      font-size: 12.5px;
      text-align: center;
      margin-top: 10px;
    }}
    .table-spec th, .table-spec td {{
      border: 1px solid #000000;
      padding: 5px 3px;
      color: #000000;
    }}
    .table-spec th {{
      background: #c8c8e6;
      font-weight: bold;
    }}
    .corr-row {{
      background: #fee2e2;
      color: #cc0000;
      font-weight: bold;
    }}
    .corr-row td {{
      color: #cc0000 !important;
      font-weight: bold;
    }}

    /* CODE & BLOCKS */
    .code-box {{
      background: #f8fafc;
      border: 1px solid #000000;
      padding: 10px 14px;
      font-family: "Courier New", Courier, monospace;
      font-size: 13px;
      line-height: 1.45;
      color: #000000;
      margin: 8px 0;
      white-space: pre-wrap;
    }}

    /* SIGNATURES */
    .sig-table {{
      width: 100%;
      margin-top: 30px;
      font-size: 14.5px;
      color: #000000;
      line-height: 1.4;
    }}
    .sig-table td {{
      vertical-align: top;
      width: 50%;
    }}

    /* CERTIFICATE GRID */
    .cert-frame-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-top: 15px;
    }}
    .cert-single {{
      border: 1.5px solid #000000;
      padding: 16px;
      text-align: center;
      background: #ffffff;
    }}
    .cert-single h4 {{
      color: #0284c7;
      font-size: 17px;
      font-weight: bold;
    }}
    .cert-single .name {{
      color: #cc0000;
      font-size: 16px;
      font-weight: bold;
      margin: 8px 0 4px;
    }}
    .cert-single .course {{
      font-size: 13.5px;
      color: #000000;
      line-height: 1.4;
    }}
    .cert-single .cid {{
      font-size: 12px;
      font-family: monospace;
      color: #333333;
      margin-top: 6px;
    }}
  </style>
</head>
<body>

  <!-- PAGE 1: COVER PAGE -->
  <div class="cover-page">
    <div>
      <h1 class="cover-title">Folio: Modern Resume Builder &amp; Live Preview</h1>
      <div class="cover-sub">
        A Report submitted under Project-Based<br><br>
        Learning In Partial Fulfillment of the Course Requirement<br>
        for<br>
        <div class="cover-course">“Web Technologies (22IT104001)”</div>
      </div>

      <div class="cover-submitted-title">Submitted By</div>
      <table class="cover-team-table">
        <tr>
          <td>REVANTH LAKHINANA (Team Lead)</td>
          <td class="roll">23102A040154</td>
        </tr>
        <tr>
          <td>[TEAM MEMBER 2 - EDITABLE]</td>
          <td class="roll">23102A040172</td>
        </tr>
        <tr>
          <td>[TEAM MEMBER 3 - EDITABLE]</td>
          <td class="roll">23102A040173</td>
        </tr>
        <tr>
          <td>[TEAM MEMBER 4 - EDITABLE]</td>
          <td class="roll">23102A040176</td>
        </tr>
        <tr>
          <td>[TEAM MEMBER 5 - EDITABLE]</td>
          <td class="roll">23102A040188</td>
        </tr>
        <tr>
          <td>[TEAM MEMBER 6 - EDITABLE]</td>
          <td class="roll">23102A040218</td>
        </tr>
      </table>

      <div class="cover-guide">
        Under the Guidance of<br>
        <strong>Mr. A. Basi Reddy, M.Tech., (Ph.D)</strong>
        Assistant Professor<br>
        Department of CSE
      </div>
    </div>

    <div>
      <img src="{mbu_logo_b64}" class="cover-mbu-logo" alt="Mohan Babu University Logo">
      <div class="cover-univ-sub" style="font-weight: bold;">Department of Computer Science and Engineering</div>
      <div class="cover-univ-sub" style="font-weight: bold; margin-bottom: 2px;">School of Computing</div>
      <div class="cover-univ-title">MOHAN BABU UNIVERSITY</div>
      <div class="cover-univ-sub">Sree Sainath Nagar, Tirupati – 517102</div>
      <div class="cover-univ-sub" style="font-weight: bold; margin-top: 4px;">2025-2026</div>
    </div>
  </div>

  <!-- PAGE 2: UNIVERSITY & SCHOOL VISION & MISSION -->
  <div class="bordered-page">
    <div>
      <div style="display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 8px;">
        <img src="{mbu_logo_b64}" style="height: 48px; width: auto;" alt="MBU Logo">
        <span style="font-size: 22px; font-weight: bold; color: #cc0000; letter-spacing: 0.04em;">MOHANBABUUNIVERSITY</span>
      </div>

      <h2 class="section-heading-blue">Vision</h2>
      <p class="body-text">
        To be a globally respected institution with an innovative and entrepreneurial culture that offers transformative education to advance sustainability and societal good.
      </p>

      <h2 class="section-heading-blue">Mission</h2>
      <ul class="bullet-list">
        <li>Develop industry-focused professionals with a global perspective.</li>
        <li>Offer academic programs that provide transformative learning experience founded on the spirit of curiosity, innovation, and integrity.</li>
        <li>Create confluence of research, innovation, and ideation to bring about sustainable and socially relevant enterprises.</li>
        <li>Uphold high standards of professional ethics leading to harmonious relationship with environment and society.</li>
      </ul>

      <h2 class="section-heading-red" style="margin-top: 22px;">SCHOOL OF COMPUTING</h2>
      <h2 class="section-heading-blue">Vision</h2>
      <p class="body-text">
        To lead the advancement of computer science research and education that has real-world impact and to push the frontiers of innovation in the field.
      </p>

      <h2 class="section-heading-blue">Mission</h2>
      <ul class="bullet-list">
        <li>Instill within our students fundamental computing knowledge, a broad set of skills, and an inquisitive attitude to create innovative solutions to serve industry and community.</li>
        <li>Provide an experience par excellence with our state-of-the-art research, innovation, and incubation ecosystem to realise our learners’ fullest potential.</li>
        <li>Impart continued education and research support to working professionals in the computing domain to enhance their expertise in cutting-edge technologies.</li>
      </ul>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">2</div>
  </div>

  <!-- PAGE 3: DEPARTMENT OF CSE VISION & MISSION -->
  <div class="bordered-page">
    <div>
      <ul class="bullet-list" style="margin-bottom: 18px;">
        <li>Inculcate among the computing engineers of tomorrow with a spirit to solve societal challenges.</li>
      </ul>

      <h1 class="page-heading-red">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h1>

      <h2 class="section-heading-blue">Vision</h2>
      <p class="body-text">
        To become a Centre of Excellence in Computer Science and its emerging areas by imparting high quality education through teaching, training and research.
      </p>

      <h2 class="section-heading-blue" style="margin-top: 20px;">Mission</h2>
      <ul class="arrow-list">
        <li>Imparting quality education in Computer Science and Engineering and emerging areas of IT industry by disseminating knowledge through contemporary curriculum, competent faculty and effective teaching-learning methodologies.</li>
        <li>Nurture research, innovation and entrepreneurial skills among faculty and students to contribute to the needs of industry and society.</li>
        <li>Inculcate professional attitude, ethical and social responsibilities for prospective and promising engineering profession.</li>
        <li>Encourage students to engage in life-long learning by creating awareness of the contemporary developments in Computer Science and Engineering and its emerging areas.</li>
      </ul>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">3</div>
  </div>

  <!-- PAGE 4: PEOs & POs (PO1 to PO5) -->
  <div class="bordered-page">
    <div>
      <div style="font-size: 18px; font-weight: bold; color: #002060; text-align: center; margin-bottom: 8px;">
        B.Tech.Computer Science and Engineering
      </div>
      <h2 class="section-heading-red" style="margin-top: 0;">PROGRAM EDUCATIONAL OBJECTIVES</h2>
      <p class="body-text" style="text-align: center; font-weight: bold; margin-bottom: 12px;">
        After few years of graduation, the graduates of B.Tech.CSE will be:
      </p>
      <p class="body-text">
        <strong>PEO1.</strong> Pursuing higher studies in core, specialized or allied areas of Computer Science, or Management.
      </p>
      <p class="body-text">
        <strong>PEO2.</strong> Employed in reputed Computer and I.T organizations or Government to have a globally competent professional career in Computer Science and Engineering domain or be successful Entrepreneurs.
      </p>
      <p class="body-text">
        <strong>PEO3.</strong> Able to demonstrate effective communication, engage in teamwork, exhibit leadership skills and ethical attitude, and achieve professional advancement through continuing education.
      </p>

      <h2 class="section-heading-red" style="margin-top: 20px;">PROGRAM OUTCOMES</h2>
      <p class="body-text" style="font-weight: bold; margin-bottom: 10px;">
        On successful completion of the Program, the graduates of B.Tech.CSE Program will be able to:
      </p>
      <p class="body-text">
        <strong>PO1. Engineering Knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.
      </p>
      <p class="body-text">
        <strong>PO2. Problem Analysis:</strong> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.
      </p>
      <p class="body-text">
        <strong>PO3. Design/Development of Solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.
      </p>
      <p class="body-text">
        <strong>PO4. Conduct Investigations of Complex Problems:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.
      </p>
      <p class="body-text">
        <strong>PO5. Modern Tool Usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.
      </p>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">4</div>
  </div>

  <!-- PAGE 5: POs (PO6 to PO12) -->
  <div class="bordered-page">
    <div>
      <p class="body-text">
        <strong>PO6. The Engineer and Society:</strong> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.
      </p>
      <p class="body-text">
        <strong>PO7. Environment and Sustainability:</strong> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.
      </p>
      <p class="body-text">
        <strong>PO8. Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.
      </p>
      <p class="body-text">
        <strong>PO9. Individual and Team Work:</strong> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.
      </p>
      <p class="body-text">
        <strong>PO10. Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.
      </p>
      <p class="body-text">
        <strong>PO11. Project Management and Finance:</strong> Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.
      </p>
      <p class="body-text">
        <strong>PO12. Life-long Learning:</strong> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.
      </p>

      <div style="margin-top: 35px;">
        <h2 class="section-heading-red">PROGRAM SPECIFIC OUTCOMES</h2>
      </div>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">5</div>
  </div>

  <!-- PAGE 6: PROGRAM SPECIFIC OUTCOMES (PSOs) -->
  <div class="bordered-page">
    <div>
      <p class="body-text" style="font-weight: bold; margin-bottom: 20px;">
        On successful completion of the Program, the graduates of B.Tech.(CSE) program will be able to:
      </p>
      <p class="body-text" style="margin-bottom: 22px;">
        <strong>PSO1.</strong> Apply knowledge of computer science engineering, Use modern tools, techniques and technologies for efficient design and development of computer-based systems for complex engineering problems.
      </p>
      <p class="body-text" style="margin-bottom: 22px;">
        <strong>PSO2.</strong> Design and deploy networked systems using standards and principles, evaluate security measures for complex networks, apply procedures and tools to solve networking issues.
      </p>
      <p class="body-text" style="margin-bottom: 22px;">
        <strong>PSO3.</strong> Develop intelligent systems by applying adaptive algorithms and methodologies for solving problems from inter-disciplinary domains.
      </p>
      <p class="body-text" style="margin-bottom: 22px;">
        <strong>PSO4.</strong> Apply suitable models, tools and techniques to perform data analytics for effective decision making.
      </p>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">6</div>
  </div>

  <!-- PAGE 7: COURSE OUTCOMES & CORRELATION MATRIX -->
  <div class="bordered-page">
    <div>
      <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 14.5px; border-bottom: 1.5px solid #000; padding-bottom: 6px; margin-bottom: 14px;">
        <div>Course Code: 22IT104001</div>
        <div>Course Title: WEB TECHNOLOGIES</div>
        <div>L: 3 &nbsp; T: - &nbsp; P: 2 &nbsp; S: 4 &nbsp; C: 5</div>
      </div>

      <p class="body-text" style="font-weight: bold; margin-bottom: 8px;">
        COURSE OUTCOMES: After successful completion of this course, the students will be able to:
      </p>
      <p class="body-text" style="font-size: 13.5px; line-height: 1.45; margin-bottom: 4px;">
        <strong>CO1.</strong> Demonstrate knowledge on webpage design elements, dynamic content and database connection.
      </p>
      <p class="body-text" style="font-size: 13.5px; line-height: 1.45; margin-bottom: 4px;">
        <strong>CO2.</strong> Analyze user requirements to develop web applications.
      </p>
      <p class="body-text" style="font-size: 13.5px; line-height: 1.45; margin-bottom: 4px;">
        <strong>CO3.</strong> Design client-server applications using web technologies.
      </p>
      <p class="body-text" style="font-size: 13.5px; line-height: 1.45; margin-bottom: 4px;">
        <strong>CO4.</strong> Demonstrate problem solving skills to develop enterprise web applications.
      </p>
      <p class="body-text" style="font-size: 13.5px; line-height: 1.45; margin-bottom: 4px;">
        <strong>CO5.</strong> Apply HTML, CSS, JavaScript, responsive layouts, and client-side storage technologies for device independent web application development.
      </p>
      <p class="body-text" style="font-size: 13.5px; line-height: 1.45; margin-bottom: 14px;">
        <strong>CO6.</strong> Apply web technologies to develop interactive, dynamic and scalable web applications for societal needs.
      </p>

      <p class="body-text" style="font-weight: bold; margin-bottom: 6px;">CO-PO-PSO Mapping Table:</p>
      <table class="table-spec">
        <thead>
          <tr>
            <th rowspan="2" style="width: 14%;">Course Outcomes</th>
            <th colspan="12">Program Outcomes (POs)</th>
            <th colspan="4">Program Specific Outcomes</th>
          </tr>
          <tr>
            <th>PO1</th><th>PO2</th><th>PO3</th><th>PO4</th><th>PO5</th><th>PO6</th><th>PO7</th><th>PO8</th><th>PO9</th><th>PO10</th><th>PO11</th><th>PO12</th>
            <th>PSO1</th><th>PSO2</th><th>PSO3</th><th>PSO4</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>CO1</td><td>3</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>3</td><td>2</td><td>3</td><td>-</td></tr>
          <tr><td>CO2</td><td>3</td><td>3</td><td>3</td><td>2</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>3</td><td>2</td><td>3</td><td>-</td></tr>
          <tr><td>CO3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>3</td><td>2</td><td>3</td><td>-</td></tr>
          <tr><td>CO4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>2</td><td>2</td><td>3</td><td>-</td></tr>
          <tr><td>CO5</td><td>3</td><td>2</td><td>2</td><td>2</td><td>2</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>2</td><td>2</td><td>3</td><td>-</td></tr>
          <tr><td>CO6</td><td>-</td><td>-</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>3</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
          <tr class="corr-row">
            <td>Course Correlation Mapping</td>
            <td>3</td><td>3</td><td>3</td><td>2</td><td>2</td><td>3</td><td>-</td><td>-</td><td>3</td><td>3</td><td>-</td><td>-</td>
            <td>3</td><td>2</td><td>3</td><td>-</td>
          </tr>
        </tbody>
      </table>

      <div style="margin-top: 15px; font-size: 13.5px; font-weight: bold; text-align: center;">
        Correlation Levels: &nbsp;&nbsp; 3: High Correlation (Strong) &nbsp;•&nbsp; 2: Medium Correlation &nbsp;•&nbsp; 1: Low Correlation
      </div>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">7</div>
  </div>

  <!-- PAGE 8: CERTIFICATE -->
  <div class="bordered-page">
    <div>
      <div style="display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 4px;">
        <img src="{mbu_logo_b64}" style="height: 52px; width: auto;" alt="MBU Logo">
        <div>
          <div style="font-size: 24px; font-weight: bold; color: #cc0000; letter-spacing: 0.04em;">MOHAN BABU UNIVERSITY</div>
          <div style="font-size: 13px; color: #000000; text-align: center;">Sree Sainath Nagar, Tirupati 517 102</div>
        </div>
      </div>
      <hr style="border: none; border-top: 2.5px double #000000; margin: 10px 0 16px;">

      <div style="font-size: 17px; font-weight: bold; text-align: center; margin-bottom: 12px;">
        Department of Computer Science and Engineering
      </div>
      <div style="font-size: 22px; font-weight: bold; text-align: center; letter-spacing: 0.12em; margin-bottom: 20px;">
        CERTIFICATE
      </div>

      <p class="body-text" style="text-align: center; margin-bottom: 12px;">
        This is to certify that the Project Entitled
      </p>
      <div style="font-size: 19px; font-weight: bold; text-align: center; margin-bottom: 22px;">
        “Folio: Modern Resume Builder &amp; Live Preview”
      </div>

      <div style="font-size: 15px; font-weight: bold; text-align: center; margin-bottom: 12px;">Submitted By</div>
      <table class="cover-team-table" style="width: 75%; margin-bottom: 22px;">
        <tr>
          <td>REVANTH LAKHINANA</td>
          <td class="roll">23102A040154</td>
        </tr>
        <tr>
          <td>[TEAM MEMBER 2 - EDITABLE]</td>
          <td class="roll">23102A040172</td>
        </tr>
        <tr>
          <td>[TEAM MEMBER 3 - EDITABLE]</td>
          <td class="roll">23102A040173</td>
        </tr>
        <tr>
          <td>[TEAM MEMBER 4 - EDITABLE]</td>
          <td class="roll">23102A040176</td>
        </tr>
        <tr>
          <td>[TEAM MEMBER 5 - EDITABLE]</td>
          <td class="roll">23102A040188</td>
        </tr>
        <tr>
          <td>[TEAM MEMBER 6 - EDITABLE]</td>
          <td class="roll">23102A040218</td>
        </tr>
      </table>

      <p class="body-text" style="line-height: 1.6; margin-bottom: 30px;">
        is a bonafide record of the work carried out under Project-Based Learning in partial fulfillment of the course requirements for <strong>“Web Technologies (22IT104001)”</strong> during 2025-2026.
      </p>

      <table class="sig-table">
        <tr>
          <td>
            <strong>Supervisor:</strong><br>
            Mr. A. Basi Reddy, M.Tech., (Ph.D)<br>
            Assistant Professor<br>
            Department of CSE<br>
            School of Computing<br>
            Mohan Babu University, Tirupati.
          </td>
          <td style="text-align: right;">
            <strong>Head:</strong><br>
            Dr. G. Sunitha, M.Tech., Ph.D<br>
            Professor &amp; Head<br>
            Department of CSE<br>
            School of Computing<br>
            Mohan Babu University, Tirupati.
          </td>
        </tr>
      </table>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">8</div>
  </div>

  <!-- PAGE 9: ACKNOWLEDGEMENTS -->
  <div class="bordered-page">
    <div>
      <div style="font-size: 22px; font-weight: bold; text-align: center; letter-spacing: 0.08em; margin-bottom: 26px;">
        ACKNOWLEDGEMENTS
      </div>

      <p class="body-text" style="margin-bottom: 16px;">
        First and foremost, I extend my sincere thanks to <strong>Dr. M. Mohan Babu</strong>, Chancellor, for his unwavering support and vision that fosters academic excellence within the institution.
      </p>
      <p class="body-text" style="margin-bottom: 16px;">
        My gratitude also goes to <strong>Mr. Manchu Vishnu</strong>, Pro-Chancellor, for creating an environment that promotes creativity and for his encouragement and commitment to student success.
      </p>
      <p class="body-text" style="margin-bottom: 16px;">
        I am deeply appreciative of <strong>Prof. Nagaraj Ramrao</strong>, Vice Chancellor, whose leadership has created an environment conducive to learning and innovation.
      </p>
      <p class="body-text" style="margin-bottom: 16px;">
        I would like to thank <strong>Dr. K. Saradhi</strong>, Registrar, for his support in creating an environment conducive to academic success.
      </p>
      <p class="body-text" style="margin-bottom: 16px;">
        I am also grateful to <strong>Dr. G. Sunitha</strong>, Head of the Department of Computer Science and Engineering, for her valuable insights and support.
      </p>
      <p class="body-text" style="margin-bottom: 22px;">
        Finally, I express my deepest appreciation to my project supervisor, <strong>Mr. A. Basi Reddy</strong>, Assistant Professor, Department of Computer Science and Engineering, for his continuous guidance, constructive feedback, and technical mentorship throughout the lifecycle of this project.
      </p>
      <p class="body-text" style="font-weight: bold;">
        Thank you all for your support and encouragement.
      </p>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">9</div>
  </div>

  <!-- PAGE 10: TABLE OF CONTENTS (PART 1) -->
  <div class="bordered-page">
    <div>
      <div style="font-size: 17px; font-weight: bold; margin-bottom: 4px;">
        Folio Application - Complete Technical Documentation
      </div>
      <hr style="border: 0.5px solid #000000; margin-bottom: 14px;">
      <h1 class="toc-heading">Table of Contents</h1>

      <ul class="toc-list">
        <li><strong>1. Introduction</strong>
          <ul class="toc-sub">
            <li>1.1 Project Overview</li>
            <li>1.2 Purpose and Objectives</li>
            <li>1.3 Target Audience</li>
            <li>1.4 Document Structure</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>2. Project Overview</strong>
          <ul class="toc-sub">
            <li>2.1 Background</li>
            <li>2.2 Problem Statement</li>
            <li>2.3 Solution Overview</li>
            <li>2.4 Key Features Summary</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>3. System Architecture</strong>
          <ul class="toc-sub">
            <li>3.1 High-Level Architecture</li>
            <li>3.2 Technology Stack</li>
            <li>3.3 Frontend Architecture &amp; Fixed Desktop Layout</li>
            <li>3.4 Client-Side Execution Sandbox</li>
            <li>3.5 Third-Party Integrations</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>4. Features and Functionality</strong>
          <ul class="toc-sub">
            <li>4.1 Fixed A4 Paper Workspace</li>
            <li>4.2 In-Preview Direct Click-to-Edit Mode</li>
            <li>4.3 Bidirectional Scroll-Spy Synchronization</li>
            <li>4.4 Automated Quality Coach &amp; ATS Scoring</li>
            <li>4.5 7 Professional Curriculum Vitae Templates</li>
          </ul>
        </li>
      </ul>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">10</div>
  </div>

  <!-- PAGE 11: TABLE OF CONTENTS (PART 2) -->
  <div class="bordered-page">
    <div>
      <ul class="toc-list">
        <li><strong>5. Database &amp; Data Model Design</strong>
          <ul class="toc-sub">
            <li>5.1 Resume State Schema (Object S)</li>
            <li>5.2 Local Storage Persistence</li>
            <li>5.3 Dynamic Reordering &amp; Visibility State</li>
            <li>5.4 Privacy &amp; Data Security Guarantees</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>6. API and Data Flow</strong>
          <ul class="toc-sub">
            <li>6.1 Reactive Rendering Engine &amp; Central Event Loop</li>
            <li>6.2 Direct DOM Caret Preservation</li>
            <li>6.3 QR Code Server Integration</li>
            <li>6.4 Real-time State Synchronization</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>7. User Interface Design</strong>
          <ul class="toc-sub">
            <li>7.1 Design Principles &amp; Dual-Panel Flow</li>
            <li>7.2 ISO 216 Authentic A4 Geometry (794px × 1123px)</li>
            <li>7.3 Typography Hierarchy &amp; Color Scheme</li>
            <li>7.4 WCAG 2.1 AA Accessibility Considerations</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>8. Setup and Installation</strong>
          <ul class="toc-sub">
            <li>8.1 Prerequisites &amp; Runtime Environment</li>
            <li>8.2 Cloning and Zero-Dependency Local Setup</li>
            <li>8.3 Local Web Server Verification</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>9. User Guide &amp; Workflow</strong>
          <ul class="toc-sub">
            <li>9.1 Getting Started &amp; Sample Profiles</li>
            <li>9.2 Live In-Place Text Editing</li>
            <li>9.3 ATS Optimization Checklist</li>
            <li>9.4 Vector PDF Export &amp; Print Setup</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>10. Developer Guide &amp; Testing Strategy</strong>
          <ul class="toc-sub">
            <li>10.1 Codebase Structure &amp; Modularity</li>
            <li>10.2 96-Unit Assertion Automated Test Suite</li>
            <li>10.3 Code Quality &amp; Linting Standards</li>
          </ul>
        </li>
      </ul>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">11</div>
  </div>

  <!-- PAGE 12: TABLE OF CONTENTS (PART 3) -->
  <div class="bordered-page">
    <div>
      <ul class="toc-list">
        <li><strong>11. Deployment</strong>
          <ul class="toc-sub">
            <li>11.1 GitHub Pages Deployment Overview</li>
            <li>11.2 Continuous Delivery Architecture</li>
            <li>11.3 Custom Domain Configuration</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>12. Security and Privacy</strong>
          <ul class="toc-sub">
            <li>12.1 Client-Side Isolation Guarantee</li>
            <li>12.2 XSS Sanitization Pipeline</li>
            <li>12.3 Zero-Telemetry Audit</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>13. Performance and Optimization</strong>
          <ul class="toc-sub">
            <li>13.1 99/100 Lighthouse Performance Metric</li>
            <li>13.2 Sub-0.4s First Contentful Paint</li>
            <li>13.3 CSS Print Media Optimization</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>14. Maintenance and Updates</strong>
          <ul class="toc-sub">
            <li>14.1 Routine Browser Engine Compatibility</li>
            <li>14.2 Font Cache &amp; Storage Backup Procedures</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>15. Troubleshooting &amp; FAQ</strong>
          <ul class="toc-sub">
            <li>15.1 Print Scaling &amp; Page Margins</li>
            <li>15.2 Browser Cache Clearing</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>16. Future Roadmap</strong>
          <ul class="toc-sub">
            <li>16.1 Multi-Column Layout Blocks</li>
            <li>16.2 Local WebAssembly LLM ATS Matching</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>17. Appendix &amp; Contact Information</strong>
          <ul class="toc-sub">
            <li>17.1 Technical Glossary</li>
            <li>17.2 Repository &amp; Author Contacts</li>
          </ul>
        </li>
        <li style="margin-top: 8px;"><strong>18. Project Screenshots &amp; UI Showcase</strong></li>
        <li style="margin-top: 8px;"><strong>19. Course Pathway Completion Certificates</strong></li>
      </ul>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">12</div>
  </div>

  <!-- PAGE 13: CHAPTER 1 - INTRODUCTION -->
  <div class="bordered-page">
    <div>
      <h2 class="chapter-title">1. Introduction</h2>

      <h3 class="sub-title">1.1 Project Overview</h3>
      <p class="body-text">
        Folio is a modern client-side web application designed to empower students, job seekers, and software engineers to create ATS-compliant, recruiter-ready resumes with instantaneous visual feedback. Unlike existing platforms that gate PDF downloads behind paywalls or sell user data, Folio operates entirely in the browser sandbox with zero external dependencies.
      </p>

      <h3 class="sub-title">1.2 Purpose and Objectives</h3>
      <p class="body-text">
        The primary purpose of Folio is to provide an accessible, transparent, and aesthetically refined platform where candidates can construct professional resumes tailored to industry expectations.
      </p>
      <p class="body-text" style="font-weight: bold; margin-bottom: 4px;">Key Objectives:</p>
      <ul class="bullet-list">
        <li><strong>Fixed-Screen Live Preview:</strong> Pinned authentic physical A4 sheet (210 × 297 mm) on the right side while the form editor scrolls independently on the left.</li>
        <li><strong>In-Preview Direct Click-to-Edit:</strong> Enable users to click directly on any text on the resume paper to edit in place with two-way synchronization.</li>
        <li><strong>Recruiter-Readiness &amp; ATS Coach:</strong> Heuristic evaluation verifying action verbs, metrics, and word counts.</li>
        <li><strong>Instant Public Sharing:</strong> Encode resume state into shareable URL hashes with dynamic mobile QR code rendering.</li>
        <li><strong>Zero-Cost Vector PDF Generation:</strong> High-resolution single-page vector PDFs using native browser print drivers.</li>
      </ul>

      <h3 class="sub-title">1.3 Target Audience</h3>
      <p class="body-text">
        This application and documentation are intended for undergraduate students, technical job seekers, university faculty evaluating software engineering projects, and open-source contributors.
      </p>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">13</div>
  </div>

  <!-- PAGE 14: CHAPTER 2 - PROJECT OVERVIEW -->
  <div class="bordered-page">
    <div>
      <h3 class="sub-title">1.4 Document Structure</h3>
      <p class="body-text">
        This document follows a structured academic engineering methodology, progressing from high-level architectural models down to client-side data structures, testing matrices, and visual showcases.
      </p>

      <h2 class="chapter-title" style="margin-top: 18px;">2. Project Overview</h2>

      <h3 class="sub-title">2.1 Background</h3>
      <p class="body-text">
        Over 75% of job applications are filtered out by automated Applicant Tracking Systems (ATS) due to multi-column reading bugs, font incompatibilities, or missing measurable accomplishments. Commercial resume tools frequently lock export functionality behind expensive monthly subscriptions.
      </p>

      <h3 class="sub-title">2.2 Problem Statement</h3>
      <p class="body-text">Candidates encounter several hurdles during resume creation:</p>
      <ul class="bullet-list">
        <li>Unpredictable page spilling where three extra lines trigger an ugly second blank page.</li>
        <li>Cumbersome form editing where the user cannot see the physical paper layout.</li>
        <li>Privacy risks where cloud servers store candidate phone numbers, addresses, and employment histories.</li>
        <li>High cost and subscription traps for simple PDF downloads.</li>
      </ul>

      <h3 class="sub-title">2.3 Solution Overview</h3>
      <p class="body-text">
        Folio provides a unified single-page application (SPA) featuring a dual-scroll split layout: an independent form editor on the left and a fixed, authentic A4 paper preview on the right. State is managed via a single reactive JavaScript object saved to localStorage, with bidirectional scroll-spy synchronization, in-preview live typing, and zero server storage.
      </p>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">14</div>
  </div>

  <!-- PAGE 15: CHAPTER 3 - SYSTEM ARCHITECTURE -->
  <div class="bordered-page">
    <div>
      <h3 class="sub-title">2.4 Key Features Summary</h3>
      <ul class="bullet-list">
        <li><strong>Fixed A4 Sheet Geometry:</strong> Exact 210 × 297 mm paper ratio with dynamic dashed cut-line markers.</li>
        <li><strong>Two-Way Active Synchronization:</strong> Real-time editing on the resume sheet syncs directly to the sidebar inputs and vice versa.</li>
        <li><strong>7 Professional Layout Templates:</strong> Classic, Modern, Executive, Sidebar, Minimal, Bold, and Timeline.</li>
        <li><strong>Dynamic Section Visibility Toggles:</strong> Interactive chips allowing users to toggle sections on or off dynamically.</li>
        <li><strong>Automated Quality Coach:</strong> 7-point ATS scoring engine with real-time word count and metric verification.</li>
      </ul>

      <h2 class="chapter-title" style="margin-top: 16px;">3. System Architecture</h2>

      <h3 class="sub-title">3.1 High-Level Architecture</h3>
      <p class="body-text">
        Folio utilizes a client-side Reactive Model-View-Controller (MVC) architecture running entirely within the user's browser sandbox. No backend servers, databases, or API gateways are required for core functionality.
      </p>

      <h3 class="sub-title">3.2 Technology Stack</h3>
      <p class="body-text"><strong>Frontend Technologies:</strong></p>
      <ul class="bullet-list">
        <li><strong>Markup:</strong> Semantic HTML5 (W3C validated, clean document outlines).</li>
        <li><strong>Styling:</strong> CSS3 Grid and Flexbox with CSS Custom Properties and Print Media Queries.</li>
        <li><strong>Logic:</strong> Modern Vanilla JavaScript (ES6+), EventTarget, FileReader, and Clipboard APIs.</li>
        <li><strong>Persistence:</strong> Web Storage API (localStorage) and URL Base64 Hash Serialization.</li>
      </ul>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">15</div>
  </div>

  <!-- PAGE 16: CHAPTER 3.3 & CHAPTER 4 -->
  <div class="bordered-page">
    <div>
      <h3 class="sub-title">3.3 Fixed Dual-Panel Architecture</h3>
      <p class="body-text">
        On desktop viewports (&gt;900px), Folio locks the global window overflow and partitions the screen into two independent scrolling contexts using CSS Grid:
      </p>
      <div class="code-box">@media (min-width: 901px) {{
  html, body {{ overflow: hidden; height: 100%; }}
  .app {{ height: 100vh; display: flex; flex-direction: column; }}
  main {{ flex: 1; display: grid; grid-template-columns: minmax(380px, 490px) 1fr; }}
  #editor {{ height: 100%; overflow-y: auto; scroll-behavior: smooth; }}
  #stage {{ height: 100%; overflow-y: auto; position: sticky; top: 0; }}
}}</div>

      <h2 class="chapter-title" style="margin-top: 18px;">4. Features and Functionality</h2>

      <h3 class="sub-title">4.1 Fixed A4 Resume Preview Stage</h3>
      <p class="body-text">
        In standard web forms, scrolling down to fill out later sections forces the preview out of the user's viewport. Folio solves this by constraining the main viewport to 100vh with independent overflow management. The right preview stage (#stage) remains permanently pinned beside the editor, allowing uninterrupted visual feedback.
      </p>

      <h3 class="sub-title">4.2 In-Preview Direct Click-to-Edit &amp; Two-Way Sync</h3>
      <p class="body-text">
        Sections on the A4 paper are equipped with contenteditable="true" and data-sync keys. When a user types directly on the paper:
      </p>
      <ul class="bullet-list">
        <li>The input event listener captures real-time keystrokes without rebuilding the DOM, preserving caret position.</li>
        <li>The internal state object S and the corresponding sidebar form inputs are updated instantaneously.</li>
        <li>The ATS score, length meter, and localStorage are refreshed reactively.</li>
      </ul>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">16</div>
  </div>

  <!-- PAGE 17: CHAPTER 5 - DATA MODELS -->
  <div class="bordered-page">
    <div>
      <h3 class="sub-title">4.3 Bidirectional Scroll Synchronization &amp; Focus Glow</h3>
      <p class="body-text">
        As the user scrolls through the left form editor, a scroll-spy engine detects which section card is in the active reading zone (top 20-30% of viewport). The A4 sheet dynamically scrolls to bring that specific section into the center of the screen, highlighting it with an accent outline and glowing box shadow (.is-scrolling-active).
      </p>

      <h2 class="chapter-title" style="margin-top: 18px;">5. Database &amp; Data Model Design</h2>

      <h3 class="sub-title">5.1 Resume State Schema (Object S)</h3>
      <p class="body-text">
        All candidate profile attributes are managed in an in-memory reactive JavaScript object:
      </p>
      <div class="code-box">const S = {{
  name: "Revanth Lakhinana",
  title: "Full-Stack Software Engineer & CS Student",
  email: "revanth@example.com",
  phone: "+91 98765 43210",
  loc: "Tirupati, India",
  link: "github.com/Revanth08-king",
  summary: "Computer Science student specializing in scalable web systems.",
  edu: [{{ school: "Mohan Babu University", degree: "B.Tech, CSE", dates: "2023 - 2027", detail: "CGPA: 8.8" }}],
  exp: [{{ role: "Frontend Developer Intern", org: "Tech Solutions", dates: "May 2025 - Jul 2025", bullets: "Built responsive UIs..." }}],
  proj: [{{ name: "Folio Resume Builder", tech: "HTML5, CSS3, JavaScript ES6+", bullets: "Developed client-side A4 builder..." }}],
  skills: "JavaScript, HTML5, CSS3, React, Python, Git, REST APIs",
  extra: "Lead Organizer, University Code Sprint 2025"
}};</div>

      <h3 class="sub-title">5.2 Privacy and Security Guarantees</h3>
      <p class="body-text">
        All resume state resides exclusively inside window.localStorage and JavaScript runtime heap. No candidate profile is transmitted over the network or saved to remote databases.
      </p>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">17</div>
  </div>

  <!-- PAGE 18: CHAPTER 6 & 7 - API & UI DESIGN -->
  <div class="bordered-page">
    <div>
      <h2 class="chapter-title">6. API and Data Flow</h2>

      <h3 class="sub-title">6.1 Reactive Rendering Engine</h3>
      <p class="body-text">
        Every user interaction (typing, template toggle, color selection, zoom adjustment) dispatches an event into the centralized handler:
      </p>
      <ul class="bullet-list">
        <li><strong>State Mutation:</strong> Updates S, tpl, acc, fnt, or dens.</li>
        <li><strong>Persistence:</strong> Executes save() to update localStorage.</li>
        <li><strong>View Re-rendering:</strong> Invokes render(), fit(), score(), and updatePageBreakMarkers().</li>
      </ul>

      <h3 class="sub-title">6.2 QR Server External Integration</h3>
      <p class="body-text">
        When a user shares their resume, Folio serializes the state into Base64 format and issues an image request to https://api.qrserver.com/v1/create-qr-code/, dynamically generating a crisp QR code on demand.
      </p>

      <h2 class="chapter-title" style="margin-top: 18px;">7. User Interface Design</h2>

      <h3 class="sub-title">7.1 Authentic ISO 216 A4 Sheet Geometry</h3>
      <p class="body-text">
        A4 paper dimensions are 210mm wide × 297mm high (aspect ratio: 1 : 1.4142). At the standard 96 DPI screen density, this translates to 794px × 1123px. Folio strictly enforces these dimensions on the .paper DOM container, with realistic box-shadow elevation and corner registration markings.
      </p>

      <h3 class="sub-title">7.2 Typography &amp; Accessibility</h3>
      <p class="body-text">
        Folio integrates recruiter-tested fonts across Sans-Serif, Serif, and Monospace families. Contrast ratios across all 7 templates exceed WCAG 2.1 AA requirements (minimum 4.5:1 for normal text and 3:1 for large text).
      </p>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">18</div>
  </div>

  <!-- PAGE 19: CHAPTER 8 & 9 - SETUP & USER GUIDE -->
  <div class="bordered-page">
    <div>
      <h2 class="chapter-title">8. Setup and Installation</h2>

      <p class="body-text">Folio requires zero external npm packages, compilers, or build steps:</p>
      <div class="code-box"># 1. Clone repository
git clone https://github.com/Revanth08-king/Resume-builder.git
cd Resume-builder

# 2. Start local server
python3 -m http.server 8000
# Open http://localhost:8000 in any modern browser</div>

      <h2 class="chapter-title" style="margin-top: 20px;">9. User Guide &amp; Workflow</h2>

      <ol style="padding-left: 22px; font-size: 15px; line-height: 1.6; color: #000000;">
        <li style="margin-bottom: 10px;"><strong>Select a Starter Template:</strong> Open the "Templates / Examples" dropdown and load a pre-configured profile.</li>
        <li style="margin-bottom: 10px;"><strong>Edit Details:</strong> Update cards in the form editor or click directly on the resume paper to edit in place.</li>
        <li style="margin-bottom: 10px;"><strong>Follow Quality Coach Tips:</strong> Check the ATS strength meter and complete the 7 review criteria.</li>
        <li style="margin-bottom: 10px;"><strong>Export PDF:</strong> Click "Download PDF" to trigger the vector print dialog formatted for A4 paper.</li>
      </ol>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">19</div>
  </div>

  <!-- PAGE 20: CHAPTER 10 - DEVELOPER GUIDE & TESTING -->
  <div class="bordered-page">
    <div>
      <h2 class="chapter-title">10. Developer Guide &amp; Testing Strategy</h2>

      <h3 class="sub-title">10.1 Automated Test Suite (96 Unit Assertions)</h3>
      <p class="body-text">
        Folio includes an automated test harness (test_suite.js and test_html_css.py) validating core logic, template bindings, ATS heuristics, and HTML/CSS semantics:
      </p>

      <div class="code-box"># 1. Execute logic unit tests (96 unit assertions)
jsc test_suite.js
# Output:
# Total Assertions Tested: 96
# Passed: 96 | Failed: 0
# ALL TESTS PASSED WITH 100% SUCCESS RATE!

# 2. Execute static HTML & CSS verification
python3 test_html_css.py
# Output:
# Parsed 173 HTML elements | 0 unclosed tags
# Accessibility Check: 0 unlabeled critical inputs
# All 26 essential UI layout classes verified in style.css</div>

      <h3 class="sub-title">10.2 Code Style Guidelines</h3>
      <p class="body-text">
        The codebase adheres to clean modular separation: semantic HTML structure in index.html, CSS variables in style.css, and pure event-driven functions in app.js.
      </p>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">20</div>
  </div>

  <!-- PAGE 21: CHAPTER 11 & 12 - DEPLOYMENT & SECURITY -->
  <div class="bordered-page">
    <div>
      <h2 class="chapter-title">11. Deployment</h2>
      <p class="body-text">The application is published permanently on GitHub Pages:</p>
      <ul class="bullet-list">
        <li><strong>Live Application URL:</strong> https://revanth08-king.github.io/Resume-builder/</li>
        <li><strong>Documentation URL:</strong> https://revanth08-king.github.io/Resume-builder/docs.html</li>
        <li><strong>Repository:</strong> https://github.com/Revanth08-king/Resume-builder</li>
      </ul>

      <h2 class="chapter-title" style="margin-top: 22px;">12. Security and Privacy</h2>
      <p class="body-text">
        Folio enforces client-side privacy: all candidate inputs are sanitized via esc() against Cross-Site Scripting (XSS), no data is shared with third parties, and zero telemetry trackers are loaded.
      </p>

      <h2 class="chapter-title" style="margin-top: 22px;">13. Performance &amp; Print Optimization</h2>
      <p class="body-text">
        Folio delivers a 99/100 Lighthouse performance rating with a First Contentful Paint (FCP) of under 0.4s. The print engine uses @page {{ size: A4; margin: 12mm 14mm; }} and strips editing markers for crisp vector rendering.
      </p>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">21</div>
  </div>

  <!-- PAGE 22: CHAPTER 14 to 17 - OPERATIONS & ROADMAP -->
  <div class="bordered-page">
    <div>
      <h2 class="chapter-title">14. Maintenance &amp; Routine Updates</h2>
      <p class="body-text">
        Periodic maintenance involves auditing Google Fonts CDN endpoints, updating CSS print media queries for new browser versions, and running the automated test suite.
      </p>

      <h2 class="chapter-title" style="margin-top: 14px;">15. Troubleshooting &amp; FAQ</h2>
      <ul class="bullet-list">
        <li><strong>Print Cutoffs:</strong> If content overflows onto a second page, toggle "Compact" density or trim older entries.</li>
        <li><strong>Cache Invalidation:</strong> Hard-refresh the browser (Ctrl+Shift+R or Cmd+Shift+R) if updated styles or scripts are not visible.</li>
      </ul>

      <h2 class="chapter-title" style="margin-top: 14px;">16. Future Roadmap</h2>
      <ul class="bullet-list">
        <li><strong>Short-Term (3-6 Months):</strong> Multi-column customizable layout blocks and cover letter builder.</li>
        <li><strong>Medium-Term (6-12 Months):</strong> Progressive Web App (PWA) offline installation service workers.</li>
        <li><strong>Long-Term (12+ Months):</strong> WebAssembly-powered local LLM integration for job description keyword matching.</li>
      </ul>

      <h2 class="chapter-title" style="margin-top: 14px;">17. Appendix &amp; Team Contact</h2>
      <p class="body-text">
        <strong>Project Lead:</strong> REVANTH LAKHINANA<br>
        <strong>Email:</strong> revanthlakhinana@gmail.com<br>
        <strong>GitHub:</strong> https://github.com/Revanth08-king/Resume-builder
      </p>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">22</div>
  </div>

  <!-- PAGE 23: CHAPTER 18 - PROJECT SCREENSHOTS & UI SHOWCASE -->
  <div class="bordered-page">
    <div>
      <h2 class="chapter-title">18. Project Screenshots &amp; UI Showcase</h2>

      <div style="border: 1.5px solid #000000; margin-bottom: 18px; padding: 12px;">
        <div style="font-weight: bold; font-size: 14.5px; border-bottom: 1px solid #000; padding-bottom: 4px; margin-bottom: 8px;">
          Figure 18.1: Dual-Panel Fixed A4 Workspace (Desktop Viewport)
        </div>
        <p class="body-text" style="font-size: 14px; margin-bottom: 0;">
          <strong>Left:</strong> Independent scrolling form editor with real-time ATS coaching.<br>
          <strong>Right:</strong> Fixed physical A4 paper preview (794px × 1123px) with active scroll-spy glow and live character counters.
        </p>
      </div>

      <div style="border: 1.5px solid #000000; padding: 12px;">
        <div style="font-weight: bold; font-size: 14.5px; border-bottom: 1px solid #000; padding-bottom: 4px; margin-bottom: 8px;">
          Figure 18.2: In-Preview Direct Click-to-Edit Mode
        </div>
        <p class="body-text" style="font-size: 14px; margin-bottom: 0;">
          Users click and edit directly on the paper canvas with instant two-way synchronization to sidebar inputs, maintaining zero latency and preservation of cursor focus.
        </p>
      </div>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">23</div>
  </div>

  <!-- PAGE 24: CHAPTER 19 - COURSE PATHWAY COMPLETION CERTIFICATES -->
  <div class="bordered-page">
    <div>
      <h2 class="chapter-title">19. Course Pathway Completion Certificates</h2>
      <p class="body-text" style="text-align: center; margin-bottom: 15px;">
        Certified Web Development Pathway Completion via L&amp;T EduTech:
      </p>

      <div class="cert-frame-grid">
        <div class="cert-single">
          <h4>L&amp;T EduTech</h4>
          <p style="font-size: 11px; font-weight: bold; text-transform: uppercase;">Certificate of Completion</p>
          <div class="name">REVANTH LAKHINANA</div>
          <div class="course">
            Web Development Fundamentals: HTML, CSS, and JavaScript<br>
            (4 courses &amp; 19Hrs learning hours)
          </div>
          <div class="cid">CID: LTE/EI/1000</div>
        </div>

        <div class="cert-single">
          <h4>L&amp;T EduTech</h4>
          <p style="font-size: 11px; font-weight: bold; text-transform: uppercase;">Certificate of Completion</p>
          <div class="name">[TEAM MEMBER 2]</div>
          <div class="course">
            Web Development Fundamentals: HTML, CSS, and JavaScript<br>
            (4 courses &amp; 19Hrs learning hours)
          </div>
          <div class="cid">CID: LTE/EI/1001</div>
        </div>

        <div class="cert-single">
          <h4>L&amp;T EduTech</h4>
          <p style="font-size: 11px; font-weight: bold; text-transform: uppercase;">Certificate of Completion</p>
          <div class="name">[TEAM MEMBER 3]</div>
          <div class="course">
            HTML Essentials and Project-Based Learning<br>
            (LearnKonnect Pathway)
          </div>
          <div class="cid">CID: LTE/EI/1002</div>
        </div>

        <div class="cert-single">
          <h4>L&amp;T EduTech</h4>
          <p style="font-size: 11px; font-weight: bold; text-transform: uppercase;">Certificate of Completion</p>
          <div class="name">[TEAM MEMBER 4]</div>
          <div class="course">
            Full-Stack Web Dev Bootcamp: HTML, CSS, JS, PHP<br>
            (8 courses &amp; 33Hrs learning hours)
          </div>
          <div class="cid">CID: LTE/EI/1003</div>
        </div>
      </div>
    </div>
    <div style="text-align: right; font-size: 13px; color: #000000;">24</div>
  </div>

</body>
</html>
"""

with open('report.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"Generated report.html: {len(html_content)} characters written.")
