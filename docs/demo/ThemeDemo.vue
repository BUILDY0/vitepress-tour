<script setup>
import { ref } from 'vue'

const colors = [
  { name: 'Brand', var: '--vp-c-brand-1' },
  { name: 'Brand Soft', var: '--vp-c-brand-soft' },
  { name: 'Text 1', var: '--vp-c-text-1' },
  { name: 'Text 2', var: '--vp-c-text-2' },
  { name: 'Divider', var: '--vp-c-divider' },
  { name: 'Bg', var: '--vp-c-bg' },
  { name: 'Bg Soft', var: '--vp-c-bg-soft' },
  { name: 'Danger', var: '--vp-c-danger-1' },
  { name: 'Warning', var: '--vp-c-warning-1' },
  { name: 'Success', var: '--vp-c-success-1' },
]
</script>

<template>
  <div class="theme-demo">
    <p class="desc">
      VitePress 通过 CSS 变量实现主题定制。以下色块实时读取当前主题的 CSS 变量值，
      切换亮色/暗色模式后颜色会自动变化。
    </p>
    <div class="color-grid">
      <div v-for="c in colors" :key="c.var" class="color-card">
        <div class="color-swatch" :style="{ background: `var(${c.var})` }"></div>
        <div class="color-info">
          <span class="color-name">{{ c.name }}</span>
          <code class="color-var">{{ c.var }}</code>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.theme-demo {
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
.desc {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-bottom: 16px;
}
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
}
.color-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}
.color-swatch {
  height: 48px;
}
.color-info {
  padding: 8px;
  text-align: center;
}
.color-name {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.color-var {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
}
</style>
