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
            <button class="btn btn-danger" v-on:click="$emit('delete', [item.id])">Delete Task</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
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
    }
</script>