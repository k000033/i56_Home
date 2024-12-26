import { storeToRefs } from 'pinia';
import {
  apiUseGetUdiConnectionKey,
  apiUseGetSiteList,
  apiUseGetSiteOrderType
} from '../api/index';
import { useSiteStore } from '../stores/siteStore';
export const useSiteData = () => {
  const siteStore = useSiteStore();
  const { udiKey, siteOrderType, siteList } = storeToRefs(siteStore);

  // 取得 所有 廠區UDI 連接字串
  const getUdiConnectionKey = async () => {
    const res = await apiUseGetUdiConnectionKey();
    udiKey.value = res.data;
    console.log(res.data);
    return res.data;
  };

  const getSiteList = async () => {
    const res = await apiUseGetSiteList();
    siteList.value = res.data;
    console.log(res.data);
    return res.data;
  };

  const getSiteOrderType = async () => {
    const res = await apiUseGetSiteOrderType();
    siteOrderType.value = res.data;
    console.log(res.data);
    return res.data;
  };

  return {
    udiKey,
    getUdiConnectionKey,
    getSiteList,
    getSiteOrderType
  };
};
