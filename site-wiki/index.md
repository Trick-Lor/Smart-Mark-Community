---
title: "Smart Mark - Mark and highlight any web page with keyboard shortcuts."
titleTemplate: false
description: "Smart Mark lets you mark and highlight any element or area on a web page using keyboard shortcuts - outline elements, draw areas, and save layouts. Point with the mouse, act with the keys: no toolbar, no menus. No data collected; everything stays on your device."
outline: [2, 3]
pageClass: sm-home
---

# Smart Mark

<p class="sm-lead">Mark and highlight any web page with keyboard shortcuts.</p>

Smart Mark lets you mark and highlight any element or area on a web page using keyboard shortcuts - outline elements, draw areas, and save layouts. Point with the mouse, act with the keys: no toolbar, no menus. No data collected; everything stays on your device.

<div class="sm-actions"><a class="sm-button sm-button--brand" href="https://chromewebstore.google.com/detail/smart-mark/hpoalckkedhkjeanpkgjimcnljbddogl">Add to Chrome</a><a class="sm-button" href="https://github.com/Trick-Lor/smart-mark-community">Community on GitHub</a><a class="sm-button" href="#quick-start">Quick start</a></div>

## Quick start {#quick-start}

1. Install Smart Mark and pin its icon to the toolbar.
2. Open any normal web page and press `Alt + Z` to turn on Element mode.
3. Hover an element and press `Shift + Z` - that is your first marker. Press `Esc` to exit.

<div class="sm-video">
  <iframe src="https://www.youtube-nocookie.com/embed/6NlwbRJomok" title="Smart Mark demo" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
</div>

## Core features {#core-features}

Each block below sums up one feature; the link at the end of a block opens its full guide.

### Element Marking {#element-marking}

Hover over any element on a web page - a button, image, card, or paragraph - and drop a clean box marker that hugs that element. Great for pointing things out in screenshots, bug reports, and tutorials.

| Keys | Action |
| --- | --- |
| `Alt + Z` | toggle Element mode |
| `Shift + Z` | place or remove a marker on the hovered element |
| `Ctrl + Shift + Z` | click to remove element markers |
| `Ctrl + Shift + Alt + Z` | remove all element markers |

[Full guide: Element Marking](/guide/element-marking)

### Free Draw {#free-draw}

Draw a rectangular marker anywhere on the page, not tied to any element. Drag it out freely, or click two opposite corners for precision.

| Keys | Action |
| --- | --- |
| `Alt + X` | turn on Free Draw mode (drag to draw) |
| `Shift + X` | switch to two-click corner mode |
| `Ctrl + Shift + X` | click to remove free-draw markers |
| `Ctrl + Shift + Alt + X` | remove all free-draw markers |

[Full guide: Free Draw](/guide/free-draw)

### Element Merge {#element-merge}

Mark a precise rectangular area defined by two elements. The box spans from the first element's top-left corner to the second element's bottom-right corner - perfect for marking a whole section that covers several elements.

| Keys | Action |
| --- | --- |
| `Alt + Q` | turn on Merge mode, then click two elements |
| `Ctrl + Shift + D` | click to remove any marker |
| `Ctrl + Shift + Alt + D` | remove all markers on the page |
| `Esc` | exit the mode |

[Full guide: Element Merge](/guide/element-merge)

### Shape and Fit {#shape-and-fit}

Change the marker shape (Rectangle, Oval, Diamond) and how tightly it fits its target, on the fly with the keyboard. The change applies to the markers you draw next, in any marking mode.

| Keys | Action |
| --- | --- |
| `Alt + O` | cycle shape: Rectangle, Oval, Diamond |
| `Alt + W` | cycle fit: Inscribe, Median, Circumscribe |
| `Alt + =` | offset +5 px (coarse) |
| `Alt + -` | offset -5 px (coarse) |

[Full guide: Shape and Fit](/guide/shape-and-fit)

### Image Marking {#image-marking}

When a page is one big image, a video, an SVG, or a screenshot, there is no element to hover. Image marking scans the page, finds the visual blocks, and lets you pick them by click or with one key.

| Keys | Action |
| --- | --- |
| `Alt + I` | scan the page and show the numbered blocks (press again to leave) |
| `Esc` | leave the mode and remove the numbered boxes |

[Full guide: Image Marking](/guide/image-marking)

## Smaller features {#smaller-features}

### Save and Load Layouts {#save-and-load}

Save the markers on a page into a numbered slot, then restore them any time - up to 10 slots per page. Great for reusable review checklists or coming back to a page later.

<img class="sm-demo" src="/media/save-and-load.gif" alt="Save and Load Layouts" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + Shift + Alt + 0-9` | save current markers to slot N |
| `Alt + 0-9` | load markers from slot N (replaces current) |

[Full guide: Save and Load Layouts](/guide/save-and-load)

### Undo and Redo {#history}

Step backward and forward through your marking actions, so a mistake is never more than one keypress away.

<img class="sm-demo" src="/media/history.gif" alt="Undo and Redo" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + Z` | undo the last marker action |
| `Ctrl + Y` | redo the last undone action |

[Full guide: Undo and Redo](/guide/history)

### Remove Markers {#cleanup}

Remove one marker by clicking it, or clear the whole page at once - works across every marking mode.

