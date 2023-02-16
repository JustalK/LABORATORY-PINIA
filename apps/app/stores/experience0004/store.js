import { defineStore } from 'pinia';

export const useStore = defineStore('storeCount', {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    async getPromise() {
      return fetch('https://jsonplaceholder.typicode.com/todos/1');
    },
  },
});
