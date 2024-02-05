<template>
    <h3>Create new Todo</h3>
    <form>
    <div class="mb-3">
      <label for="title" class="form-label">Title:</label>
      <input v-model="title" type="text" class="form-control" id="title" name="title" required>
    </div>
    <div class="mb-3">
      <label for="username" class="form-label">Username:</label>
      <input v-model="username" type="text" class="form-control" id="username" name="username" required>
    </div>
    <div class="mb-3 form-check">
      <input v-model="isTaskDone" :value="statusChange" type="checkbox" class="form-check-input" id="isTaskDone" name="isTaskDone">
      <label class="form-check-label" for="isTaskDone">Is Task Done</label>
    </div>
    <button v-on:click="$emit('submitForm', [title, username, isTaskDone])" type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
    export default {
        data() {
            return {
                title: "",
                username: "",
                isTaskDone: false,
            }
        },
        watch: {
            statusChange(status) {
                this.isTaskDone = status
            }
        },
        methods: {

        }
    }
</script>