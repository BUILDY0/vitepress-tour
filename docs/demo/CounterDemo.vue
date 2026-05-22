<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function reset() {
  count.value = 0
}
</script>

<template>
  <div class="counter-demo">
    <p class="count">当前计数：<strong>{{ count }}</strong></p>
    <div class="actions">
      <button class="btn dec" @click="decrement">-1</button>
      <button class="btn reset" @click="reset">重置</button>
      <button class="btn inc" @click="increment">+1</button>
    </div>
  </div>
</template>

<style scoped>
.counter-demo {
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-align: center;
}
.count {
  font-size: 1.5rem;
  margin-bottom: 16px;
}
.count strong {
  font-size: 2rem;
  color: var(--vp-c-brand-1);
}
.actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}
.btn {
  padding: 8px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
}
.btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.btn.inc {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
}
.btn.inc:hover {
  opacity: 0.85;
  color: #fff;
}
</style>
