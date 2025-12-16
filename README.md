# StackWise - Multitool Component Library

🔧 **Live Tool:** [https://umamiking.github.io/stackwise/](https://umamiking.github.io/stackwise/)

An interactive web tool for analyzing component compatibility across Leatherman multitool models. Find out which parts from different tools can be swapped to create the perfect custom configuration. Smart component compatibility powered by detailed stack order data and real-world testing.

![StackWise](https://img.shields.io/badge/Multitools-Compatible-orange) ![Models](https://img.shields.io/badge/Models-11-blue) ![Components](https://img.shields.io/badge/Components-120+-green)

## 🎯 Features

### Three Search Modes

**1. Find Swaps for Component**
- Select any Leatherman model (Wave+, Rebar, Arc, Free P4, Surge, Super Tool 300, Wingman/Sidekick)
- Pick a component you want to replace
- See all compatible swaps from every other model, ranked by compatibility

**2. Compare Two Models**
- Select two different Leatherman models
- Instantly see all compatible component pairs between them
- Perfect for planning complete tool customizations

**3. Tool Reference**
- Quick spec lookup for any model
- View all components and their exact thicknesses
- See summary statistics (component count, average thickness, thickness range)
- Check pivot sizes and frame opening measurements
- Components sorted by thickness for easy scanning

### Smart Compatibility Analysis

The tool uses real-world tolerances based on actual swap testing and validates multiple compatibility factors:

#### Pivot Compatibility:
**Critical Requirement:** Tool pivots must match within 0.05mm for components to be swappable. The tool automatically checks pivot sizes and blocks incompatible swaps.

**Pivot Size Groups:**
- **4.69-4.70mm pivot**: Wave+, Rebar, Surge, Wingman, Sidekick, Super Tool 300, Bond
- **3.07mm pivot**: Arc, Free P4, Free P2
- **Different pivot sizes cannot be swapped** - this is a hard physical limitation

When a pivot mismatch is detected, the tool displays:
- ✗ **Pivot Mismatch** badge
- Detailed warning showing source and target pivot sizes
- These swaps are marked as incompatible regardless of thickness

#### Locking Geometry Compatibility:
**New Critical Factor:** Beyond pivot size and thickness, components must have compatible locking mechanisms.

**Internal Tool Locking Groups (Perfect Match):**
- **Free/Arc Family**: Arc ↔ Free P2 ↔ Free P4
- **Wave/Rebar Family**: Rebar ↔ Bond ↔ Wave+ ↔ Signal
- **Sidekick/Wingman Family**: Sidekick ↔ Wingman
- **Close Fit Combinations**: Rebar/Bond/Wave+ ↔ Super Tool 300, Rebar/Bond/Wave+ ↔ Sidekick/Wingman

**External Tool Locking Groups (Perfect Match):**
- **Wave+ Blade Family**: Wave+, Curl, Charge+, Wave Alpha, Signal blades
- **Wave+ File/Saw Family**: Wave+, Curl, Charge+, Wave Alpha, Signal files/saws
- **Surge Family**: Surge external tools ONLY compatible with other Surge tools
- **Sidekick/Wingman Family**: Sidekick, Wingman, Rev, Bolster external tools

When locking geometry is incompatible:
- ✗ **Lock Incompatible** or **External Lock Incompatible** badge
- Detailed warning explaining the incompatibility
- When locking is "close fit": Badge shows **(Close Lock)** - may require minor adjustment

#### Thickness Compatibility:
- ✅ **Perfect Fit (Green)** - Within 0.05mm, direct swap with no modifications
- ⚡ **Close Fit (Purple)** - Within 0.3mm in either direction, works with handle compression or expansion (pivot screw tightening/loosening compensates)
- 🔧 **Needs Spacer (Orange)** - Replacement is thinner by 0.3-2mm, includes specific spacer recommendations
- ❌ **Too Thick (Red)** - Replacement is thicker by more than 0.3mm, beyond handle expansion capability
- ❌ **Won't Work (Red)** - Replacement is thinner by more than 2mm, gap too large even with spacers

**Important:** Spacers can only be used when the replacement tool is **thinner** than the original. If the replacement is thicker by more than 0.3mm, the handle cannot expand enough to accommodate it. The maximum practical spacer stack is **2mm total thickness** - beyond this, alignment and assembly become unreliable.

### Intelligent Spacer Recommendations

When a swap requires spacers, the tool automatically:
- Determines which spacer pack applies (5mm or 3.5mm based on model compatibility)
- Calculates optimal spacer combinations (e.g., "2x 0.5mm + 1x 0.1mm")
- Shows exactly which spacers you need from available packs

**Spacer Pack Reference:**
- **5mm Pack** (Wave+, Rebar, Surge, Wingman, Sidekick, Bond, Super Tool 300): 4x 0.1mm, 4x 0.5mm, 5x 1mm
- **3.5mm Pack** (Arc, Free P4, Free P2): 6x 0.1mm, 6x 0.5mm

## 🛠️ Supported Models

The database includes comprehensive measurements for:

- **Leatherman Wave+** - 10 components (✓ Stack order available)
- **Leatherman Rebar** - 11 components (✓ Stack order available)
- **Leatherman Arc** - 11 components (✓ Complete stack with spacers)
- **Leatherman Free P4** - 11 components (✓ Complete stack with spacers)
- **Leatherman Free P2** - 8 components (✓ Complete stack with spacers)
- **Leatherman Bond** - 8 components (✓ Complete stack with spacers)
- **Leatherman Surge** - 10 components (✓ Stack order available)
- **Leatherman Wingman** - 10 components (✓ Stack order available)
- **Leatherman Sidekick** - 8 components (✓ Stack order available)
- **Leatherman Super Tool 300** - 12 components (✓ Stack order available)
- **Leatherman Garage #005** - Custom build (✓ Complete stack with spacers)

### Stack Order Data

Models marked with ✓ include detailed stack order information showing:
- Left and right handle component arrangement (top to bottom)
- Washers, springs, and other spacers with measurements (where available)
- External vs internal tool placement
- Notes on tool-specific characteristics
- Measurements displayed in mm with inch references where applicable

## 📊 Data Source

All measurements are sourced from [Zach at MultiParts Store](https://multipartsstore.com) and [ZapWizard](https://zapwizard.com/), who have meticulously documented tool dimensions through precise measurements and real-world testing. Locking geometry compatibility data is based on real-world swap testing.

**Example Verified Swaps:**

✅ **Rebar Awl (2.32mm) ↔ Wave+ Scissors (2.53mm)**  
*Difference: +0.21mm (slightly thicker) - Works perfectly! Handle expands slightly, no spacers needed.*  
*Both tools use 4.69mm pivots ✓*  
*Rebar and Wave+ have perfect internal locking compatibility ✓*

✅ **Wave+ Plain Blade → Charge+ Serrated Blade**  
*External tools with perfect locking geometry match ✓*  
*Both use same external blade slot design*

✅ **Any tool → Thinner replacement with spacers**  
*When replacing with a thinner tool (0.3-2mm difference), add appropriate spacers to fill the gap.*

❌ **Example Incompatible Swap: Rebar Phillips (5.04mm, 4.69mm pivot) ✗ Arc Bit Driver (5.04mm, 3.07mm pivot)**  
*Even though thickness matches perfectly, the pivot mismatch makes this swap impossible*

❌ **Rebar Awl (2.32mm) → Wingman Phillips (3.06mm)**  
*Difference: +0.74mm - Too thick! Beyond the 0.3mm expansion tolerance. Cannot add spacers on top of a thicker tool.*

❌ **Wave+ Plain Blade → Surge Plain Blade**  
*Even with same pivot and thickness, external locking geometry is incompatible. Surge external tools only work with other Surge tools.*

❌ **Arc Scissors → Rebar File**  
*Different locking geometry families - Arc/Free tools incompatible with Wave/Rebar internal locking.*

## 🚀 How to Use

### Basic Workflow

**For Component Swaps:**
1. Select "Find Swaps for Component" mode
2. Choose your source tool (the tool you want to modify)
3. Click on the component you want to replace
4. Review all compatible swaps from other models, sorted best to worst
5. Check spacer recommendations if needed

**For Model Comparison:**
1. Select "Compare Two Models" mode
2. Choose two different Leatherman models
3. See all compatible component pairs automatically
4. Perfect for planning a complete custom build

**For Quick Reference:**
1. Select "Tool Reference" mode
2. Choose any Leatherman model
3. View complete specifications including:
   - All component thicknesses
   - Summary statistics
   - Pivot sizes
   - Frame opening measurements

### Pro Tips

- Results are automatically sorted with best matches first
- Green and purple badges mean you can swap immediately
- Orange badges show workable swaps with spacers
- Pay attention to pivot sizes - components must use the same pivot type
- Frame opening measurements help verify overall compatibility
- Use Tool Reference mode for quick spec lookups without planning swaps

## 🔍 Technical Details

### Measurements Included

- **Tool Thickness** - The critical measurement for swap compatibility
- **Frame Opening** - Overall tool width (affects what will fit)
- **Pivot Sizes** - Plier pivot and tool pivot dimensions (REQUIRED for compatibility)
- **Drive Sizes** - Screw types needed for disassembly
- **Stack Order** - Exact arrangement of components within handles (for select models)
- **Spacers & Washers** - Complete spacer data with measurements (where available)

### Display Format

- **Primary measurements**: All displayed in millimeters (mm) for consistency
- **Reference measurements**: Inch measurements shown next to component names when available
- **Example**: "Washer 0.03" (Spacer) → 0.76mm"
- This format maintains consistency while preserving original source data

### Compatibility Validation

The tool performs multi-factor compatibility checking in this order:

1. **Pivot Size Match** (Primary Check)
   - Tool pivots must match within 0.05mm
   - This is checked FIRST as it's a hard physical requirement
   - No amount of spacers can compensate for pivot mismatch

2. **Locking Geometry Match** (Secondary Check)
   - Internal tools: Model-level compatibility check (e.g., Wave+ ↔ Rebar)
   - External tools: Component-level compatibility check (e.g., Wave+ Plain Blade ↔ Charge+ Plain Blade)
   - Must have "Perfect" (X) or "Close fit" (/) compatibility
   - Based on real-world testing of locking mechanisms
   - Even with matching pivots, incompatible locking prevents the swap

3. **Thickness Compatibility** (Tertiary Check)
   - Only evaluated after pivot and locking compatibility is confirmed
   - Uses bidirectional tolerance within 0.3mm (compression or expansion)
   - Beyond 0.3mm: thicker = incompatible, thinner = needs spacers

4. **Spacer Calculation** (When Replacement is Thinner)
   - Automatically determines which spacer pack applies (5mm vs 3.5mm)
   - Calculates optimal spacer combinations
   - Only suggests spacers when replacement is 0.3-2mm thinner than original
   - **Critical**: Spacers cannot be used when replacement is thicker

### Compatibility Philosophy

The tool uses a hierarchical validation system based on real-world testing:

**Primary Requirement: Pivot Compatibility**
- Tool pivots must match within 0.05mm (essentially exact match)
- This is a hard physical constraint - components cannot mount on wrong-sized pivots
- Checked before any other compatibility analysis

**Secondary Requirement: Locking Geometry Compatibility**
- Internal tools must have compatible locking mechanisms (model-level check)
- External tools must have compatible slot locking (component-level check)
- Perfect match (X) or Close fit (/) required for successful swaps
- Even with matching pivots and thickness, incompatible locking geometry prevents the swap

**Tertiary Requirement: Thickness Tolerance**
- **0-0.05mm**: Perfect dimensional match
- **0.05-0.3mm**: Handle flex zone (works in BOTH directions - compression when thinner, expansion when slightly thicker)
- **0.3-2mm thinner**: Spacer compensation zone (available spacers can fill the gap when replacement is thinner, up to 2mm total spacer thickness)
- **>0.3mm thicker**: Beyond handle expansion capability - incompatible
- **>2mm thinner**: Beyond practical spacer range - incompatible

**Spacer Logic:**
- Spacers can **only** be added when the replacement tool is thinner than the original
- When replacement is thicker by >0.3mm, no amount of spacers will help (you'd need to remove material)
- Within 0.3mm thicker, the handle can expand slightly to accommodate
- **Maximum 2mm total spacer thickness** - beyond this, alignment and assembly become unreliable

**Important Notes:**
- Wave+ and Rebar tools have different architectures: Wave+ has external integrated tools, while Rebar stores all tools inside the handle stack
- Surge, Wingman, and Sidekick also have external tools (scissors, blades, saw) that sit in handle slots
- Super Tool 300 stores all tools inside the handle stack - large tools (saw, blades, file) are internal and physically touch other tools, unlike Wave+/Surge external tools
- Bond stores all tools inside handles similar to Rebar
- Some tools are "large tools" (files, saws, blades) that typically only swap with other large tools
- Plier heads are excluded from swap recommendations as they are complex assemblies
- **Locking geometry is critical**: Surge external tools only work with other Surge external tools due to unique locking design
- Estimated/unknown measurements are marked with ⚠️ warning indicators

## 🎨 Technology

Built with vanilla JavaScript, HTML5, and CSS3. No frameworks, no dependencies, just pure web technology. Runs entirely client-side with zero backend requirements.

- Responsive design works on desktop, tablet, and mobile
- Smooth animations and transitions
- Dark theme optimized for extended use
- Instant search and filtering

## 📝 Contributing

Have measurements for other Leatherman models? Found a successful swap not listed? Want to add more features?

Contributions are welcome! The tool is designed to be easily extensible with new models and measurements.

## ⚠️ Disclaimer

This tool provides compatibility analysis based on dimensional measurements and pivot compatibility. Always:

- **Verify pivot sizes match** - This is the most critical compatibility factor
- Disassemble tools carefully with proper Torx drivers
- Test fit components before full assembly
- Understand tool architecture differences (external vs internal mounting)
- Be aware that some swaps may affect warranty
- Understand that tool modifications are at your own risk
- Check that spacers are appropriate for your specific model
- Note that "large tools" (blades, files, saws) typically only swap with other large tools

## 🙏 Acknowledgments

This tool wouldn't exist without the incredible work of the Leatherman modding community:

- **[Zach at MultiParts Store](https://multipartsstore.com)** - Comprehensive measurement data, spacer pack specifications, and real-world swap testing
- **[ZapWizard](https://zapwizard.com/)** - Detailed stack diagrams, technical measurements, and compatibility research
- The broader Leatherman modding community for validation and feedback

## 📜 License

This tool is provided as-is for the Leatherman enthusiast community. The measurement database is compiled from publicly available information and community contributions.

---

**Built for the Leatherman modding community** 🔧  
*Making custom multitools accessible to everyone*

### Quick Links
- 🌐 [Use the Tool](https://umamiking.github.io/lmcl/)
- 💬 Report issues or suggest features via GitHub Issues
- ⭐ Star this repo if you find it useful!
