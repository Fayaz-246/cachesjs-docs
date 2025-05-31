import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CachesJS",
  description: "The official documentation for CachesJS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "NPM", link: "https://www.npmjs.com/package/cachesjs" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "About", link: "/about" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Classes",
        items: [
          { text: "TimedCache", link: "/timedcache" },
          { text: "CachedFunction", link: "/cachedfunction" },
        ],
      },
      {
        text: "Extras",
        items: [
          { text: "Types", link: "/types" },
          { text: "Interfaces", link: "/interfaces" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Fayaz-246/cachesjs" },
      { icon: "discord", link: "https://discord.gg/5zYxdy4Qad" },
    ],

    footer: {
      message: "Made By Fayaz | Released under the MIT License",
      copyright: "Copyright © 2025 Fayaz",
    },
  },
  cleanUrls: true,
});
