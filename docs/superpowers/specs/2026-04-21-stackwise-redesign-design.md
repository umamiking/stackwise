# StackWise Visual Redesign — Design Spec

**Date:** 2026-04-21
**Status:** Approved

---

## Overview

Redesign the StackWise single-page app from the current tab-based layout into a tool-first reference experience. The primary use case is a Leatherman modder who has a tool disassembled on their workbench and wants to quickly see the stack order and find compatible component swaps.

---

## Design Direction: Tool-First (Option 2)

When you open the app, you see a tool — its stack diagram, ordered component lists, and a swap panel. Navigation puts the model list front and center so switching tools is a one-click action.

---

## Theme

- **Page background:** `#2c3040` (Muted Slate)
- **Card / panel background:** `#343849`
- **Topbar / sidebar background:** `#1e2130`
- **Primary text:** `#eeeef8`
- **Body text:** `#c0c8e0`
- **Secondary / label text:** `#8896b0`
- **Muted / de-emphasized text:** `#7080a0`
- **Borders:** `#404558`
- **Accent (nav active):** `#7b8cde`

Component color coding:
- **External tools:** amber (`#2e2010` bg, `#7a5510` border, `#e8c870` text, `#c8860a` left-border on list rows)
- **Internal tools:** blue-gray (`#2a2e3e` bg, `#404558` border, `#9098b8` text)
- **Washers / spacers:** muted slate (`#383d52` bg, `#4a5068` border), de-emphasized at 60% opacity in lists

---

## Layout

### Shell

Fixed topbar (56px) + left sidebar (190px) + scrollable main content area. Full-viewport height; sidebar scrolls independently.

**Topbar:** "StackWise" wordmark left, "Leatherman Modding Reference" subtitle, component/model count right.

**Sidebar:**
- Three nav items: Tool Reference (default), Find Swaps, Compare Models
- Active item highlighted with left accent bar (`#7b8cde`) and white text
- Models section below nav — all 11 models listed; clicking a model navigates to Tool Reference for that model
- Selected model highlighted in blue (`#a0b0ff`, `#5060c0` left bar)

---

## Tool Reference View (default)

### Tool Header Card

Model name (large, bold), pivot specs line (`X.XXmm tool pivot · X.XXmm plier pivot · X.XXmm frame opening`), and two action buttons right-aligned:
- **Find Swaps →** (primary, filled)
- **Compare →** (secondary, outlined)

### Stack Order Section

Two-column layout: **Stack card** (left, ~45% width) + **Swap results panel** (right, ~55% width). These are two separate cards sitting side by side.

**Stack card** contains both handles stacked vertically:

1. **Left Handle** label
2. Proportional bar diagram — each component rendered as a horizontal bar, width proportional to its thickness in mm. Color-coded by type (external/internal/washer). Bar labels show abbreviated tool name when wide enough.
3. `← pivot` / `handle end →` hint spanning full bar width (flex space-between)
4. Ordered list — each row: position number, component name, thickness in mm, `ext` tag for external tools. Washers shown at 60% opacity, no position number (shown as `—`).
5. Horizontal divider
6. **Right Handle** — same structure as left handle above
7. Legend at bottom: External / Internal / Washer color swatches

**Swap results panel** (alongside the stack card):
- Shows "Click any component to see swaps" placeholder by default
- When a component row is clicked: header shows "Swap Options · [Component Name] · [Size]mm"
- Results grouped by compatibility tier, each as a colored row:
  - **Perfect** — green (`#0e2818` bg, `#1e4a1e` border, `#2d7d32` badge)
  - **Close** — purple (`#180e2a` bg, `#3a2060` border, `#6d28d9` badge)
  - **Spacer needed** — amber (`#281800` bg, `#4a3000` border, `#c2570a` badge)
  - **Incompatible** — gray, 45% opacity
- Each row shows: source model name, component name, size delta, badge

---

## Find Swaps View

Source tool and component selectors (dropdowns). Results panel identical to the swap results panel in Tool Reference. Activated via sidebar nav or "Find Swaps →" button from Tool Reference.

---

## Compare Models View

Two model selectors. Shows a list of compatible component pairs between the two models, with compatibility tier badges. Activated via sidebar nav or "Compare →" button from Tool Reference.

---

## Typography Scale (base 17px)

| Element | Size |
|---|---|
| Wordmark | 1.2rem |
| Tool name | 1.5rem |
| Body / list rows | 0.88rem |
| Secondary labels | 0.82rem |
| Section labels (uppercase) | 0.70–0.72rem |
| Badges / tags | 0.65–0.68rem |

---

## Data Model (unchanged)

The existing inline data structure is preserved:
- `rawData` — flat component list with Brand/Tool/Component/Size fields
- `stackData` — per-model left/right handle arrays with component names
- `lockingGeometry` / `externalLockingGeometry` — compatibility matrices

The redesign is a pure presentation layer change. No data structure changes required.

---

## Out of Scope

- Mobile layout (desktop-first, responsive stretch goal only)
- Dark/light mode toggle
- Persistent state / URL routing
- Data export
