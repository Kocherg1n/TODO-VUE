<template>
  <div class="todo-list">
    <div class="content">
      <ul class="list">
        <li v-for="todo in todos" class="item">
          <todo-list-item
            :todo="todo"
            @checkTodo="checkTodoAsCompleted"
          ></todo-list-item>
        </li>
      </ul>
    </div>

    <div class="footer">
      <div class="footer-content">
        <div class="counter">{{todos.length}} item/s left</div>
        <div class="filter">
          <todo-list-filter></todo-list-filter>
        </div>
        <button
          class="remove-all"
          @click="removeCompleted"
        >Clear completed</button>
      </div>
    </div>
  </div>
</template>

<script>
  import todoListFilter from "./todoListFilter.vue";
  import todoListItem from "./todoListItem.vue";
  import { mapMutations } from 'vuex';

  export default {
    components: {
      todoListFilter,
      todoListItem,
    },
    props: {
      todos: Array,
    },
    methods: {
      ...mapMutations(['checkTodo']),
      checkTodoAsCompleted(todoItem) {
        this.checkTodo(todoItem);
      },
      filterTodos(filter) {
        this.$emit('filterTodos', filter);
      },
      removeCompleted() {
        this.$emit('removeCompleted')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    font-size: 24px;
    border-bottom: 1px solid #ededed;
  }

  .item {
    border-bottom: 1px solid #ededed;
  }

  .footer {
    color: #777;
    padding: 10px 15px;
    text-align: center;
    position: relative;
    font-size: 14px;

    &:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
  }

  .footer-content {
    display: flex;
    align-items: center;
    position: relative;
  }

  .filter {
    flex: 1;
  }

  .remove-all {
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    outline: none;
  }


</style>
