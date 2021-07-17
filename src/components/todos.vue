<template>
  <ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
      todo:
      <ul>
        <li>title: {{ todo.title }}</li>
        <li>
          user:
          <user v-bind:user="todo.user"/>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import TodoService from "../scripts/service/TodoService";
import User from "./User.vue";

export default {
  name: "Todos",
  data(){
      return {
          todos: []
      }
  },
  components: { User },
  mounted() {
    this.updateTodos();
  },
  methods: {
    async updateTodos() {
      this.todos = await TodoService.getCompletedTodos();
    },
  },
};
</script>