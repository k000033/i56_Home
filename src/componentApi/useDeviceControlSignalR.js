import * as signalR from '@microsoft/signalr';
import axios from 'axios';
import { apiUseSiteData } from './index';

export const useDeviceControlSignalR = () => {
  const { udiKey, siteDeviceList, connection, queueOrderList } =
    apiUseSiteData();
  /**
   * 測試 URL
   */
  // window.origin = 'http://localhost:5119';
  //window.origin = 'http://192.168.116.166';

  window.origin = `http://192.168.100.134`;
  window.origin = `${window.origin}/signalR/all_udi`;
  const signalRAPI = `${window.origin}/SignalRServer`;
  const getDeviceControlApi = `${window.origin}/api/Device/GetDeviceControl`;
  const getUdiBreathingAPI = `${window.origin}/api/Device/GetUdiBreathing`;
  const GetUnDoneStateApi = `${window.origin}/api/Device/GetUnDoneState`;
  const GetAutoRepairDataApi = `${window.origin}/api/Device/GetAutoRepairData`;
  const GetQueueCountApi = `${window.origin}/api/Device/GetQueueCount`;
  // 取得設備控制
  const getDeviceControl = async (dbName, id) => {
    try {
      const res = await axios.get(getDeviceControlApi, {
        params: {
          DBName: dbName
        }
      });
      siteDeviceList.value.get(id).set('divControl', res.data);
      // 註冊 signalR 事件
      connection.value.on(
        `refreshDeviceControl_${dbName}`,
        async (response) => {
          const res = JSON.parse(response);

          siteDeviceList.value.get(id).set('divControl', res);

          if (res == null) {
            getDeviceControl(id + '_UDI', id);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // 取得呼吸燈
  const getUdiBreathing = async (dbName, id) => {
    try {
      const res = await axios.get(getUdiBreathingAPI, {
        params: {
          DBName: dbName
        }
      });

      siteDeviceList.value.get(id).set('udiBreathing', res.data);
      // 註冊 signalR 事件
      connection.value.on(`refreshBreathing_${dbName}`, (response) => {
        const res = JSON.parse(response);
        siteDeviceList.value.get(id).set('udiBreathing', res);
      });
    } catch (error) {
      console.log(error);
    }
  };
  // 取得未完成的指令
  const GetUnDoneState = async (dbName, id) => {
    try {
      const res = await axios.get(GetUnDoneStateApi, {
        params: {
          DBName: dbName
        }
      });

      siteDeviceList.value.get(id).set('udiUnDoneState', res.data);
      // 註冊 signalR 事件
      connection.value.on(`refreshUnDoneState_${dbName}`, (response) => {
        const res = JSON.parse(response);
        siteDeviceList.value.get(id).set('udiUnDoneState', res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 自動修復
  const GetAutoRepairData = async (dbName, id) => {
    try {
      const res = await axios.get(GetAutoRepairDataApi, {
        params: {
          DBName: dbName
        }
      });

      siteDeviceList.value.get(id).set('autoRepair', res.data);
      // 註冊 signalR 事件
      connection.value.on(`refreshAutoRepair_${dbName}`, (response) => {
        siteDeviceList.value.get(id).set('autoRepair', res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const GetQueueCount = async (dbName, id) => {
    try {
      const res = await axios.get(GetQueueCountApi, {
        params: {
          DBName: dbName
        }
      });

      siteDeviceList.value.get(id).set('queueOrder', res.data);

      connection.value.on(`refreshQueueOrder_${dbName}`, (response) => {
        const res = JSON.parse(response);
        siteDeviceList.value.get(id).set('queueOrder', res);
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 設定連線
  connection.value = new signalR.HubConnectionBuilder()
    .withUrl(signalRAPI, {
      withCredentials: false
    })
    .withAutomaticReconnect()
    .build(); //與Server建立連線.

  // 正在重新連線
  connection.value.onreconnecting((error) => {
    console.log('SignalR 正在重連...', error);
  });

  // 已重新連線
  connection.value.onreconnected((connectionId) => {
    console.log('SignalR 已重連. 連接ID:', connectionId);
    setTimeout(() => {
      getData();
    }, 2000); // 嘗試重連後，延遲2秒再取得資料
  });

  // SignalR 連線事件
  const connectionActionSignalR = () => {
    connection.value
      .start()
      .then(function () {
        console.log('Hub 連線完成');
      })
      .catch(function (err) {
        console.log('連線錯誤: ' + err.toString());
      });

    // 註冊人數異動
    connection.value.on('UpdateUserCount', (response) => {
      console.log(response);
    });

    getData();
  };

  // 取得 跑迴圈取得各廠區的資料
  const getData = async () => {
    for (var key of udiKey.value) {
      const id = key.split('_')[0];
      if (!siteDeviceList.value.has(id)) {
        siteDeviceList.value.set(id, new Map());
      }
      // 註冊 取得設備狀態
      getDeviceControl(key, id);
      // // 註冊 UDI呼吸燈
      getUdiBreathing(key, id);
      // // 註冊 未完成指令
      GetUnDoneState(key, id);
      // 取得設備自動修復資料
      GetAutoRepairData(key, id);

      GetQueueCount(key, id);
    }
    // GetSiteStateData('134_UDI');
  };

  const stopConectionSignalR = () => {
    connection.value.stop();
    console.log('SignalR 已離線');
  };

  // // 關閉頁籤的時候，取消事件註冊，中斷連線
  // function cleanupSignalR() {
  //   if (connection) {
  //     connection.value.off('refreshDeviceControl'); // 取消订阅
  //     connection.value.off('refreshUdiBreathing'); // 取消订阅
  //     connection.value.stop().catch((err) => console.error(err.toString()));
  //   }
  // }

  // 關閉網頁事件
  window.addEventListener('beforeunload', stopConectionSignalR);

  return {
    connectionActionSignalR,
    stopConectionSignalR
  };
};
