import axios from 'axios';

const dcsAxios = axios.create({
  baseURL: 'http://192.168.116.166/signalR/all_udi/api/Dcs/'
  //baseURL: `${location.origin}/signalR/all_udi/api/dcs/` //正式
});

export const useGetDcsMenuList = async () => {
  try {
    const res = await dcsAxios.get('GetDcsMenuList');
    return res;
  } catch (error) {
    console.log(error);
  }
};
