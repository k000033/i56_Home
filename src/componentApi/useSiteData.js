import { storeToRefs } from 'pinia';
import {
  apiUseGetUdiConnectionKey,
  apiUseGetSiteList,
  apiUseGetSiteOrderType,
  apiUseRepairError
} from '../api/index';
import { useSiteStore } from '../stores/siteStore';
export const useSiteData = () => {
  const siteStore = useSiteStore();
  const { udiKey, siteOrderType, siteList, siteDeviceList, siteGrid } =
    storeToRefs(siteStore);

  // 取得 所有 廠區UDI 連接字串
  const getUdiConnectionKey = async () => {
    const res = await apiUseGetUdiConnectionKey();
    udiKey.value = res.data;
    console.log(res.data);
    return res.data;
  };

  // 取得 所有廠區名稱代號
  const getSiteList = async () => {
    const res = await apiUseGetSiteList();
    siteList.value = res.data;
    console.log(res.data);
    return res.data;
  };

  // 取得 取得指令的代號，名稱
  const getSiteOrderType = async () => {
    const res = await apiUseGetSiteOrderType();
    siteOrderType.value = res.data;
    console.log(res.data);
    return res.data;
  };

  const repairErrorAction = async (siteId, deviceId, orderId) => {
    await apiUseRepairError(siteId, deviceId, orderId);
  };

  return {
    siteList,
    udiKey,
    siteDeviceList,
    siteOrderType,
    siteGrid,
    getUdiConnectionKey,
    getSiteList,
    getSiteOrderType,
    repairErrorAction
  };
};
