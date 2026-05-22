# Markdown 扩展

VitePress 在标准 Markdown 基础上提供了丰富的扩展语法。

## 代码块

### 语法高亮

VitePress 使用 Shiki 作为代码高亮引擎，支持双主题（亮色/暗色）：

```js
export default {
  name: 'MyApp',
  data() {
    return { count: 0 }
  },
}
```

### 代码行高亮

```ts{2,4-5}
function add(a: number, b: number): number {
  const result = a + b  // 高亮
  console.log('calculating...')  // 不高亮
  console.log('done')            // 高亮
  return result                  // 高亮
}
```

### 代码组

::: code-group

```npm
npm install -D vitepress
```

```yarn
yarn add -D vitepress
```

```pnpm
pnpm add -D vitepress
```

:::

## 自定义容器

::: info
这是一个信息容器。
:::

::: tip
这是一个提示容器。
:::

::: warning
这是一个警告容器。
:::

::: danger
这是一个危险容器。
:::

::: details 点击展开
这是一个可折叠的详情容器。
:::

## 表格

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | - | 站点标题 |
| description | string | - | 站点描述 |
| base | string | `/` | 部署基础路径 |
| lang | string | `en-US` | 站点语言 |

## Emoji

VitePress 支持 Emoji 语法：

:tada: :rocket: :sparkles: :heart: :thumbsup:

## 数学公式（需安装插件）

行内公式：$E = mc^2$

块级公式：

$$
\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$
