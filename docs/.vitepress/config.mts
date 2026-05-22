import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  base: process.env.VP_BASE || '/',
  title: 'VitePress Tour',
  description: 'VitePress 技术栈介绍与上手指南',
  markdown: {
    math: true,
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '技术栈介绍', link: '/guide/introduction' },
      { text: '上手指南', link: '/guide/getting-started' },
      { text: 'Demo', link: '/demo/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: 'VitePress 介绍', link: '/guide/introduction' },
            { text: '上手指南', link: '/guide/getting-started' },
            { text: 'Markdown 扩展', link: '/guide/markdown-extensions' },
            { text: '在 Markdown 中使用 Vue', link: '/guide/using-vue' },
          ],
        },
      ],
      '/demo/': [
        {
          text: 'Demo',
          items: [
            { text: '交互式 Demo', link: '/demo/' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
