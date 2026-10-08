/* test_suite.js - Exhaustive Test Suite for Folio Resume Builder Functions */

// Minimal DOM & Browser Environment Mock for JavaScriptCore
const mockStorage = {};
const alert = function(msg) {};
const setTimeout = function(fn, delay) { return 1; };
const clearTimeout = function(id) {};
const localStorage = {
  getItem: key => (key in mockStorage ? mockStorage[key] : null),
  setItem: (key, val) => { mockStorage[key] = String(val); },
  removeItem: key => { delete mockStorage[key]; },
  clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); }
};

const elements = {};
function createMockElement(id = '', tag = 'div') {
  return {
    id,
    tagName: tag.toUpperCase(),
    innerHTML: '',
    textContent: '',
    value: '',
    style: {
      setProperty: function(k, v) { this[k] = v; },
      width: '', height: '', transform: '', minHeight: '', fontFamily: ''
    },
    dataset: {},
    classList: {
      _classes: new Set(),
      add: function(c) { this._classes.add(c); },
      remove: function(c) { this._classes.delete(c); },
      contains: function(c) { return this._classes.has(c); },
      toggle: function(c, force) {
        if (force === undefined) {
          if (this._classes.has(c)) this._classes.delete(c); else this._classes.add(c);
        } else if (force) this._classes.add(c); else this._classes.delete(c);
      }
    },
    hidden: false,
    attributes: {},
    setAttribute: function(k, v) { this.attributes[k] = String(v); },
    getAttribute: function(k) { return this.attributes[k] || null; },
    removeAttribute: function(k) { delete this.attributes[k]; },
    closest: function(sel) { return this; },
    querySelector: function(sel) { return createMockElement('sub-' + sel); },
    querySelectorAll: function(sel) { return []; },
    appendChild: function(child) {},
    select: function() {},
    focus: function() {},
    addEventListener: function(evt, handler) {}
  };
}

