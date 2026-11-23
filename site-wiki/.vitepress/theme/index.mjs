// Docs-site theme: VitePress default theme plus the extension's six skins (custom.css) and a
// theme picker in the nav bar.
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import ThemePicker from "./ThemePicker.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    "nav-bar-content-after": () => h(ThemePicker)
  })
};
