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
who mapped which platforms and components actually share a locking fit through real-world testing.

**Internal tool locking groups (perfect match):**
- **Free/Arc family**: Arc ↔ Free P2 ↔ Free P4 ↔ Free T2 ↔ Free T4
- **Wave/Rebar family**: Rebar ↔ Bond ↔ Wave+ ↔ Curl ↔ Charge+ ↔ Wave Alpha ↔ Signal
- **Surge**: perfect with Rebar, Super Tool 300, Wave+, Curl, Charge+, Wave Alpha; close fit with Bond and the Sidekick/Wingman family
- **Sidekick/Wingman family**: Sidekick ↔ Wingman ↔ Rev ↔ Bolster
- **Close fit**: Rebar/Bond/Wave+/Curl/Charge+/Wave Alpha/Signal ↔ Super Tool 300, and ↔ Sidekick/Wingman/Rev/Bolster

Note: "perfect" internal locking is not strictly transitive across the whole table — e.g. Surge
is a perfect match with both Rebar and Bond individually, but Rebar↔Bond is itself only a close
fit with Surge in the loop. The tool checks the actual pairwise relationship for the two models
involved, not a single shared "type."

**External tool locking groups (perfect match) — each is a named locking family:**
- **Wave-style blade lock**: Wave+, Curl, Charge+, Wave Alpha, Signal plain/serrated blades
- **Wave-style file/saw lock**: Wave+, Curl, Charge+, Wave Alpha, Signal files/saws/scissors
- **Surge blade lock**: Surge plain/serrated blades only
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
