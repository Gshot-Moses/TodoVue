<template>
    <h5>Create new Todo</h5>
    <form>
    <div class="mb-3">
      <label for="title" class="form-label">Title:</label>
      <input v-model="title" type="text" class="form-control" id="title" name="title" required>
    </div>
    <div class="mb-3">
      <label for="username" class="form-label">Username:</label>
      <select class="form-group">
        <option v-for="(user, index) in users" :key="index" :value="user.username">{{ user.username }}</option>
      </select>
    </div>
    <div class="mb-3 form-check">
      <input v-model="isTaskDone" :value="statusChange" type="checkbox" class="form-check-input" id="isTaskDone" name="isTaskDone">
      <label class="form-check-label" for="isTaskDone">Is Task Done</label>
    </div>
    <button v-on:click="$emit('submitForm', [title, username, isTaskDone])" type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                title: "",
                username: "",
                isTaskDone: false,
                users: []
            }
        },
        watch: {
            statusChange(status) {
                this.isTaskDone = status
            }
        },
        methods: {
            async getUsers() {
                return await axios.get('https://jsonplaceholder.typicode.com/users')
                    .then((response) => {
                        this.users = response.data
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            async createTodo() {
                return axios.post(
                    'http://localhost:4000/todo', {}
                    )
                    .then((response) => {

                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
        async mounted() {
            await this.getUsers() 
            console.log(this.users)
        }
    }
</script>