---
title: "Image Marking"
description: "When a page is one big image, a video, an SVG, or a screenshot, there is no element to hover."
---

# Image Marking

When a page is one big image, a video, an SVG, or a screenshot, there is no element to hover. Image marking scans the page, finds the visual blocks, and lets you pick them by click or by number.

::: info
Available from Smart Mark 1.1.0. If your installed version is older, this feature arrives with the next Chrome Web Store update.
:::

_Video coming soon._

## Before you start

- Install Smart Mark and pin its icon.
- Open any normal web page (it does not work on chrome:// internal pages).

## Step by step

1. Press `Alt + I`. The page dims and a scan line sweeps the screen while Smart Mark analyzes it.
2. Every detected block gets a numbered violet box, and a toast tells you how many blocks were found.
3. Click a block, or type its number, to drop a marker on it. Pick as many blocks as you need.
4. Press `Esc` to leave the mode. The numbered boxes disappear and your markers stay.

## Picking by number

- Blocks on the visible screen are numbered in reading order (top to bottom, then left to right) and renumbered when you scroll.
- With more than 9 blocks on screen, type two digits quickly: `1` then `5` picks block 15. `0` alone picks block 10.

## Tuning the detection

- Open the Options page and expand Image Detection.
- The Detail, Denoise, and Color sensitivity sliders (1-5) and Min block size change what counts as a block. Advanced parameters expose the raw values; Reset detection undoes them all.
- Capture method: Screenshot (default, pixel exact) or Render (no scrolling).
- Detection animation, Scan speed, Badge size, and Hotkey digits change how the scan looks and how you pick.
- Test your settings on your own picture: in the live preview, use Load image, or drop or paste a screenshot.

## Tips

- Markers made here are normal markers: undo, redo, save slots, and clear all work on them.
- The analysis runs inside your browser. The page image is never uploaded.

## Shortcuts used here

| Keys | Action |
| --- | --- |
| `Alt + I` | scan the page and show the numbered blocks (press again to leave) |
| `Esc` | leave the mode and remove the numbered boxes |

The combos above are the defaults; every one of them can be rebound on the Options page.
