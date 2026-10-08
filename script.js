/* Folio – Modern Browser Resume Builder with Instant Sharing, Live Preview & PDF Export */
const SEC = {
  edu: { label: 'Education', add: 'Add education', f: [['school', 'School / University'], ['degree', 'Degree or Major'], ['dates', 'Dates (e.g. 2023 – 2027)'], ['detail', 'Details: GPA, coursework, honors', 'ta']] },
  exp: { label: 'Experience', add: 'Add experience', f: [['role', 'Role / Job Title'], ['org', 'Organization / Company'], ['dates', 'Dates (e.g. Jun 2025 – Present)'], ['bullets', 'Key achievements & responsibilities (one bullet per line)', 'ta']] },
  proj: { label: 'Projects', add: 'Add project', f: [['name', 'Project Name'], ['tech', 'Technologies used or Link'], ['bullets', 'What you built & results (one bullet per line)', 'ta']] }
};

const PRESETS = {
  tech: {
    name: 'Maya Iyer',
    title: 'Computer Science Student | Front-end Developer',
    email: 'maya.iyer@example.com',
    phone: '+91 98765 43210',
    loc: 'Bengaluru, India',
    link: 'github.com/mayaiyer',
    summary: 'Third-year CS student who builds performant, accessible web tools. Led a 4-person team to ship a campus event app used by 600+ students. Seeking a summer software engineering internship.',
    edu: [{
      school: 'National Institute of Technology',
      degree: 'B.Tech, Computer Science & Engineering',
      dates: '2023 – 2027',
      detail: 'CGPA 8.9/10. Coursework: Data Structures, Web Systems, Operating Systems, Database Management.'
    }],
    exp: [{
      role: 'Teaching Assistant',
      org: 'Dept. of Computer Science',
      dates: 'Jan 2026 – Present',
      bullets: 'Hold weekly lab sessions for 45 first-year students in Python and Data Structures\nGraded 120+ programming assignments and wrote actionable feedback to boost pass rates by 18%'
    }],
    proj: [
      {
        name: 'CampusLink Events Platform',
        tech: 'React, Node.js, Firebase',
        bullets: 'Built an event discovery platform used by 600+ students in its launch month\nCut sign-up time by 40% by replacing paper forms with QR-based digital check-ins'
      },
      {
        name: 'Smart Study Planner',
        tech: 'Python, SQLite, Streamlit',
        bullets: 'Engineered an algorithmic revision scheduler that increased student study consistency by 25%\nProcessed 2,000+ scheduled milestones with sub-10ms query execution times'
      }
    ],
    skills: 'JavaScript, TypeScript, Python, React, Next.js, Node.js, SQL, Git, Figma, Agile Development',
    extra: 'President, ACM Student Chapter (2025 – Present)\n1st Place Winner, HackNIT Hackathon 2025 (48-hour event, 80 teams)'
  },
  business: {
    name: 'Alex Rivera',
    title: 'Business Administration & Marketing Student',
    email: 'alex.rivera@example.com',
    phone: '+1 (555) 234-5678',
    loc: 'Chicago, IL',
    link: 'linkedin.com/in/alexrivera-biz',
    summary: 'Results-driven Business senior with experience in growth marketing and data analytics. Scaled university club membership by 65% through targeted digital campaigns. Seeking an Associate Product Marketing role.',
    edu: [{
      school: 'University of Illinois at Urbana-Champaign',
      degree: 'B.S., Business Administration & Marketing',
      dates: '2023 – 2027',
      detail: 'Dean\'s List (3 Semesters). Relevant coursework: Market Research, Financial Accounting, Digital Strategy.'
    }],
    exp: [{
      role: 'Marketing & Operations Intern',
      org: 'Apex Brand Strategy',
      dates: 'Jun 2025 – Aug 2025',
      bullets: 'Managed email marketing campaigns reaching 12,000+ subscribers with an average open rate of 34%\nConducted competitive analysis across 15 SaaS competitors to identify untapped segment opportunities'
    }],
    proj: [
      {
        name: 'Collegiate Brand Ambassador Program',
        tech: 'Notion, HubSpot, Meta Ads',
        bullets: 'Recruited and led 18 brand representatives across 4 college campuses\nGenerated $14,000 in student ticket sales through referral links within 6 weeks'
      },
      {
        name: 'Campus Food Delivery Market Analysis',
        tech: 'Excel, Tableau, Google Forms',
        bullets: 'Surveyed 450+ undergraduate students to evaluate campus dining wait times and preferences\nPresented insights to student union leadership, leading to 2 new off-peak dining stations'
      }
    ],
    skills: 'Growth Marketing, Google Analytics, HubSpot, Excel Modeling, Market Research, Tableau, Copywriting, Public Speaking',
    extra: 'VP of Marketing, Undergraduate Business Association (2025)\nFinalist, National Case Competition (Top 5 of 60 teams)'
  },
  design: {
    name: 'Jordan Chen',
    title: 'Product Designer & UX Researcher',
    email: 'jordan.chen@example.com',
    phone: '+1 (415) 890-1234',
    loc: 'San Francisco, CA',
    link: 'jordanchen.design',
    summary: 'Product design student passionate about intuitive interfaces and accessibility. Redesigned a civic volunteering app with a 92% user satisfaction score. Seeking a Product Design internship.',
    edu: [{
      school: 'California College of the Arts',
      degree: 'B.F.A., Interaction Design & HCI',
      dates: '2023 – 2027',
      detail: 'Honors Scholarship recipient. Coursework: User Research, Design Systems, Prototyping, Accessibility (WCAG).'
    }],
    exp: [{
      role: 'UI/UX Design Intern',
      org: 'CivicTech Collective',
      dates: 'May 2025 – Aug 2025',
      bullets: 'Conducted 24 usability tests and created 40+ high-fidelity prototypes in Figma\nRefactored design system components used by 6 engineers, reducing design QA handoff defects by 30%'
    }],
    proj: [
      {
        name: 'MetroAssist Transit Accessibility App',
        tech: 'Figma, Maze, ProtoPie',
        bullets: 'Designed an accessible route-planning application for transit riders with mobility impairments\nTested with 15 target users, improving task completion rates from 62% to 94%'
      },
      {
        name: 'Echo Music Discovery Mobile App',
        tech: 'Figma, Adobe Illustrator',
        bullets: 'Created end-to-end design system with 120+ tokens and dark/light mode variants\nProduced interactive micro-interactions and motion prototypes for playlist curation'
      }
    ],
    skills: 'Figma, Design Systems, User Research, Wireframing, Prototyping, Usability Testing, HTML/CSS, WCAG Accessibility',
    extra: 'Lead Organizer, Design Sprint Hackathon 2025\nFeatured Portfolio on Behance Student Showcase'
  },
  blank: {
    name: '', title: '', email: '', phone: '', loc: '', link: '',
    summary: '',
    edu: [{ school: '', degree: '', dates: '', detail: '' }],
    exp: [{ role: '', org: '', dates: '', bullets: '' }],
    proj: [{ name: '', tech: '', bullets: '' }],
    skills: '', extra: ''
  }
};

