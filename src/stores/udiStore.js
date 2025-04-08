import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUdiStore = defineStore('udiStore', () => {
  const siteDeviceList = ref(new Map());
  const udiKey = ref([]);
  const siteOrderType = ref([]);
  const siteList = ref([]);
  const detailId = ref('');
  const openDetail = ref(false);
  const connection = ref(null);
  const siteState = ref([]);
  const queueOrderList = ref(0);
  return {
    siteDeviceList,
    udiKey,
    siteOrderType,
    siteList,
    openDetail,
    detailId,
    connection,
    siteState,
    queueOrderList
  };
});
