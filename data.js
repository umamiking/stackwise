        const rawData = [
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Plier Head", "Size": "7.06", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Metal/Diamond File", "Size": "1.78", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Wood Saw", "Size": "1.81", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Small Bit Driver", "Size": "1.9", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Large Bit Driver", "Size": "5.03", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Scissors (with Spring)", "Size": "2.53", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Plain Edge Knife Blade", "Size": "2.39", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Serrated Edge Knife Blade", "Size": "2.35", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Large Flat Screwdriver", "Size": "2.33", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Can Opener (Combination Tool)", "Size": "1.88", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Bronze Washer (OD 9.5 x ID 5.7)", "Size": "0.10", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Frame Opening", "Size": "7.12", "Measurement": "Frame Opening"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Plier Pivot", "Size": "5.55", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Wave+", "Component": "Tool Pivot", "Size": "4.70", "Measurement": "Pivot Size"},

  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Plier Head", "Size": "7.06", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Wood Saw", "Size": "1.75", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "File", "Size": "1.77", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Small Flat Screwdriver", "Size": "1.74", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Phillips Screwdriver", "Size": "5.04", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Reamer/Awl", "Size": "2.32", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Serrated Knife Blade", "Size": "1.77", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Plain Edge Knife Blade", "Size": "1.75", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Large Flat Screwdriver", "Size": "2.33", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Can Opener (Combination Tool)", "Size": "1.88", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Lanyard Ring", "Size": "1.58", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Bronze Washer (OD 9.5 x ID 5.7)", "Size": "0.10", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Spacer (OD 8.65 x ID 4.9)", "Size": "1.25", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Frame Opening", "Size": "10.66", "Measurement": "Frame Opening"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Plier Pivot", "Size": "5.55", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Rebar", "Component": "Tool Pivot", "Size": "4.70", "Measurement": "Pivot Size"},

  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Bronze Washer (OD 9.5 x ID 5.7)", "Size": "0.25", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Spacer (OD 8.7 x ID 5)", "Size": "0.50", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Spacer (OD 8.65 x ID 5)", "Size": "0.50", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Spacer (OD 8.65 x ID 4.9)", "Size": "0.20", "Measurement": "Tool Thickness"},

  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Plier Head", "Size": "7.56", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Wood Saw", "Size": "1.74", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Large Flat Screwdriver/Package Opener", "Size": "3.26", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Awl", "Size": "1.54", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Can Opener", "Size": "1.77", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Plain Edge Knife Blade", "Size": "2.48", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Medium Flat Screwdriver/Depth Guage", "Size": "1.49", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Small Flat Screwdriver/File", "Size": "1.77", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Phillips Screwdriver/Bottle Opener", "Size": "3.23", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Serrated Edge Knife Blade", "Size": "2.5", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Scissors", "Size": "2.6", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Frame Opening", "Size": "12.46", "Measurement": "Frame Opening"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Tool Pivot", "Size": "3.07", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Free P4", "Component": "Plier Pivot", "Size": "4.71", "Measurement": "Pivot Size"},

  {"Brand": "Leatherman", "Tool": "Free P2", "Component": "Plier Head", "Size": "7.56", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P2", "Component": "Phillips Screwdriver", "Size": "3.30", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P2", "Component": "Flathead Screwdriver", "Size": "3.30", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P2", "Component": "Knife", "Size": "2.54", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P2", "Component": "Can Opener", "Size": "1.78", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P2", "Component": "Awl", "Size": "1.52", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P2", "Component": "Ruler", "Size": "1.52", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P2", "Component": "File", "Size": "1.78", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P2", "Component": "Scissors", "Size": "2.54", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Free P2", "Component": "Tool Pivot", "Size": "3.07", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Free P2", "Component": "Plier Pivot", "Size": "4.71", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Free P2", "Component": "Frame Opening", "Size": "11.18", "Measurement": "Frame Opening"},

  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Plier Head", "Size": "7.69", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Large Bit Driver", "Size": "5.04", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Bit Retention Plate", "Size": "0.5", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Awl", "Size": "1.48", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Flat Screwdriver/Bottle Opener", "Size": "3.27", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Can Opener", "Size": "1.72", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Small Bit Driver", "Size": "2.47", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Plain Edge Knife Blade", "Size": "2.45", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "File", "Size": "1.78", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Scissors", "Size": "2.5", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Wood Saw", "Size": "1.74", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Plier Pivot", "Size": "4.71", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Tool Pivot", "Size": "3.07", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Arc", "Component": "Frame Opening", "Size": "12.46", "Measurement": "Frame Opening"},

  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Plier Head", "Size": "6.99", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "420HC Combo Knife", "Size": "1.78", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Large Flat Screwdriver", "Size": "2.14", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Package Opener", "Size": "1.7", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Phillips Screwdriver", "Size": "3.06", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Bottle Opener", "Size": "1.73", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Small Flat Screwdriver/File", "Size": "1.73", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Scissors", "Size": "1.9", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Lanyard Ring", "Size": "0.61", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Frame Opening", "Size": "6.5", "Measurement": "Frame Opening"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Plier Pivot", "Size": "4.7", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Tool Pivot", "Size": "4.7", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Bronze Washer (OD 8.7 x ID 4.95)", "Size": "0.30", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Bronze Washer (OD 9.9 x ID 4.95)", "Size": "0.50", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Spacer (OD 8.7 x ID 4.95)", "Size": "1.45", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Polymer Spacer (OD 8.8 x ID 4.85)", "Size": "2.50", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wingman", "Component": "Can Opener (Combination Tool)", "Size": "1.73", "Measurement": "Tool Thickness"},

  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Plier Head", "Size": "6.99", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "420HC Plain Edge Knife", "Size": "1.78", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "420HC Serrated Blade", "Size": "1.79", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Large Flat Screwdriver", "Size": "2.14", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Can/Bottle Opener (Combination)", "Size": "1.73", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Phillips Screwdriver", "Size": "3.06", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Wood Saw", "Size": "1.73", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Wood/Metal File", "Size": "1.73", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Lanyard Ring", "Size": "0.61", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Frame Opening", "Size": "6.5", "Measurement": "Frame Opening"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Plier Pivot", "Size": "4.7", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Tool Pivot", "Size": "4.7", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Bronze Washer (OD 8.9 x ID 4.95)", "Size": "0.30", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Bronze Washer (OD 9.9 x ID 4.95)", "Size": "0.50", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Spacer (OD 8.7 x ID 4.95)", "Size": "1.45", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Sidekick", "Component": "Polymer Spacer (OD 8.8 x ID 4.85)", "Size": "2.50", "Measurement": "Tool Thickness"},

  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Plier Head", "Size": "7.46", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Awl", "Size": "2.34", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Wood Saw", "Size": "1.78", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Serrated Edge Knife Blade", "Size": "2.36", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "File", "Size": "1.74", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Plain Edge Knife Blade", "Size": "2.31", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Medium Flat Screwdriver", "Size": "2.31", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Small Flat Screwdriver", "Size": "2.31", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Large Flat Screwdriver", "Size": "2.31", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Phillips Screwdriver", "Size": "3.84", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Can Opener (Combination Tool)", "Size": "1.83", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Lanyard Ring", "Size": "0", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Bronze Washer (OD 9.5 x ID 5.75)", "Size": "0.15", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Spacer (OD 8.7 x ID 4.95)", "Size": "0.75", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Frame Opening", "Size": "13.45", "Measurement": "Frame Opening"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Tool Pivot", "Size": "4.7", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Super Tool 300", "Component": "Plier Pivot", "Size": "5.55", "Measurement": "Pivot Size"},

  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Plier Head", "Size": "7.46", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "T-Shank Exchanger", "Size": "2.3", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Awl", "Size": "2.34", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Scissors", "Size": "3.04", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Plain Edge Knife Blade", "Size": "2.36", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Serrated Edge Knife Blade", "Size": "2.36", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Small Flat Screwdriver", "Size": "2.31", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Large Flat Screwdriver", "Size": "2.31", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Large Bit Driver", "Size": "5.06", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Can Opener (Combination Tool)", "Size": "1.83", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Lanyard Ring", "Size": "1.08", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Frame Opening", "Size": "7.89", "Measurement": "Frame Opening"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Plier Pivot", "Size": "5.55", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Surge", "Component": "Tool Pivot", "Size": "4.7", "Measurement": "Pivot Size"},

  {"Brand": "Leatherman", "Tool": "Bond", "Component": "Phillips Screwdriver", "Size": "5.00", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Bond", "Component": "Can Opener (Combination Tool)", "Size": "1.90", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Bond", "Component": "Plain Edge Knife Blade", "Size": "1.74", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Bond", "Component": "Awl", "Size": "2.40", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Bond", "Component": "Small Screwdriver", "Size": "1.78", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Bond", "Component": "Medium Screwdriver", "Size": "2.36", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Bond", "Component": "Lanyard Ring", "Size": "1.58", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Bond", "Component": "File", "Size": "1.74", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Bond", "Component": "Tool Pivot", "Size": "4.7", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Bond", "Component": "Frame Opening", "Size": "10.36", "Measurement": "Frame Opening"},

  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Plier Pivot", "Size": "5.55", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Tool Pivot", "Size": "4.70", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Plier Head", "Size": "7.06", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "File", "Size": "1.78", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Saw", "Size": "1.81", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Scissors", "Size": "2.53", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Can Opener (Combination Tool)", "Size": "1.88", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Large Bit Driver", "Size": "5.03", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Small Bit Driver", "Size": "1.90", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Large Flat Screwdriver", "Size": "2.33", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Awl", "Size": "2.34", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Laynard Ring", "Size": "1.58", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Magnacut Blade", "Size": "2.42", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Wave Alpha", "Component": "Bronze Washer (OD 9.5 x ID 5.7)", "Size": "0.25", "Measurement": "Tool Thickness"},

  {"Brand": "Leatherman", "Tool": "Signal", "Component": "Plier Pivot", "Size": "5.55", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Signal", "Component": "Tool Pivot", "Size": "4.70", "Measurement": "Pivot Size"},
  {"Brand": "Leatherman", "Tool": "Signal", "Component": "Plier Head", "Size": "7.06", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Signal", "Component": "Combo Edge Blade", "Size": "3.19", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Signal", "Component": "Saw", "Size": "1.81", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Signal", "Component": "Awl", "Size": "2.34", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Signal", "Component": "Can Opener (Combination Tool)", "Size": "1.88", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Signal", "Component": "Large Bit Driver", "Size": "5.03", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Signal", "Component": "Bronze Washer (OD 9.5 x ID 5.7)", "Size": "0.25", "Measurement": "Tool Thickness"},
  {"Brand": "Leatherman", "Tool": "Signal", "Component": "Spacer (OD 8.1 x ID 4.9)", "Size": "2.00", "Measurement": "Tool Thickness"}
];

        const stackData = {
            'Wave+': {
                leftHandle: [
                    'Bronze Washer (OD 9.5 x ID 5.7) 0.1mm',
                    'Metal/Diamond File',
                    'Plain Edge Knife Blade',
                    'Bronze Washer (OD 9.5 x ID 5.7) 0.1mm',
                    'Can Opener (Combination Tool)',
                    'Keyed Washer',
                    'Large Bit Driver'
                ],
                rightHandle: [
                    'Bronze Washer (OD 9.5 x ID 5.7) 0.1mm',
                    'Serrated Edge Knife Blade',
                    'Wood Saw',
                    'Bronze Washer (OD 9.5 x ID 5.7) 0.1mm',
                    'Lanyard Ring',
                    'Scissors (with Spring)',
                    'Keyed Washer',
                    'Small Bit Driver',
                    'Keyed Washer',
                    'Large Flat Screwdriver'
                ],
                externalTools: [
                    'Metal/Diamond File',
                    'Wood Saw',
                    'Plain Edge Knife Blade',
                    'Serrated Edge Knife Blade'
                ],
                plierLeft:  ['Bronze Washer (OD 9.5 x ID 5.7) 0.1mm', 'Metal/Diamond File', 'Plain Edge Knife Blade', 'Bronze Washer (OD 9.5 x ID 5.7) 0.1mm', 'Plier Head'],
                plierRight: ['Bronze Washer (OD 9.5 x ID 5.7) 0.1mm', 'Serrated Edge Knife Blade', 'Wood Saw', 'Bronze Washer (OD 9.5 x ID 5.7) 0.1mm', 'Plier Head'],
                toolLeft:   ['Can Opener (Combination Tool)', 'Keyed Washer', 'Large Bit Driver'],
                toolRight:  ['Lanyard Ring', 'Scissors (with Spring)', 'Keyed Washer', 'Small Bit Driver', 'Keyed Washer', 'Large Flat Screwdriver'],
                driveType:  'TX10 Security',
                notes: 'Upper section: external tools sandwiched between bronze washers (0.1mm each). Lower section: internal tools with keyed washers as spacers between tools. TX10 Security screws.'
            },
            'Rebar': {
                leftHandle: [
                    'File', 'Lanyard Ring', 'Large Flat Screwdriver', 'Small Flat Screwdriver',
                    'Reamer/Awl', 'Keyed Washer', 'Keyed Washer', 'Plain Edge Knife Blade'
                ],
                rightHandle: [
                    'Wood Saw', 'Phillips Screwdriver', 'Spacer (OD 8.65 x ID 4.9)',
                    'Can Opener (Combination Tool)', 'Keyed Washer', 'Keyed Washer', 'Serrated Knife Blade'
                ],
                externalTools: [],
                plierLeft:  ['Bronze Washer (OD 9.5 x ID 5.7)', 'Plier Head', 'Bronze Washer (OD 9.5 x ID 5.7)'],
                plierRight: ['Bronze Washer (OD 9.5 x ID 5.7)', 'Plier Head', 'Bronze Washer (OD 9.5 x ID 5.7)'],
                toolLeft:  ['File', 'Lanyard Ring', 'Large Flat Screwdriver', 'Small Flat Screwdriver', 'Reamer/Awl', 'Keyed Washer', 'Keyed Washer', 'Plain Edge Knife Blade'],
                toolRight: ['Wood Saw', 'Phillips Screwdriver', 'Spacer (OD 8.65 x ID 4.9)', 'Can Opener (Combination Tool)', 'Keyed Washer', 'Keyed Washer', 'Serrated Knife Blade'],
                driveType: 'Large / Med. Knurled Wrench',
                notes: 'Plier pivot: 5.55mm Large Knurled Wrench; tool pivot: 4.7mm Medium Knurled Wrench. Bronze Washers (OD 9.5 x ID 5.7 x 0.1mm) flank each plier head. Right tool side has 1.25mm spacer between Phillips and Can Opener.'
            },
            'Arc': {
                leftHandle: [
                    'Washer 0.76mm (0.03")',
                    'Scissors',
                    'Spring 0.76mm (0.03")',
                    'Awl',
                    'Small Bit Driver',
                    'Large Flat Screwdriver',
                    'Spring 0.76mm (0.03")',
                    'File',
                    'Washer 0.76mm (0.03")'
                ],
                rightHandle: [
                    'Washer 0.76mm (0.03")',
                    'Plain Edge Knife Blade',
                    'Spring 0.76mm (0.03")',
                    'Can Opener',
                    'Large Bit Driver',
                    'Bit Retention Plate',
                    'Spring 0.76mm (0.03")',
                    'Wood Saw',
                    'Washer 0.76mm (0.03")'
                ],
                externalTools: [
                    'Plain Edge Knife Blade',
                    'Wood Saw',
                    'Scissors',
                    'File'
                ],
                toolLeft:  ['Washer 0.76mm (0.03")', 'Scissors', 'Spring 0.76mm (0.03")', 'Awl', 'Small Bit Driver', 'Large Flat Screwdriver', 'Spring 0.76mm (0.03")', 'File', 'Washer 0.76mm (0.03")'],
                toolRight: ['Washer 0.76mm (0.03")', 'Plain Edge Knife Blade', 'Spring 0.76mm (0.03")', 'Can Opener', 'Large Bit Driver', 'Bit Retention Plate', 'Spring 0.76mm (0.03")', 'Wood Saw', 'Washer 0.76mm (0.03")'],
                driveType: 'TX8',
                notes: 'MagnaCut blade, saw, spring-action scissors, and diamond-coated file are external tools accessible without full disassembly — the same 4 components Zach flagged as Arc\'s "long" tools. Scale clearance: 13.97mm (0.55") | Outside of washer to washer: 14.73mm (0.58")'
            },
            'Free P4': {
                leftHandle: [
                    'Scissors 2.54mm (0.100")',
                    'Spring 0.76mm (0.030")',
                    'Phillips Screwdriver 3.30mm (0.130")',
                    'Package Opener 3.30mm (0.130")',
                    'Spring 0.76mm (0.030")',
                    'Plain Edge Knife Blade 2.54mm (0.100")'
                ],
                rightHandle: [
                    'Washer 0.76mm (0.030")',
                    'Wood Saw 1.78mm (0.070")',
                    'Spring 0.76mm (0.030")',
                    'Bottle Opener 1.78mm (0.070")',
                    'Washer 0.76mm (0.030")',
                    'Awl 1.52mm (0.060")',
                    'Backup 13.21mm (0.520")',
                    'Ruler 1.52mm (0.060")',
                    'File 1.78mm (0.070")',
                    'Spring 0.76mm (0.030")',
                    'Serrated Edge Knife Blade 2.54mm (0.100")'
                ],
                externalTools: [],
                toolLeft:  ['Scissors 2.54mm (0.100")', 'Spring 0.76mm (0.030")', 'Phillips Screwdriver 3.30mm (0.130")', 'Package Opener 3.30mm (0.130")', 'Spring 0.76mm (0.030")', 'Plain Edge Knife Blade 2.54mm (0.100")'],
                toolRight: ['Washer 0.76mm (0.030")', 'Wood Saw 1.78mm (0.070")', 'Spring 0.76mm (0.030")', 'Bottle Opener 1.78mm (0.070")', 'Washer 0.76mm (0.030")', 'Awl 1.52mm (0.060")', 'Backup 13.21mm (0.520")', 'Ruler 1.52mm (0.060")', 'File 1.78mm (0.070")', 'Spring 0.76mm (0.030")', 'Serrated Edge Knife Blade 2.54mm (0.100")'],
                notes: 'All tools stored inside handles — no external tools, confirmed.'
            },
            'Free P2': {
                leftHandle: [
                    'Washer 0.76mm (0.03")',
                    'Phillips Screwdriver 3.30mm (0.13")',
                    'Washer 0.76mm (0.03")',
                    'Flathead Screwdriver 3.30mm (0.13")',
                    'Washer 0.76mm (0.03")',
                    'Knife 2.54mm (0.10")'
                ],
                rightHandle: [
                    'Washer 0.76mm (0.03")',
                    'Can Opener 1.78mm (0.07")',
                    'Awl 1.52mm (0.06")',
                    'Ruler 1.52mm (0.06")',
                    'Washer 0.76mm (0.03")',
                    'File 1.78mm (0.07")',
                    'Washer 0.76mm (0.03")',
                    'Scissors 2.54mm (0.10")'
                ],
                externalTools: [],
                toolLeft:  ['Washer 0.76mm (0.03")', 'Phillips Screwdriver 3.30mm (0.13")', 'Washer 0.76mm (0.03")', 'Flathead Screwdriver 3.30mm (0.13")', 'Washer 0.76mm (0.03")', 'Knife 2.54mm (0.10")'],
                toolRight: ['Washer 0.76mm (0.03")', 'Can Opener 1.78mm (0.07")', 'Awl 1.52mm (0.06")', 'Ruler 1.52mm (0.06")', 'Washer 0.76mm (0.03")', 'File 1.78mm (0.07")', 'Washer 0.76mm (0.03")', 'Scissors 2.54mm (0.10")'],
                notes: 'All tools stored inside handles — no external tools, confirmed. Total stack height: 11.18mm (0.44") per side'
            },
            'Garage #005': { // staged — no rawData entries yet; add Tool Thickness measurements to activate
                leftHandle: [
                    'Washer 0.76mm (0.03")',
                    'Scissors 2.54mm (0.10")',
                    'Spring 0.76mm (0.03")',
                    'Bit Retention Plate 0.51mm (0.02")',
                    'Bit Changer 5.08mm (0.20")',
                    'Micro Bit 2.54mm (0.10")',
                    'Spring 0.76mm (0.03")',
                    'File 1.78mm (0.07")',
                    'Washer 0.76mm (0.03")'
                ],
                rightHandle: [
                    'Washer 0.76mm (0.03")',
                    'Blade 3.05mm (0.12")',
                    'Spring 0.76mm (0.03")',
                    'Can Opener 1.78mm (0.07")',
                    'Package Opener 3.30mm (0.13")',
                    'Awl 1.52mm (0.06")',
                    'Spring 0.76mm (0.03")',
                    'Saw 1.78mm (0.07")',
                    'Washer 0.76mm (0.03")'
                ],
                externalTools: [],
                toolLeft:  ['Washer 0.76mm (0.03")', 'Scissors 2.54mm (0.10")', 'Spring 0.76mm (0.03")', 'Bit Retention Plate 0.51mm (0.02")', 'Bit Changer 5.08mm (0.20")', 'Micro Bit 2.54mm (0.10")', 'Spring 0.76mm (0.03")', 'File 1.78mm (0.07")', 'Washer 0.76mm (0.03")'],
                toolRight: ['Washer 0.76mm (0.03")', 'Blade 3.05mm (0.12")', 'Spring 0.76mm (0.03")', 'Can Opener 1.78mm (0.07")', 'Package Opener 3.30mm (0.13")', 'Awl 1.52mm (0.06")', 'Spring 0.76mm (0.03")', 'Saw 1.78mm (0.07")', 'Washer 0.76mm (0.03")'],
                notes: 'Scale clearance: 13.97mm (0.55") | Outside of washer to washer: 14.73mm (0.58")'
            },
            'Bond': {
                leftHandle: [
                    'Washer 0.45mm',
                    'Phillips Screwdriver',
                    'Washer (Thick) 0.68mm',
                    'Can Opener (Combination Tool)',
                    'Washer (Keyed) 0.17mm',
                    'Washer (Keyed) 0.17mm',
                    'Plain Edge Knife Blade',
                    'Washer 0.25mm'
                ],
                rightHandle: [
                    'Washer 0.25mm',
                    'Awl',
                    'Small Screwdriver',
                    'Medium Screwdriver',
                    'Lanyard Ring',
                    'File',
                    'Washer 0.25mm'
                ],
                externalTools: [],
                toolLeft:  ['Washer 0.45mm', 'Phillips Screwdriver', 'Washer (Thick) 0.68mm', 'Can Opener (Combination Tool)', 'Washer (Keyed) 0.17mm', 'Washer (Keyed) 0.17mm', 'Plain Edge Knife Blade', 'Washer 0.25mm'],
                toolRight: ['Washer 0.25mm', 'Awl', 'Small Screwdriver', 'Medium Screwdriver', 'Lanyard Ring', 'File', 'Washer 0.25mm'],
                notes: 'Total stack height: 10.36mm per side. OEM measurements. All tools stored inside handles.'
            },
            'Surge': {
                leftHandle: [
                    'Plain Edge Knife Blade', 'Bronze Washer (OD 9.5 x ID 5.7)', 'Plier Head',
                    'Bronze Washer (OD 9.5 x ID 5.7)', 'T-Shank Exchanger', 'Retention Tab',
                    'Bronze Washer (OD 9.5 x ID 5.7)',
                    'Open Cap', 'Lanyard Ring', 'Awl', 'Large Flat Screwdriver', 'Small Flat Screwdriver',
                    'Spacer (OD 8.7 x ID 5)', 'Closed Cap'
                ],
                rightHandle: [
                    'Scissors', 'Bronze Washer (OD 9.5 x ID 5.7)', 'Plier Head',
                    'Bronze Washer (OD 9.5 x ID 5.7)', 'Serrated Edge Knife Blade',
                    'Open Cap', 'Spacer (OD 8.65 x ID 5)', 'Bit Driver', 'Can Opener (Combination Tool)',
                    'Spacer (OD 8.65 x ID 4.9)', 'Closed Cap'
                ],
                externalTools: ['Plain Edge Knife Blade', 'Serrated Edge Knife Blade', 'T-Shank Exchanger', 'Scissors'],
                plierLeft:  ['Plain Edge Knife Blade', 'Bronze Washer (OD 9.5 x ID 5.7)', 'Plier Head', 'Bronze Washer (OD 9.5 x ID 5.7)', 'T-Shank Exchanger', 'Retention Tab', 'Bronze Washer (OD 9.5 x ID 5.7)'],
                plierRight: ['Scissors', 'Bronze Washer (OD 9.5 x ID 5.7)', 'Plier Head', 'Bronze Washer (OD 9.5 x ID 5.7)', 'Serrated Edge Knife Blade'],
                toolLeft:  ['Open Cap', 'Lanyard Ring', 'Awl', 'Large Flat Screwdriver', 'Small Flat Screwdriver', 'Spacer (OD 8.7 x ID 5)', 'Closed Cap'],
                toolRight: ['Open Cap', 'Spacer (OD 8.65 x ID 5)', 'Bit Driver', 'Can Opener (Combination Tool)', 'Spacer (OD 8.65 x ID 4.9)', 'Closed Cap'],
                driveType: 'TX10 Security',
                notes: 'Plier pivot: 5.55mm TX10 Security. Tool pivot: 4.7mm TX10 Security. Plier left has Plain Edge Blade (outermost) and T-Shank Blade Exchanger + Retention Tab between bronze washers. Plier right has Serrated Blade (outermost) and Scissors (innermost). Tool side has Open/Closed end caps.'
            },
            'Wingman': {
                leftHandle: [
                    'Face Plate', '420HC Combo Knife', 'Bronze Washer (OD 8.7 x ID 4.95)',
                    'Plier Head', 'Spacer (OD 8.7 x ID 4.95)', 'Pocket Clip',
                    'Face Plate', 'Polymer Spacer (OD 8.8 x ID 4.85)', 'Spacer (OD 8.7 x ID 4.95)',
                    'Can Opener (Combination Tool)', 'Small Flat Screwdriver/File', 'Package Opener'
                ],
                rightHandle: [
                    'Face Plate', 'Scissors', 'Bronze Washer (OD 8.7 x ID 4.95)',
                    'Plier Head', 'Spacer (OD 8.7 x ID 4.95)',
                    'Face Plate', 'Polymer Spacer (OD 8.8 x ID 4.85)', 'Bronze Washer (OD 9.9 x ID 4.95)',
                    'Phillips Screwdriver', 'Large Flat Screwdriver', 'Spacer (OD 8.7 x ID 4.95)'
                ],
                externalTools: ['420HC Combo Knife', 'Scissors'],
                plierLeft:  ['Face Plate', '420HC Combo Knife', 'Bronze Washer (OD 8.7 x ID 4.95)', 'Plier Head', 'Spacer (OD 8.7 x ID 4.95)', 'Pocket Clip'],
                plierRight: ['Face Plate', 'Scissors', 'Bronze Washer (OD 8.7 x ID 4.95)', 'Plier Head', 'Spacer (OD 8.7 x ID 4.95)'],
                toolLeft:  ['Face Plate', 'Polymer Spacer (OD 8.8 x ID 4.85)', 'Spacer (OD 8.7 x ID 4.95)', 'Can Opener (Combination Tool)', 'Small Flat Screwdriver/File', 'Package Opener'],
                toolRight: ['Face Plate', 'Polymer Spacer (OD 8.8 x ID 4.85)', 'Bronze Washer (OD 9.9 x ID 4.95)', 'Phillips Screwdriver', 'Large Flat Screwdriver', 'Spacer (OD 8.7 x ID 4.95)'],
                driveType: 'TX10',
                notes: 'Plier pivot: 4.7mm TX10. Tool pivot: 4.7mm TX10. Plier left: Combo blade external, flanked by bronze washer + spacer. Right: Scissors external. Tool side uses Polymer Spacer (2.5mm) nearest pivot on both sides. Pocket Clip on left plier side only.'
            },
            'Sidekick': {
                leftHandle: [
                    'Face Plate', '420HC Plain Edge Knife', 'Bronze Washer (OD 8.9 x ID 4.95)',
                    'Plier Head', 'Spacer (OD 8.7 x ID 4.95)', 'Pocket Clip',
                    'Face Plate', 'Polymer Spacer (OD 8.8 x ID 4.85)', 'Lanyard Ring',
                    'Can/Bottle Opener (Combination)', 'Small Flat Screwdriver/File', '420HC Serrated Blade'
                ],
                rightHandle: [
                    'Face Plate', 'Wood Saw', 'Bronze Washer (OD 9.9 x ID 4.95)',
                    'Plier Head', 'Spacer (OD 8.7 x ID 4.95)',
                    'Face Plate', 'Polymer Spacer (OD 8.8 x ID 4.85)',
                    'Phillips Screwdriver', 'Large Flat Screwdriver', 'Spacer (OD 8.7 x ID 4.95)'
                ],
                externalTools: ['420HC Plain Edge Knife', 'Wood Saw'],
                plierLeft:  ['Face Plate', '420HC Plain Edge Knife', 'Bronze Washer (OD 8.9 x ID 4.95)', 'Plier Head', 'Spacer (OD 8.7 x ID 4.95)', 'Pocket Clip'],
                plierRight: ['Face Plate', 'Wood Saw', 'Bronze Washer (OD 9.9 x ID 4.95)', 'Plier Head', 'Spacer (OD 8.7 x ID 4.95)'],
                toolLeft:  ['Face Plate', 'Polymer Spacer (OD 8.8 x ID 4.85)', 'Lanyard Ring', 'Can/Bottle Opener (Combination)', 'Small Flat Screwdriver/File', '420HC Serrated Blade'],
                toolRight: ['Face Plate', 'Polymer Spacer (OD 8.8 x ID 4.85)', 'Phillips Screwdriver', 'Large Flat Screwdriver', 'Spacer (OD 8.7 x ID 4.95)'],
                driveType: 'TX10',
                notes: 'Plier pivot: 4.7mm TX10. Tool pivot: 4.7mm TX10. Plier left: Plain Edge Knife external, bronze washer OD 8.9mm. Plier right: Wood Saw external, bronze washer OD 9.9mm. Pocket Clip on left plier side only. Tool side uses Polymer Spacer (2.5mm) nearest pivot.'
            },
            'Super Tool 300': {
                leftHandle: [
                    'Thick Spacer', 'File', 'Keyed Washer', 'Lanyard Ring', 'Awl',
                    'Large Flat Screwdriver', 'Medium Flat Screwdriver', 'Keyed Washer',
                    'Spacer (OD 8.7 x ID 4.95)', 'Plain Edge Knife Blade', 'Thin Spacer with Detent'
                ],
                rightHandle: [
                    'Thick Spacer', 'Wood Saw', 'Keyed Washer', 'Small Flat Screwdriver',
                    'Phillips Screwdriver', 'Can Opener (Combination Tool)', 'Keyed Washer',
                    'Spacer (OD 8.7 x ID 4.95)', 'Serrated Edge Knife Blade', 'Thin Spacer with Detent'
                ],
                externalTools: [],
                plierLeft:  ['Bronze Washer (OD 9.5 x ID 5.75)', 'Plier Head', 'Bronze Washer (OD 9.5 x ID 5.75)'],
                plierRight: ['Bronze Washer (OD 9.5 x ID 5.75)', 'Plier Head', 'Bronze Washer (OD 9.5 x ID 5.75)'],
                toolLeft:  ['Thick Spacer', 'File', 'Keyed Washer', 'Lanyard Ring', 'Awl', 'Large Flat Screwdriver', 'Medium Flat Screwdriver', 'Keyed Washer', 'Spacer (OD 8.7 x ID 4.95)', 'Plain Edge Knife Blade', 'Thin Spacer with Detent'],
                toolRight: ['Thick Spacer', 'Wood Saw', 'Keyed Washer', 'Small Flat Screwdriver', 'Phillips Screwdriver', 'Can Opener (Combination Tool)', 'Keyed Washer', 'Spacer (OD 8.7 x ID 4.95)', 'Serrated Edge Knife Blade', 'Thin Spacer with Detent'],
                driveType: 'Large / Med. Knurled Wrench',
                notes: 'Plier side: Bronze Washers OD 9.5 x ID 5.75 x 0.15mm flank each plier head. Tool side: Thick Spacer nearest pivot, Thin Spacer with Detent at outer cap end. Keyed Washers and Spacer (OD 8.7 x ID 4.95 x 0.75mm) between tool groups. Plier pivot: 5.55mm, Large Knurled Wrench. Tool pivot: 4.7mm, Medium Knurled Wrench.'
            },
            'Wave Alpha': {
                leftHandle: [
                    'Thick Bronze Spacer',
                    'File',
                    'Bronze Washer (OD 9.5 x ID 5.7) 0.25mm',
                    'Bronze Washer (OD 9.5 x ID 5.7) 0.25mm',
                    'Magnacut Blade',
                    'Thin Bronze Spacer',
                    'Thick Spacer',
                    'Can Opener (Combination Tool)',
                    'Washer',
                    'Large Bit Driver',
                    'Thin Spacer',
                    'Bushing'
                ],
                rightHandle: [
                    'Thick Bronze Spacer',
                    'Saw',
                    'Bronze Washer (OD 9.5 x ID 5.7) 0.25mm',
                    'Bronze Washer (OD 9.5 x ID 5.7) 0.25mm',
                    'Scissors',
                    'Thin Bronze Spacer',
                    'Thick Spacer',
                    'Awl',
                    'Laynard Ring',
                    'Notched Washer',
                    'Small Bit Driver',
                    'Large Flat Screwdriver',
                    'Thick Spacer'
                ],
                externalTools: [
                    'File',
                    'Magnacut Blade',
                    'Saw',
                    'Scissors'
                ],
                plierLeft:  ['Thick Bronze Spacer', 'File', 'Bronze Washer (OD 9.5 x ID 5.7) 0.25mm', 'Bronze Washer (OD 9.5 x ID 5.7) 0.25mm', 'Magnacut Blade'],
                plierRight: ['Thick Bronze Spacer', 'Saw', 'Bronze Washer (OD 9.5 x ID 5.7) 0.25mm', 'Bronze Washer (OD 9.5 x ID 5.7) 0.25mm', 'Scissors'],
                toolLeft:   ['Thin Bronze Spacer', 'Thick Spacer', 'Can Opener (Combination Tool)', 'Washer', 'Large Bit Driver', 'Thin Spacer', 'Bushing'],
                toolRight:  ['Thin Bronze Spacer', 'Thick Spacer', 'Awl', 'Laynard Ring', 'Notched Washer', 'Small Bit Driver', 'Large Flat Screwdriver', 'Thick Spacer'],
                driveType:  'TX10 Security',
                notes: 'G10 scales and pivot caps are structural end-caps (not shown in stack). Plier pivot: 5.55mm, TX10. Tool pivot: 4.7mm, TX10. Bronze washers OD 9.5 x ID 5.7 x 0.25mm — thicker than Wave+\'s 0.1mm washers. Thick/Thin Bronze Spacers flank plier-side external tools. Tool side has Bushing and Notched Washer unique to this platform. MagnaCut blade replaces Wave+\'s 420HC plain blade.'
            },
            'Signal': {
                leftHandle: [
                    'Bronze Washer (OD 9.5 x ID 5.7) 0.25mm',
                    'Combo Edge Blade',
                    'Spacer (OD 8.1 x ID 4.9) 2mm',
                    'Awl',
                    'Can Opener (Combination Tool)',
                    'Large Bit Driver'
                ],
                rightHandle: [
                    'Bronze Washer (OD 9.5 x ID 5.7) 0.25mm',
                    'Saw'
                ],
                externalTools: [
                    'Combo Edge Blade',
                    'Saw'
                ],
                plierLeft:  ['Bronze Washer (OD 9.5 x ID 5.7) 0.25mm', 'Combo Edge Blade'],
                plierRight: ['Bronze Washer (OD 9.5 x ID 5.7) 0.25mm', 'Saw'],
                toolLeft:   ['Spacer (OD 8.1 x ID 4.9) 2mm', 'Awl', 'Can Opener (Combination Tool)', 'Large Bit Driver'],
                toolRight:  [],
                driveType:  'TX10 Security',
                notes: 'Pocket clip on left plier pivot. Combo Edge Blade (external) on left, Saw (external) on right. Internal tools (Awl, Can Opener, Bit Driver) are all on the left handle tool side — diagram shows single-sided tool stack. Spacer OD 8.1 x ID 4.9 x 2mm anchors the tool stack. Plier pivot: 5.55mm, TX10. Tool pivot: 4.7mm, TX10.'
            }
        };

        const diagramFiles = {
          'Arc':           'docs/diagrams/arc.jpg',
          'Rebar':         'docs/diagrams/rebar.jpg',
          'Signal':        'docs/diagrams/signal.jpg',
          'Sidekick':      'docs/diagrams/sidekick.jpg',
          'Surge':         'docs/diagrams/surge.jpg',
          'Super Tool 300':'docs/diagrams/super-tool-300.jpg',
          'Wave Alpha':    'docs/diagrams/wave-alpha.jpg',
          'Wave+':         'docs/diagrams/wave-plus.jpg',
          'Wingman':       'docs/diagrams/wingman.jpg',
        };

        // Locking geometry source: Stackwise Data Collection Nov 17 2025 (Locking Geometry - INNER tab),
        // symmetrized across the full platform matrix. Updated per Zach's Jun 2026 spot-check follow-up:
        // Super Tool 300 and Surge are ruled out (not just "close") for every other platform's internal
        // tools — the Nov 2025 "close" rating for that group was too generous. ST300/Surge remain
        // perfect with each other only.
        const lockingGeometry = {
            'Arc':            { perfect: ['Arc', 'Free P2', 'Free P4', 'Free T2', 'Free T4'], close: [] },
            'Free P2':        { perfect: ['Arc', 'Free P2', 'Free P4', 'Free T2', 'Free T4'], close: [] },
            'Free P4':        { perfect: ['Arc', 'Free P2', 'Free P4', 'Free T2', 'Free T4'], close: [] },
            'Free T2':        { perfect: ['Arc', 'Free P2', 'Free P4', 'Free T2', 'Free T4'], close: [] }, // planned — no rawData entries yet
            'Free T4':        { perfect: ['Arc', 'Free P2', 'Free P4', 'Free T2', 'Free T4'], close: [] }, // planned — no rawData entries yet
            'Rebar':          { perfect: ['Rebar', 'Bond', 'Wave+', 'Curl', 'Charge+', 'Wave Alpha', 'Signal'], close: ['Sidekick', 'Wingman', 'Rev', 'Bolster'] },
            'Bond':           { perfect: ['Rebar', 'Bond', 'Wave+', 'Curl', 'Charge+', 'Wave Alpha', 'Signal'], close: ['Sidekick', 'Wingman', 'Rev', 'Bolster'] },
            'Super Tool 300': { perfect: ['Super Tool 300', 'Surge'], close: [] },
            'Wave+':          { perfect: ['Rebar', 'Bond', 'Wave+', 'Curl', 'Charge+', 'Wave Alpha', 'Signal'], close: ['Sidekick', 'Wingman', 'Rev', 'Bolster'] },
            'Curl':           { perfect: ['Rebar', 'Bond', 'Wave+', 'Curl', 'Charge+', 'Wave Alpha', 'Signal'], close: ['Sidekick', 'Wingman', 'Rev', 'Bolster'] }, // planned — no rawData entries yet
            'Surge':          { perfect: ['Super Tool 300', 'Surge'], close: [] },
            'Charge+':        { perfect: ['Rebar', 'Bond', 'Wave+', 'Curl', 'Charge+', 'Wave Alpha', 'Signal'], close: ['Sidekick', 'Wingman', 'Rev', 'Bolster'] }, // planned — no rawData entries yet
            'Wave Alpha':     { perfect: ['Rebar', 'Bond', 'Wave+', 'Curl', 'Charge+', 'Wave Alpha', 'Signal'], close: ['Sidekick', 'Wingman', 'Rev', 'Bolster'] },
            'Sidekick':       { perfect: ['Sidekick', 'Wingman', 'Rev', 'Bolster'], close: ['Rebar', 'Bond', 'Wave+', 'Curl', 'Charge+', 'Wave Alpha', 'Signal'] },
            'Wingman':        { perfect: ['Sidekick', 'Wingman', 'Rev', 'Bolster'], close: ['Rebar', 'Bond', 'Wave+', 'Curl', 'Charge+', 'Wave Alpha', 'Signal'] },
            'Rev':            { perfect: ['Sidekick', 'Wingman', 'Rev', 'Bolster'], close: ['Rebar', 'Bond', 'Wave+', 'Curl', 'Charge+', 'Wave Alpha', 'Signal'] }, // planned — no rawData entries yet
            'Bolster':        { perfect: ['Sidekick', 'Wingman', 'Rev', 'Bolster'], close: ['Rebar', 'Bond', 'Wave+', 'Curl', 'Charge+', 'Wave Alpha', 'Signal'] }, // planned — no rawData entries yet
            'Signal':         { perfect: ['Rebar', 'Bond', 'Wave+', 'Curl', 'Charge+', 'Wave Alpha', 'Signal'], close: ['Sidekick', 'Wingman', 'Rev', 'Bolster'] }
        };

        // Plier Head swaps use their own dedicated locking-geometry groups, independent of (and
        // narrower than) the general internal-tool table above — per Zach's Jun 2026 feedback,
        // there's no cross-group plier head compatibility at all, including within the "close" tier.
        const plierLockingGroups = [
            ['Rebar', 'Wave+', 'Curl', 'Bond', 'Charge+', 'Wave Alpha', 'Signal'],
            ['Sidekick', 'Wingman', 'Rev', 'Bolster'],
            ['Super Tool 300', 'Surge'],
            ['Free P2', 'Free P4', 'Arc', 'Free T2', 'Free T4']
        ];

        // Free P2/P4/Arc "Wild Card" from Zach's Jun 2026 notes: long-bodied tools can't swap into
        // a short tool's slot, but a short tool can always swap into a long tool's slot. Per-platform
        // lists below are Zach's named "Long Tools", mapped onto rawData's component names — flag if
        // any of these name mappings turn out wrong:
        //   "Blade" (Free P2) → "Knife", Free P2's only blade-type component
        //   "Magnacut Blade" (Arc) → "Plain Edge Knife Blade", which Leatherman makes from CPM MagnaCut on the Arc
        // Anything not listed for a given platform is implicitly "short". Free T2/Free T4 have no
        // rawData yet, so they're left out until measurements (and their own long/short lists) exist.
        const freeArcLongTools = {
            'Free P2': ['Scissors', 'Knife'],
            'Free P4': ['Scissors', 'Serrated Edge Knife Blade', 'Plain Edge Knife Blade', 'Wood Saw'],
            'Arc':     ['Scissors', 'Wood Saw', 'File', 'Plain Edge Knife Blade']
        };

        // Wildcards (Zach's Jun 2026 deep-dive): one-off fitment exceptions found through hands-on
        // mod testing rather than a rule that generalizes. Each group lists specific "long" donor
        // components — keyed "<Tool> <Component>" to match toolData — that are physically too long
        // to drop into specific named "<Tool> <Component>" slots, even though pivot/locking/thickness
        // checks alone would call the pair fine. A short component can still go into any of these
        // slots; only the listed long components are excluded, and only from the listed slots (other
        // components on the same models are unaffected). Treat entries here as accumulated field
        // knowledge to extend one-off as Zach finds more cases, not a template to extrapolate from.
        const longImplementWildcards = [
            {
                long: [
                    'Rebar Wood Saw', 'Rebar File', 'Rebar Serrated Knife Blade', 'Rebar Plain Edge Knife Blade',
                    'Bond Plain Edge Knife Blade', 'Bond File'
                ],
                shortSlots: [
                    'Rebar Small Flat Screwdriver', 'Rebar Reamer/Awl', 'Rebar Large Flat Screwdriver',
                    'Rebar Can Opener (Combination Tool)', 'Rebar Lanyard Ring',
                    'Bond Can Opener (Combination Tool)', 'Bond Awl', 'Bond Small Screwdriver',
                    'Bond Medium Screwdriver', 'Bond Lanyard Ring',
                    'Wave+ Small Bit Driver', 'Wave+ Scissors (with Spring)', 'Wave+ Large Flat Screwdriver',
                    'Wave+ Can Opener (Combination Tool)',
                    'Sidekick 420HC Serrated Blade', 'Sidekick Large Flat Screwdriver',
                    'Sidekick Can/Bottle Opener (Combination)', 'Sidekick Phillips Screwdriver', 'Sidekick Wood/Metal File',
                    'Wingman Large Flat Screwdriver', 'Wingman Package Opener', 'Wingman Phillips Screwdriver',
                    'Wingman Bottle Opener', 'Wingman Small Flat Screwdriver/File'
                ]
            },
            {
                long: [
                    'Super Tool 300 Wood Saw', 'Super Tool 300 File',
                    'Super Tool 300 Plain Edge Knife Blade', 'Super Tool 300 Serrated Edge Knife Blade',
                    'Surge Plain Edge Knife Blade', 'Surge Serrated Edge Knife Blade'
                ],
                shortSlots: [
                    'Super Tool 300 Awl', 'Super Tool 300 Medium Flat Screwdriver', 'Super Tool 300 Small Flat Screwdriver',
                    'Super Tool 300 Large Flat Screwdriver', 'Super Tool 300 Can Opener (Combination Tool)',
                    'Surge Awl', 'Surge Small Flat Screwdriver', 'Surge Large Flat Screwdriver',
                    'Surge Can Opener (Combination Tool)'
                ]
            }
        ];

        // Each entry is keyed by "<Tool> <Component>" (matching toolData) and tagged with a
        // named locking-geometry family (`type`). Components in the same family share a `perfect`
        // external lock fit; components in different families are not interchangeable.
        // Source: Stackwise Data Collection Nov 17 2025 (Locking Geometry - OUTER tab).
        const externalLockingGeometry = {
            'Wave+ Plain Edge Knife Blade': {
                type: 'Wave-style blade lock',
                perfect: ['Wave+ Plain Edge Knife Blade', 'Wave+ Serrated Edge Knife Blade', 'Curl Plain Blade',
                          'Charge+ Plain Blade', 'Charge+ Serrated Blade', 'Wave Alpha Magnacut Blade',
                          'Wave Alpha Saw', 'Signal Combo Edge Blade']
            },
            'Wave+ Serrated Edge Knife Blade': {
                type: 'Wave-style blade lock',
                perfect: ['Wave+ Plain Edge Knife Blade', 'Wave+ Serrated Edge Knife Blade', 'Curl Plain Blade',
                          'Charge+ Plain Blade', 'Charge+ Serrated Blade', 'Wave Alpha Magnacut Blade',
                          'Wave Alpha Saw', 'Signal Combo Edge Blade']
            },
            'Wave+ Metal/Diamond File': {
                type: 'Wave-style file/saw lock',
                perfect: ['Wave+ Metal/Diamond File', 'Wave+ Wood Saw', 'Curl File', 'Charge+ File', 'Charge+ Saw',
                          'Wave Alpha Scissors', 'Wave Alpha File', 'Signal Saw']
            },
            'Wave+ Wood Saw': {
                type: 'Wave-style file/saw lock',
                perfect: ['Wave+ Metal/Diamond File', 'Wave+ Wood Saw', 'Curl File', 'Charge+ File', 'Charge+ Saw',
                          'Wave Alpha Scissors', 'Wave Alpha File', 'Signal Saw']
            },
            // Curl/Charge+/Wave Alpha/Signal each have their own row in the OUTER tab too, but only
            // ever appeared as *values* inside Wave+'s entries above — they never got their own key,
            // so a swap sourced FROM one of these (once measurement data exists) would've had no
            // documented family and incorrectly fallen back to the internal-tool table. Backfilled
            // directly from the spreadsheet so the family is symmetric in both directions.
            'Curl Plain Blade': {
                type: 'Wave-style blade lock',
                perfect: ['Wave+ Plain Edge Knife Blade', 'Wave+ Serrated Edge Knife Blade', 'Curl Plain Blade',
                          'Charge+ Plain Blade', 'Charge+ Serrated Blade', 'Wave Alpha Magnacut Blade',
                          'Wave Alpha Saw', 'Signal Combo Edge Blade']
            },
            'Curl File': {
                type: 'Wave-style file/saw lock',
                perfect: ['Wave+ Metal/Diamond File', 'Wave+ Wood Saw', 'Curl File', 'Charge+ File', 'Charge+ Saw',
                          'Wave Alpha Scissors', 'Wave Alpha File', 'Signal Saw']
            },
            'Charge+ Plain Blade': {
                type: 'Wave-style blade lock',
                perfect: ['Wave+ Plain Edge Knife Blade', 'Wave+ Serrated Edge Knife Blade', 'Curl Plain Blade',
                          'Charge+ Plain Blade', 'Charge+ Serrated Blade', 'Wave Alpha Magnacut Blade',
                          'Wave Alpha Saw', 'Signal Combo Edge Blade']
            },
            'Charge+ Serrated Blade': {
                type: 'Wave-style blade lock',
                perfect: ['Wave+ Plain Edge Knife Blade', 'Wave+ Serrated Edge Knife Blade', 'Curl Plain Blade',
                          'Charge+ Plain Blade', 'Charge+ Serrated Blade', 'Wave Alpha Magnacut Blade',
                          'Wave Alpha Saw', 'Signal Combo Edge Blade']
            },
            'Charge+ File': {
                type: 'Wave-style file/saw lock',
                perfect: ['Wave+ Metal/Diamond File', 'Wave+ Wood Saw', 'Curl File', 'Charge+ File', 'Charge+ Saw',
                          'Wave Alpha Scissors', 'Wave Alpha File', 'Signal Saw']
            },
            'Charge+ Saw': {
                type: 'Wave-style file/saw lock',
                perfect: ['Wave+ Metal/Diamond File', 'Wave+ Wood Saw', 'Curl File', 'Charge+ File', 'Charge+ Saw',
                          'Wave Alpha Scissors', 'Wave Alpha File', 'Signal Saw']
            },
            'Wave Alpha Magnacut Blade': {
                type: 'Wave-style blade lock',
                perfect: ['Wave+ Plain Edge Knife Blade', 'Wave+ Serrated Edge Knife Blade', 'Curl Plain Blade',
                          'Charge+ Plain Blade', 'Charge+ Serrated Blade', 'Wave Alpha Magnacut Blade',
                          'Wave Alpha Saw', 'Signal Combo Edge Blade']
            },
            'Wave Alpha Saw': {
                type: 'Wave-style blade lock',
                perfect: ['Wave+ Plain Edge Knife Blade', 'Wave+ Serrated Edge Knife Blade', 'Curl Plain Blade',
                          'Charge+ Plain Blade', 'Charge+ Serrated Blade', 'Wave Alpha Magnacut Blade',
                          'Wave Alpha Saw', 'Signal Combo Edge Blade']
            },
            'Wave Alpha Scissors': {
                type: 'Wave-style file/saw lock',
                perfect: ['Wave+ Metal/Diamond File', 'Wave+ Wood Saw', 'Curl File', 'Charge+ File', 'Charge+ Saw',
                          'Wave Alpha Scissors', 'Wave Alpha File', 'Signal Saw']
            },
            'Wave Alpha File': {
                type: 'Wave-style file/saw lock',
                perfect: ['Wave+ Metal/Diamond File', 'Wave+ Wood Saw', 'Curl File', 'Charge+ File', 'Charge+ Saw',
                          'Wave Alpha Scissors', 'Wave Alpha File', 'Signal Saw']
            },
            'Signal Combo Edge Blade': {
                type: 'Wave-style blade lock',
                perfect: ['Wave+ Plain Edge Knife Blade', 'Wave+ Serrated Edge Knife Blade', 'Curl Plain Blade',
                          'Charge+ Plain Blade', 'Charge+ Serrated Blade', 'Wave Alpha Magnacut Blade',
                          'Wave Alpha Saw', 'Signal Combo Edge Blade']
            },
            'Signal Saw': {
                type: 'Wave-style file/saw lock',
                perfect: ['Wave+ Metal/Diamond File', 'Wave+ Wood Saw', 'Curl File', 'Charge+ File', 'Charge+ Saw',
                          'Wave Alpha Scissors', 'Wave Alpha File', 'Signal Saw']
            },
            // Surge's blade sits in an externally-accessible slot (per stackData.Surge.externalTools).
            // Per Zach's Jun 2026 deep-dive, this does NOT extend to Super Tool 300's internal blades
            // despite sharing an internal-tool locking family with Surge — Surge Plain/Serrated Blade
            // should not return Super Tool 300 blades as compatible (overrides the earlier "Building a
            // Leatherman Supersurge" video read; Zach's direct fitment testing takes precedence). Super
            // Tool 300's blades are intentionally left untagged here, so a comparison against Surge's
            // tagged blade family falls into the "only one side documented" incompatible path below
            // rather than matching.
            'Surge Plain Edge Knife Blade':    { type: 'Surge blade lock', perfect: ['Surge Plain Edge Knife Blade', 'Surge Serrated Edge Knife Blade'] },
            'Surge Serrated Edge Knife Blade': { type: 'Surge blade lock', perfect: ['Surge Plain Edge Knife Blade', 'Surge Serrated Edge Knife Blade'] },
            'Surge T-Shank Exchanger':         { type: 'Surge T-shank lock', perfect: ['Surge T-Shank Exchanger', 'Surge Scissors'] },
            'Surge Scissors':                  { type: 'Surge T-shank lock', perfect: ['Surge T-Shank Exchanger', 'Surge Scissors'] },
            // Sidekick/Wingman/Rev/Bolster split into two non-interchangeable families per the
            // Nov 17 2025 Locking Geometry - OUTER chart: blades vs. saws/scissors don't share locking geometry.
            'Sidekick 420HC Plain Edge Knife': {
                type: 'Sidekick/Wingman blade lock',
                perfect: ['Sidekick 420HC Plain Edge Knife', 'Wingman 420HC Combo Knife', 'Rev Plain Blade', 'Bolster Plain Blade']
            },
            'Sidekick Wood Saw': {
                type: 'Sidekick/Wingman saw lock',
                perfect: ['Sidekick Wood Saw', 'Wingman Scissors']
            },
            'Wingman 420HC Combo Knife': {
                type: 'Sidekick/Wingman blade lock',
                perfect: ['Sidekick 420HC Plain Edge Knife', 'Wingman 420HC Combo Knife', 'Rev Plain Blade', 'Bolster Plain Blade']
            },
            'Wingman Scissors': {
                type: 'Sidekick/Wingman saw lock',
                perfect: ['Sidekick Wood Saw', 'Wingman Scissors']
            },
            // Rev/Bolster only appeared as values inside Sidekick/Wingman's blade-lock entries above
            // (same gap as Curl/Charge+/Wave Alpha/Signal) — backfilled directly from the spreadsheet.
            // Rev/Bolster have no "saw" row in the OUTER tab, so no saw-lock entry exists for them.
            'Rev Plain Blade': {
                type: 'Sidekick/Wingman blade lock',
                perfect: ['Sidekick 420HC Plain Edge Knife', 'Wingman 420HC Combo Knife', 'Rev Plain Blade', 'Bolster Plain Blade']
            },
            'Bolster Plain Blade': {
                type: 'Sidekick/Wingman blade lock',
                perfect: ['Sidekick 420HC Plain Edge Knife', 'Wingman 420HC Combo Knife', 'Rev Plain Blade', 'Bolster Plain Blade']
            }
        };
