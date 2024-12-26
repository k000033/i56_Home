import axios from 'axios';

const defaultAxios = axios.create({
  baseURL: 'http://localhost:5119/api/Device/'
});

// 取得 UDI 連接字串 KEY
export const useGetUdiConnectionKey = async () => {
  try {
    const res = await defaultAxios.get('GetUdiConnectionKey');
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 取得 所有廠區
export const useGetSiteList = async () => {
  try {
    const res = await defaultAxios.get('GetSiteList');
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const useGetSiteOrderType = async () => {
  try {
    const res = await defaultAxios.get('GetSiteOrderType');
    return res;
  } catch (error) {
    console.log(error);
  }
};
