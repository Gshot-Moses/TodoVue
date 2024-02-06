<script>
import { RouterLink, RouterView } from 'vue-router'
import TodoList from './components/TodoList.vue'
import CreateTask from './components/CreateTask.vue'

export default {
  components: {
    TodoList,
    CreateTask
  },
}
</script>

<template>
  <div class="container">
    <h3>To do App</h3>
    <router-link to="/">
      <button class="btn btn primary">Home</button>
    </router-link>
    <router-link to="/new">
      <button class="btn btn primary">Create new todo</button>
    </router-link>
  </div>
  <RouterView>
    
  </RouterView>
</template>

<style scoped>

</style>
