import { apiUseDeviceControlSignalR } from './index';
export const useSiteUI = () => {
  const { siteList } = apiUseDeviceControlSignalR();

  const keys = computed(() => {
    return Array.from(siteList.value.keys());
  });

  const getPCSites = computed(() => {
    return keys.value.filter((key) => key.substring(0, 2) === 'PC');
  });

  const getDCSites = computed(() => {
    return keys.value.filter((key) => key.substring(0, 2) === 'DC');
  });

  return {
    getPCSites,
    getDCSites,
    getSingalRConnectionKey
  };
};
