// The extension's six UI themes (src/styles/theme.css), shared by the picker and the boot
// script in config.mjs. Hand Drawn is the site default (todo 18.7).
export const STORAGE_KEY = "sm-site-theme";
export const DEFAULT_THEME = "hand-drawn";

export const THEMES = [
  { id: "hand-drawn", name: "Hand Drawn", dark: false },
  { id: "hand-drawn-dark", name: "Hand Drawn Dark", dark: true },
  { id: "ai-vibe", name: "AI Vibe", dark: false },
  { id: "ai-vibe-dark", name: "AI Vibe Dark", dark: true },
  { id: "neon", name: "Neon", dark: true },
  { id: "vscode", name: "VS Code", dark: true }
];

/** Inline script for <head>: apply the saved theme before first paint (no flash). */
export const THEME_BOOT = `(function(){var d=document.documentElement,t=${JSON.stringify(DEFAULT_THEME)},dark=${JSON.stringify(THEMES.filter((item) => item.dark).map((item) => item.id))};try{var s=localStorage.getItem(${JSON.stringify(STORAGE_KEY)});if(s&&${JSON.stringify(THEMES.map((item) => item.id))}.indexOf(s)>=0)t=s;}catch(e){}d.dataset.smTheme=t;var k=dark.indexOf(t)>=0;d.classList.toggle("dark",k);d.style.colorScheme=k?"dark":"light";})();`;
