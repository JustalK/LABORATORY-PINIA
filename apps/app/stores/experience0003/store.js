import { defineStore } from 'pinia';

export const useStore = defineStore('storeCount', {
  state: () => {
    return {
      count: 15,
    };
  },
  getters: {
    double() {
      return this.count * 2;
    },
    doublePlusOne() {
      return this.double + 1;
    },
    whatever() {
      return (n) => this.count + n;
    },
  },
});
