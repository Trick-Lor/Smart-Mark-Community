---
title: "Element Mode"
description: "Hover over any element on a web page - a button, image, card, or paragraph - and drop a clean box marker that hugs that element."
---

# Element Mode

Hover over any element on a web page - a button, image, card, or paragraph - and drop a clean box marker that hugs that element. Great for pointing things out in screenshots, bug reports, and tutorials.

_Video coming soon._

## Before you start

- Install Smart Mark and pin its icon.
- Open any normal web page (it does not work on chrome:// internal pages).

## Step by step

1. Press `Alt + Z` to turn on Element mode. A small toast confirms the mode.
2. Move the mouse over an element. A blue outline shows the exact element that will be marked; a green preview shows the marker shape.
3. Click the element, or press `Shift + Z`, to place a marker on it.
4. Click it again (or `Shift + Z` again) to remove that marker. A marker on an outer box stays when you click an element inside it.
5. Move to another element and mark it the same way.
6. Press `Esc` to exit Element mode when you are done.

## Hide what is in the way (Alt + click)

1. With Element mode on, hold `Alt` over the element that covers what you want, such as a cookie banner. After a short delay (300 ms by default) the preview turns red with a big X.
2. Keep `Alt` held and click: that element is hidden, nothing is marked.
3. Wrong element? Keep `Alt` held and roll the mouse wheel up to move to the parent element, down to go back. The page does not scroll meanwhile.
4. Release `Alt` and click as usual to mark what was underneath.
5. `Ctrl + Z` shows the last hidden element again; `Ctrl + Shift + Alt + A` shows every hidden layer. The key, the delay and the climb method are in Options > `Marker Configuration` > `Hide Layer` (see Hide Layer Mode).

## Shape the marker (optional)

- `Alt + O` - change the shape: Rectangle, Oval, or Diamond.
- `Alt + W` - change the fit: Inscribe, Median, or Circumscribe.
- `Alt + =` / `Alt + -` - grow or shrink the box by 5 px.
- `Alt + ]` / `Alt + [` - round the corners 1 px more or less (Rectangle and Diamond).
- Open the Options page to set the Element mode color.

## Undo and clean up

- `Ctrl + Z` undo the last marker, `Ctrl + Y` redo.
- `Ctrl + Shift + Z`, then click a marker to remove just that one. Press `Ctrl + Shift + Z` again, or `Esc`, to leave remove mode.
- `Ctrl + Shift + Alt + Z` remove all element markers at once.
- Merge markers count as Element markers, so these two remove them too.

## Save your work

- `Ctrl + Shift + Alt + 0-9` save the current markers to slot 0-9.
- `Alt + 0-9` load the markers back from a slot.

## Tips

- The blue outline shows the real element box, so you know exactly what gets marked even when the marker is offset or shaped. It hides itself when the green preview already covers the same box (Rectangle with no offset).
- A marker stays where you put it: scrolling or a page change does not move it. Reloading the page removes it unless you saved it to a slot.

## Shortcuts used here

| Keys | Action |
| --- | --- |
| `Alt + Z` | toggle Element mode |
| `Shift + Z` | place or remove a marker on the hovered element |
| `Ctrl + Shift + Z` | click to remove element markers |
| `Ctrl + Shift + Alt + Z` | remove all element markers |
| `Esc` | exit the mode |

The combos above are the defaults; every one of them can be rebound on the Options page.