const SAMPLE = PRESETS.tech;
const BLANK = PRESETS.blank;

const TPLS = [
  ['classic', 'Classic'],
  ['modern', 'Modern'],
  ['executive', 'Executive'],
  ['sidebar', 'Sidebar'],
  ['minimal', 'Minimal'],
  ['bold', 'Bold'],
  ['timeline', 'Timeline']
];

const FONTS = [
  ['Inter', 'sans-serif'],
  ['Roboto', 'sans-serif'],
  ['Open Sans', 'sans-serif'],
  ['Lato', 'sans-serif'],
  ['Poppins', 'sans-serif'],
  ['Montserrat', 'sans-serif'],
  ['Nunito', 'sans-serif'],
  ['Lora', 'serif'],
  ['Merriweather', 'serif'],
  ['Playfair Display', 'serif'],
  ['EB Garamond', 'serif'],
  ['Arial', 'sans-serif'],
  ['Georgia', 'serif'],
  ['Times New Roman', 'serif']
];

const COLORS = ['#2f5bff', '#0f766e', '#7c3aed', '#be123c', '#111827'];
const STORAGE_KEY = 'folio-resume-v2';

const FIELD_HELP = {
  name: { example: 'Aisha Sharma', hint: 'Use your full professional name.' },
  title: { example: 'Computer Science student | Front-end intern', hint: 'Name your target role or key specialty.' },
  email: { example: 'aisha.sharma@email.com', hint: 'Use a professional email address.' },
  phone: { example: '+91 98765 43210', hint: 'Include country code for international applications.' },
  loc: { example: 'Bengaluru, India', hint: 'City and country is enough for recruiter screening.' },
  link: { example: 'linkedin.com/in/aishasharma', hint: 'Portfolio, GitHub, or LinkedIn profile.' },
  summary: { example: 'CS student who built a campus app used by 600 students. Seeking a software internship.', hint: 'Write 20–60 words: background, top achievement, and target goal.' },
  school: { example: 'National Institute of Technology', hint: 'Full university or institution name.' },
  degree: { example: 'B.Tech, Computer Science', hint: 'Degree, major, and specialization.' },
  dates: { example: '2023 – 2027', hint: 'Clear date or year range.' },
  detail: { example: 'CGPA 8.8/10. Coursework: Data Structures, Databases.', hint: 'GPA, relevant coursework, honors.' },
  'exp.role': { example: 'Software Engineering Intern', hint: 'Official title or responsibility.' },
  'exp.org': { example: 'Acme Labs', hint: 'Company, research lab, or club name.' },
  'exp.bullets': { example: 'Built a dashboard used by 80 volunteers\nReduced report preparation time by 35%', hint: 'Start with action verbs; quantify results with metrics.' },
  'proj.name': { example: 'Campus event discovery app', hint: 'Clear, memorable project title.' },
  'proj.tech': { example: 'React, Firebase · github.com/yourname/project', hint: 'Core technologies and live link.' },
  'proj.bullets': { example: 'Built an event app used by 600 students\nCut sign-up time by 40% with QR check-in', hint: 'Detail user impact, architecture, and measurable outcomes.' },
  skills: { example: 'JavaScript, React, Python, SQL, Git, Figma', hint: 'List 5+ skills relevant to your target role.' },
  extra: { example: 'Winner, Inter-college Hackathon 2025', hint: 'Awards, leadership roles, or certifications.' }
};

let S;
let tpl = 'classic';
let acc = '#2f5bff';
let fnt = '';
let dens = '';
let currentZoom = 'fit';
let hiddenSections = { sum: false, edu: false, exp: false, proj: false, skills: false, extra: false };
let isTypingInPaper = false;

const $ = selector => document.querySelector(selector);
const copy = value => JSON.parse(JSON.stringify(value));
const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const lines = value => String(value || '').split('\n').map(item => item.trim()).filter(Boolean);

function showToast(message, duration = 3200) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

function setSaveState(message = 'Saved on this device') {
  const state = $('#saveState');
  if (state) state.textContent = message;
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ S, tpl, acc, fnt, dens }));
    setSaveState();
  } catch (_) {
    setSaveState('Changes could not be saved');
  }
}

/* Encode and Decode Resume Payload for Public Sharing */
function encodeResumePayload() {
  const payload = { S, tpl, acc, fnt, dens };
  try {
    const json = JSON.stringify(payload);
    const base64 = btoa(encodeURIComponent(json).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1)));
    return encodeURIComponent(base64);
  } catch (err) {
    return encodeURIComponent(JSON.stringify(payload));
  }
}

function decodeResumePayload(encoded) {
  try {
    const raw = decodeURIComponent(encoded);
    let jsonStr;
    try {
      jsonStr = decodeURIComponent(atob(raw).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    } catch (_) {
      jsonStr = raw;
    }
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error('Failed to decode resume payload:', err);
    return null;
  }
}

function checkUrlHash() {
  const hash = window.location.hash;
  if (!hash) return false;
  const match = hash.match(/#(?:resume|data)=([^&]+)/);
  if (match && match[1]) {
    const data = decodeResumePayload(match[1]);
    if (data && data.S) {
      S = data.S;
      tpl = data.tpl || tpl;
      acc = data.acc || acc;
      fnt = data.fnt || fnt;
      dens = data.dens || dens;
      save();
      showToast('✓ Loaded shared resume from public link!');
      return true;
    }
  }
  return false;
}

function load() {
  if (checkUrlHash()) return;
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || localStorage.getItem('folio-resume'));
    if (saved && saved.S) {
      S = saved.S;
      tpl = saved.tpl || tpl;
      acc = saved.acc || acc;
      fnt = saved.fnt || '';
      dens = saved.dens || '';
      return;
    }
  } catch (_) { /* Fallback to tech sample */ }
  S = copy(SAMPLE);
}

function fieldHelp(field) {
  return FIELD_HELP[field] || FIELD_HELP[field.split('.').pop()] || { example: 'Add specific detail', hint: 'Keep concise and clear.' };
}

