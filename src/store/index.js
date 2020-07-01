import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import todos from './modules/todos.js';

export const store = new Vuex.Store({
  modules: {
    todos
  }
});
