<div align="center">

# ⚡ VitePress Tour

**VitePress 技术栈介绍与上手指南**

[![Deploy](https://github.com/BUILDY0/vitepress-tour/actions/workflows/deploy.yml/badge.svg)](https://github.com/BUILDY0/vitepress-tour/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/Node-%3E%3D18-green.svg)](https://nodejs.org/)

🚀 [在线预览](https://buildy0.github.io/vitepress-tour/) · 📖 [技术栈介绍](https://buildy0.github.io/vitepress-tour/guide/introduction) · 📝 [上手指南](https://buildy0.github.io/vitepress-tour/guide/getting-started) · 🎮 [交互式 Demo](https://buildy0.github.io/vitepress-tour/demo/)

</div>

---

## ✨ 项目简介

本项目是一个基于 **VitePress** 构建的交互式文档站点，全面介绍了 VitePress 技术栈，并提供从零搭建的上手指南与可交互的 Demo 演示。

## 📚 内容概览

| 模块 | 说明 |
|:---|:---|
| 🏠 **首页** | Hero 布局 + 特性卡片，展示 VitePress 四大亮点 |
| 📖 **技术栈介绍** | 核心技术栈、与 VuePress 对比、适用场景 |
| 🚀 **上手指南** | 从零搭建、构建部署、常用配置速查 |
| 📝 **Markdown 扩展** | 代码高亮、代码组、自定义容器、数学公式等实机演示 |
| 🖖 **Vue 集成** | 在 Markdown 中使用 Vue 模板语法与组件 |
| 🎮 **交互式 Demo** | 计数器、待办事项、主题色展示三个实时可交互组件 |

## 🛠️ 技术栈

- **[VitePress](https://vitepress.dev/)** — 基于 Vite 和 Vue 的静态站点生成器
- **[Vue 3](https://vuejs.org/)** — 渐进式 JavaScript 框架
- **[markdown-it-mathjax3](https://github.com/nickmatt/markdown-it-mathjax3)** — 数学公式渲染
- **GitHub Actions** — 自动化构建与部署
- **GitHub Pages** — 静态站点托管

## 🏁 快速开始

```bash
# 克隆仓库
git clone https://github.com/BUILDY0/vitepress-tour.git
cd vitepress-tour

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build
```

## 📁 项目结构

```
vitepress-tour/
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions 部署配置
├── docs/
│   ├── .vitepress/
│   │   └── config.mts         # VitePress 站点配置
│   ├── demo/
│   │   ├── index.md           # 交互式 Demo 页面
│   │   ├── CounterDemo.vue    # 计数器组件
│   │   ├── TodoDemo.vue       # 待办事项组件
│   │   └── ThemeDemo.vue      # 主题色展示组件
│   ├── guide/
│   │   ├── introduction.md    # 技术栈介绍
│   │   ├── getting-started.md # 上手指南
│   │   ├── markdown-extensions.md  # Markdown 扩展
│   │   └── using-vue.md       # Vue 集成指南
│   └── index.md               # 首页
├── package.json
└── .gitignore
```

## 📜 License

[MIT](https://opensource.org/licenses/MIT)

---

<div align="center">

**如果这个项目对你有帮助，欢迎 ⭐ Star 支持！**

</div>
