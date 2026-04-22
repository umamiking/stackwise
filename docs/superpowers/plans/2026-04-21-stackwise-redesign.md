# StackWise Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current tab-based dark-sci-fi UI with a tool-first sidebar layout — Muted Slate theme, fixed topbar + sidebar with model list, and a stack order view that shows both handles (diagram + ordered list) with an adjacent swap results panel.

**Architecture:** This is a pure presentation-layer rewrite of `index.html`. All data (`rawData`, `stackData`, `lockingGeometry`, `externalLockingGeometry`) and all compatibility logic (`analyzeCompatibility`, `findBestSpacerCombo`) stay exactly as-is. Only the CSS, HTML structure, and the rendering functions (`init`, `displayToolReference`, `displaySwapResults`, `compareModels`, `findAllCompatibleSwaps`) are replaced. The file stays a single self-contained HTML file.

**Tech Stack:** Vanilla HTML/CSS/JS, no build step, no external dependencies except existing Google Fonts import (to be replaced with system font stack).

---

## File Map

| File | Change |
|---|---|
| `index.html` lines 1–759 | Replace: `<head>`, `<style>`, and all HTML structure |
| `index.html` lines 760–1214 | Keep unchanged: DATA script block |
| `index.html` lines 1216–1969 | Replace: APP LOGIC script block — same logic, new rendering functions |

---

## Task 1: Shell structure and CSS custom properties

Replace the `<head>` and add the new CSS. The DATA and APP LOGIC script blocks stay untouched in this task.

**Files:**
- Modify: `index.html` (head + style section, lines 1–759)

- [ ] **Step 1: Replace `<head>` and all CSS**