function input(attrs, label, value, textarea = false, field = '') {
  const help = fieldHelp(field);
  const placeholder = `placeholder="${esc(help.example)}"`;
  const control = textarea
    ? `<textarea ${attrs} ${placeholder} spellcheck="true">${esc(value)}</textarea>`
    : `<input ${attrs} ${placeholder} spellcheck="true" value="${esc(value)}">`;
  return `<label class="field" data-field="${field}"><span class="field-label">${label}</span>${control}<small class="field-note" data-note="${field}">${help.hint} Example: ${help.example}</small></label>`;
}

function list(section) {
  const config = SEC[section];
  return S[section].map((item, index) => `
    <div class="entry">
      <div class="entry-actions">
        ${index > 0 ? `<button class="entry-btn" type="button" data-move="${section}:${index}:up" title="Move entry up">↑ Up</button>` : ''}
        ${index < S[section].length - 1 ? `<button class="entry-btn" type="button" data-move="${section}:${index}:down" title="Move entry down">↓ Down</button>` : ''}
        <button class="entry-btn del" type="button" data-del="${section}:${index}" aria-label="Remove entry">✕ Remove</button>
      </div>
      ${config.f.map(([field, label, type]) => input(`data-s="${section}" data-i="${index}" data-f="${field}"`, label, item[field], type === 'ta', `${section}.${field}`)).join('')}
    </div>
  `).join('') + `<button class="add" type="button" data-add="${section}">+ ${config.add}</button>`;
}

function buildEditor() {
  const top = (key, label, value, textarea) => input(`data-k="${key}"`, label, value, textarea, key);
  $('#editor').innerHTML = `
    <div class="opts">
      <div class="tp" role="group" aria-label="Resume templates">${TPLS.map(([key, label]) => `<button class="tpb" type="button" data-tpl="${key}" aria-pressed="${key === tpl}"><span class="mini m-${key}"><i></i><b></b><b></b><b></b><b></b><b></b></span>${label}</button>`).join('')}</div>
      <span class="hint">Accent</span>${COLORS.map(color => `<button class="sw" type="button" style="background:${color}" data-acc="${color}" aria-label="Use ${color} as accent" aria-pressed="${color === acc}"></button>`).join('')}
    </div>
    <div class="opts">
      <label class="inl">Font <select id="fnt" aria-label="Resume font"><option value="">Template default</option>${FONTS.map(([name]) => `<option value="${name}" style="font-family:'${name}'">${name}</option>`).join('')}</select></label>
      <label class="inl">Size <select id="dens" aria-label="Resume text size"><option value="">Normal</option><option value="cmp">Compact (1-page fit)</option></select></label>
    </div>
    <div class="score" aria-live="polite"><b>Resume strength: <span id="pct">0</span>%</b><div class="bar"><i id="barfill"></i></div><ul class="chk" id="chk"></ul><p class="hint" id="pg"></p></div>
    <section class="coach" id="coach" aria-live="polite"></section>
    <details open data-sec-editor="hd"><summary>Personal Information</summary><div class="body">${top('name', 'Full name', S.name)}${top('title', 'Headline / Target Role', S.title)}<div class="row">${top('email', 'Email', S.email)}${top('phone', 'Phone', S.phone)}</div><div class="row">${top('loc', 'City, country', S.loc)}${top('link', 'Portfolio, GitHub or LinkedIn', S.link)}</div></div></details>
    <details open data-sec-editor="sum"><summary>Summary Statement</summary><div class="body">${top('summary', 'Two sentences: who you are and what you want next', S.summary, true)}<p class="hint">Mention one tangible result you are proud of and the role you are aiming for.</p></div></details>
    ${Object.keys(SEC).map(key => `<details open data-sec-editor="${key}"><summary>${SEC[key].label}</summary><div class="body" id="list-${key}">${list(key)}</div></details>`).join('')}
    <details open data-sec-editor="skills"><summary>Skills</summary><div class="body">${top('skills', 'Separate with commas', S.skills, true)}</div></details>
    <details open data-sec-editor="extra"><summary>Activities, Leadership &amp; Awards</summary><div class="body">${top('extra', 'One per line', S.extra, true)}</div></details>`;
  $('#fnt').value = fnt;
  $('#dens').value = dens;
}

function words(value) {
  return String(value || '').trim().split(/\s+/).filter(Boolean);
}

function isValidEmail(value) {
  return /^\S+@\S+\.\S+$/.test(String(value || '').trim());
}

function isValidLink(value) {
  return /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i.test(String(value || '').trim());
}

function resumeReview() {
  const bullets = [...S.exp, ...S.proj].flatMap(item => lines(item.bullets));
  const skillCount = S.skills.split(',').filter(item => item.trim()).length;
  const criteria = [
    ['Add your name, a valid email, and a portfolio/work link', Boolean(S.name.trim() && isValidEmail(S.email) && isValidLink(S.link))],
    ['Write a 20–60 word summary', (() => { const count = words(S.summary).length; return count >= 20 && count <= 60; })()],
    ['Complete at least one education entry', S.edu.some(item => item.school && item.degree && item.dates)],
    ['Show at least two projects or roles', S.exp.filter(item => item.role && item.org).length + S.proj.filter(item => item.name).length >= 2],
    ['Include quantifiable numbers/metrics in bullets', bullets.some(item => /\d/.test(item))],
    ['Keep every bullet under 25 words', bullets.length > 0 && bullets.every(item => words(item).length < 25)],
    ['List five or more role-relevant skills', skillCount >= 5]
  ];
  const completed = criteria.filter(([, done]) => done).length;
  return { criteria, completed, percent: Math.round(completed / criteria.length * 100) };
}

function fieldKey(target) {
  return target.dataset.k || `${target.dataset.s}.${target.dataset.f}`;
}

function isPartialEntry(target) {
  if (!target.dataset.s) return false;
  const item = S[target.dataset.s][Number(target.dataset.i)] || {};
  return Object.values(item).some(value => String(value || '').trim());
}

