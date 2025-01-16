import axios from 'axios';

const allDeviceStateSignalRAxios = axios.create({
  baseURL: 'http://192.168.100.134/signalR/all_udi/api/Device/'
  //baseURL: `${location.origin}/dcs/carryProject.ashx` //正式
});

// 取得 UDI 連接字串 KEY
export const useGetUdiConnectionKey = async () => {
  try {
    const res = await allDeviceStateSignalRAxios.get('GetUdiConnectionKey');
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 取得 所有廠區名稱代號
export const useGetSiteList = async () => {
  try {
    const res = await allDeviceStateSignalRAxios.get('GetSiteList');
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 取得 取得指令的代號，名稱
export const useGetSiteOrderType = async () => {
  try {
    const res = await allDeviceStateSignalRAxios.get('GetSiteOrderType');
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 修復錯誤
export const useRepairError = async (siteId, deviceId, orderId) => {
  try {
    await allDeviceStateSignalRAxios.post('RepairError', {
      DbName: siteId + '_UDI',
      deviceId: deviceId,
      orderId: orderId
    });
  } catch (error) {
    console.log(error);
  }
};
