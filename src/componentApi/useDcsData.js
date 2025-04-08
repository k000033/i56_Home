import { storeToRefs } from 'pinia';
import { useDcsStoree } from '../stores/dcsStore';
import { apiUseGetDcsMenuList } from '../api/index';
export const useDcsData = () => {
  const dcsStoree = useDcsStoree();
  const { menuList, tabList, currentTab } = storeToRefs(dcsStoree);

  const getDcsMenuList = async () => {
    const res = await apiUseGetDcsMenuList();
    menuList.value = res.data;
    console.log(res.data);
    return res.data;
  };

  return { getDcsMenuList, menuList, tabList, currentTab };
};
