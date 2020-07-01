<template>
  <div id="app">
    <h1 class="title">TODOS</h1>
    <todo></todo>
  </div>
</template>

<script>
  import todo from './components/todo.vue';
  export default {
    name: 'app',
    components: {
      todo
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  body {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    background: #f5f5f5;
  }

  .container {
    width: 600px;
    margin: 0 auto;
  }

  h1 {
    font-size: 160px;
    font-weight: 300;
    color: rgba(175, 47, 47, 0.15);
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }

  * {
    box-sizing: border-box;
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
