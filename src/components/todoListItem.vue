<template>
  <div
    class="todo-item"
    :class="{checked : todo.checked}"
  >
    <label class="label">
      <div class="input-block">
        <input
          class="input"
          type="checkbox"
          @change="checkTodo"
          :checked="todo.checked"
        >
      </div>
      <div class="title">{{todo.name}}</div>
    </label>
    <button
      type="button"
      class="remove button"
      @click="removeExistedTodo"
    >x</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    props: {
      todo: Object
    },
    methods: {
      ...mapMutations(['removeTodo']),
      removeExistedTodo() {
        this.removeTodo(this.todo.id);
      },
      checkTodo(e) {
        const todoItem = {
          ...this.todo,
          checked: e.target.checked
        };
        this.$emit('checkTodo', todoItem);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .todo-item {
    display: flex;
    align-items: center;

    &:hover {
      .remove {
        visibility: visible;
      }
    }
  }

  .checked {
    .title {
      text-decoration: line-through;
      opacity: 0.3;
      transition: .3s;
    }
  }

  .label {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .input-block {
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    padding: 15px 0;
    display: block;
    line-height: 1.2;
  }

  .button {
    width: 40px;
    outline: none;
  }

  .remove {
    background-color: transparent;
    border: none;
    color: firebrick;
    cursor: pointer;
    font-size: 20px;
    visibility: hidden;
  }
</style>
