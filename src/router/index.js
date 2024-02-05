import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../components/TodoList.vue'
import CreateTask from '../components/CreateTask.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoList,
      props: true
    },
    {
      path: '/new',
      name: 'newtodo',
      component: CreateTask,
      props: true
    },
  ]
})

export default router
