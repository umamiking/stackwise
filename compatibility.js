        const toolData = rawData
            .map(item => ({ ...item, Size: item.Size.replace(/ mm$/, '').trim() }))
            .filter(item => item.Size && item.Size !== '' && !isNaN(parseFloat(item.Size)));

        const models = [...new Set(toolData.filter(t => t.Brand === "Leatherman").map(t => t.Tool))].sort();

        function getSwapResults(componentName, size, sourceModel) {
          // Strip dimension suffix (e.g. "Knife 2.54mm (0.10")") before lookup
          const lookupName = componentName.replace(/\s+\d+\.\d+mm.*$/, '');

          // The same physical part is often given a different name on different platforms
          // (e.g. Free P4 "Phillips Screwdriver/Bottle Opener" vs Arc "Flat Screwdriver/Bottle
          // Opener"), so match against every component, including ones on the SAME model — e.g.
          // a Wave+ Wood Saw can swap into a Wave+ Metal/Diamond File's slot, since they share the
          // same locking family on that one tool. analyzeCompatibility() determines real
          // compatibility (locking geometry family for tagged external tools, platform-level
          // locking otherwise), so same-model candidates still get filtered correctly.
          const candidates = toolData.filter(t =>
            t.Brand === 'Leatherman' &&
            t.Measurement === 'Tool Thickness' &&
            !t.Component.startsWith('Bronze Washer') &&
            !t.Component.startsWith('Spacer (') &&
            !t.Component.startsWith('Keyed Washer') &&
            // Exclude the literal same component on the same model (a "circular" swap, e.g. Arc
            // Bit Driver -> Arc Bit Driver) per Zach's Jun 2026 feedback. Same-model, DIFFERENT
            // component candidates (e.g. Wave+ Wood Saw -> Wave+ Metal/Diamond File) still pass.
            !(t.Tool === sourceModel && t.Component === lookupName)
          );

          return candidates.map(candidate => {
            const compat = analyzeCompatibility(
              size,
              parseFloat(candidate.Size),
              sourceModel,
              candidate.Tool,
              lookupName,
              candidate.Component
            );
            return {
              model: candidate.Tool,
              component: candidate.Component,
              size: parseFloat(candidate.Size),
              ...compat
            };
          }).filter(r => r.category !== 'incompatible')
            .sort((a, b) => {
              const order = { perfect: 0, 'close-fit': 1, 'needs-spacer': 2 };
              return (order[a.category] ?? 3) - (order[b.category] ?? 3);
            });
        }

        // Analyze compatibility between two sizes
        function analyzeCompatibility(originalSize, newSize, sourceModel, targetModel, sourceComponent, targetComponent) {
            const diff = newSize - originalSize;
            const absDiff = Math.abs(diff);

            // Check pivot compatibility FIRST - this is a hard requirement
            const sourcePivot = toolData.find(t => t.Tool === sourceModel && t.Measurement === "Pivot Size" && t.Component.includes("Tool"));
            const targetPivot = toolData.find(t => t.Tool === targetModel && t.Measurement === "Pivot Size" && t.Component.includes("Tool"));

            const pivotCompatible = sourcePivot && targetPivot &&
                Math.abs(parseFloat(sourcePivot.Size) - parseFloat(targetPivot.Size)) <= 0.05;

            // If pivots don't match, it's incompatible regardless of thickness
            if (!pivotCompatible && sourcePivot && targetPivot) {
                return {
                    diff,
                    category: 'incompatible',
                    spacerRecommendation: null,
                    pivotIssue: `Source pivot: ${sourcePivot.Size}mm vs Target pivot: ${targetPivot.Size}mm`,
                    lockingIssue: null,
                    lockingNote: null
                };
            }

            // Free P2/P4/Arc: a long-bodied donor tool can't swap into a short tool's slot, but a
            // short donor tool can always swap into a long tool's slot (see freeArcLongTools
            // above). sourceComponent/sourceModel is the slot being filled; targetComponent/
            // targetModel is the candidate donor part being inserted into it.
            if (freeArcLongTools[sourceModel] && freeArcLongTools[targetModel]) {
                const sourceIsLong = freeArcLongTools[sourceModel].includes(sourceComponent);
                const targetIsLong = freeArcLongTools[targetModel].includes(targetComponent);
                if (targetIsLong && !sourceIsLong) {
                    return {
                        diff,
                        category: 'incompatible',
                        spacerRecommendation: null,
                        pivotIssue: null,
                        lockingIssue: `${targetComponent} is a long tool on ${targetModel} and can't swap into ${sourceModel}'s shorter ${sourceComponent} slot`,
                        lockingNote: `Long tools can't replace short tools (short tools can replace long tools) — ${targetModel} ${targetComponent} is long, ${sourceModel} ${sourceComponent} is short`
                    };
                }
            }

            // Wildcard long-implement exclusions (see longImplementWildcards above) — same
            // direction as the Free/Arc long/short rule: a long donor component can't fill one of
            // these specifically-named short slots, even though it isn't otherwise tagged "long".
            const sourceSlotKey = `${sourceModel} ${sourceComponent}`;
            const targetSlotKey = `${targetModel} ${targetComponent}`;
            for (const group of longImplementWildcards) {
                if (group.long.includes(targetSlotKey) && group.shortSlots.includes(sourceSlotKey)) {
                    return {
                        diff,
                        category: 'incompatible',
                        spacerRecommendation: null,
                        pivotIssue: null,
                        lockingIssue: `${targetComponent} (${targetModel}) is a known-long implement that doesn't fit ${sourceModel}'s ${sourceComponent} slot`,
                        lockingNote: `Known fitment exception (per real-world testing): ${targetModel} ${targetComponent} is longer than most components in its family and won't fit this slot`
                    };
                }
            }

            // Check if these are external tools by checking if they exist in externalLockingGeometry,
            // keyed as "<Tool> <Component>" so the same component name on different tools
            // (e.g. "Plain Edge Knife Blade") maps to that tool's own locking family.
            const sourceExternalKey = sourceSlotKey;
            const targetExternalKey = targetSlotKey;
            const sourceTaggedExternal = !!externalLockingGeometry[sourceExternalKey];
            const targetTaggedExternal = !!externalLockingGeometry[targetExternalKey];

            let lockingCompatibility = 'perfect'; // Default for tools without locking data
            let lockingIssue = null;
            let lockingNote = null;

            if (sourceComponent === 'Plier Head' && targetComponent === 'Plier Head') {
                // Plier Head swaps use their own dedicated locking-geometry groups (see
                // plierLockingGroups) instead of the general internal-tool table — no "close" tier,
                // no cross-group compatibility.
                const sourceGroup = plierLockingGroups.find(g => g.includes(sourceModel));
                if (!sourceGroup || !sourceGroup.includes(targetModel)) {
                    return {
                        diff,
                        category: 'incompatible',
                        spacerRecommendation: null,
                        pivotIssue: null,
                        lockingIssue: `Plier head locking geometry incompatible between ${sourceModel} and ${targetModel}`,
                        lockingNote: `${sourceModel} and ${targetModel} plier heads use different locking geometry families`
                    };
                }
                lockingNote = `${sourceModel} and ${targetModel} plier heads share the same locking geometry family`;
            } else if (sourceTaggedExternal || targetTaggedExternal) {
                // Either side has documented component-level (outer) locking geometry — that family
                // is authoritative for this component type and should not fall back to the coarser
                // per-model internal-tool table, even if only one side has documented data.
                if (!sourceTaggedExternal || !targetTaggedExternal) {
                    return {
                        diff,
                        category: 'incompatible',
                        spacerRecommendation: null,
                        pivotIssue: null,
                        lockingIssue: `External tool locking geometry incompatible: ${sourceComponent} ✗ ${targetComponent}`,
                        lockingNote: `Only one of ${sourceComponent}/${targetComponent} has documented component-level locking geometry — not confirmed interchangeable`
                    };
                }

                const sourceExternalLocking = externalLockingGeometry[sourceExternalKey];
                const targetExternalLocking = externalLockingGeometry[targetExternalKey];

                if (sourceExternalLocking.perfect.includes(targetExternalKey)) {
                    lockingCompatibility = 'perfect';
                    lockingNote = `Both use ${sourceExternalLocking.type} external locking geometry`;
                } else {
                    // External tools not compatible
                    return {
                        diff,
                        category: 'incompatible',
                        spacerRecommendation: null,
                        pivotIssue: null,
                        lockingIssue: `External tool locking geometry incompatible: ${sourceComponent} ✗ ${targetComponent}`,
                        lockingNote: `${sourceComponent} uses ${sourceExternalLocking.type}; ${targetComponent} uses ${targetExternalLocking.type} — not interchangeable`
                    };
                }
            } else if (lockingGeometry[sourceModel] && lockingGeometry[targetModel]) {
                // Check INTERNAL tool locking geometry compatibility
                const sourceLocking = lockingGeometry[sourceModel];

                if (sourceLocking.perfect.includes(targetModel)) {
                    lockingCompatibility = 'perfect';
                    lockingNote = `${sourceModel} and ${targetModel} internal tools share matching locking geometry`;
                } else if (sourceLocking.close.includes(targetModel)) {
                    lockingCompatibility = 'close';
                    lockingIssue = 'Locking geometry is close fit - may require minor adjustment';
                    lockingNote = `${sourceModel} and ${targetModel} internal tools are a close-fit locking geometry — may require minor adjustment`;
                } else {
                    // Not in either list - incompatible locking geometry
                    return {
                        diff,
                        category: 'incompatible',
                        spacerRecommendation: null,
                        pivotIssue: null,
                        lockingIssue: `Locking geometry incompatible between ${sourceModel} and ${targetModel} internal tools`,
                        lockingNote: `${sourceModel} and ${targetModel} internal tools use incompatible locking geometry`
                    };
                }
            }

            // Determine spacer pack
            const waveCompatibleModels = ['Wave+', 'Rebar', 'Surge', 'Wingman', 'Sidekick'];
            const arcCompatibleModels = ['Arc', 'Free P4', 'Free P2'];

            const spacerPack = waveCompatibleModels.includes(targetModel) ? '5mm' :
                             arcCompatibleModels.includes(targetModel) ? '3.5mm' : '5mm';

            const availableSpacers = spacerPack === '5mm'
                ? [0.1, 0.5, 1.0]
                : [0.1, 0.5];

            let category, badgeText, spacerRecommendation = null;

            // Perfect fit - within 0.05mm
            if (absDiff <= 0.05) {
                category = 'perfect';
                badgeText = '✓ Perfect Fit';
            }
            // Close fit - within 0.3mm, works with handle compression/expansion
            else if (absDiff <= 0.3) {
                category = 'close-fit';
                badgeText = '⚡ Close Fit';
            }
            // Replacement is THICKER by more than 0.3mm - cannot expand handle enough
            else if (diff > 0.3) {
                category = 'incompatible';
                badgeText = '✗ Too Thick';
            }
            // Replacement is THINNER - can potentially use spacers to fill the gap
            else if (diff < 0 && absDiff <= 2.0) {
                const spacerCombo = findBestSpacerCombo(absDiff, availableSpacers, true);
                if (spacerCombo) {
                    category = 'needs-spacer';
                    badgeText = '🔧 Needs Spacer';
                    spacerRecommendation = spacerCombo;
                } else {
                    category = 'incompatible';
                    badgeText = '✗ Gap Too Large';
                    lockingIssue = `Gap of ${absDiff.toFixed(2)}mm exceeds the 2mm total spacer limit (max practical spacer stack)`;
                }
            }
            // Too much difference (thinner by more than 2mm)
            else {
                category = 'incompatible';
                badgeText = '✗ Won\'t Work';
            }

            // Adjust badge if locking is close fit
            if (lockingCompatibility === 'close' && category !== 'incompatible') {
                badgeText += ' (Close Lock)';
            }

            return {
                diff,
                category,
                spacerRecommendation,
                pivotIssue: null,
                lockingIssue: lockingIssue,
                lockingNote: lockingNote
            };
        }

        // Find best spacer combination to fill a gap
        function findBestSpacerCombo(gap, availableSpacers, needsShim) {
            if (!needsShim || gap < 0.05) return null;

            const target = gap;
            const maxSpacers = 5; // Max number of individual spacers
            const maxTotalThickness = 2.0; // Max total spacer thickness in mm

            // If gap exceeds max total thickness, can't fill it
            if (gap > maxTotalThickness) return null;

            let bestCombo = null;
            let bestDiff = Infinity;

            function tryCombo(spacers, currentSum, depth) {
                if (depth > maxSpacers) return;
                if (currentSum > maxTotalThickness) return; // Enforce total thickness limit

                const diff = Math.abs(currentSum - target);
                if (diff < bestDiff && currentSum >= target - 0.05 && currentSum <= target + 0.05) {
                    bestDiff = diff;
                    bestCombo = [...spacers];
                }

                for (let spacer of availableSpacers) {
                    if (currentSum + spacer <= target + 0.5 && currentSum + spacer <= maxTotalThickness) {
                        tryCombo([...spacers, spacer], currentSum + spacer, depth + 1);
                    }
                }
            }

            tryCombo([], 0, 0);

            if (bestCombo && bestCombo.length > 0) {
                const counts = {};
                bestCombo.forEach(s => counts[s] = (counts[s] || 0) + 1);
                const comboStr = Object.entries(counts)
                    .map(([size, count]) => `${count}x ${size}mm`)
                    .join(' + ');
                return comboStr;
            }

            return null;
        }
