---
file: ./docs/privacy.md
description: Privacy policy for the Smart Mark Chrome extension. Hosted publicly to serve as the Chrome Web Store privacy policy URL.
scope: project
updated-at: 2026-06-15
---

# Smart Mark - Privacy Policy

Last updated: 2026-06-15

Smart Mark is a Chrome extension that overlays canvas markers on web pages, controlled by keyboard shortcuts. This policy explains what the extension stores and what it deliberately does not do.

## What Smart Mark stores

Smart Mark saves only your own settings and marker layouts, using Chrome's built-in storage (chrome.storage.sync and chrome.storage.local):

- Display preferences: default shape, marker padding, border radius, and per-mode colors.
- Keyboard shortcut overrides you set.
- Saved marker slots (the marker layouts you choose to save).
- Options and popup panel state (which sections are expanded).

That is the complete list. Smart Mark does not store the content of the pages you visit, your browsing history, your keystrokes outside its own shortcuts, or any personal or identifying information.

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

- activeTab and access to the sites you visit: to inject the marking overlay into the page you are viewing when you trigger a shortcut.
- storage: to save the settings and marker slots described above.
- notifications: to show the small status toast for the current mode.
- contextMenus: to provide right-click menu entries for the extension.

These permissions are used solely to provide the marking features. They are not used to collect data.

## Third-party libraries

Smart Mark bundles open-source libraries that run entirely inside your browser and do not transmit your data anywhere: jQuery 3.7.0 and html2canvas.

## Changes to this policy

If this policy changes, the "Last updated" date above will be updated. Material changes will be noted in the project repository.

## Contact

Questions about this policy or the extension can be sent to either of these addresses (both reach the same maintainer):

- hoducanh123@outlook.com
- tricklor@hoducanh.com
