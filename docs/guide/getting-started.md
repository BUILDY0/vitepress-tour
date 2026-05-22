# 上手指南

## 环境准备

确保你的开发环境满足以下条件：

- **Node.js** >= 18.0
- **包管理器**：npm、yarn 或 pnpm（推荐 pnpm）

## 快速开始

### 1. 初始化项目

```bash
mkdir vitepress-tour
cd vitepress-tour
npm init -y
```

### 2. 安装依赖

```bash
npm install -D vitepress vue
```

### 3. 创建项目结构

```
vitepress-tour/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts      # VitePress 配置文件
│   ├── guide/
│   │   ├── introduction.md  # 介绍页
│   │   └── getting-started.md
│   └── index.md             # 首页
├── package.json
└── node_modules/
```

### 4. 编写配置文件

创建 `docs/.vitepress/config.mts`：

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  description: 'My VitePress Site',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '上手', link: '/guide/getting-started' },
          ],
        },
      ],
    },
  },
})
```

### 5. 编写首页

创建 `docs/index.md`：

```md
---
layout: home

hero:
  name: My Docs
  text: 我的文档站
  tagline: 基于 VitePress 构建
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/introduction
---
```

### 6. 添加脚本

在 `package.json` 中添加：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

### 7. 启动开发服务器

```bash
npm run docs:dev
```

打开浏览器访问 `http://localhost:5173` 即可看到你的站点！

## 构建与部署

### 构建

```bash
npm run docs:build
```

构建产物默认输出到 `docs/.vitepress/dist` 目录。

### 本地预览

```bash
npm run docs:preview
```

### 部署到 GitHub Pages

1. 在 `docs/.vitepress/config.mts` 中设置 `base`：

```ts
export default defineConfig({
  base: '/<repo-name>/',
  // ...
})
```

2. 创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

## 常用配置速查

### 导航栏

```ts
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/' },
    { text: '外部链接', link: 'https://vuejs.org' },
  ]
}
```

### 侧边栏

```ts
themeConfig: {
  sidebar: {
    '/guide/': [
      {
        text: '基础',
        items: [
          { text: '介绍', link: '/guide/introduction' },
        ],
      },
      {
        text: '进阶',
        collapsible: true,  // 可折叠
        items: [
          { text: '配置', link: '/guide/configuration' },
        ],
      },
    ],
  }
}
```

### 搜索

VitePress 内置本地搜索，无需额外配置即可使用。如需 Algolia 搜索：

```ts
themeConfig: {
  search: {
    provider: 'algolia',
    options: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
    },
  },
}
```
