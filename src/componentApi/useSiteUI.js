import { apiUseSiteData } from './index';

export const useSiteUI = () => {
  const { siteList, siteDeviceList, siteOrderType, detailId } =
    apiUseSiteData();

  // 取得廠區AP IP
  const getSiteApServiceIP = computed(() => {
    const apServiceIP = siteList.value.find((x) => x.SITE_ID == detailId.value);
    return apServiceIP;
  });
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

  const getQueueOrderQty = (siteId, deviceId) => {
    const res = siteDeviceList.value.get(siteId)?.get('queueOrder');
    if (!res) {
      return 0;
    }
    const qty = res.find((x) => x.OBJECT_ID == deviceId);
    if (!qty) {
      return 0;
    }
    return qty.QUEUE_COUNT;
  };

  const getUnDoneStateData = () => {
    const res = siteDeviceList.value.get(detailId.value)?.get('udiUnDoneState');
    return res;
  };

  // 取得自動修復的數字
  const getAutoRepair = (siteId, deviceId) => {
    const res = siteDeviceList.value.get(siteId)?.get('autoRepair');
    if (!res) {
      return '';
    }

    if (res?.lenght == 0) {
      return '';
    }
    return res.filter((x) => x.DEVICE_ID == deviceId).length;
  };

  // 設備標題Style ，表示開啟、關閉 、處理中
  const diviceStatus = (state) => {
    if (!state) {
      return '#aaa';
    }
    switch (state) {
      case 2: // 關閉
        return 'background:#030;color:#666';
      case 1: // 開啟
        return 'background:#0a0;color:#fff';
      default: // 處理中
        return 'background:#ff0;color:#222';
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
      )[0]?.NAME;
    }
  };

  return {
    getSiteDeviceList,
    diviceStatus,
    getSiteDeviceState,
    workLight,
    getSiteBreathing,
    getUnDoneState,
    deviceBorderColor,
    getAutoRepair,
    getSiteApServiceIP,
    getUnDoneStateData,
    getQueueOrderQty
  };
};
