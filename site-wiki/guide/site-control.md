---
title: "Typing and Site Access"
description: "Smart Mark stays out of your way: shortcuts pause while you type, a key is only taken when there is something to do, and you can switch the extension off on the sites you choose."
---

# Typing and Site Access

Smart Mark stays out of your way: shortcuts pause while you type, a key is only taken when there is something to do, and you can switch the extension off on the sites you choose.

::: info
Available from Smart Mark 1.1.0. If your installed version is older, this feature arrives with the next Chrome Web Store update.
:::

![Typing and Site Access](/media/site-control.gif)

## Before you start

- Smart Mark installed.

## While you type

- When the cursor is in a text box, a text area, or an editor, every Smart Mark shortcut passes through to the page. `Ctrl + Z` undoes your text as usual.
- `Esc` still leaves a marking mode.

## Only when there is work

- `Ctrl + Z` and `Ctrl + Y` are taken only when there is marker history to undo or redo.
- The clear-all shortcuts are taken only when the page has matching markers.
- Otherwise the page receives the key as usual and no toast appears.

## Turn Smart Mark off on a site

1. Open the popup and use Disable on this site in the footer, or
2. open the Options page, expand Site access, type a domain, and press Add. Remove a site from the same list.
3. On a listed site and its subdomains every shortcut is off. Markers already on the page stay visible, and the change applies without a reload.

## Switch off a single shortcut

- In Options > Keyboard Shortcuts, untick the checkbox of a shortcut to switch only that one off. Its key combo is kept for later and shown struck through.

## Shortcuts used here

| Keys | Action |
| --- | --- |
| `Ctrl + ,` | open the popup (Disable on this site is in its footer) |
| `Ctrl + Alt + ,` | open the Options page (Site access section) |

The combos above are the defaults; every one of them can be rebound on the Options page.
