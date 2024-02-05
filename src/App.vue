<script>
import { RouterLink, RouterView } from 'vue-router'
import TodoList from './components/TodoList.vue'
import CreateTask from './components/CreateTask.vue'
import axios from 'axios'

export default {
  components: {
    TodoList,
    CreateTask
  },
  data() {
    return {
      todos: [
        {
          "id": 1,
          "title": "Title 1",
          "isTaskDone": true,
          "username": "username 1",
        },
        {
          "id": 2,
          "title": "Title 2",
          "isTaskDone": false,
          "username": "username 2",
        },
        {
          "id": 3,
          "title": "Title 3",
          "isTaskDone": false,
          "username": "username 3",
        }
      ],
      users: []
    }
  },
  methods: {
    async getTodosFromLaravel() {
      return await axios.get('http://localhost/todos:3000')
        .then((response) => {
          this.todos = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    toggleTask(id, status) {
      console.log(id, status)
      const item = this.todos.find(item => item.id === id)
      //item.isTaskDone = !status
    },
    async deleteTask(id) {
      return await axios.get('http://localhost/todos:3000')
        .then((response) => {
          this.todos = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    async getUsers() {
      return await axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.users = response.data
        })
    }
  },
  mounted() {
    this.getUsers()
  }
}
</script>

<template>
  <div class="container">
    <h3>To do App</h3>
    <router-link :to="{path: '/', query: { todos: JSON.stringify(todos) }}">
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
