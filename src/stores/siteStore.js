import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useSiteStore = defineStore('siteStore', () => {
  const siteDeviceList = ref(new Map());
  const udiKey = ref([]);
  const siteOrderType = ref([]);
  const siteList = ref([]);
  const detalId = ref('');
  const openDetal = ref(false);
  return {
    siteDeviceList,
    udiKey,
    siteOrderType,
    siteList,
    openDetal,
    detalId
  };
});
