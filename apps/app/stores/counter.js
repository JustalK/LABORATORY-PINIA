import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    increment() {
      this.count += 1;
    },
    change(n) {
      this.count = n;
    },
  },
  getters: {
    getCount() {
      return this.count;
    },
  },
});