Replace everything from `<!DOCTYPE html>` through the closing `</style>` tag (line 759) with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>StackWise — Leatherman Modding Reference</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }

  :root {
    --bg:        #2c3040;
    --bg-card:   #343849;
    --bg-bar:    #1e2130;
    --text-hi:   #eeeef8;
    --text:      #c0c8e0;
    --text-sec:  #8896b0;
    --text-mute: #7080a0;
    --border:    #404558;
    --accent:    #7b8cde;
    --ext-bg:    #2e2010;
    --ext-bdr:   #7a5510;
    --ext-text:  #e8c870;
    --ext-bar:   #c8860a;
    --int-bg:    #2a2e3e;
    --int-bdr:   #404558;
    --int-text:  #9098b8;
    --wsh-bg:    #383d52;
    --wsh-bdr:   #4a5068;
  }

  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); font-size: 17px; height: 100vh; display: flex; flex-direction: column; overflow: hidden; }

  /* ── Shell ── */
  .topbar { background: var(--bg-bar); border-bottom: 1px solid var(--border); padding: 0 1.25rem; height: 56px; display: flex; align-items: center; gap: 1rem; flex-shrink: 0; }
  .topbar-title { font-size: 1.2rem; font-weight: 800; color: var(--text-hi); letter-spacing: -0.02em; }
  .topbar-sub { font-size: 0.72rem; color: var(--text-sec); text-transform: uppercase; letter-spacing: 0.12em; }
  .topbar-stats { margin-left: auto; font-size: 0.8rem; color: var(--text-sec); }

  .shell-body { display: flex; flex: 1; overflow: hidden; }

  /* ── Sidebar ── */
  .sidebar { background: var(--bg-bar); border-right: 1px solid var(--border); width: 190px; flex-shrink: 0; display: flex; flex-direction: column; overflow-y: auto; }
  .sidebar-section { padding: 0.75rem 0; border-bottom: 1px solid var(--bg); }
  .sidebar-section:last-child { border-bottom: none; flex: 1; }
  .sidebar-label { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-mute); padding: 0 0.9rem; margin-bottom: 0.4rem; }
  .sidebar-item { padding: 0.5rem 0.9rem; font-size: 0.88rem; color: var(--text-sec); cursor: pointer; border-left: 3px solid transparent; }
  .sidebar-item:hover { color: var(--text); background: #252838; }
  .sidebar-item.active { color: var(--text-hi); border-left-color: var(--accent); background: #252838; font-weight: 600; }
  .sidebar-model { padding: 0.4rem 0.9rem; font-size: 0.82rem; color: var(--text-sec); cursor: pointer; border-left: 3px solid transparent; }
  .sidebar-model:hover { color: var(--text); background: #252838; }
  .sidebar-model.selected { color: #a0b0ff; border-left-color: #5060c0; font-weight: 600; }

  /* ── Main ── */
  .main { flex: 1; overflow-y: auto; padding: 1.4rem; display: flex; flex-direction: column; gap: 1.4rem; }

  /* ── Cards ── */
  .card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 1.1rem 1.4rem; }
  .card-title { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-sec); margin-bottom: 0.9rem; }

  /* ── Tool header ── */
  .tool-header { display: flex; align-items: center; gap: 1.5rem; }
  .tool-name { font-size: 1.5rem; font-weight: 800; color: var(--text-hi); letter-spacing: -0.02em; }
  .tool-specs { font-size: 0.8rem; color: var(--text-sec); margin-top: 0.2rem; }
  .tool-actions { margin-left: auto; display: flex; gap: 0.5rem; }
  .btn { padding: 0.45rem 1rem; border-radius: 5px; font-size: 0.82rem; font-weight: 600; cursor: pointer; border: none; font-family: inherit; }
  .btn-primary { background: #4a5480; color: var(--text-hi); }
  .btn-primary:hover { background: #5a6490; }
  .btn-secondary { background: transparent; color: var(--accent); border: 1px solid var(--border); }
  .btn-secondary:hover { border-color: var(--accent); }

  /* ── Stack section ── */
  .stack-section { display: grid; grid-template-columns: 1fr 1.3fr; gap: 1.4rem; }
  .stack-side-label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-mute); margin-bottom: 0.5rem; }
  .stack-bars { display: flex; gap: 3px; height: 64px; align-items: stretch; }
  .stack-bar { border-radius: 3px; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; min-width: 8px; overflow: hidden; }
  .stack-bar.ext { background: var(--ext-bg); border: 1px solid var(--ext-bdr); color: var(--ext-text); }
  .stack-bar.int { background: var(--int-bg); border: 1px solid var(--int-bdr); color: var(--int-text); }
  .stack-bar.wsh { background: var(--wsh-bg); border: 1px solid var(--wsh-bdr); color: var(--text-mute); }
  .pivot-hint { font-size: 0.65rem; color: var(--text-mute); margin-top: 0.3rem; margin-bottom: 0.65rem; display: flex; justify-content: space-between; }
  .handle-divider { height: 1px; background: var(--border); margin: 0.9rem 0; }

  /* ── Stack list ── */
  .stack-list { display: flex; flex-direction: column; gap: 2px; }
  .stack-row { display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.55rem; border-radius: 4px; cursor: pointer; }
  .stack-row:hover { background: #3a3f54; }
  .stack-row.wsh { opacity: 0.6; cursor: default; }
  .stack-row.wsh:hover { background: transparent; }
  .stack-row.ext { border-left: 3px solid var(--ext-bar); padding-left: 0.4rem; }
  .stack-row.selected { background: #3a3f54; outline: 1px solid var(--accent); }
  .row-num { font-size: 0.7rem; color: var(--text-mute); width: 16px; text-align: right; flex-shrink: 0; }
  .row-name { font-size: 0.88rem; color: var(--text); flex: 1; }
  .row-size { font-size: 0.82rem; color: var(--text-sec); font-variant-numeric: tabular-nums; }
  .row-tag { font-size: 0.65rem; color: var(--ext-bar); margin-left: 0.25rem; }
  .stack-legend { display: flex; gap: 1rem; font-size: 0.68rem; color: var(--text-sec); margin-top: 0.85rem; }
  .legend-swatch { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: 4px; vertical-align: middle; }

  /* ── Swap panel ── */
  .swap-placeholder { font-size: 0.82rem; color: var(--text-mute); padding: 2rem 0; text-align: center; }
  .swap-selected-label { font-size: 0.72rem; color: var(--text-sec); margin-bottom: 0.75rem; }
  .swap-selected-label strong { color: var(--text-hi); }
  .swap-list { display: flex; flex-direction: column; gap: 6px; }
  .swap-row { border-radius: 5px; padding: 0.55rem 0.85rem; display: flex; align-items: center; gap: 0.75rem; }
  .swap-row.perfect      { border: 1px solid #1e4a1e; background: #0e2818; }
  .swap-row.close-fit    { border: 1px solid #3a2060; background: #180e2a; }
  .swap-row.needs-spacer { border: 1px solid #4a3000; background: #281800; }
  .swap-row.incompatible { border: 1px solid #383840; background: #222230; opacity: 0.45; }
  .swap-model { font-size: 0.78rem; color: var(--text-sec); width: 90px; flex-shrink: 0; }
  .swap-name  { font-size: 0.88rem; color: #e0e0e0; font-weight: 600; flex: 1; }
  .swap-detail { font-size: 0.78rem; color: var(--text-sec); }
  .badge { font-size: 0.68rem; font-weight: 700; padding: 0.18rem 0.5rem; border-radius: 3px; flex-shrink: 0; white-space: nowrap; }
  .badge.perfect      { background: #2d7d32; color: #fff; }
  .badge.close-fit    { background: #6d28d9; color: #fff; }
  .badge.needs-spacer { background: #c2570a; color: #fff; }
  .badge.incompatible { background: #444;    color: #888; }

  /* ── Find Swaps view ── */
  .view { display: none; }
  .view.active { display: flex; flex-direction: column; gap: 1.4rem; }
  .form-row { display: flex; gap: 1rem; align-items: flex-end; }
  .form-group { display: flex; flex-direction: column; gap: 0.4rem; flex: 1; }
  .form-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-sec); }
  .form-select { background: var(--bg); border: 1px solid var(--border); border-radius: 5px; padding: 0.5rem 0.75rem; font-size: 0.88rem; color: var(--text); font-family: inherit; cursor: pointer; }
  .form-select:focus { outline: none; border-color: var(--accent); }

  /* ── Compare view ── */
  .compare-pair { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; border-radius: 5px; }
  .compare-pair.perfect      { border: 1px solid #1e4a1e; background: #0e2818; }
  .compare-pair.close-fit    { border: 1px solid #3a2060; background: #180e2a; }
  .compare-pair.needs-spacer { border: 1px solid #4a3000; background: #281800; }
  .compare-tool { font-size: 0.82rem; color: var(--text); flex: 1; }
  .compare-arrow { font-size: 0.75rem; color: var(--text-mute); }
</style>
</head>
```

- [ ] **Step 2: Verify file saved correctly**

Open `index.html` in a browser (`open index.html`). It will look broken (no HTML body yet) — that's expected. Check DevTools for any CSS parse errors.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Replace CSS with Muted Slate design system"
```

---

## Task 2: HTML body structure

Replace the entire HTML body (everything between `</style>` and the first `<script>` DATA block) with the new shell layout.

**Files:**
- Modify: `index.html` (lines 760–762, the closing `</head><body>` and old HTML before the DATA script)

- [ ] **Step 1: Replace the HTML body shell**

Replace everything from `</style>` through the opening `<!-- === DATA` comment (keep the comment and everything from line 760 onward untouched) with:

```html
</style>
</head>
<body>

<div class="topbar">
  <div class="topbar-title">StackWise</div>
  <div class="topbar-sub">Leatherman Modding Reference</div>
  <div class="topbar-stats" id="topbar-stats"></div>
</div>

<div class="shell-body">

  <div class="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-item active" data-view="reference" onclick="switchView('reference')">Tool Reference</div>
      <div class="sidebar-item" data-view="swaps" onclick="switchView('swaps')">Find Swaps</div>
      <div class="sidebar-item" data-view="compare" onclick="switchView('compare')">Compare Models</div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-label">Models</div>
      <div id="sidebar-models"></div>
    </div>
  </div>

  <div class="main">

    <!-- Tool Reference view -->
    <div class="view active" id="view-reference">
      <div class="card tool-header" id="tool-header" style="display:none;">
        <div>
          <div class="tool-name" id="tool-name"></div>
          <div class="tool-specs" id="tool-specs"></div>
        </div>
        <div class="tool-actions">
          <button class="btn btn-primary" onclick="switchView('swaps')">Find Swaps →</button>
          <button class="btn btn-secondary" onclick="switchView('compare')">Compare →</button>
        </div>
      </div>
      <div id="stack-section" style="display:none;" class="stack-section">
        <!-- Stack card -->
        <div class="card" id="stack-card"></div>
        <!-- Swap panel -->
        <div class="card" id="swap-panel">
          <div class="card-title">Swap Options</div>
          <div class="swap-placeholder">Click a component in the stack to see compatible swaps</div>
        </div>
      </div>
      <div id="reference-empty" class="card" style="text-align:center;padding:3rem;color:var(--text-mute);">
        Select a model from the sidebar to get started
      </div>
    </div>

    <!-- Find Swaps view -->
    <div class="view" id="view-swaps">
      <div class="card">
        <div class="card-title">Find Swaps</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Source Model</label>
            <select class="form-select" id="sourceModel" onchange="onSourceModelChange()">
              <option value="">— Choose model —</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Component</label>
            <select class="form-select" id="sourceComponent" onchange="findAllCompatibleSwaps()">
              <option value="">— Choose component —</option>
            </select>
          </div>
        </div>
      </div>
      <div class="card" id="swaps-results">
        <div class="swap-placeholder">Select a model and component above</div>
      </div>
    </div>

    <!-- Compare view -->
    <div class="view" id="view-compare">
      <div class="card">
        <div class="card-title">Compare Models</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Model A</label>
            <select class="form-select" id="modelA" onchange="compareModels()">
              <option value="">— Choose model —</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Model B</label>
            <select class="form-select" id="modelB" onchange="compareModels()">
              <option value="">— Choose model —</option>
            </select>
          </div>
        </div>
      </div>
      <div class="card" id="compare-results">
        <div class="swap-placeholder">Select two models above to compare compatible components</div>
      </div>
    </div>

  </div><!-- .main -->
</div><!-- .shell-body -->
```

- [ ] **Step 2: Open in browser and verify layout**

```bash
open index.html
```

Expected: topbar visible, sidebar with three nav items + "Models" label, three content areas (only Tool Reference visible). No JS yet so nothing interactive. No console errors expected at this point.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Add new HTML shell structure with sidebar and view placeholders"
```

---

## Task 3: Rewrite `init()` and sidebar population

Replace the `init`, `populateModelSelectors`, `setupModeButtons`, `switchMode`, and `updateStats` functions with new equivalents. Keep `analyzeCompatibility`, `findBestSpacerCombo`, and `displayToolReference` untouched for now.

**Files:**
- Modify: `index.html` APP LOGIC script block (lines ~1219–1290)

- [ ] **Step 1: Replace init and supporting functions**

Find and replace the block from `function init()` through `function updateStats() { ... }` (the closing `}` of updateStats, around line 1314) with:

```js
let currentView = 'reference';
let currentModel = null;
let selectedStackComponent = null;

function init() {
  populateSidebar();
  populateSwapSelectors();
  updateStats();
}

function populateSidebar() {
  const container = document.getElementById('sidebar-models');
  container.innerHTML = models.map(m =>
    `<div class="sidebar-model" data-model="${m}" onclick="selectModel('${m}')">${m}</div>`
  ).join('');
}

function populateSwapSelectors() {
  ['sourceModel', 'modelA', 'modelB'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '<option value="">— Choose model —</option>' +
      models.map(m => `<option value="${m}">${m}</option>`).join('');
  });
}

function updateStats() {
  const componentCount = toolData.filter(t => t.Brand === 'Leatherman' && t.Measurement === 'Tool Thickness').length;
  document.getElementById('topbar-stats').textContent =
    `${models.length} models · ${componentCount} components`;
}

function switchView(view) {
  currentView = view;
  document.querySelectorAll('.sidebar-item').forEach(el => {
    el.classList.toggle('active', el.dataset.view === view);
  });
  document.querySelectorAll('.view').forEach(el => {
    el.classList.toggle('active', el.id === `view-${view}`);
  });
}

function selectModel(model) {
  currentModel = model;
  selectedStackComponent = null;
  document.querySelectorAll('.sidebar-model').forEach(el => {
    el.classList.toggle('selected', el.dataset.model === model);
  });
  switchView('reference');
  renderToolReference(model);
}
```

- [ ] **Step 2: Open in browser, verify sidebar populates**

```bash
open index.html
```

Expected: sidebar shows all 11 model names. Clicking a model name should call `selectModel` — it will error in console since `renderToolReference` doesn't exist yet. That's fine for now. Topbar stats should show "11 models · N components".

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Rewrite init and sidebar model population"
```

---

## Task 4: Render tool header and stack diagram

Add `renderToolReference` and `renderStackHandle` — the functions that show the tool header card and the stack order card (bar diagram + ordered list).

**Files:**
- Modify: `index.html` APP LOGIC script block

- [ ] **Step 1: Add `renderToolReference` and `renderStackHandle`**

Add these functions after `selectModel` (before `selectComponentForSwap`):

```js
function isSpacer(name) {
  return name.includes('Washer') || name.includes('Spring') ||
         name.includes('Bit Stop') || name.includes('Backup') ||
         name.startsWith('Spacer (');
}

function getComponentType(name, externalTools) {
  if (isSpacer(name)) return 'wsh';
  if (externalTools && externalTools.includes(name)) return 'ext';
  return 'int';
}

function renderToolReference(model) {
  const toolPivot  = toolData.find(t => t.Tool === model && t.Measurement === 'Pivot Size' && t.Component.includes('Tool'));
  const plierPivot = toolData.find(t => t.Tool === model && t.Measurement === 'Pivot Size' && t.Component.includes('Plier'));
  const frameData  = toolData.find(t => t.Tool === model && t.Measurement === 'Frame Opening');

  // Tool header
  const headerEl = document.getElementById('tool-header');
  document.getElementById('tool-name').textContent = `Leatherman ${model}`;
  const specParts = [];
  if (toolPivot)  specParts.push(`${toolPivot.Size}mm tool pivot`);
  if (plierPivot) specParts.push(`${plierPivot.Size}mm plier pivot`);
  if (frameData)  specParts.push(`${frameData.Size}mm frame opening`);
  document.getElementById('tool-specs').textContent = specParts.join(' · ');
  headerEl.style.display = '';

  // Stack card
  const stackSection = document.getElementById('stack-section');
  const stackCard    = document.getElementById('stack-card');
  const stack = stackData[model];

  if (!stack) {
    stackCard.innerHTML = '<div class="card-title">Stack Order</div><p style="color:var(--text-mute);padding:1rem 0;">No stack data available for this model.</p>';
    stackSection.style.display = '';
    document.getElementById('reference-empty').style.display = 'none';
    return;
  }

  const { leftHandle, rightHandle, externalTools } = stack;

  stackCard.innerHTML =
    '<div class="card-title">Stack Order</div>' +
    renderStackHandle('Left Handle', leftHandle, externalTools) +
    '<div class="handle-divider"></div>' +
    renderStackHandle('Right Handle', rightHandle, externalTools) +
    `<div class="stack-legend">
      <span><span class="legend-swatch" style="background:var(--ext-bg);border:1px solid var(--ext-bdr);"></span>External</span>
      <span><span class="legend-swatch" style="background:var(--int-bg);border:1px solid var(--int-bdr);"></span>Internal</span>
      <span><span class="legend-swatch" style="background:var(--wsh-bg);border:1px solid var(--wsh-bdr);"></span>Washer / spacer</span>
    </div>`;

  stackSection.style.display = '';
  document.getElementById('reference-empty').style.display = 'none';

  // Reset swap panel
  document.getElementById('swap-panel').innerHTML =
    '<div class="card-title">Swap Options</div>' +
    '<div class="swap-placeholder">Click a component in the stack to see compatible swaps</div>';
}

function renderStackHandle(label, components, externalTools) {
  // Build proportional bars
  const compData = components.map(name => {
    const type = getComponentType(name, externalTools);
    const mm = name.match(/(\d+\.\d+)mm$/);
    const size = mm ? parseFloat(mm[1]) : null;
    // Look up size from rawData if not inline
    const rawEntry = size === null
      ? toolData.find(t => t.Tool === currentModel && t.Component === name && t.Measurement === 'Tool Thickness')
      : null;
    const resolvedSize = size !== null ? size : (rawEntry ? parseFloat(rawEntry.Size) : null);
    return { name, type, size: resolvedSize };
  });

  const total = compData.reduce((s, c) => s + (c.size || 0), 0) || 1;

  const bars = compData.map(c => {
    const flex = c.size ? (c.size / total * 10).toFixed(2) : '0.3';
    const shortName = c.name.replace(/\s*(Holder|with Bit|Edge|Large|Diamond)\s*/gi, '').slice(0, 12);
    return `<div class="stack-bar ${c.type}" style="flex:${flex};" title="${c.name}">${c.type !== 'wsh' ? shortName : ''}</div>`;
  }).join('');

  // Build ordered list
  let pos = 0;
  const rows = compData.map(c => {
    const isWasher = c.type === 'wsh';
    const num = isWasher ? '—' : ++pos;
    const sizeStr = c.size !== null ? `${c.size}mm` : '—';
    const tag = c.type === 'ext' ? '<span class="row-tag">ext</span>' : '';
    const clickAttr = isWasher ? '' : `onclick="onStackRowClick('${c.name.replace(/'/g, "\\'")}', ${c.size})"`;
    return `<div class="stack-row ${c.type}" ${clickAttr}>
      <div class="row-num">${num}</div>
      <div class="row-name">${c.name.replace(/\s+\d+\.\d+mm$/, '')}</div>
      <div class="row-size">${sizeStr}</div>
      ${tag}
    </div>`;
  }).join('');

  return `
    <div class="stack-side-label">${label}</div>
    <div class="stack-bars">${bars}</div>
    <div class="pivot-hint"><span>← pivot</span><span>handle end →</span></div>
    <div class="stack-list">${rows}</div>`;
}

function onStackRowClick(componentName, size) {
  selectedStackComponent = { component: componentName, size, model: currentModel };

  // Highlight selected row
  document.querySelectorAll('.stack-row').forEach(el => el.classList.remove('selected'));
  event.currentTarget.classList.add('selected');

  // Run swap search and render into swap panel
  const results = getSwapResults(componentName, size, currentModel);
  renderSwapPanel(results, componentName, size);
}
```

- [ ] **Step 2: Open in browser and click a model**

```bash
open index.html
```

Expected: clicking a model in the sidebar shows the tool header (name + pivot specs) and the stack order card with both handles (bar diagram + ordered list). Clicking a component row should trigger a console error since `getSwapResults` doesn't exist yet — that's expected.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Add renderToolReference and renderStackHandle functions"
```

---

## Task 5: Swap results panel

Add `getSwapResults` and `renderSwapPanel` — the functions that power the swap panel in the Tool Reference view.

**Files:**
- Modify: `index.html` APP LOGIC script block

- [ ] **Step 1: Add `getSwapResults` and `renderSwapPanel`**

Add these functions after `onStackRowClick`:

```js
function getSwapResults(componentName, size, sourceModel) {
  // Find all components with the same name pattern across other models
  const candidates = toolData.filter(t =>
    t.Brand === 'Leatherman' &&
    t.Tool !== sourceModel &&
    t.Measurement === 'Tool Thickness' &&
    t.Component === componentName &&
    !t.Component.startsWith('Bronze Washer') &&
    !t.Component.startsWith('Spacer (') &&
    !t.Component.startsWith('Keyed Washer')
  );

  return candidates.map(candidate => {
    const compat = analyzeCompatibility(
      size,
      parseFloat(candidate.Size),
      sourceModel,
      candidate.Tool,
      componentName,
      candidate.Component
    );
    return {
      model: candidate.Tool,
      component: candidate.Component,
      size: parseFloat(candidate.Size),
      ...compat
    };
  }).sort((a, b) => {
    const order = { perfect: 0, 'close-fit': 1, 'needs-spacer': 2, incompatible: 3 };
    return (order[a.category] ?? 3) - (order[b.category] ?? 3);
  });
}

function renderSwapPanel(results, componentName, size) {
  const panel = document.getElementById('swap-panel');
  if (results.length === 0) {
    panel.innerHTML =
      `<div class="card-title">Swap Options</div>` +
      `<div class="swap-selected-label"><strong>${componentName}</strong> · ${size}mm</div>` +
      `<div class="swap-placeholder">No swap candidates found</div>`;
    return;
  }

  const rows = results.map(r => {
    const diffSign = r.diff > 0 ? '+' : '';
    const detail = r.category === 'incompatible'
      ? (r.pivotIssue || r.lockingIssue || 'Incompatible')
      : `${r.size}mm · ${diffSign}${r.diff.toFixed(2)}mm${r.spacerRecommendation ? ' · ' + r.spacerRecommendation : ''}`;
    const badgeLabels = { perfect: 'Perfect', 'close-fit': 'Close', 'needs-spacer': 'Spacer', incompatible: 'No' };
    return `<div class="swap-row ${r.category}">
      <div class="swap-model">${r.model}</div>
      <div class="swap-name">${r.component}</div>
      <div class="swap-detail">${detail}</div>
      <div class="badge ${r.category}">${badgeLabels[r.category] || r.category}</div>
    </div>`;
  }).join('');

  panel.innerHTML =
    `<div class="card-title">Swap Options</div>` +
    `<div class="swap-selected-label"><strong>${componentName}</strong> · ${size}mm</div>` +
    `<div class="swap-list">${rows}</div>`;
}
```

- [ ] **Step 2: Test swap panel**

```bash
open index.html
```

Expected: click a model, then click any non-washer component row in the stack. The swap panel on the right should populate with colored rows (Perfect/Close/Spacer/No) and correct model names and size deltas.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Add swap panel for Tool Reference view"
```

---

## Task 6: Find Swaps view

Wire up the Find Swaps view — model selector populates a component dropdown, selecting a component runs the swap search.

**Files:**
- Modify: `index.html` APP LOGIC script block

- [ ] **Step 1: Replace `selectComponentForSwap` and `findAllCompatibleSwaps` with new versions**

Find and replace the existing `selectComponentForSwap` and `findAllCompatibleSwaps` functions with:

```js
function onSourceModelChange() {
  const model = document.getElementById('sourceModel').value;
  const compSelect = document.getElementById('sourceComponent');
  compSelect.innerHTML = '<option value="">— Choose component —</option>';
  if (!model) return;

  const components = toolData.filter(t =>
    t.Tool === model &&
    t.Measurement === 'Tool Thickness' &&
    !t.Component.startsWith('Bronze Washer') &&
    !t.Component.startsWith('Spacer (') &&
    !t.Component.startsWith('Keyed Washer')
  );
  compSelect.innerHTML += components.map(c =>
    `<option value="${c.Component}|${c.Size}">${c.Component} — ${c.Size}mm</option>`
  ).join('');
}

function findAllCompatibleSwaps() {
  const val = document.getElementById('sourceComponent').value;
  const model = document.getElementById('sourceModel').value;
  const container = document.getElementById('swaps-results');
  if (!val || !model) {
    container.innerHTML = '<div class="swap-placeholder">Select a model and component above</div>';
    return;
  }
  const [componentName, sizeStr] = val.split('|');
  const size = parseFloat(sizeStr);

  const results = getSwapResults(componentName, size, model);
  if (results.length === 0) {
    container.innerHTML = '<div class="swap-placeholder">No swap candidates found</div>';
    return;
  }

  const rows = results.map(r => {
    const diffSign = r.diff > 0 ? '+' : '';
    const detail = r.category === 'incompatible'
      ? (r.pivotIssue || r.lockingIssue || 'Incompatible')
      : `${r.size}mm · ${diffSign}${r.diff.toFixed(2)}mm${r.spacerRecommendation ? ' · ' + r.spacerRecommendation : ''}`;
    const badgeLabels = { perfect: 'Perfect', 'close-fit': 'Close', 'needs-spacer': 'Spacer', incompatible: 'No' };
    return `<div class="swap-row ${r.category}">
      <div class="swap-model">${r.model}</div>
      <div class="swap-name">${r.component}</div>
      <div class="swap-detail">${detail}</div>
      <div class="badge ${r.category}">${badgeLabels[r.category] || r.category}</div>
    </div>`;
  }).join('');

  container.innerHTML = `<div class="card-title">Results for <strong style="color:var(--text-hi)">${componentName}</strong></div><div class="swap-list">${rows}</div>`;
}
```

- [ ] **Step 2: Test Find Swaps view**

```bash
open index.html
```

Expected: click "Find Swaps" in the sidebar. Select a model from the first dropdown — the component dropdown should populate. Select a component — results panel fills with swap rows. Also test the "Find Swaps →" button from a Tool Reference view.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Wire up Find Swaps view"
```

---

## Task 7: Compare Models view

Replace the existing `compareModels` function with a version that renders into the new `#compare-results` container.

**Files:**
- Modify: `index.html` APP LOGIC script block — `compareModels` function (~lines 1388–1478)

- [ ] **Step 1: Replace `compareModels`**

Find and replace the existing `compareModels` function (from `function compareModels()` through its closing `}`) with:

```js
function compareModels() {
  const modelA = document.getElementById('modelA').value;
  const modelB = document.getElementById('modelB').value;
  const container = document.getElementById('compare-results');

  if (!modelA || !modelB) {
    container.innerHTML = '<div class="swap-placeholder">Select two models above to compare compatible components</div>';
    return;
  }

  const componentsA = toolData.filter(t =>
    t.Tool === modelA && t.Measurement === 'Tool Thickness' &&
    !t.Component.startsWith('Bronze Washer') &&
    !t.Component.startsWith('Spacer (') &&
    !t.Component.startsWith('Keyed Washer')
  );

  const pairs = [];
  componentsA.forEach(compA => {
    const compB = toolData.find(t =>
      t.Tool === modelB &&
      t.Measurement === 'Tool Thickness' &&
      t.Component === compA.Component
    );
    if (!compB) return;

    const compat = analyzeCompatibility(
      parseFloat(compA.Size),
      parseFloat(compB.Size),
      modelA,
      modelB,
      compA.Component,
      compB.Component
    );
    if (compat.category !== 'incompatible') {
      pairs.push({ compA, compB, ...compat });
    }
  });

  if (pairs.length === 0) {
    container.innerHTML = `<div class="card-title">No compatible pairs found between ${modelA} and ${modelB}</div>`;
    return;
  }

  pairs.sort((a, b) => {
    const order = { perfect: 0, 'close-fit': 1, 'needs-spacer': 2 };
    return (order[a.category] ?? 3) - (order[b.category] ?? 3);
  });

  const rows = pairs.map(p => {
    const badgeLabels = { perfect: 'Perfect', 'close-fit': 'Close', 'needs-spacer': 'Spacer' };
    const spacer = p.spacerRecommendation ? ` · ${p.spacerRecommendation}` : '';
    return `<div class="compare-pair ${p.category}">
      <div class="compare-tool">${p.compA.Component} <span style="color:var(--text-sec)">${p.compA.Size}mm</span></div>
      <div class="compare-arrow">↔</div>
      <div class="compare-tool">${p.compB.Component} <span style="color:var(--text-sec)">${p.compB.Size}mm</span></div>
      <div class="badge ${p.category}">${badgeLabels[p.category]}${spacer}</div>
    </div>`;
  }).join('');

  container.innerHTML =
    `<div class="card-title">${pairs.length} compatible pairs · ${modelA} vs ${modelB}</div>` +
    `<div style="display:flex;flex-direction:column;gap:6px;">${rows}</div>`;
}
```

- [ ] **Step 2: Test Compare Models view**

```bash
open index.html
```

Expected: click "Compare Models" in the sidebar. Select two models — compatible component pairs appear with Perfect/Close/Spacer badges.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Rewrite Compare Models view"
```

---

## Task 8: Remove old HTML and dead code

Remove the old body HTML, unused functions, and the `displayToolReference` function that was replaced by `renderToolReference`.

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Remove old functions**

Search for and delete these functions (they are fully replaced):
- `displaySwapResults` (old function, ~lines 1619–1671) — replaced by `renderSwapPanel`
- `displayToolReference` (old function, ~line 1729) — replaced by `renderToolReference`
- The `document.getElementById('referenceModel').addEventListener(...)` event listener (~line 1719)

Also delete any remaining old CSS variable declarations (`--steel`, `--orange`, `--cyan`, `--green`, `--bg-card`, `--text-dim` etc.) if they survived in `:root` — the new `:root` block replaces them.

- [ ] **Step 2: Full smoke test**

```bash
open index.html
```

Walk through all three views:
1. **Tool Reference** — click each model in sidebar, verify stack diagram renders, click components to see swap panel populate
2. **Find Swaps** — select model + component, verify results
3. **Compare Models** — select two models, verify pairs list
4. Check browser console — no JS errors expected

- [ ] **Step 3: Final commit**

```bash
git add index.html
git commit -m "Remove old display functions and dead CSS variables"
```

---

## Self-Review Notes

- `getSwapResults` filters out Bronze Washer, Spacer (, and Keyed Washer components — matching the existing filter logic in the old `findAllCompatibleSwaps`
- `analyzeCompatibility` signature is preserved exactly: `(originalSize, newSize, sourceModel, targetModel, sourceComponent, targetComponent)` — used consistently in Tasks 5, 6, and 7
- `isSpacer` defined once in Task 4, used by `getComponentType` — no duplication
- Compare view only shows non-incompatible pairs (intentional — incompatible pairs are noise in a comparison view)
- `currentModel` is set by `selectModel` before `renderToolReference` is called — `renderStackHandle` can safely reference it
- Old `selectComponentForSwap` function referenced a global `selectedTool` object; Task 6 replaces this entirely with the new signature — no references to the old global remain after Task 6
