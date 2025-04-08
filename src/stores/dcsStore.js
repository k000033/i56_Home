import { defineStore } from 'pinia';

export const useDcsStoree = defineStore('dcsStoree', () => {
  const menuList = ref([]);
  const tabList = ref([]);
  const currentTab = ref('');
  return { menuList, tabList, currentTab };
});
