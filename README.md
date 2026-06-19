# StackWise - Multitool Component Library

🔧 **Live Tool:** [https://umamiking.github.io/stackwise/](https://umamiking.github.io/stackwise/)

An interactive web tool for analyzing component compatibility across Leatherman multitool models. Find out which parts from different tools can be swapped to create the perfect custom configuration. Smart component compatibility powered by detailed stack order data and real-world testing.

![StackWise](https://img.shields.io/badge/Multitools-Compatible-orange) ![Models](https://img.shields.io/badge/Models-11-blue) ![Components](https://img.shields.io/badge/Components-120+-green)

## 🎨 Redesign (April 2026)

StackWise was rebuilt from the ground up with a new tool-first layout. Instead of switching between abstract modes, you now open the app to a model — its stack diagram, component list, and swap panel are all visible at once. Navigation puts the model list front and center in a persistent sidebar.

**What changed:**
- Fixed topbar + sidebar layout with all 11 models always visible
- Stack Order card shows proportional bar diagrams and ordered component lists for both handles side by side
- Clicking any component in the stack immediately populates a swap results panel without leaving the view
- Find Swaps and Compare Models are full views accessible from the sidebar
- Muted Slate dark theme optimized for workbench use

---

## 🎯 Features

### Tool Reference (default view)

Click any model in the sidebar to see:
- **Tool header** — model name, pivot sizes, and frame opening
- **Stack Order card** — both handles rendered as proportional bar diagrams with ordered component lists. Each bar is color-coded: amber for external tools, blue-gray for internal tools, muted for washers/spacers.
- **Swap panel** — click any component row to instantly see all compatible swaps from every other model, ranked by compatibility tier

### Find Swaps

Select a source model and component from dropdowns to search for swaps across all models. Results use the same compatibility tiers as the Tool Reference swap panel.

### Compare Models

Select two models to see all compatible component pairs between them. Only non-incompatible pairs are shown, sorted best match first.

---

## 🔬 Smart Compatibility Analysis

The tool validates three compatibility factors in order:

### 1. Pivot Compatibility (primary check)

Tool pivots must match within 0.05mm. This is a hard physical requirement — no spacers can compensate for a pivot mismatch.

**Pivot size groups:**
- **4.69–4.70mm**: Wave+, Rebar, Surge, Wingman, Sidekick, Super Tool 300, Bond
- **3.07mm**: Arc, Free P4, Free P2

### 2. Locking Geometry Compatibility (secondary check)

Beyond pivot size, components must have compatible locking mechanisms. This data comes from
the Nov 2025 Locking Geometry chart contributed by [Zach at MultiParts Store](https://multipartsstore.com),
who mapped which platforms and components actually share a locking fit through real-world testing,
updated with his Jun 2026 spot-check follow-up (see below).

**Internal tool locking groups (perfect match):**
- **Free/Arc family**: Arc ↔ Free P2 ↔ Free P4 ↔ Free T2 ↔ Free T4
- **Wave/Rebar family**: Rebar ↔ Bond ↔ Wave+ ↔ Curl ↔ Charge+ ↔ Wave Alpha ↔ Signal
- **Super Tool 300/Surge family**: Super Tool 300 ↔ Surge only — no cross compatibility with any other platform
- **Sidekick/Wingman family**: Sidekick ↔ Wingman ↔ Rev ↔ Bolster
- **Close fit**: Wave/Rebar family ↔ Sidekick/Wingman family

**Plier Head swaps use their own dedicated groups**, separate from (and narrower than) the
internal-tool table above — no "close" tier, no cross-group compatibility at all:
- Rebar / Wave+ / Curl / Bond (/ Charge+ / Wave Alpha / Signal)
- Sidekick / Wingman (/ Rev / Bolster)
- Super Tool 300 / Surge
- Free P2 / Free P4 / Arc (/ Free T2 / Free T4)

**External tool locking groups (perfect match) — each is a named locking family.** Once a
component is tagged with one of these families, that family is authoritative: it will not fall
back to the looser internal-tool table above, even if only one side of a comparison has
documented data.
- **Wave-style blade lock**: Wave+, Curl, Charge+, Wave Alpha, Signal plain/serrated blades
- **Wave-style file/saw lock**: Wave+, Curl, Charge+, Wave Alpha, Signal files/saws/scissors
- **Surge blade lock**: Surge and Super Tool 300 plain/serrated blades (Surge's blade sits in an
  externally-accessible slot, Super Tool 300's is internal — different access method, same lock
  tab, confirmed by the "Building a Leatherman Supersurge" mod)
- **Surge T-shank lock**: Surge T-Shank Exchanger and Scissors only
- **Sidekick/Wingman blade lock**: Sidekick, Wingman, Rev, Bolster plain/combo blades
- **Sidekick/Wingman saw lock**: Sidekick, Wingman saws/scissors (a different family than the blade lock — not interchangeable with it)

### 3. Showing *why* a swap works (or doesn't)

Every swap result now includes a short locking note explaining the reasoning — e.g. "Both use
Wave-style blade lock external locking geometry" for a perfect external match, or "420HC Plain
Edge Knife uses Sidekick/Wingman blade lock; Scissors uses Sidekick/Wingman saw lock — not
interchangeable" when two components look thickness-compatible but use different locking
mechanisms. Internal tool swaps get a pairwise note describing the relationship between the two
platforms involved (perfect, close fit, or incompatible).

### Known gaps (Zach's Jun 2026 spot-check, still pending data)

- **Outer tool data doesn't exist at all for Rebar, Bond, Super Tool 300, or the Free family.**
  These platforms have no rows in Zach's Locking Geometry - OUTER spreadsheet tab, so their wood
  saws/files are governed by the (now correctly narrowed) internal-tool table rather than a
  component-specific family. This is fine for now but should be backfilled with real outer-tab
  data as it's collected — this is the literal cause of "outer tool data is missing on most of
  the tools in the system": of the 10 platforms the OUTER tab *does* cover, the code had only
  transcribed 4 of them (Wave+, Surge, Sidekick, Wingman) into their own entries — Curl, Charge+,
  Wave Alpha, Signal, Rev, and Bolster were only ever referenced as values inside those four
  entries, never given their own. Fixed by backfilling all 26 OUTER-tab rows into their own keys.
- **Free P2/P4/Arc "long" vs "short" tools** — implemented, and direction-corrected per Zach's
  follow-up (the first pass had it backwards: a long-bodied tool can't swap into a short tool's
  slot, but a short tool can always swap into a long tool's slot — e.g. Arc Wood Saw can be
  replaced by Arc Can Opener, not the other way around). See `freeArcLongTools` in `index.html` —
  per-platform lists are Zach's named "Long Tools", mapped onto `rawData` component names (e.g.
  Arc's "Magnacut Blade" → "Plain Edge Knife Blade", Free P2's "Blade" → "Knife"). Zach called this
  section exploratory and is still finding more cases, so treat these specific mappings as a first
  pass, not final.
- **Free P2 Plier Head** — Zach confirmed it's identical to Free P4's (7.56mm Plier Head, 4.71mm
  Plier Pivot); backfilled into `rawData`. Bond and Curl's plier heads are still unmeasured —
  Zach's info on those is currently limited.

### Circular swaps disabled

A component no longer shows up as a "swap" for itself (e.g. Arc Bit Driver ↔ Arc Bit Driver). This
was previously allowed for simplicity but Zach flagged it as visual noise; same-model swaps between
*different* components (e.g. Wave+ Wood Saw ↔ Wave+ Metal/Diamond File) are unaffected. May be
revisited later.

### Wildcards (one-off fitment exceptions, not general rules)

Zach's Jun 2026 deep-dive surfaced several cases that don't follow a clean rule — just things he's
learned by hand-fitting these tools. These are hard-coded as narrow exceptions rather than
generalized into the rule tables above, since extrapolating from them would likely be wrong:

- **Wingman Wood Saw didn't exist** — it was a data entry error (Wingman has no wood saw
  component); removed from `rawData`.
- **Surge Scissors thickness was unmeasured** (`0` placeholder) — corrected to the real 3.04mm.
- **Long-implement exclusions** (`longImplementWildcards` in `index.html`) — specific "long"
  components that are too long to fit specific named "short" slots, even when pivot/locking/
  thickness checks alone would call the pair compatible. A short component can still fill any of
  these slots; only the listed long ones are excluded, and only from the listed slots — everything
  else on these models is unaffected:
  - Rebar's Wood Saw/File/Serrated Blade/Plain Edge Blade and Bond's Plain Edge Blade/File are too
    long for: Rebar's Small Flat Screwdriver, Reamer/Awl, Large Flat Screwdriver, Can Opener,
    Lanyard Ring; Bond's Can Opener, Awl, Small/Medium Screwdriver, Lanyard Ring; Wave+'s Micro Bit
    Holder, Scissors, Large Flat Screwdriver, Can Opener; Sidekick's Serrated Blade, Large Flat
    Screwdriver, Can/Bottle Opener, Phillips Screwdriver, File; and Wingman's Large Flat
    Screwdriver, Package Opener, Phillips Screwdriver, Bottle Opener, Small Flat Screwdriver/File.
  - Super Tool 300's Wood Saw/File/Plain Edge Blade/Serrated Blade and Surge's Plain Edge Blade/
    Serrated Blade are too long for: Super Tool 300's Awl, Medium/Small/Large Flat Screwdriver, Can
    Opener; and Surge's Awl, Small/Large Flat Screwdriver, Can Opener.
- **Surge's blades no longer match Super Tool 300's blades.** This reverses an earlier conclusion
  (drawn from the "Building a Leatherman Supersurge" mod video) that they shared the "Surge blade
  lock" family — Zach's direct fitment testing found they aren't actually interchangeable, so that
  cross-platform link in `externalLockingGeometry` was removed. Surge's Plain/Serrated Edge Blades
  now only match each other.

### 4. Thickness Compatibility (final check)

| Tier | Badge | Threshold |
|---|---|---|
| Perfect | Green | ≤0.05mm difference |
| Close | Purple | ≤0.3mm in either direction |
| Needs Spacer | Amber | Replacement is 0.3–2mm thinner |
| Incompatible | Gray | >0.3mm thicker, or >2mm thinner |

**Spacer logic:** Spacers only fill gaps when the replacement is *thinner*. If the replacement is thicker by >0.3mm, the handle cannot expand to accommodate it. Maximum practical spacer stack is **2mm total**.

### Intelligent Spacer Recommendations

When a swap needs spacers, the tool calculates optimal combinations from the applicable pack:

- **5mm Pack** (Wave+, Rebar, Surge, Wingman, Sidekick, Bond, Super Tool 300): 4× 0.1mm, 4× 0.5mm, 5× 1mm
- **3.5mm Pack** (Arc, Free P4, Free P2): 6× 0.1mm, 6× 0.5mm

---

## 🛠️ Supported Models

| Model | Components | Stack data |
|---|---|---|
| Leatherman Wave+ | 10 | ✓ |
| Leatherman Rebar | 11 | ✓ |
| Leatherman Arc | 11 | ✓ |
| Leatherman Free P4 | 11 | ✓ |
| Leatherman Free P2 | 8 | ✓ |
| Leatherman Bond | 8 | ✓ |
| Leatherman Surge | 10 | ✓ |
| Leatherman Wingman | 10 | ✓ |
| Leatherman Sidekick | 8 | ✓ |
| Leatherman Super Tool 300 | 12 | ✓ |
| Leatherman Garage #005 | — | Staged — pending measurement data |

---

## 🚀 How to Use

**View a tool's stack:**
1. Click any model name in the left sidebar
2. The stack order card shows both handles with proportional bar diagrams and ordered component lists
3. Click any component row to see compatible swaps in the panel on the right

**Find swaps:**
1. Click "Find Swaps" in the sidebar (or the "Find Swaps →" button from Tool Reference)
2. Select a model, then pick a component
3. Results appear ranked by compatibility tier

**Compare two models:**
1. Click "Compare Models" in the sidebar (or the "Compare →" button from Tool Reference)
2. Select two models
3. See all compatible component pairs with tier badges

---

## 📊 Data Source

All measurements are sourced from [Zach at MultiParts Store](https://multipartsstore.com) and [ZapWizard](https://zapwizard.com/), who have meticulously documented tool dimensions through precise measurements and real-world testing. Locking geometry compatibility data is based on real-world swap testing.

**Verified swap examples:**

✅ **Rebar Awl (2.32mm) ↔ Wave+ Scissors (2.53mm)**
*+0.21mm — both 4.69mm pivot, perfect locking match*

✅ **Wave+ Plain Blade → Charge+ Serrated Blade**
*External tools, perfect locking geometry match*

❌ **Rebar Phillips (5.04mm, 4.69mm pivot) ✗ Arc Bit Driver (5.04mm, 3.07mm pivot)**
*Thickness matches but pivot mismatch makes this impossible*

❌ **Wave+ Plain Blade → Surge Plain Blade**
*Same pivot, same thickness — but Surge external locking is incompatible*

❌ **Sidekick 420HC Plain Edge Knife → Wingman Scissors**
*Thicknesses are close, but the blade lock and saw lock are different families — "Sidekick/Wingman blade lock uses ... not interchangeable"*

---

## 🔍 Technical Details

Built with vanilla JavaScript, HTML5, and CSS3. No frameworks, no dependencies, no build step. Single self-contained HTML file, runs entirely client-side.

### Measurements included

- **Tool Thickness** — critical for swap compatibility
- **Frame Opening** — overall tool width
- **Pivot Sizes** — plier pivot and tool pivot (required for compatibility)
- **Drive Sizes** — screw types needed for disassembly
- **Stack Order** — exact left/right handle component arrangement
- **Spacers & Washers** — complete spacer data with measurements

---

## ⚠️ Disclaimer

This tool provides compatibility analysis based on dimensional measurements and community-tested swap data. Always:

- Verify pivot sizes match before attempting any swap
- Disassemble tools carefully with proper Torx drivers
- Test fit components before full assembly
- Be aware that tool modifications may affect warranty
- Modifications are at your own risk

---

## 🙏 Acknowledgments

- **[Zach at MultiParts Store](https://multipartsstore.com)** — comprehensive measurement data, spacer pack specifications, and real-world swap testing
- **[ZapWizard](https://zapwizard.com/)** — detailed stack diagrams, technical measurements, and compatibility research
- The broader Leatherman modding community for validation and feedback

---

**Built for the Leatherman modding community** 🔧
*Making custom multitools accessible to everyone*

- 🌐 [Use the Tool](https://umamiking.github.io/stackwise/)
- 💬 Report issues or suggest features via GitHub Issues
- ⭐ Star this repo if you find it useful!