function validationFor(target) {
  const key = fieldKey(target);
  const value = target.value.trim();
  const help = fieldHelp(key);
  const partial = isPartialEntry(target);
  const tip = message => ({ kind: 'tip', message });
  const warning = message => ({ kind: 'warning', message });
  const good = message => ({ kind: 'good', message });

  if (!value) {
    if (['name', 'email', 'link', 'summary', 'skills'].includes(key) || partial && !['detail', 'proj.tech'].includes(key)) return warning(`Add this to improve your score. Try: ${help.example}`);
    return tip(`${help.hint} Example: ${help.example}`);
  }

  if (key === 'name') return words(value).length >= 2 && !/\d/.test(value) ? good('Looks professional.') : warning('Use your first and last name without numbers.');
  if (key === 'email') return isValidEmail(value) ? good('Email format is valid.') : warning('Check email format, e.g. aisha.sharma@email.com');
  if (key === 'phone') return value.replace(/\D/g, '').length >= 7 ? good('Phone number looks complete.') : warning('Include country code if applying internationally.');
  if (key === 'link') return isValidLink(value) ? good('Work link adds credibility.') : warning('Use a complete URL (e.g. linkedin.com/in/you).');
  if (key === 'summary') {
    const count = words(value).length;
    if (count < 20) return warning(`${count}/20 words. Add your strongest achievement and target role.`);
    if (count > 60) return warning(`${count}/60 words. Tighten for quick scanning.`);
    return /\d/.test(value) ? good('Strong: concise with quantifiable proof.') : tip('Good length. Add one metric to make it stand out.');
  }
  if (key === 'skills') {
    const count = value.split(',').filter(item => item.trim()).length;
    return count >= 5 ? good(`${count} skills listed.`) : warning(`${count}/5 skills. Add tools you are confident using.`);
  }
  if (key === 'dates') return /\d{4}|present/i.test(value) ? good('Dates are easy to understand.') : warning('Include year or “Present”, e.g. 2024 – Present.');
  if (key.endsWith('.bullets')) {
    const bulletLines = lines(value);
    if (bulletLines.length < 2) return warning('Add at least two bullets for substantial impact.');
    if (bulletLines.some(item => words(item).length >= 25)) return warning('Keep each bullet under 25 words.');
    if (!bulletLines.some(item => /\d/.test(item))) return warning('Add numbers: %, users, team size, or revenue.');
    return good('Excellent: concise bullets with metrics.');
  }
  if (key === 'title') return value.length >= 6 ? good('Clear headline.') : warning('Be specific about your target role.');
  if (key === 'loc') return value.length >= 3 ? good('Location looks good.') : tip(help.hint);
  if (key === 'extra' || key === 'detail' || key === 'proj.tech') return good('Helpful supporting detail.');
  return value.length >= 3 ? good('Looks clear.') : warning(`Be more specific. Try: ${help.example}`);
}

function updateFieldFeedback() {
  document.querySelectorAll('[data-k], [data-s]').forEach(target => {
    const result = validationFor(target);
    const label = target.closest('.field');
    const note = label && label.querySelector('.field-note');
    if (!label || !note) return;
    label.classList.remove('is-good', 'is-warning', 'is-tip');
    label.classList.add(`is-${result.kind}`);
    target.setAttribute('aria-invalid', result.kind === 'warning' ? 'true' : 'false');
    note.textContent = result.message;
  });
}

function suggestedSummary() {
  const current = S.summary.trim();
  if (words(current).length >= 20 && words(current).length <= 60) return current;
  const title = S.title.trim() || 'student';
  const skillList = S.skills.split(',').map(item => item.trim()).filter(Boolean);
  const project = S.proj.find(item => item.name) || {};
  const skillPhrase = skillList.slice(0, 2).join(' and ') || 'problem solving and software development';
  const projectSentence = project.name ? `Built ${project.name}${project.tech ? ` using ${project.tech}` : ''}, delivering tangible user impact.` : 'Developed practical applications that solve real user needs.';
  return `Motivated ${title} with hands-on experience in ${skillPhrase}. ${projectSentence} Seeking an opportunity to contribute, learn quickly, and deliver measurable results.`;
}

function suggestedResumeText() {
  const name = S.name.trim() || '[Your full name]';
  const title = S.title.trim() || '[Target role | key specialty]';
  const contact = [S.email.trim() || '[email]', S.phone.trim() || '[phone]', S.loc.trim() || '[city, country]', S.link.trim() || '[LinkedIn / GitHub / portfolio]'].filter(Boolean).join(' · ');
  const education = S.edu.filter(item => item.school || item.degree).map(item => `${item.school || '[School]'} | ${item.degree || '[Degree]'} | ${item.dates || '[Dates]'}${item.detail ? `\n${item.detail}` : ''}`).join('\n\n') || '[School] | [Degree] | [Dates]\nCGPA / relevant coursework / honor';
  const experience = S.exp.filter(item => item.role || item.org).map(item => `${item.role || '[Role]'} | ${item.org || '[Organization]'} | ${item.dates || '[Dates]'}\n${lines(item.bullets).map(bullet => `• ${bullet}`).join('\n') || '• Led [action] for [audience], improving [result] by [number]\n• Built [deliverable] using [tool], saving [time] or helping [people]'}`).join('\n\n') || 'Add an internship, campus job, or leadership role.\n• Led [action], improving [result] by [number]\n• Built [deliverable] using [tool]';
  const projects = S.proj.filter(item => item.name).map(item => `${item.name}${item.tech ? ` | ${item.tech}` : ''}\n${lines(item.bullets).map(bullet => `• ${bullet}`).join('\n') || '• Built [what it does] for [who it helps]\n• Improved [metric] by [number]'}`).join('\n\n') || '[Project name] | [Tools]\n• Built [what it does] for [who it helps]';
  const skills = S.skills.trim() || 'List relevant technical & professional skills.';
  const extra = S.extra.trim() || 'Add leadership roles, competitions, or awards.';
  return `${name}\n${title}\n${contact}\n\nSUMMARY\n${suggestedSummary()}\n\nEDUCATION\n${education}\n\nEXPERIENCE\n${experience}\n\nPROJECTS\n${projects}\n\nSKILLS\n${skills}\n\nACTIVITIES & AWARDS\n${extra}`;
}

