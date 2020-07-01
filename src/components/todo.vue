<template>
    <div class="todo">
      <todo-input
        @addTodo="addTodo"
        @checkedAll="checkedAll">
      </todo-input>
      <todo-list
        v-if="todos.length"
        :todos="filteredTodos"
        @removeTodo="removeTodo"
        @checkTodo="checkTodo"
        @filterTodos="filterTodos"
        @removeCompleted="removeCompleted"
      ></todo-list>
    </div>
</template>

<script>
  import todoList from "./todoList";
  import todoInput from "./todoInput";

  let checked = false;

  export default {
    data() {
      return {
        todos: [],
        filter: 'all',
      };
    },
    components: {
      todoInput,
      todoList,
    },
    computed: {
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
      addTodo(todo) {
        this.todos.push(todo)
      },
      removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
      checkTodo(todoItem) {
        this.todos = this.todos.map(todo => todo.id === todoItem.id ? todoItem : todo);
      },
      filterTodos(filter) {
        this.filter = filter;
      },
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
