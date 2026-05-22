<script setup>
import { ref, computed } from 'vue'

const newTodo = ref('')
const todos = ref([
  { id: 1, text: '学习 VitePress', done: true },
  { id: 2, text: '编写 Demo', done: false },
  { id: 3, text: '部署上线', done: false },
])

const remaining = computed(() => todos.value.filter(t => !t.done).length)

let nextId = 4

function addTodo() {
  const text = newTodo.value.trim()
  if (!text) return
  todos.value.push({ id: nextId++, text, done: false })
  newTodo.value = ''
}

function removeTodo(id) {
  todos.value = todos.value.filter(t => t.id !== id)
}

function toggleTodo(todo) {
  todo.done = !todo.done
}
</script>

<template>
  <div class="todo-demo">
    <div class="input-row">
      <input
        v-model="newTodo"
        placeholder="添加待办事项..."
        @keyup.enter="addTodo"
        class="todo-input"
      />
      <button class="add-btn" @click="addTodo">添加</button>
    </div>
    <p class="remaining">剩余 {{ remaining }} 项未完成</p>
    <ul class="todo-list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{ done: todo.done }"
        class="todo-item"
      >
        <label class="todo-label">
          <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" />
          <span>{{ todo.text }}</span>
        </label>
        <button class="del-btn" @click="removeTodo(todo.id)">✕</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-demo {
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}
.todo-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}
.todo-input:focus {
  border-color: var(--vp-c-brand-1);
}
.add-btn {
  padding: 8px 16px;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
}
.add-btn:hover {
  opacity: 0.85;
}
.remaining {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
}
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.15s;
}
.todo-item:hover {
  background: var(--vp-c-bg-soft);
}
.todo-item.done span {
  text-decoration: line-through;
  color: var(--vp-c-text-3);
}
.todo-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.del-btn {
  background: none;
  border: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
  font-size: 0.85rem;
  padding: 4px 8px;
  border-radius: 4px;
}
.del-btn:hover {
  background: var(--vp-c-danger-1);
  color: #fff;
}
</style>
