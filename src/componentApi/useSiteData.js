import { storeToRefs } from 'pinia';
import {
  apiUseGetUdiConnectionKey,
  apiUseGetSiteList,
  apiUseGetSiteOrderType,
  apiUseRepairError,
  apiUseGetUdiErrorData,
  apiUseGetUdiStateData
} from '../api/index';
import { useUdiStore } from '../stores/udiStore';
export const useSiteData = () => {
  const udiStore = useUdiStore();
  const {
    udiKey,
    siteOrderType,
    siteList,
    siteDeviceList,
    openDetail,
    detailId,
    connection,
    siteState,
    queueOrderList
  } = storeToRefs(udiStore);

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

  const getUdiErrorData = async () => {
    const key = detailId.value + '_UDI';
    const res = await apiUseGetUdiErrorData(key);
    return res.data;
  };

  const getUdiStateData = async () => {
    const key = detailId.value + '_UDI';
    const res = await apiUseGetUdiStateData(key);
    return res.data;
  };

  return {
    siteList,
    udiKey,
    siteDeviceList,
    siteOrderType,
    getUdiConnectionKey,
    getSiteList,
    getSiteOrderType,
    repairErrorAction,
    openDetail,
    detailId,
    getUdiErrorData,
    getUdiStateData,
    connection,
    siteState,
    queueOrderList
  };
};
