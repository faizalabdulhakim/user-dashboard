import { defineStore } from 'pinia';

export const useTitleStore = defineStore('title', {
  state: () => ({
    activeTitle: 'Dashboard',
  }),
  actions: {
    setTitle(newTitle) {
      this.activeTitle = newTitle;
    },
  },
});