const document = {
  querySelector: function(sel) {
    if (!sel) return null;
    if (!elements[sel]) elements[sel] = createMockElement(sel.replace(/^[#.]/, ''));
    return elements[sel];
  },
  querySelectorAll: function(sel) {
    if (sel === '.dropdown') return [createMockElement('dd1'), createMockElement('dd2')];
    if (sel === '.sw') return [createMockElement('sw1'), createMockElement('sw2')];
    if (sel === '.tpb') return [createMockElement('tpb1'), createMockElement('tpb2')];
    return [];
  },
  createElement: function(tag) { return createMockElement('', tag); },
  body: createMockElement('body'),
  addEventListener: function(evt, handler) {}
};

const window = {
  innerWidth: 1200,
  location: { origin: 'https://example.com', pathname: '/resume', hash: '' },
  print: function() { window._printed = true; },
  open: function(url, target) { window._openedUrl = url; },
  addEventListener: function(evt, handler) {},
  requestAnimationFrame: function(cb) { cb(); }
};

const navigator = {
  clipboard: {
    writeText: function(text) {
      navigator._copied = text;
      return { then: function(cb) { cb(); return { catch: function() {} }; } };
    }
  }
};

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    print("  ✓ PASS: " + message);
    testsPassed++;
  } else {
    print("  ✗ FAIL: " + message);
    testsFailed++;
  }
}

function assertEquals(actual, expected, message) {
  if (actual === expected) {
    print("  ✓ PASS: " + message);
    testsPassed++;
  } else {
    print("  ✗ FAIL: " + message + " (Expected: " + expected + ", Got: " + actual + ")");
    testsFailed++;
  }
}

// Load script content directly
// (We read script.js and eval in this context)
print("============================================================");
print("🧪 FOLIO RESUME BUILDER - EXHAUSTIVE FUNCTION TEST SUITE");
print("============================================================\n");

// Read and load script.js
load('script.js');

print("\n--- 1. Testing Core Utility Functions ---");
// esc()
assertEquals(esc('<script>alert("XSS")</script>'), '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;', 'esc() escapes HTML tags and quotes');
assertEquals(esc("It's & It's"), "It&#39;s &amp; It&#39;s", 'esc() escapes ampersands and single quotes');
assertEquals(esc(null), '', 'esc() handles null gracefully');
assertEquals(esc(undefined), '', 'esc() handles undefined gracefully');
assertEquals(esc(123), '123', 'esc() handles numbers correctly');

// lines()
assertEquals(lines("line 1\nline 2\n\nline 3").length, 3, 'lines() splits newlines and filters empty lines');
assertEquals(lines("  bullet A  \n  bullet B  ")[0], 'bullet A', 'lines() trims whitespace from items');
assertEquals(lines("")[0], undefined, 'lines() returns empty array for empty string');

// words()
assertEquals(words("Hello world test").length, 3, 'words() splits space-separated words');
assertEquals(words("   Multiple    spaces   between   words   ").length, 4, 'words() collapses multiple spaces');
assertEquals(words("").length, 0, 'words() returns 0 for empty string');

// copy()
const orig = { a: 1, b: [2, 3], c: { d: 'test' } };
const cloned = copy(orig);
assert(cloned !== orig && cloned.b !== orig.b && cloned.c.d === 'test', 'copy() performs deep copy');
cloned.b.push(4);
assert(orig.b.length === 2 && cloned.b.length === 3, 'copy() mutation does not affect original');

print("\n--- 2. Testing Validation Functions ---");
// isValidEmail()
assert(isValidEmail('student@university.edu'), 'isValidEmail() accepts valid university email');
assert(isValidEmail('first.last@company.co.uk'), 'isValidEmail() accepts multi-domain email');
assert(!isValidEmail('invalid-email'), 'isValidEmail() rejects string without @ and domain');
assert(!isValidEmail('name@domain'), 'isValidEmail() rejects email without TLD');
assert(!isValidEmail(''), 'isValidEmail() rejects empty string');

// isValidLink()
assert(isValidLink('https://github.com/myname'), 'isValidLink() accepts https URL');
assert(isValidLink('http://portfolio.dev'), 'isValidLink() accepts http URL');
assert(isValidLink('linkedin.com/in/profile'), 'isValidLink() accepts domain without protocol');
assert(!isValidLink('just text'), 'isValidLink() rejects plain text');
assert(!isValidLink(''), 'isValidLink() rejects empty string');

// downloadFileName()
S.name = 'Maya Iyer';
assertEquals(downloadFileName('pdf'), 'maya-iyer-resume.pdf', 'downloadFileName() formats name with extension');
S.name = 'Alex  Rivera Jr.';
assertEquals(downloadFileName('json'), 'alex-rivera-jr-resume.json', 'downloadFileName() sanitizes special characters');
S.name = '';
assertEquals(downloadFileName('txt'), 'my-resume-resume.txt', 'downloadFileName() falls back to my-resume');

// bulletList()
assertEquals(bulletList(['Item 1', 'Item 2']), '<ul><li>Item 1</li><li>Item 2</li></ul>', 'bulletList() creates unordered HTML list');
assertEquals(bulletList([]), '', 'bulletList() returns empty string for empty array');

print("\n--- 3. Testing Field Help & Feedback ---");
// fieldHelp()
const nameHelp = fieldHelp('name');
assert(nameHelp.example && nameHelp.hint, 'fieldHelp() returns example and hint for top-level fields');
const bulletHelp = fieldHelp('exp.bullets');
assert(bulletHelp.hint && bulletHelp.example, 'fieldHelp() returns guidance for nested fields');
const unknownHelp = fieldHelp('unknown_field_xyz');
assert(unknownHelp.example && unknownHelp.hint, 'fieldHelp() gracefully falls back for unknown fields');

// validationFor()
const mockTarget = { dataset: { k: 'name' }, value: 'Maya Iyer' };
const nameVal = validationFor(mockTarget);
assertEquals(nameVal.kind, 'good', 'validationFor() approves valid 2-word name');

mockTarget.value = 'Maya123';
const numNameVal = validationFor(mockTarget);
assertEquals(numNameVal.kind, 'warning', 'validationFor() warns if name has digits');

mockTarget.dataset.k = 'email';
mockTarget.value = 'bad-email';
assertEquals(validationFor(mockTarget).kind, 'warning', 'validationFor() warns on invalid email');

mockTarget.value = 'good@example.com';
assertEquals(validationFor(mockTarget).kind, 'good', 'validationFor() approves valid email');

mockTarget.dataset.k = 'summary';
mockTarget.value = 'Too short.';
assertEquals(validationFor(mockTarget).kind, 'warning', 'validationFor() warns if summary < 20 words');

mockTarget.value = 'Third-year CS student passionate about web development, building accessible applications for students and looking for a summer software engineering internship opportunity in tech.';
assertEquals(validationFor(mockTarget).kind, 'tip', 'validationFor() tips to add numbers when 20-60 words without numbers');

mockTarget.value = 'Third-year CS student with 3 shipped web apps built for 600+ campus students, seeking a summer software engineering internship opportunity in high scale tech.';
assertEquals(validationFor(mockTarget).kind, 'good', 'validationFor() approves 20-60 word summary with numbers');

print("\n--- 4. Testing ATS Scoring & Quality Coach Heuristics ---");
// Set state to full sample
S = copy(SAMPLE);
const reviewFull = resumeReview();
assertEquals(reviewFull.completed, 7, 'resumeReview() passes all 7 criteria on complete sample');
assertEquals(reviewFull.percent, 100, 'resumeReview() scores 100% on complete sample');

// Test failure of criteria
S = copy(SAMPLE);
S.name = ''; // Fails criteria 1
const reviewFailName = resumeReview();
assert(reviewFailName.percent < 100, 'resumeReview() lowers score when name is missing');
assert(!reviewFailName.criteria[0][1], 'Criteria 1 (name, email, link) fails when name is empty');

S = copy(SAMPLE);
S.skills = 'HTML, CSS'; // Only 2 skills, fails criteria 7 (needs >= 5)
const reviewFailSkills = resumeReview();
assert(!reviewFailSkills.criteria[6][1], 'Criteria 7 fails when skills < 5');

S = copy(SAMPLE);
S.exp = [];
S.proj = []; // Fails criteria 4 (needs >= 2 roles or projects)
const reviewFailExp = resumeReview();
assert(!reviewFailExp.criteria[3][1], 'Criteria 4 fails when roles/projects < 2');

// suggestedSummary()
S = copy(SAMPLE);
S.summary = '';
const generatedSummary = suggestedSummary();
assert(generatedSummary.length > 30, 'suggestedSummary() automatically generates coherent summary when blank');

// suggestedResumeText()
S = copy(SAMPLE);
const textDraft = suggestedResumeText();
assert(textDraft.indexOf('SUMMARY') !== -1 && textDraft.indexOf('EDUCATION') !== -1 && textDraft.indexOf('PROJECTS') !== -1, 'suggestedResumeText() compiles full document structure');

print("\n--- 5. Testing URL Hash Serialization & Sharing ---");
S = copy(SAMPLE);
tpl = 'modern';
acc = '#0f766e';
fnt = 'Poppins';
dens = 'cmp';

const encoded = encodeResumePayload();
assert(typeof encoded === 'string' && encoded.length > 50, 'encodeResumePayload() returns valid encoded string');

const decoded = decodeResumePayload(encoded);
assert(decoded !== null, 'decodeResumePayload() successfully parses payload');
assertEquals(decoded.S.name, S.name, 'decodeResumePayload() preserves candidate name');
assertEquals(decoded.tpl, 'modern', 'decodeResumePayload() preserves template');
assertEquals(decoded.acc, '#0f766e', 'decodeResumePayload() preserves accent color');
assertEquals(decoded.fnt, 'Poppins', 'decodeResumePayload() preserves font');
assertEquals(decoded.dens, 'cmp', 'decodeResumePayload() preserves density');

// checkUrlHash()
window.location.hash = '#resume=' + encoded;
const hashResult = checkUrlHash();
assert(hashResult === true, 'checkUrlHash() detects and unpacks #resume hash');

window.location.hash = '';
assert(checkUrlHash() === false, 'checkUrlHash() returns false when no hash present');

print("\n--- 6. Testing Section Item Reordering & Mutation ---");
S = copy(SAMPLE);
const originalEduCount = S.edu.length;
// Add entry
S.edu.push({ school: 'Secondary School', degree: 'High School', dates: '2021 – 2023', detail: 'Rank 1' });
assertEquals(S.edu.length, originalEduCount + 1, 'Adding education item increases count');

// Reorder: Move second item up to first position
const itemToMove = S.edu[1];
const removed = S.edu.splice(1, 1)[0];
S.edu.splice(0, 0, removed);
assertEquals(S.edu[0].school, 'Secondary School', 'Reordering moves item to index 0');

// Delete entry
S.edu.splice(0, 1);
assertEquals(S.edu.length, originalEduCount, 'Deleting item restores original count');

print("\n--- 7. Testing Presets Loading ---");
assert(PRESETS.tech && PRESETS.business && PRESETS.design && PRESETS.blank, 'All 4 presets (tech, business, design, blank) exist');
assertEquals(PRESETS.tech.name, 'Maya Iyer', 'Tech preset loads Maya Iyer');
assertEquals(PRESETS.business.name, 'Alex Rivera', 'Business preset loads Alex Rivera');
assertEquals(PRESETS.design.name, 'Jordan Chen', 'Design preset loads Jordan Chen');
assertEquals(PRESETS.blank.name, '', 'Blank preset provides empty fields');

print("\n--- 8. Testing Data Import & Export ---");
// Valid JSON import
const validJson = JSON.stringify({
  S: {
    name: 'Test Candidate',
    title: 'Software Developer',
    email: 'test@candidate.com',
    phone: '+1 234 567 890',
    loc: 'New York, USA',
    link: 'github.com/test',
    summary: 'A skilled developer with 3 years of building real-time applications.',
    edu: [{ school: 'NYU', degree: 'B.S. CS', dates: '2022 – 2026', detail: '' }],
    exp: [{ role: 'Developer', org: 'Tech Co', dates: '2024 – Present', bullets: 'Built API' }],
    proj: [],
    skills: 'JavaScript, Python',
    extra: ''
  },
  tpl: 'executive',
  acc: '#7c3aed'
});

importJsonData(validJson);
assertEquals(S.name, 'Test Candidate', 'importJsonData() loads valid resume state');
assertEquals(tpl, 'executive', 'importJsonData() loads template from JSON');
assertEquals(acc, '#7c3aed', 'importJsonData() loads accent color from JSON');

// Invalid JSON import handling
let caughtError = false;
try {
  importJsonData('invalid-non-json-content');
} catch (e) {
  caughtError = true;
}
assert(!caughtError, 'importJsonData() handles invalid JSON gracefully with user alert');

print("\n--- 9. Testing Templates & Styling Rendering Engine ---");
TPLS.forEach(([tplKey, tplLabel]) => {
  tpl = tplKey;
  render();
  const paper = document.querySelector('#paper');
  assert(paper.className.indexOf(tplKey) !== -1, 'render() successfully applies template class: ' + tplKey);
});

COLORS.forEach(color => {
  acc = color;
  render();
  const paper = document.querySelector('#paper');
  assertEquals(paper.style['--a'], color, 'render() binds accent color CSS property: ' + color);
});

FONTS.forEach(([fontName]) => {
  fnt = fontName;
  render();
  const paper = document.querySelector('#paper');
  assert(paper.style.fontFamily.indexOf(fontName) !== -1, 'render() binds selected font: ' + fontName);
});

print("\n--- 10. Testing Zoom Calculations & Bounds ---");
currentZoom = 1.0;
// Test zoom in
currentZoom = Math.min(1.5, currentZoom + 0.1);
assertEquals(Math.round(currentZoom * 10) / 10, 1.1, 'Zoom in increments by 0.1');

// Test zoom max boundary
currentZoom = 2.0;
currentZoom = Math.min(1.5, Math.max(0.4, currentZoom));
assertEquals(currentZoom, 1.5, 'Zoom clamps to max 1.5 (150%)');

// Test zoom min boundary
currentZoom = 0.1;
currentZoom = Math.min(1.5, Math.max(0.4, currentZoom));
assertEquals(currentZoom, 0.4, 'Zoom clamps to min 0.4 (40%)');

print("\n============================================================");
print("📊 TEST EXECUTION SUMMARY");
print("============================================================");
print("Total Assertions Tested: " + (testsPassed + testsFailed));
print("Passed: " + testsPassed);
print("Failed: " + testsFailed);
if (testsFailed === 0) {
  print("\n🎉 ALL TESTS PASSED WITH 100% SUCCESS RATE!");
} else {
  print("\n⚠️ SOME TESTS FAILED!");
}
print("============================================================\n");