function updateCoach(review) {
  const coach = $('#coach');
  if (!coach) return;
  const gaps = review.criteria.filter(([, done]) => !done).map(([label]) => label);
  const heading = review.percent === 100 ? '🎉 Your resume is recruiter-ready!' : 'Your clearest path to a 100% Folio score';
  const lead = review.percent === 100
    ? 'Congratulations! You meet all seven recruiter checks. You can now download your crisp PDF or share your public link.'
    : `Complete the ${gaps.length} item${gaps.length === 1 ? '' : 's'} below to maximize ATS pass rates and recruiter scan speed.`;
  const nextSteps = gaps.length ? gaps.slice(0, 3).map(item => `<li>${esc(item)}</li>`).join('') : '<li>Tailor your headline, skills, and bullets for each target job application.</li>';
  
  const downloads = `<div class="download-ready">
    <div>
      <strong>Ready to Export &amp; Share</strong>
      <span>Save your resume as PDF, copy shareable link, or export backup JSON.</span>
    </div>
    <div class="download-actions">
      <button class="coach-download primary" type="button" data-download-pdf="true">Save PDF</button>
      <button class="coach-download" type="button" data-download-text="true">Text (.txt)</button>
    </div>
  </div>`;

  coach.innerHTML = `
    <div class="coach-heading">
      <div>
        <p class="coach-kicker">Resume Quality Coach</p>
        <h2>${heading}</h2>
      </div>
      <strong>${review.percent}%</strong>
    </div>
    <p>${lead}</p>
    <ul class="coach-actions">${nextSteps}</ul>
    ${downloads}
    <details class="coach-details">
      <summary>See your recruiter-ready resume draft</summary>
      <p class="coach-note">Copy this text directly into application forms or use it as a reference.</p>
      <pre id="suggestedResume">${esc(suggestedResumeText())}</pre>
      <button class="coach-copy" type="button" data-copy-suggestion="true">Copy Draft to Clipboard</button>
    </details>
    <p class="coach-disclaimer">Folio score is evaluated against modern ATS and recruiter scanning best practices.</p>`;
}

function copySuggestedText() {
  const text = suggestedResumeText();
  navigator.clipboard.writeText(text).then(() => {
    showToast('✓ Recruiter-ready draft copied to clipboard!');
  }).catch(() => {
    fallbackCopy(text, () => showToast('✓ Recruiter-ready draft copied!'));
  });
}

function fallbackCopy(text, done) {
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.append(area);
  area.select();
  document.execCommand('copy');
  area.remove();
  if (done) done();
}

function downloadFileName(extension) {
  const base = (S.name || 'my-resume').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'my-resume';
  return `${base}-resume.${extension}`;
}

function downloadPdf() {
  setSaveState('Select "Save as PDF" in the print dialog');
  showToast('Opening print dialog. Select "Save as PDF"!');
  setTimeout(() => window.print(), 100);
}

function downloadTextFile() {
  const file = new Blob([suggestedResumeText()], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.download = downloadFileName('txt');
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast('✓ ATS plain text resume downloaded!');
}

function exportJsonFile() {
  const data = { S, tpl, acc, fnt, dens, exportedAt: new Date().toISOString() };
  const file = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.download = downloadFileName('json');
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast('✓ Resume JSON backup exported!');
}

function importJsonData(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    if (!data || !data.S) throw new Error('Invalid resume JSON format');
    S = data.S;
    if (data.tpl) tpl = data.tpl;
    if (data.acc) acc = data.acc;
    if (data.fnt !== undefined) fnt = data.fnt;
    if (data.dens !== undefined) dens = data.dens;
    save();
    buildEditor();
    render();
    closeModal('#importModal');
    showToast('✓ Resume successfully loaded!');
  } catch (err) {
    alert('Could not import resume: ' + err.message);
  }
}

