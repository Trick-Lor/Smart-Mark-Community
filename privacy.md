---
file: ./docs/privacy.md
description: Privacy policy for the Smart Mark Chrome extension. Hosted publicly to serve as the Chrome Web Store privacy policy URL.
scope: project
updated-at: 2026-11-24
---

# Smart Mark - Privacy Policy

Last updated: 2026-11-24

Smart Mark is a Chrome extension that overlays canvas markers on web pages, controlled by keyboard shortcuts. This policy explains what the extension stores and what it deliberately does not do.

## What Smart Mark stores

Smart Mark saves only your own settings and marker layouts, using Chrome's built-in storage (chrome.storage.sync and chrome.storage.local):

- Display and behavior preferences: shape, marker padding, border width and radius, per-mode colors, theme, and the options of each mode (Image mode, Hide Layer mode, selected-text marking).
- Interface language: the language you pick in Options (or "Follow Chrome"). While a language is picked (anything but "Follow Chrome"), a copy of that language's text, read from inside the extension package, is kept on this device so every page shows it.
- Keyboard shortcut overrides you set.
- Disabled sites: the host names (for example example.com) of the sites where you turned Smart Mark off.
- Saved marker slots (the marker layouts you choose to save). Since 2026-10-02 each saved marker also keeps its shape and style and the address (URL) of the page it was saved on, so the extension can tell you when you load a slot on a different page. Page titles are not stored.
- Profiles: the named sets of the settings above that you create, kept on this device. You can export one to a JSON file and import it back; the file goes only where you save it.
- Options and popup panel state (which sections are expanded).
- Diagnostics log (only while you switch Diagnostics on in Options): the extension's own recent events, kept on this device so you can copy them into a bug report. Switching Diagnostics off deletes it.

While a tab is open, the undo / redo steps and the current mode for that tab are kept in the page's own session storage (marker data only, no page content); the browser clears them when the tab closes.

That is the complete list. Smart Mark does not store the content of the pages you visit, your browsing history, your keystrokes outside its own shortcuts, or any personal or identifying information.

## Pictures of the page

Smart Mark handles website content only in the two features below, only when you start them, and only inside your browser. Nothing from the page is stored or sent.

- Image mode (Alt+I) takes a picture of the visible page (or renders it with html2canvas, as chosen in Options) and finds the blocks in it with OpenCV.js, inside the extension. The picture is held in memory only while the mode runs; it is never saved or sent.
- Export screenshot (Ctrl+Shift+Alt+S) builds a picture of the page with your markers and downloads it as a PNG file to your device. It is not sent anywhere.

## How the data is used

The stored values exist only to restore your settings and saved markers the next time you use the extension. They are used for no other purpose.

## Where the data lives

- Data saved with chrome.storage.sync is synchronized by your own Google account across the Chrome browsers where you are signed in. This synchronization is performed entirely by Google Chrome, not by Smart Mark.
- Data saved with chrome.storage.local stays on the local device.

Smart Mark has no server of its own. None of your data is sent to the developer or to any third party. The developer cannot see it.

## What Smart Mark does NOT do

- No analytics, telemetry, or usage tracking.
- No advertising.
- No selling, renting, or sharing of any data.
- No external network requests for your data. All marking and rendering happens locally in your browser.
- No account or sign-up.

## Permissions and why they are needed

- activeTab and access to the sites you visit: to inject the marking overlay into the page you are viewing when you trigger a shortcut, and to take the picture of the visible page that Image mode and the screenshot export use.
- storage: to save the settings and marker slots described above.
- notifications: to show the small status toast for the current mode.
- contextMenus: to add the right-click entries that mark the text you selected.

These permissions are used solely to provide the marking features. They are not used to collect data.

## Third-party libraries

Smart Mark bundles open-source libraries that run entirely inside your browser and do not transmit your data anywhere: html2canvas and OpenCV.js.

## Changes to this policy

If this policy changes, the "Last updated" date above will be updated. Material changes will be noted in the project repository.

## Contact

Questions about this policy or the extension can be sent to either of these addresses (both reach the same maintainer):

- hoducanh123@outlook.com
- tricklor@hoducanh.com
