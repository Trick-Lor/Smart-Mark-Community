---
title: "Profiles and Presets"
description: "Save your whole set-up - every setting, your marker slots, and your presets - as a named profile."
---

# Profiles and Presets

Save your whole set-up - every setting, your marker slots, and your presets - as a named profile. Switch between profiles, apply a preset such as Highlighter, move a set-up to another computer as a file, and undo a change you regret.

::: info
Available from Smart Mark 1.1.0. If your installed version is older, this feature arrives with the next Chrome Web Store update.
:::

_Video coming soon._

## Before you start

- Open the Options page (`Ctrl + Alt + ,`).

## Step by step

1. Open the Options page and expand Profiles. The first time, Smart Mark creates a Default profile from your current settings.
2. Change any setting. The profile bar shows modified (N), and See changes lists what differs. Nothing is written into the profile until you save.
3. Save overwrites the selected profile and first shows a before / after list where you can leave any change out. Save as stores a new profile under a new name.
4. Pick another profile to switch. With unsaved changes you are asked to Save first, Discard, or Cancel, and you see the change list before anything is applied.

## Presets

- A preset changes only a few settings. Five ship with Smart Mark: Defaults, Highlighter (35% yellow fill with a thin line), Bug report, High contrast, and Subtle.
- Hover a preset row to see it in the live preview; Apply shows the change list first.
- Restore default presets brings back a shipped preset you deleted.

## Export and import

- Export downloads the profile as a JSON file. Export with comments (.jsonc) writes a commented file; Export all downloads one file per profile.
- Include marker slots decides whether your saved slots travel with the profile.
- Import reads a profile or a preset file. A file with the same name overwrites the existing one after you confirm the change list.
- Unknown settings and out-of-range values are skipped with a warning; the rest of the file still loads.

## Tips

- Undo reverses the last bulk change (apply, switch, import, or reset). It keeps one level, so pressing it again redoes the change.
- The Reset buttons return to the selected profile's values, not to factory defaults.

## Shortcuts used here

| Keys | Action |
| --- | --- |
| `Ctrl + Alt + ,` | open the Options page where Profiles live |

The combos above are the defaults; every one of them can be rebound on the Options page.
