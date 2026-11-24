# Smart Mark

Mark web page elements, areas and text using keyboard shortcuts. No toolbar, no menus -- just shortcuts.

[Install from Chrome Web Store](https://chromewebstore.google.com/detail/smart-mark/hpoalckkedhkjeanpkgjimcnljbddogl) - [User guide](https://smartmark.hoducanh.com)

---

## How it works

Smart Mark overlays a color marker on any element, area or text you choose. Point with the mouse, act with the keys.

Five modes:

- Element mode (`Alt + Z`) -- hover an element, then click it or press `Shift + Z` to mark it; click it again to remove that marker.
- Free Draw mode (`Alt + X`) -- drag to draw a marker anywhere on the page.
- Merge mode (`Alt + Q`) -- click two elements to mark the area that spans both.
- Image mode (`Alt + I`) -- OpenCV finds the blocks in a screenshot of the page; pick one with a single key or a click.
- Hide Layer mode (`Alt + A`) -- click a banner or overlay to hide it, then mark what was under it; `Ctrl + Shift + Alt + A` shows every hidden layer again.

Selected text: select it, right-click, then Smart Mark > "Mark text: box" or "Mark text: highlight lines".

Other shortcuts:

- `Ctrl + Z` / `Ctrl + Y` -- undo / redo the last marker action
- `Ctrl + Shift + D` -- remove a single marker (click to target it)
- `Ctrl + Shift + Alt + D` -- remove every marker on the page
- `Alt + 0-9` -- load a saved marker layout from slot N
- `Ctrl + Shift + Alt + 0-9` -- save the current markers to slot N
- `Ctrl + Shift + Alt + S` -- export a screenshot of the page with your markers
- `Ctrl + ,` -- open the popup (rebind under `chrome://extensions/shortcuts` if it conflicts)

All shortcuts are customizable from the extension options page (`Ctrl + Alt + ,`), which also holds six themes and 12 interface languages.

## Support

Found a bug or have a suggestion? [Open an issue](https://github.com/Trick-Lor/Smart-Mark-Community/issues).

## Privacy

No analytics, no tracking, no server. Settings and saved layouts stay in Chrome's own storage (synced only through your own Chrome account); pictures of the page used by Image mode and the screenshot export are processed in memory and never stored or sent. See [privacy.md](privacy.md) for the full policy.

## License

Copyright (c) 2026 Duc-Anh Ho. All Rights Reserved.
