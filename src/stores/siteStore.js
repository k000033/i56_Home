import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useSiteStore = defineStore('siteStore', () => {
  const siteDeviceList = ref(new Map());
  const udiKey = ref([]);
  const siteOrderType = ref([]);
  const siteList = ref([]);
  const siteGrid = ref([]);
  return {
    siteDeviceList,
    udiKey,
    siteOrderType,
    siteList,
    siteGrid
  };
});
