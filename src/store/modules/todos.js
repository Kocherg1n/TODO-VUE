const todos = {
  state: {
    todos: [],
    filter: 'all',
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    checkTodo(state, todoItem) {
      state.todos = state.todos.map(todo => todo.id === todoItem.id ? todoItem : todo);
    },
    filterTodos(state, filter) {
      state.filter = filter;
    },
  },
  actions: {},
  getters: {},
};

export default todos;