function bulletList(items) {
  return items.length ? `<ul>${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : '';
}

function bulletListEditable(items, syncKey) {
  return items.length ? `<ul contenteditable="true" data-sync="${syncKey}" title="Click to edit bullets directly">${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : '';
}

function updatePageBreakMarkers() {
  const paper = $('#paper');
  if (!paper) return;
  paper.querySelectorAll('.page-break-line').forEach(el => el.remove());
  
  const A4_HEIGHT = 1123;
  const totalHeight = paper.scrollHeight;
  const pages = Math.ceil(totalHeight / A4_HEIGHT);
  
  for (let i = 1; i < pages; i++) {
    const marker = document.createElement('div');
    marker.className = 'page-break-line';
    marker.style.top = `${i * A4_HEIGHT}px`;
    marker.innerHTML = `<span>Page ${i} End · Page ${i + 1} Start</span>`;
    paper.appendChild(marker);
  }
}

function render() {
  const paper = $('#paper');
  if (!paper) return;
  paper.className = `paper ${tpl}${dens ? ` ${dens}` : ''}${fnt ? ' cf' : ''}`;
  paper.style.fontFamily = fnt ? `"${fnt}", ${(FONTS.find(font => font[0] === fnt) || ['', 'sans-serif'])[1]}` : '';
  paper.style.setProperty('--a', acc);
  const editor = $('#editor');
  if (editor) editor.style.setProperty('--a', acc);

  const hasContent = item => Object.values(item).some(value => String(value || '').trim());
  const contact = [
    S.email ? `<span contenteditable="true" data-sync="contact:email" title="Click to edit email directly">${esc(S.email)}</span>` : '',
    S.phone ? `<span contenteditable="true" data-sync="contact:phone" title="Click to edit phone directly">${esc(S.phone)}</span>` : '',
    S.loc ? `<span contenteditable="true" data-sync="contact:loc" title="Click to edit location directly">${esc(S.loc)}</span>` : '',
    S.link ? `<span contenteditable="true" data-sync="contact:link" title="Click to edit link directly">${esc(S.link)}</span>` : ''
  ].filter(Boolean).join('');

  const heading = `<div class="hd" data-sec="hd">
    <h1 contenteditable="true" data-sync="name" spellcheck="false" title="Click to edit full name directly">${esc(S.name) || 'Your Name'}</h1>
    ${S.title ? `<div class="t" contenteditable="true" data-sync="title" spellcheck="false" title="Click to edit headline directly">${esc(S.title)}</div>` : ''}
    <div class="ct">${contact}</div>
  </div>`;

  const section = (title, key, body) => (!hiddenSections[key] && body) ? `<section class="sec-${key}" data-sec="${key}"><h2>${title}</h2>${body}</section>` : '';
  const skills = S.skills.split(',').map(item => item.trim()).filter(Boolean);

  const content = {
    sum: section('Summary', 'sum', S.summary ? `<p contenteditable="true" data-sync="summary" spellcheck="true" title="Click to edit summary directly">${esc(S.summary)}</p>` : ''),
    edu: section('Education', 'edu', S.edu.filter(hasContent).map((item, idx) => `
      <div class="e" data-sec="edu:${idx}">
        <div class="r">
          <b contenteditable="true" data-sync="edu:${idx}:school" title="Click to edit school directly">${esc(item.school)}</b>
          <span contenteditable="true" data-sync="edu:${idx}:dates" title="Click to edit dates directly">${esc(item.dates)}</span>
        </div>
        <div contenteditable="true" data-sync="edu:${idx}:degree" title="Click to edit degree directly">${esc(item.degree)}</div>
        ${item.detail ? `<div class="sub" contenteditable="true" data-sync="edu:${idx}:detail" title="Click to edit details directly">${esc(item.detail)}</div>` : ''}
      </div>`).join('')),
    exp: section('Experience', 'exp', S.exp.filter(hasContent).map((item, idx) => `
      <div class="e" data-sec="exp:${idx}">
        <div class="r">
          <b contenteditable="true" data-sync="exp:${idx}:role" title="Click to edit role directly">${esc(item.role)}</b>
          <span contenteditable="true" data-sync="exp:${idx}:dates" title="Click to edit dates directly">${esc(item.dates)}</span>
        </div>
        <div class="sub" contenteditable="true" data-sync="exp:${idx}:org" title="Click to edit organization directly">${esc(item.org)}</div>
        ${bulletListEditable(lines(item.bullets), `exp:${idx}:bullets`)}
      </div>`).join('')),
    proj: section('Projects', 'proj', S.proj.filter(hasContent).map((item, idx) => `
      <div class="e" data-sec="proj:${idx}">
        <div class="r">
          <b contenteditable="true" data-sync="proj:${idx}:name" title="Click to edit project name directly">${esc(item.name)}</b>
          <span contenteditable="true" data-sync="proj:${idx}:tech" title="Click to edit tech stack directly">${esc(item.tech)}</span>
        </div>
        ${bulletListEditable(lines(item.bullets), `proj:${idx}:bullets`)}
      </div>`).join('')),
    skills: section('Skills', 'skills', skills.length ? (tpl === 'sidebar' ? `<ul class="sk" contenteditable="true" data-sync="skills" title="Click to edit skills directly">${skills.map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : `<p contenteditable="true" data-sync="skills" title="Click to edit skills directly">${esc(skills.join(', '))}</p>`) : ''),
    extra: section('Activities &amp; Leadership', 'extra', bulletListEditable(lines(S.extra), 'extra'))
  };

  paper.innerHTML = tpl === 'sidebar' 
    ? `<div class="sb"><aside>${heading}${content.skills}${content.extra}</aside><div class="mn">${content.sum}${content.edu}${content.exp}${content.proj}</div></div>` 
    : heading + content.sum + content.edu + content.exp + content.proj + content.skills + content.extra;
  
  fit();
  score();
  updatePageBreakMarkers();
}

function fit() {
  const paper = $('#paper');
  const stage = $('#stage');
  const fitBox = $('#fit');
  if (!paper || !stage || !fitBox) return;

  const previewWidth = stage.clientWidth - (window.innerWidth <= 900 ? 24 : 48);

  paper.style.minHeight = '1123px';
  const contentHeight = paper.scrollHeight;
  const pages = Math.max(1, Math.ceil((contentHeight - 2) / 1123));
  paper.style.minHeight = `${pages * 1123}px`;
  
  const pageTag = $('#pageTag');
  if (pageTag) {
    pageTag.textContent = `📄 A4 Sheet · ${pages} Page${pages === 1 ? '' : 's'} (210×297mm)`;
    pageTag.style.background = pages === 1 ? '#e0f2fe' : '#fef3c7';
    pageTag.style.color = pages === 1 ? '#0369a1' : '#b45309';
  }

  const guidance = $('#pg');
  if (guidance) {
    guidance.textContent = pages === 1 ? 'Length: 1 A4 Page. Perfect length for student & junior roles.' : `Length: ${pages} A4 Pages. Try Compact size or trim older details to fit 1 page.`;
  }

  if (previewWidth <= 0) return;

  const autoScale = Math.min(1, Math.max(0.25, previewWidth / 794));
  let scale = autoScale;
  if (currentZoom !== 'fit') {
    scale = currentZoom;
  }
  
  const zoomReset = $('#zoomResetBtn');
  if (zoomReset) zoomReset.textContent = `${Math.round(scale * 100)}%`;

  fitBox.style.transform = `scale(${scale})`;
  fitBox.style.height = `${paper.offsetHeight * scale}px`;
}

function score() {
  const review = resumeReview();
  $('#pct').textContent = review.percent;
  $('#barfill').style.width = `${review.percent}%`;
  $('#chk').innerHTML = review.criteria.map(([label, done]) => `<li class="${done ? 'y' : ''}">${label}</li>`).join('');
  updateFieldFeedback();
  updateCoach(review);
}

/* Modals & Dropdowns Management */
function openModal(id) {
  const modal = $(id);
  if (modal) modal.hidden = false;
}

function closeModal(id) {
  const modal = $(id);
  if (modal) modal.hidden = true;
}

function toggleDropdown(id) {
  const el = $(id);
  const isOpen = el.classList.contains('open');
  closeAllDropdowns();
  if (!isOpen) el.classList.add('open');
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
}

/* Generate and Open Public Share Link Modal */
function openShareModal() {
  const encoded = encodeResumePayload();
  const url = `${window.location.origin}${window.location.pathname}#resume=${encoded}`;
  $('#shareUrlInput').value = url;

  // Render QR Code preview
  const qrContainer = $('#shareQrCode');
  qrContainer.innerHTML = '';
  const qrImg = document.createElement('img');
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(url)}`;
  qrImg.alt = 'Scan to view resume';
  qrImg.width = 82;
  qrImg.height = 82;
  qrImg.style.borderRadius = '6px';
  qrImg.onerror = () => {
    qrContainer.innerHTML = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>`;
  };
  qrContainer.appendChild(qrImg);

  openModal('#shareModal');
}

/* Event Listeners */
document.addEventListener('input', event => {
  const target = event.target;
  if (!target.closest('#editor')) return;
  if (target.dataset.k) S[target.dataset.k] = target.value;
  else if (target.dataset.s) S[target.dataset.s][Number(target.dataset.i)][target.dataset.f] = target.value;
  else return;
  save();
  render();
});

// Direct in-preview editing two-way sync
const paperEl = $('#paper');
if (paperEl) {
  paperEl.addEventListener('input', event => {
    const target = event.target.closest('[data-sync]');
    if (!target) return;
    isTypingInPaper = true;
    const sync = target.dataset.sync;
    const text = (target.innerText != null ? target.innerText : target.textContent).trim();

    if (sync === 'name') {
      S.name = text;
      const inp = $('input[data-k="name"]');
      if (inp) inp.value = text;
    } else if (sync === 'title') {
      S.title = text;
      const inp = $('input[data-k="title"]');
      if (inp) inp.value = text;
    } else if (sync === 'summary') {
      S.summary = text;
      const inp = $('textarea[data-k="summary"]');
      if (inp) inp.value = text;
    } else if (sync === 'skills') {
      S.skills = text;
      const inp = $('textarea[data-k="skills"]');
      if (inp) inp.value = text;
    } else if (sync === 'extra') {
      const liItems = Array.from(target.querySelectorAll('li')).map(li => li.textContent.trim()).filter(Boolean);
      S.extra = liItems.length ? liItems.join('\n') : text;
      const inp = $('textarea[data-k="extra"]');
      if (inp) inp.value = S.extra;
    } else if (sync.startsWith('contact:')) {
      const field = sync.split(':')[1];
      S[field] = text;
      const inp = $(`input[data-k="${field}"]`);
      if (inp) inp.value = text;
    } else if (sync.startsWith('edu:') || sync.startsWith('exp:') || sync.startsWith('proj:')) {
      const parts = sync.split(':');
      const sec = parts[0];
      const idx = Number(parts[1]);
      const field = parts[2];
      if (S[sec] && S[sec][idx]) {
        if (field === 'bullets') {
          const liItems = Array.from(target.querySelectorAll('li')).map(li => li.textContent.trim()).filter(Boolean);
          S[sec][idx].bullets = liItems.length ? liItems.join('\n') : text;
          const inp = $(`textarea[data-s="${sec}"][data-i="${idx}"][data-f="bullets"]`);
          if (inp) inp.value = S[sec][idx].bullets;
        } else {
          S[sec][idx][field] = text;
          const inp = $(`[data-s="${sec}"][data-i="${idx}"][data-f="${field}"]`);
          if (inp) inp.value = text;
        }
      }
    }

    save();
    score();
    fit();
    updatePageBreakMarkers();
  });

  paperEl.addEventListener('focusout', () => {
    if (isTypingInPaper) {
      isTypingInPaper = false;
      render();
    }
  });
}

let isSyncingScroll = false;
let syncScrollTimer = null;

function setupScrollSync() {
  const editorEl = $('#editor');
  const stageEl = $('#stage');
  const activeSecTag = $('#activeSecTag');
  if (!editorEl || !stageEl) return;

  const sectionLabels = {
    hd: 'Info',
    sum: 'Summary',
    edu: 'Education',
    exp: 'Experience',
    proj: 'Projects',
    skills: 'Skills',
    extra: 'Awards'
  };

  function updateActiveHighlight(secKey) {
    document.querySelectorAll('.is-scrolling-active').forEach(el => el.classList.remove('is-scrolling-active'));

    if (activeSecTag) {
      activeSecTag.textContent = `📍 ${sectionLabels[secKey] || secKey}`;
    }

    document.querySelectorAll('.sec-chip-group').forEach(group => {
      const chipKey = group.dataset.secChip;
      if (chipKey === secKey) {
        group.classList.add('is-viewing');
      } else {
        group.classList.remove('is-viewing');
      }
    });

    const paperMatch = document.querySelector(`#paper [data-sec="${secKey}"]`) || document.querySelector(`#paper [data-sec^="${secKey}:"]`);
    if (paperMatch) {
      paperMatch.classList.add('is-scrolling-active');
    }
  }

  // When user scrolls editor, scroll preview smoothly to matching section
  editorEl.addEventListener('scroll', () => {
    if (isSyncingScroll) return;

    const editorRect = editorEl.getBoundingClientRect();
    const detailsList = editorEl.querySelectorAll('details[data-sec-editor]');
    let currentSec = 'hd';

    for (const det of detailsList) {
      const rect = det.getBoundingClientRect();
      if (rect.top - editorRect.top <= 140) {
        currentSec = det.dataset.secEditor;
      }
    }

    updateActiveHighlight(currentSec);

    const targetPaperSec = document.querySelector(`#paper [data-sec="${currentSec}"]`) || document.querySelector(`#paper [data-sec^="${currentSec}:"]`);
    if (targetPaperSec) {
      isSyncingScroll = true;
      const stageRect = stageEl.getBoundingClientRect();
      const targetRect = targetPaperSec.getBoundingClientRect();
      const offset = targetRect.top - stageRect.top + stageEl.scrollTop - 70;
      stageEl.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });

      clearTimeout(syncScrollTimer);
      syncScrollTimer = setTimeout(() => { isSyncingScroll = false; }, 320);
    }
  }, { passive: true });

  // When user scrolls preview, update active section tag and chip
  stageEl.addEventListener('scroll', () => {
    if (isSyncingScroll) return;

    const stageRect = stageEl.getBoundingClientRect();
    const paperSections = document.querySelectorAll('#paper [data-sec]');
    let currentSec = 'hd';

    for (const sec of paperSections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top - stageRect.top <= 140) {
        currentSec = (sec.dataset.sec || '').split(':')[0];
      }
    }

    updateActiveHighlight(currentSec);
  }, { passive: true });
}