<img class="sm-demo" src="/media/cleanup.gif" alt="Remove Markers" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + Shift + D` | click to remove any single marker |
| `Ctrl + Shift + Alt + D` | remove all markers on the page |
| `Esc` | exit remove mode |

[Full guide: Remove Markers](/guide/cleanup)

### Hide Layers {#hide-layer}

A cookie banner, a sticky header, or a popup covers what you want to mark? Hide it with one click, mark what is under it, and bring it back when you are done. Nothing on the page is deleted.

<img class="sm-demo" src="/media/hide-layer.gif" alt="Hide Layers" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Alt + A` | toggle Hide mode, then click a layer to hide it |
| `Ctrl + Shift + Alt + A` | show every hidden layer again (one undo step) |
| `Ctrl + Z` | undo the last step, a hide included |
| `Esc` | leave Hide mode |

[Full guide: Hide Layers](/guide/hide-layer)

### Mark Selected Text {#mark-text}

Select some text, right-click it, and mark exactly that text: as one box around it, or as a highlight band on each line, like a highlighter pen.

<img class="sm-demo" src="/media/mark-text.gif" alt="Mark Selected Text" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + Z` | undo the last mark, a whole highlight included |
| `Ctrl + Alt + ,` | open the Options page to bind the shortcut |

[Full guide: Mark Selected Text](/guide/mark-text)

### Marker Colors {#colors}

Give each marking mode its own color, so element marks, free-draw marks, and merges are easy to tell apart at a glance.

<img class="sm-demo" src="/media/colors.gif" alt="Marker Colors" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + Alt + ,` | open the Options page where colors live |

[Full guide: Marker Colors](/guide/colors)

### Mode Toasts {#notifications}

A small floating pill confirms each mode change and shortcut press, so you always know what is active. You can turn it off or hide the key combo.

<img class="sm-demo" src="/media/notifications.gif" alt="Mode Toasts" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Alt + T` | toggle the shortcut toast on/off |

[Full guide: Mode Toasts](/guide/notifications)

### Custom Shortcuts {#custom-shortcuts}

Set the key combos that fit your hands from the Options page - no reload needed. Almost every shortcut can be changed, and any one can be switched off.

<img class="sm-demo" src="/media/custom-shortcuts.gif" alt="Custom Shortcuts" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + ,` | open the popup |
| `Ctrl + Alt + ,` | open the Options page |

[Full guide: Custom Shortcuts](/guide/custom-shortcuts)

### Popup and Options {#settings}

Open a compact popup for quick marker settings, or the full Options page for everything - colors, shapes, slots, notifications, and shortcuts - all without leaving the keyboard.

<img class="sm-demo" src="/media/settings.gif" alt="Popup and Options" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + ,` | open the popup |
| `Ctrl + Alt + ,` | open the Options page |

[Full guide: Popup and Options](/guide/settings)

### UI Themes {#themes}

Change the look of the popup and the Options page. Six themes ship, light and dark. Markers on web pages look the same in all of them.

<img class="sm-demo" src="/media/themes.gif" alt="UI Themes" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + Alt + ,` | open the Options page where the theme select lives |

[Full guide: UI Themes](/guide/themes)

### Settings Search {#settings-search}

Find any setting, section, or shortcut by typing a word or a key combo. It works in both the popup and the Options page, and it only filters and jumps - it never runs an action.

<img class="sm-demo" src="/media/settings-search.gif" alt="Settings Search" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + ,` | open the popup |
| `Ctrl + Alt + ,` | open the Options page |

[Full guide: Settings Search](/guide/settings-search)

### Profiles and Presets {#profiles}

Save your whole set-up - every setting, your marker slots, and your presets - as a named profile. Switch between profiles, apply a preset such as Highlighter, move a set-up to another computer as a file, and undo a change you regret.

<img class="sm-demo" src="/media/profiles.gif" alt="Profiles and Presets" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + Alt + ,` | open the Options page where Profiles live |

[Full guide: Profiles and Presets](/guide/profiles)

### Screenshot with Markers {#screenshot-export}

Download a PNG of the page with your markers drawn on it - ready to paste into a bug report, a document, or a chat.

<img class="sm-demo" src="/media/screenshot-export.gif" alt="Screenshot with Markers" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + Shift + Alt + S` | download a PNG of the page with its markers |

[Full guide: Screenshot with Markers](/guide/screenshot-export)

### Marker Style {#marker-style}

Decide how markers look and behave: line width, solid, dashed or dotted lines, fill opacity, how dark the overlay gets, how long a toast stays, and how many steps undo remembers. Every change applies live.

<img class="sm-demo" src="/media/marker-style.gif" alt="Marker Style" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + Alt + ,` | open the Options page where the style rows live |

[Full guide: Marker Style](/guide/marker-style)

### Typing and Site Access {#site-control}

Smart Mark stays out of your way: shortcuts pause while you type, a key is only taken when there is something to do, and you can switch the extension off on the sites you choose.

<img class="sm-demo" src="/media/site-control.gif" alt="Typing and Site Access" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + ,` | open the popup (Disable on this site is in its footer) |
| `Ctrl + Alt + ,` | open the Options page (Site access section) |

[Full guide: Typing and Site Access](/guide/site-control)

### Diagnostics and Bug Reports {#diagnostics}

Smart Mark records nothing until you ask it to. When something misbehaves, switch Diagnostics on, reproduce it once, and copy a short report you can paste into a bug report - it never leaves your device.

<img class="sm-demo" src="/media/diagnostics.gif" alt="Diagnostics and Bug Reports" loading="lazy" decoding="async">

| Keys | Action |
| --- | --- |
| `Ctrl + Alt + ,` | open the Options page where Diagnostics lives |

[Full guide: Diagnostics and Bug Reports](/guide/diagnostics)

## Learn more {#more}

Frequently asked questions, privacy and links are on the About page. [About](/about)
