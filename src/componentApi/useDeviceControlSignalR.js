import * as signalR from '@microsoft/signalr';
import axios from 'axios';
import { useSiteStore } from '../stores/siteStore';
import { storeToRefs } from 'pinia';
import { apiUseSiteData } from './index';
export const useDeviceControlSignalR = () => {
  const siteStore = useSiteStore();
  const { siteDeviceList } = storeToRefs(siteStore);

  const { udiKey } = apiUseSiteData();
  /**
   * 測試 URL
   */
  window.origin = 'http://localhost:5119';

  const signalRAPI = `${window.origin}/SignalRServer`;
  const getDeviceControlAPI = `${window.origin}/api/Device/GetDeviceControl`;
  const getUdiBreathingAPI = `${window.origin}/api/Device/GetUdiBreathing`;
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
        if (res.data.rtN_CODE != 1) {
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
    const siteIds = ['PC5_UDI', 'DC5_UDI', 'DC7_UDI'];

    for (var key of udiKey.value) {
      if (!siteDeviceList.value.has(key)) {
        siteDeviceList.value.set(key, new Map());
      }

      const diviceControl = await getDeviceControl(key);
      siteDeviceList.value.get(key).set('divControl', diviceControl);

      const udiBreathing = await getUdiBreathing(key);
      siteDeviceList.value.get(key).set('udiBreathing', udiBreathing);

      // 註冊 取得設備狀態
      connection.on(`refreshDeviceControl_${key}`, (response) => {
        const res = JSON.parse(response);
        console.log(res);
        siteDeviceList.value.get(key).set('divControl', res);
      });

      // // 註冊 UDI呼吸燈
      connection.on(`refreshBreathing_${key}`, (response) => {
        const res = JSON.parse(response);
        // console.log(res);
        siteDeviceList.value.get(key).set('udiBreathing', res);
      });
    }
    // for (let i = 0; i < udiKey.value.length; i++) {
    //   if (!siteDeviceList.value.has(siteIds[i])) {
    //     siteDeviceList.value.set(siteIds[i], new Map());
    //   }
    //   console.log(siteDeviceList.value);
    //   // 取得設備狀態
    //   const diviceControl = await getDeviceControl(siteIds[i]);
    //   console.log(diviceControl);
    //   siteDeviceList.value.get(siteIds[i]).set('divControl', diviceControl);

    //   // 取得呼吸登資料
    //   const udiBreathing = await getUdiBreathing(siteIds[i]);

    //   siteDeviceList.value.get(siteIds[i]).set('udiBreathing', udiBreathing);

    //   // 註冊 取得設備狀態
    //   connection.on(`refreshDeviceControl_${siteIds[i]}`, (response) => {
    //     const res = JSON.parse(response);
    //     siteDeviceList.value.get(siteIds[i]).set('divControl', res);
    //   });

    //   // 註冊 UDI呼吸燈
    //   connection.on(`refreshBreathing_${siteIds[i]}`, (response) => {
    //     const res = JSON.parse(response);
    //     console.log(res);
    //     siteDeviceList.value.get(siteIds[i]).set('udiBreathing', res);
    //   });
    // }
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
    siteDeviceList,
    connectionAction,
    cleanupSignalR
  };
};
