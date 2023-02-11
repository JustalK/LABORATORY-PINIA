import { defineStore } from 'pinia';

export const useStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    increment() {
      this.counter.count += 1;
    },
    change(n) {
      this.counter.count = n;
    },
  },
  getters: {
    getCount() {
      return this.counter.count;
    },
  },
});
