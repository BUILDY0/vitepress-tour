<script setup>
import { ref, computed } from 'vue'
import CounterDemo from './CounterDemo.vue'
import TodoDemo from './TodoDemo.vue'
import ThemeDemo from './ThemeDemo.vue'
</script>

# 交互式 Demo

本页展示 VitePress 中 Vue 组件的实际运行效果。所有交互都是实时生效的，源码位于 `docs/demo/` 目录下。

## 计数器

最简单的响应式 Demo —— 点击按钮，数据实时更新：

<CounterDemo />

## 待办事项

一个完整的 CRUD 小应用，展示了表单处理和列表渲染：

<TodoDemo />

## 主题色展示

展示 CSS 变量与 VitePress 主题的配合：

<ThemeDemo />

---

::: tip 如何实现？
以上 Demo 均通过在 Markdown 中引入 Vue 单文件组件实现。在 `.md` 文件中使用 `<script setup>` 导入组件，然后在模板区域直接使用组件标签即可。
:::
