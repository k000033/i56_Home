import axios from 'axios';

const dcsAxios = axios.create({
  //baseURL: 'http://localhost/work/carryProject.ashx' //測試

  baseURL: `${location.origin}/dcs/carryProject.ashx` //正式
});

export const getDcsMenuAxios = (params) => {
  console.log('-- _NAME === ' + 'sys.DCS_Menu');
  console.log('-- _TYPE === ' + 'INSERT');
  console.log('-- MENU_ID  === ' + params.MENU_ID);
  console.log('-- TYPE === ' + params.TYPE);
  console.log('-- USER_ID  === ' + params.USER_ID);
  return dcsAxios.get('', {
    params: {
      _NAME: 'sys.DCS_Menu',
      _TYPE: 'INSERT',
      MENU_ID: params.MENU_ID,
      TYPE: params.TYPE,
      USER_ID: params.USER_ID
    }
  });
};