// Two-Way Active Focus Highlighting
document.addEventListener('focusin', event => {
  const target = event.target;
  if (!target || !target.dataset) return;
  const k = target.dataset.k;
  const s = target.dataset.s;
  const i = target.dataset.i;

  document.querySelectorAll('.is-preview-active').forEach(el => el.classList.remove('is-preview-active'));

  let selector = '';
  if (k === 'name' || k === 'title') selector = `[data-sync="${k}"]`;
  else if (k && ['email', 'phone', 'loc', 'link'].includes(k)) selector = `[data-sync="contact:${k}"]`;
  else if (k === 'summary') selector = `[data-sync="summary"]`;
  else if (k === 'skills') selector = `[data-sync="skills"]`;
  else if (k === 'extra') selector = `[data-sync="extra"]`;
  else if (s && i !== undefined) selector = `[data-sec="${s}:${i}"]`;

  if (selector) {
    const match = document.querySelector(`#paper ${selector}`);
    if (match) {
      match.classList.add('is-preview-active');
      match.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
});

document.addEventListener('focusout', event => {
  if (event.target && event.target.closest && event.target.closest('#editor')) {
    document.querySelectorAll('.is-preview-active').forEach(el => el.classList.remove('is-preview-active'));
  }
});

document.addEventListener('click', event => {
  // Dropdown close on outside click
  if (!event.target.closest('.dropdown')) {
    closeAllDropdowns();
  }

  // Dynamic section navigation click
  const navBtn = event.target.closest('[data-nav-sec]');
  if (navBtn) {
    const secKey = navBtn.dataset.navSec;
    const editorSec = document.querySelector(`details[data-sec-editor="${secKey}"]`);
    if (editorSec) {
      editorSec.open = true;
      editorSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const paperSec = document.querySelector(`#paper [data-sec="${secKey}"]`) || document.querySelector(`#paper [data-sec^="${secKey}:"]`);
    if (paperSec) {
      const stageEl = $('#stage');
      const stageRect = stageEl.getBoundingClientRect();
      const targetRect = paperSec.getBoundingClientRect();
      const offset = targetRect.top - stageRect.top + stageEl.scrollTop - 70;
      stageEl.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
      document.querySelectorAll('.is-scrolling-active').forEach(el => el.classList.remove('is-scrolling-active'));
      paperSec.classList.add('is-scrolling-active');
    }
    showToast(`Navigated to ${navBtn.textContent.trim()} section`);
    return;
  }

  // Dynamic section visibility toggle
  const toggleBtn = event.target.closest('[data-toggle-sec]');
  if (toggleBtn) {
    const secKey = toggleBtn.dataset.toggleSec;
    hiddenSections[secKey] = !hiddenSections[secKey];
    const chipGroup = toggleBtn.closest('.sec-chip-group');
    if (chipGroup) {
      chipGroup.classList.toggle('is-hidden', hiddenSections[secKey]);
    }
    toggleBtn.textContent = hiddenSections[secKey] ? '🙈' : '👁';
    render();
    showToast(`${hiddenSections[secKey] ? 'Hidden' : 'Shown'} ${secKey.toUpperCase()} section`);
    return;
  }

  const button = event.target.closest('button');
  if (!button) return;
  const data = button.dataset;

  // Entry reordering & deletion
  if (data.move) {
    const [section, indexStr, dir] = data.move.split(':');
    const index = Number(indexStr);
    const targetIndex = dir === 'up' ? index - 1 : index + 1;
    if (targetIndex >= 0 && targetIndex < S[section].length) {
      const item = S[section].splice(index, 1)[0];
      S[section].splice(targetIndex, 0, item);
      $(`#list-${section}`).innerHTML = list(section);
      save();
      render();
      showToast(`✓ Entry moved ${dir}`);
    }
    return;
  }

  if (data.add) {
    S[data.add].push({});
    $(`#list-${data.add}`).innerHTML = list(data.add);
    save();
    render();
  } else if (data.del) {
    const [section, index] = data.del.split(':');
    S[section].splice(Number(index), 1);
    $(`#list-${section}`).innerHTML = list(section);
    save();
    render();
    showToast('✓ Entry removed');
  } else if (data.acc) {
    acc = data.acc;
    document.querySelectorAll('.sw').forEach(swatch => swatch.setAttribute('aria-pressed', swatch === button));
    save();
    render();
  } else if (data.tpl) {
    tpl = data.tpl;
    document.querySelectorAll('.tpb').forEach(option => option.setAttribute('aria-pressed', option === button));
    save();
    render();
  } else if (data.copySuggestion) {
    copySuggestedText();
  } else if (data.downloadPdf) {
    downloadPdf();
  } else if (data.downloadText) {
    downloadTextFile();
  } else if (data.loadPreset) {
    const preset = PRESETS[data.loadPreset];
    if (preset) {
      S = copy(preset);
      save();
      buildEditor();
      render();
      closeAllDropdowns();
      showToast(`✓ Loaded ${data.loadPreset === 'blank' ? 'Blank Canvas' : data.loadPreset + ' template'}`);
    }
  }
});

document.addEventListener('change', event => {
  const target = event.target;
  if (target.id === 'fnt') fnt = target.value;
  else if (target.id === 'dens') dens = target.value;
  else return;
  save();
  render();
});

/* Header Action Handlers */
$('#presetBtn').addEventListener('click', () => toggleDropdown('#presetDropdown'));
$('#dataBtn').addEventListener('click', () => toggleDropdown('#dataDropdown'));
$('#shareLinkBtn').addEventListener('click', openShareModal);
$('#print').addEventListener('click', downloadPdf);
$('#quickPrintBtn').addEventListener('click', downloadPdf);
$('#heroCloseBtn').addEventListener('click', () => {
  $('#heroBanner').style.display = 'none';
});

/* Share Modal Actions */
$('#shareModalClose').addEventListener('click', () => closeModal('#shareModal'));
$('#shareModalDone').addEventListener('click', () => closeModal('#shareModal'));
$('#copyShareUrlBtn').addEventListener('click', () => {
  const input = $('#shareUrlInput');
  input.select();
  navigator.clipboard.writeText(input.value).then(() => {
    showToast('✓ Public link copied to clipboard!');
  }).catch(() => {
    fallbackCopy(input.value, () => showToast('✓ Public link copied!'));
  });
});
$('#openShareLinkBtn').addEventListener('click', () => {
  const url = $('#shareUrlInput').value;
  window.open(url, '_blank');
});

/* Data Export / Import Actions */
$('#exportJsonBtn').addEventListener('click', () => {
  closeAllDropdowns();
  exportJsonFile();
});
$('#exportTxtBtn').addEventListener('click', () => {
  closeAllDropdowns();
  downloadTextFile();
});
$('#importJsonBtn').addEventListener('click', () => {
  closeAllDropdowns();
  openModal('#importModal');
});
$('#importModalClose').addEventListener('click', () => closeModal('#importModal'));
$('#importModalCancel').addEventListener('click', () => closeModal('#importModal'));
$('#importModalSubmit').addEventListener('click', () => {
  const text = $('#importJsonText').value.trim();
  if (!text) {
    alert('Please paste JSON content or select a file first.');
    return;
  }
  importJsonData(text);
});

$('#jsonFileInput').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    $('#importJsonText').value = ev.target.result;
    importJsonData(ev.target.result);
  };
  reader.readAsText(file);
});

