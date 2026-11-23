<script setup>
// Nav-bar theme picker: the extension's six themes. The choice is kept in localStorage and
// applied before first paint by the inline script in config.mjs (THEME_BOOT there).
import { computed, onMounted, ref } from "vue";
import { useData } from "vitepress";
import { DEFAULT_THEME, STORAGE_KEY, THEMES } from "./themes.mjs";

const { theme } = useData();
const current = ref(DEFAULT_THEME);
const label = computed(() => theme.value.smThemeLabel || "Theme");

const apply = (id) => {
  const entry = THEMES.find((item) => item.id === id) || THEMES[0];
  const root = document.documentElement;
  root.dataset.smTheme = entry.id;
  root.classList.toggle("dark", entry.dark);
  root.style.colorScheme = entry.dark ? "dark" : "light";
  try { localStorage.setItem(STORAGE_KEY, entry.id); } catch { /* private mode: session only */ }
  current.value = entry.id;
};

onMounted(() => {
  current.value = document.documentElement.dataset.smTheme || DEFAULT_THEME;
});
</script>

<template>
  <div class="sm-theme-picker">
    <select :value="current" :aria-label="label" :title="label" @change="apply($event.target.value)">
      <option v-for="item in THEMES" :key="item.id" :value="item.id">{{ item.name }}</option>
    </select>
  </div>
</template>
