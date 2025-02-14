import * as signalR from '@microsoft/signalr';
import axios from 'axios';
import { apiUseSiteData } from './index';
export const useDeviceControlSignalR = () => {
  const { udiKey, siteDeviceList } = apiUseSiteData();
  /**
   * 測試 URL
   */
  // window.origin = 'http://localhost:5119';
  window.origin = 'http://192.168.116.166';
  window.origin = `${window.origin}/signalR/all_udi`;
  const signalRAPI = `${window.origin}/SignalRServer`;
  const getDeviceControlAPI = `${window.origin}/api/Device/GetDeviceControl`;
  const getUdiBreathingAPI = `${window.origin}/api/Device/GetUdiBreathing`;
  const GetUnDoneState = `${window.origin}/api/Device/GetUnDoneState`;
  const GetAutoRepairData = `${window.origin}/api/Device/GetAutoRepairData`;
  // const GetDeviceLastResultTime = `${window.origin}/api/Device/GetDeviceLastResultTime`;
  // 設定連線
  var connection = new signalR.HubConnectionBuilder()
    .withUrl(signalRAPI, {
      withCredentials: false
    })
    .withAutomaticReconnect()
    .build(); //與Server建立連線.

  // 正在重新連線
  connection.onreconnecting((error) => {
    console.log('SignalR 正在重連...', error);
  });

  // 已重新連線
  connection.onreconnected((connectionId) => {
    console.log('SignalR 已重連. 連接ID:', connectionId);
    setTimeout(() => {
      getData();
    }, 2000); // 嘗試重連後，延遲2秒再取得資料
  });

  // SignalR 連線事件
  const connectionAction = () => {
    connection
      .start()
      .then(function () {
        console.log('Hub 連線完成');
      })
      .catch(function (err) {
        console.log('連線錯誤: ' + err.toString());
      });

    // 註冊人數異動
    connection.on('UpdateUserCount', (response) => {
      console.log(response);
    });

    getData();
  };

  // 取得設備狀態
  const getDeviceControl = (dbName) => {
    return axios
      .get(getDeviceControlAPI, {
        params: {
          DBName: dbName
        }
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //取得呼吸登資料;
  const getUdiBreathing = (dbName) => {
    return axios
      .get(getUdiBreathingAPI, {
        params: {
          DBName: dbName
        }
      })
      .then((res) => {
        if (res.data.RTN_CODE != 1) {
          return res.data;
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //取得呼吸登資料;
  const getUnDoneState = (dbName) => {
    return axios
      .get(GetUnDoneState, {
        params: {
          DBName: dbName
        }
      })
      .then((res) => {
        if (res.data.RTN_CODE != 1) {
          return res.data;
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //取得設備錯誤資料
  const getAutoRepairData = (dbName) => {
    return axios
      .get(GetAutoRepairData, {
        params: {
          DBName: dbName
        }
      })
      .then((res) => {
        if (res.data.RTN_CODE != 1) {
          return res.data;
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 取得 跑迴圈取得各廠區的資料
  const getData = async () => {
    for (var key of udiKey.value) {
      const id = key.split('_')[0];
      if (!siteDeviceList.value.has(id)) {
        siteDeviceList.value.set(id, new Map());
      }

      // 註冊 取得設備狀態
      const diviceControl = await getDeviceControl(key);
      siteDeviceList.value.get(id).set('divControl', diviceControl);

      connection.on(`refreshDeviceControl_${key}`, async (response) => {
        const res = JSON.parse(response);
        siteDeviceList.value.get(id).set('divControl', res);

        if (res == null) {
          getDeviceControl(id + '_UDI');
        }
      });

      // // 註冊 UDI呼吸燈
      const udiBreathing = await getUdiBreathing(key);
      siteDeviceList.value.get(id).set('udiBreathing', udiBreathing);

      connection.on(`refreshBreathing_${key}`, (response) => {
        const res = JSON.parse(response);
        siteDeviceList.value.get(id).set('udiBreathing', res);
      });

      // // 註冊 未完成指令
      const unDoneState = await getUnDoneState(key);
      siteDeviceList.value.get(id).set('udiUnDoneState', unDoneState);

      connection.on(`refreshUnDoneState_${key}`, (response) => {
        const res = JSON.parse(response);
        siteDeviceList.value.get(id).set('udiUnDoneState', res);
      });

      // 取得設備自動修復資料
      const getAutoRepair = await getAutoRepairData(key);
      siteDeviceList.value.get(id).set('autoRepair', getAutoRepair);
      console.log(getAutoRepair);
      connection.on(`refreshAutoRepair_${key}`, (response) => {
        const res = JSON.parse(response);
        console.log(res);
        siteDeviceList.value.get(id).set('autoRepair', res);
      });
    }
  };

  // 關閉頁籤的時候，取消事件註冊，中斷連線
  function cleanupSignalR() {
    if (connection) {
      connection.off('refreshDeviceControl'); // 取消订阅
      connection.off('refreshUdiBreathing'); // 取消订阅
      connection.stop().catch((err) => console.error(err.toString()));
    }
  }
  // 關閉網頁事件
  window.addEventListener('beforeunload', cleanupSignalR);

  return {
    connectionAction,
    cleanupSignalR
  };
};