/* Zoom Controls */
$('#zoomInBtn').addEventListener('click', () => {
  const curr = currentZoom === 'fit' ? Math.min(1, $('#stage').clientWidth / 794) : currentZoom;
  currentZoom = Math.min(1.5, curr + 0.1);
  fit();
});
$('#zoomOutBtn').addEventListener('click', () => {
  const curr = currentZoom === 'fit' ? Math.min(1, $('#stage').clientWidth / 794) : currentZoom;
  currentZoom = Math.max(0.4, curr - 0.1);
  fit();
});
$('#zoomResetBtn').addEventListener('click', () => {
  currentZoom = 1.0;
  fit();
});
$('#zoomFitBtn').addEventListener('click', () => {
  currentZoom = 'fit';
  fit();
});

/* Mobile Workspace Tabs */
function setTab(preview) {
  document.body.classList.toggle('prev', preview);
  $('#tPrev').classList.toggle('primary', preview);
  $('#tEdit').classList.toggle('primary', !preview);
  if (preview) requestAnimationFrame(fit);
}
$('#tEdit').addEventListener('click', () => setTab(false));
$('#tPrev').addEventListener('click', () => setTab(true));
window.addEventListener('resize', fit);

/* Initialize */
load();
buildEditor();
render();
setupScrollSync();
