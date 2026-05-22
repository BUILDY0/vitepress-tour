# 在 Markdown 中使用 Vue

VitePress 的一大亮点是可以在 Markdown 中直接使用 Vue 的能力。

## 模板语法

每个 `.md` 文件首先会被编译为 HTML，然后作为 Vue 单文件组件处理。因此你可以在 Markdown 中使用 Vue 的模板语法：

### 插值

当前时间：{{ new Date().toLocaleString('zh-CN') }}

1 + 1 = {{ 1 + 1 }}

### 指令

<ul>
  <li v-for="i in 3" :key="i">第 {{ i }} 项</li>
</ul>

<div v-if="Math.random() > 0.5">你看到了这段文字（随机显示）</div>
<div v-else>你没看到另一段文字</div>

## 使用 Vue 组件

你可以在 Markdown 中引入和使用自定义 Vue 组件。这是 VitePress 最强大的功能之一，可以实现完全交互式的文档。

::: tip 提示
使用 `.vue` 组件可以创建交互式 Demo、实时预览、数据可视化等丰富内容。
:::

## 脚本与样式

你可以在 Markdown 文件的顶部使用 `<script>` 和 `<style>` 标签：

```md
---
title: 使用 Vue
---

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

# 页面标题

当前计数：{{ count }}

<button @click="count++">+1</button>

<style>
button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```

## 注意事项

- Markdown 中的 Vue 语法仅在**开发模式**和**客户端**生效，SSR 期间部分 API 可能不可用
- 避免在模板中使用 `window`、`document` 等浏览器 API，可使用 `onMounted` 钩子
- 使用 `<ClientOnly>` 组件包裹仅在客户端渲染的内容
