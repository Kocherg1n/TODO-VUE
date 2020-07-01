<template>
  <div class="todo-input">
    <button
      class="input-button"
      @click="checkedAll"
    >&or;</button>
    <input
      class="input"
      type="text"
      placeholder="todo name..."
      autofocus
      v-model="todo.name"
      @keydown.enter="addTodo"
    >
  </div>
</template>

<script>
  let uniqId = 0;
  export default {
    data() {
      return {
        todo: {
          id: 0,
          name: '',
          checked: false
        }
      }
    },
    methods: {
      addTodo() {
        if (this.todo.name) {
          uniqId++;
          this.todo.id = uniqId;
          this.$emit('addTodo', {...this.todo});
          this.todo.name = '';
        }
      },
      checkedAll() {
        this.$emit('checkedAll');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .todo-input {
    position: relative;
  }

  .input {
    font-size: 24px;
    padding: 16px 16px 16px 60px;
    border: 1px solid transparent;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    line-height: 1.4em;
    outline: none;
    color: inherit;
    width: 100%;
    background: #fff;
  }

  .input-button {
    border: none;
    background-color: transparent;
    font-size: 20px;
    font-weight: 800;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 19px;
    outline: none;
    cursor: pointer;
    color: inherit;
  }
</style>
