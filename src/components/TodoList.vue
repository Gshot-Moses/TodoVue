<template>
    <div class="container mt-4">
  <div class="row">
    <div v-for="(item, index) in todos" :key="index">
        <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <div>
                <label>Is task done ?</label>
                <input type="checkbox" v-model="item.isTaskDone" :value="$emit('toggleTask', [item.id, item.isTaskDone])">
            </div>
            <p class="card-text">{{ item.username }}</p>
            <button class="btn btn-danger" v-on:click="deleteTodo(index, id)">Delete Task</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    import axios from 'axios'

    export default {
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
                ]
            }
        },
        methods: {
            async getTodosFromLaravel() {
                return await axios.get('http://localhost:4000/todos')
                    .then((response) => {
                        this.todos = response.data
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

            async deleteTodo(index, id) {
                this.todos.removeAtIndex(index)
                return await axios.delete('http://localhost:4000/todo/' + id)
                    .then(() => {

                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }
</script>