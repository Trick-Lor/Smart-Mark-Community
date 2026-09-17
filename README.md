# Smart Mark

![Manifest V3](https://img.shields.io/badge/Manifest-V3-5b8cff) ![No data collected](https://img.shields.io/badge/privacy-no%20data%20collected-22b14b) ![Issues](https://img.shields.io/github/issues/Trick-Lor/smart-mark-community)

Mark and highlight any web page with keyboard shortcuts. No toolbar, no menus, no mouse required.

[**Get it on GitHub**](https://github.com/Trick-Lor/smart-mark-community) &middot; [Full guide](https://smartmark.hoducanh.com) &middot; [Privacy](https://github.com/Trick-Lor/smart-mark-community/blob/main/privacy.md) &middot; [Report an issue](https://github.com/Trick-Lor/smart-mark-community/issues)

Free - No data collected - Works on any web page

Full guide with every feature, in English and Vietnamese: https://smartmark.hoducanh.com

[![Smart Mark demo](https://img.youtube.com/vi/6NlwbRJomok/maxresdefault.jpg)](https://youtu.be/6NlwbRJomok)

## What it does

Smart Mark lets you mark and highlight any element or area on a web page using keyboard shortcuts - outline elements, draw areas, and save layouts. No toolbar, no menus, no mouse required. No data collected; everything stays on your device.

## Core features

### Element Marking

Hover over any element on a web page - a button, image, card, or paragraph - and drop a clean box marker that hugs that element. Great for pointing things out in screenshots, bug reports, and tutorials.

1. Press `Alt + Z` to turn on Element mode. A small toast confirms the mode.
2. Move the mouse over an element. A blue outline shows the exact element that will be marked; a green preview shows the marker shape.
3. Press `Shift + Z` to place a marker on the hovered element.
4. Move to another element and press `Shift + Z` again to mark more.
5. Press `Esc` to exit Element mode when you are done.

- `Alt + Z` - toggle Element mode
- `Shift + Z` - place or remove a marker on the hovered element
- `Ctrl + Shift + Z` - click to remove element markers
- `Ctrl + Shift + Alt + Z` - remove all element markers
- `Esc` - exit the mode

### Free Draw

Draw a rectangular marker anywhere on the page, not tied to any element. Drag it out freely, or click two opposite corners for precision.

1. Press `Alt + X` to turn on Free Draw mode.
2. Click and drag on the page to draw a rectangle, then release to place the marker.
3. Optional: press `Shift + X` to switch to two-click mode - click one corner, then the opposite corner.
4. Repeat to draw more markers.
5. Press `Esc` to exit when you are done.

- `Alt + X` - turn on Free Draw mode (drag to draw)
- `Shift + X` - switch to two-click corner mode
- `Ctrl + Shift + X` - click to remove free-draw markers
- `Ctrl + Shift + Alt + X` - remove all free-draw markers
- `Esc` - exit the mode

### Element Merge

Mark a precise rectangular area defined by two elements. The box spans from the first element's top-left corner to the second element's bottom-right corner - perfect for marking a whole section that covers several elements.

1. Press `Alt + Q` to turn on Merge mode.
2. Click the first element. Smart Mark records its top-left corner and starts a live box.
3. Move to a second element. An orange outline shows the span that will be marked.
4. Click the second element. The marker now covers the area from element one's top-left to element two's bottom-right.
5. Press `Esc` to exit when you are done.

- `Alt + Q` - turn on Merge mode, then click two elements
- `Ctrl + Shift + D` - click to remove any marker
- `Ctrl + Shift + Alt + D` - remove all markers on the page
- `Esc` - exit the mode

### Shape and Fit

Change the marker shape (Rectangle, Oval, Diamond) and how tightly it fits its target, on the fly with the keyboard. The change applies to the markers you draw next, in any marking mode.

1. Press `Alt + O` to cycle the shape: Rectangle, Oval, Diamond.
2. Press `Alt + W` to cycle the fit: Inscribe (inside the box), Median (middle), Circumscribe (around the box).
3. Press `Alt + =` or `Alt + -` to grow or shrink the box by 5 px; hold `Ctrl` too for 1 px steps.
4. Draw a marker - it uses the current shape, fit, and offset.
5. You can also set these as defaults in the Options page (including border radius).

- `Alt + O` - cycle shape: Rectangle, Oval, Diamond
- `Alt + W` - cycle fit: Inscribe, Median, Circumscribe
- `Alt + =` - offset +5 px (coarse)
- `Alt + -` - offset -5 px (coarse)
- `Ctrl + Alt + =` - offset +1 px (fine)
- `Ctrl + Alt + -` - offset -1 px (fine)


## More

### Save and Load Layouts

Save the markers on a page into a numbered slot, then restore them any time - up to 10 slots per page. Great for reusable review checklists or coming back to a page later.

1. Press `Ctrl + Shift + Alt + 0-9` to save the current markers to slot 0 through 9.
2. Reload or come back to the page later.
3. Press `Alt + 0-9` to load the markers back from that slot (it replaces the current markers).
4. The popup highlights which slots are occupied.

- `Ctrl + Shift + Alt + 0-9` - save current markers to slot N
- `Alt + 0-9` - load markers from slot N (replaces current)

### Undo and Redo

Step backward and forward through your marking actions, so a mistake is never more than one keypress away.

1. Press `Ctrl + Z` to undo the last marker action.
2. Press `Ctrl + Y` to redo it.
3. Undo and redo cover both creating and deleting markers.

- `Ctrl + Z` - undo the last marker action
- `Ctrl + Y` - redo the last undone action

### Remove Markers

Remove one marker by clicking it, or clear the whole page at once - works across every marking mode.

1. Press `Ctrl + Shift + D`, then click any marker to remove just that one.
2. Press `Ctrl + Shift + Alt + D` to clear all markers on the page at once.
3. Press `Esc` to leave the remove mode.

- `Ctrl + Shift + D` - click to remove any single marker
- `Ctrl + Shift + Alt + D` - remove all markers on the page
- `Esc` - exit remove mode

### Marker Colors

Give each marking mode its own color, so element marks, free-draw marks, and merges are easy to tell apart at a glance.

1. Open the Options page and expand the Colors section.
2. Pick a color for each mode: Marker, Element, Free draw, Merge, Clear/Delete, Overlay.
3. The change applies live - the matching preview, outline, and marker all switch to the chosen hue.
4. Use Reset colors to go back to the built-in defaults.

- `Ctrl + Alt + ,` - open the Options page where colors live

### Mode Toasts

A small floating pill confirms each mode change and shortcut press, so you always know what is active. You can turn it off or hide the key combo.

1. Trigger any mode - a toast appears at the bottom of the page.
2. Press `Alt + T` to toggle the toast on or off.
3. Press `Shift + Alt + T` to toggle whether the toast shows the key combo.
4. The same options are in the Notifications section of the Options page.

- `Alt + T` - toggle the shortcut toast on/off
- `Shift + Alt + T` - toggle whether the toast shows the combo

### Custom Shortcuts

Every shortcut is rebindable. Set the key combos that fit your hands from the Options page - no reload needed.

1. Open the Options page and expand Keyboard Shortcuts.
2. Click Edit on any row, then press the new key combo.
3. Smart Mark checks it against reserved system combos and other rows, then saves it.
4. Use Reset all to defaults to undo every override at once.

- `Ctrl + ,` - open the popup
- `Ctrl + Alt + ,` - open the Options page

### Popup and Options

Open a compact popup for quick marker settings, or the full Options page for everything - colors, shapes, slots, notifications, and shortcuts - all without leaving the keyboard.

1. Press `Ctrl + ,` to open the popup (or click the toolbar icon).
2. In the popup: set shape, fit, and offset; see which slots are saved; view the live shortcut list.
3. Press `Ctrl + Alt + ,` to open the full Options page in a new tab.
4. In Options: marker config plus border radius, six per-mode colors, marker slots, notification toggles, and rebindable shortcuts.
5. The popup footer link also opens the Options page.

- `Ctrl + ,` - open the popup
- `Ctrl + Alt + ,` - open the Options page


## Privacy

No data is collected. All marker layouts are stored locally on your device
(`chrome.storage.local`) and are never transmitted anywhere. See the
[privacy policy](https://github.com/Trick-Lor/smart-mark-community/blob/main/privacy.md).

## Links

- Full guide: https://smartmark.hoducanh.com
- Home: https://github.com/Trick-Lor/smart-mark-community
- Support / issues: https://github.com/Trick-Lor/smart-mark-community/issues
- Privacy: https://github.com/Trick-Lor/smart-mark-community/blob/main/privacy.md

---

Generated from `.agents/scripts/feature-demos.config.mjs`. Edit the config, then run
`node .agents/scripts/gen-readme.mjs`.
