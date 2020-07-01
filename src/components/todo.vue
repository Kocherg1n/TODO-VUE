<template>
    <div class="todo">
      <todo-input
        @checkedAll="checkedAll">
      </todo-input>
      <todo-list
        v-if="todos.length"
        :todos="filteredTodos"
        @removeCompleted="removeCompleted"
      ></todo-list>
    </div>
</template>

<script>
  import todoList from "./todoList";
  import todoInput from "./todoInput";
  import { mapState } from "vuex";

  let checked = false;

  export default {
    data() {
      return {};
    },
    components: {
      todoInput,
      todoList,
    },
    computed: {
      ...mapState({
        todos: state => state.todos.todos,
        filter: state => state.todos.filter,
      }),
      filteredTodos() {
        switch (this.filter) {
          case "all":
            return this.todos;
          case "active":
            return this.todos.filter(todo => todo.checked === false);
          case "completed":
            return this.todos.filter(todo => todo.checked);
        }
      }
    },
    methods: {
      checkedAll() {
        !checked ? checked = true : checked = false;
        this.todos.map(todo => todo.checked = checked);
      },
      removeCompleted() {
        this.todos = this.todos.filter(todo => todo.checked === false);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .todo {
    width: 100%;
    max-width: 800px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
</style>
