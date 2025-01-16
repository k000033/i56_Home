import { apiUseSiteData } from './index';
export const useSiteUI = () => {
  const { siteList, siteDeviceList, siteOrderType, siteGrid } =
    apiUseSiteData();

  // 取得廠區AP IP
  const getSiteApServiceIP = (siteId) => {
    const apServiceIP = siteList.value.find((x) => x.SITE_ID == siteId).AP_IP;
    return apServiceIP;
  };
  // 取得廠區設備列表
  const getSiteDeviceList = (siteId) => {
    return siteDeviceList.value.get(siteId)?.get('divControl');
  };

  // 取得呼吸燈
  const getSiteBreathing = (siteId) => {
    return siteDeviceList.value.get(siteId)?.get('udiBreathing')?.BREATHING;
  };

  // 取得未完成指令
  const getUnDoneState = (siteId, deviceId) => {
    const res = siteDeviceList.value.get(siteId)?.get('udiUnDoneState');
    if (!res) {
      return 0;
    }
    return res.filter((x) => x.OBJECT_ID == deviceId).length;
  };

  // 取得自動修復的數字
  const getDeviceError = (siteId, deviceId) => {
    const res = siteDeviceList.value.get(siteId)?.get('deviceError');
    if (!res) {
      return '';
    }

    if (res?.lenght == 0) {
      return '';
    }
    return res.filter((x) => x.DEVICE_ID == deviceId).length;
  };

  // 設備的狀態，開啟 #030、關閉 #0e0、處理中 yellow
  const diviceStatus = (state) => {
    if (!state) {
      return '#aaa';
    }
    switch (state) {
      case 2: // 關閉
        return '#030';
      case 1: // 開啟
        return '#0e0';
      default: // 處理中
        return 'yellow';
    }
  };

  // 顯示邊框的顏色
  const deviceBorderColor = (alarm) => {
    if (alarm?.trim() == '#300') {
      return '#334155';
    } else {
      return alarm?.trim();
    }
  };

  // 取得廠區設備指示顏色
  const workLight = (light, alarm) => {
    if (alarm?.trim() != '#300') {
      // 有錯誤顯示紅色
      return alarm;
    } else if (light.trim() != '#030') {
      // 有執行指示顯示綠色
      return light;
    } else {
      return light;
    }
  };

  // 取得廠區設備指示名稱
  const getSiteDeviceState = (siteId, type, light, alarm) => {
    // 表示目前沒有執行指示
    if (alarm?.trim() == '#300' && light?.trim() == '#030') {
      return '';
    } else {
      return siteOrderType.value.filter(
        (x) => x.ID.split('_')[0] == siteId && x.TYPE == type
      )[0].NAME;
    }
  };

  return {
    getSiteDeviceList,
    diviceStatus,
    getSiteDeviceState,
    workLight,
    getSiteBreathing,
    getSiteApServiceIP,
    getUnDoneState,
    deviceBorderColor,
    getDeviceError
  };
};
