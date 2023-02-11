import { defineStore } from 'pinia';

interface UserInfo {
  name: string;
  age: number;
}

export const useStore = defineStore('store', {
  state: () => {
    return {
      users: [] as UserInfo[],
      currentUser: null as UserInfo | null,
      nbrUser: 0 as Number,
    };
  },
});
