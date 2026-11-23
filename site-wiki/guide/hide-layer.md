---
title: "Hide Layers"
description: "A cookie banner, a sticky header, or a popup covers what you want to mark?"
---

# Hide Layers

A cookie banner, a sticky header, or a popup covers what you want to mark? Hide it with one click, mark what is under it, and bring it back when you are done. Nothing on the page is deleted.

::: info
Available from Smart Mark 1.1.0. If your installed version is older, this feature arrives with the next Chrome Web Store update.
:::

![Hide Layers](/media/hide-layer.gif)

## Before you start

- Smart Mark installed.
- A page where something covers the part you want to mark.

## Step by step

1. Press `Alt + A` to turn on Hide mode. The element under the mouse gets a red box with a big X.
2. Click to hide it. A toast shows how many layers are hidden, and the number also shows on the toolbar icon.
3. Mark what was underneath with any marking mode.
4. Press `Alt + A` again or `Esc` to leave Hide mode. Hidden layers stay hidden.
5. `Ctrl + Z` undoes a hide like any marker step, and `Ctrl + Y` redoes it. `Ctrl + Shift + Alt + A` shows every hidden layer at once.

## Hide while you mark

- In Element mode (`Alt + Z`) or Merge mode (`Alt + Q`), hold `Alt`: after a short delay the preview turns red. `Alt` + click hides; a plain click marks as usual.
- Hit the wrong element? Keep the key held and roll the mouse wheel up to move to the parent element, down to go back. The page does not scroll meanwhile.

## Settings

- Options > Marker Configuration > Hide layer: Hide from pick modes (on / off), Hide modifier (Alt, Shift, or Ctrl), Climb to parent (Mouse wheel, Arrow up / down, Plus / minus, or Custom shortcuts), and Hide preview delay (default 300 ms).
- Options > Notifications: Hide toast and Hidden count badge. Options > Colors & Style: Hide preview color.

## Tips

- The element stays in the page and keeps its space, so the layout and your markers do not move.
- Hidden layers stay hidden in image marking (`Alt + I`) and in the screenshot export.
- Clearing markers does not show hidden layers again. Reloading the page shows everything again.

## Shortcuts used here

| Keys | Action |
| --- | --- |
| `Alt + A` | toggle Hide mode, then click a layer to hide it |
| `Ctrl + Shift + Alt + A` | show every hidden layer again (one undo step) |
| `Ctrl + Z` | undo the last step, a hide included |
| `Esc` | leave Hide mode |

The combos above are the defaults; every one of them can be rebound on the Options page.
