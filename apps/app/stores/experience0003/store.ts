import { defineStore } from 'pinia';

export const useCountStore = defineStore('storeCount', {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    add() {
      this.count++;
    },
  },
});
