// VitePress site config for smartmark.hoducanh.com (todo 17).
// Hand-written. Everything that comes from feature-demos.config.mjs arrives
// through two generated JSON files next to this one: sidebar.json (gen-feature-guides.mjs)
// and site-meta.json (gen-landing.mjs), so this file never repeats feature copy.
import { readFileSync } from "node:fs";
import { defineConfig } from "vitepress";
import { THEME_BOOT } from "./theme/themes.mjs";

const readJson = (name) => JSON.parse(readFileSync(new URL(`./${name}`, import.meta.url), "utf8"));
const sidebar  = readJson("sidebar.json");
const meta     = readJson("site-meta.json");

// Home is the long guide page; About holds privacy, links and the FAQ.
// Guide stays active on the home page and on every per-feature guide page.
const navFor = (prefix, labels) => [
  { text: labels.guide, link: `${prefix}/`, activeMatch: `^${prefix}/(guide/.*)?$` },
  { text: labels.about, link: `${prefix}${meta.aboutPath}` }
];

export default defineConfig({
  title: meta.name,
  description: meta.description.en,
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  // The six extension themes replace the light / dark switch (theme/ThemePicker.vue).
  appearance: false,
  // Agent-facing folder doc and the owner's local notes; never pages. community.mjs also drops
  // CLAUDE.md on copy.
  srcExclude: ["CLAUDE.md", "REAME.md"],
  sitemap: { hostname: meta.url },
  head: [
    ["script", {}, THEME_BOOT],
    ["link", { rel: "icon", type: "image/png", href: "/icon-128.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: meta.name }],
    ["meta", { property: "og:title", content: meta.title.en }],
    ["meta", { property: "og:description", content: meta.description.en }],
    ["meta", { property: "og:url", content: meta.url }],
    ["meta", { property: "og:image", content: meta.ogImage }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["script", { type: "application/ld+json" }, JSON.stringify(meta.jsonLd)]
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: navFor("", meta.labels.en),
        sidebar: sidebar.en,
        smThemeLabel: meta.labels.en.themeLabel
      }
    },
    vi: {
      label: "Tiếng Việt",
      lang: "vi",
      link: "/vi/",
      title: meta.name,
      description: meta.description.vi,
      themeConfig: {
        nav: navFor("/vi", meta.labels.vi),
        sidebar: sidebar.vi,
        smThemeLabel: meta.labels.vi.themeLabel,
        outline: { label: "Trên trang này" },
        lastUpdated: { text: "Cập nhật lần cuối" },
        docFooter: { prev: "Trang trước", next: "Trang sau" },
        returnToTopLabel: "Lên đầu trang",
        sidebarMenuLabel: "Mục lục",
        darkModeSwitchLabel: "Giao diện",
        lightModeSwitchTitle: "Chuyển sang giao diện sáng",
        darkModeSwitchTitle: "Chuyển sang giao diện tối",
        langMenuLabel: "Đổi ngôn ngữ"
      }
    }
  },
  themeConfig: {
    logo: "/icon-128.png",
    // Icon names are simple-icons slugs; the Store icon sits beside GitHub once the listing URL is set.
    socialLinks: [
      ...(meta.storeUrl ? [{ icon: "chromewebstore", link: meta.storeUrl, ariaLabel: "Chrome Web Store" }] : []),
      { icon: "github", link: meta.githubUrl, ariaLabel: "GitHub" }
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          vi: {
            translations: {
              button: { buttonText: "Tìm kiếm", buttonAriaLabel: "Tìm kiếm" },
              modal: {
                displayDetails: "Hiện chi tiết",
                resetButtonTitle: "Xoá ô tìm kiếm",
                backButtonTitle: "Đóng",
                noResultsText: "Không có kết quả cho",
                footer: {
                  selectText: "chọn",
                  selectKeyAriaLabel: "enter",
                  navigateText: "di chuyển",
                  navigateUpKeyAriaLabel: "mũi tên lên",
                  navigateDownKeyAriaLabel: "mũi tên xuống",
                  closeText: "đóng",
                  closeKeyAriaLabel: "escape"
                }
              }
            }
          }
        }
      }
    },
    footer: {
      message: "Smart Mark is a Chrome extension. Guides are generated from one source; report an issue on the community repo.",
      copyright: "Copyright 2026 Smart Mark"
    }
  }
});
