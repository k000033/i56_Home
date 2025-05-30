import {
  useGetUdiConnectionKey,
  useGetSiteList,
  useGetSiteOrderType,
  useRepairError,
  useGetUdiErrorData,
  useGetUdiStateData
} from './udiAxios.js';
import { useGetDcsMenuList } from './dcsAxios.js';

// udiAxios.js
export const apiUseGetUdiConnectionKey = useGetUdiConnectionKey;
export const apiUseGetSiteList = useGetSiteList;
export const apiUseGetSiteOrderType = useGetSiteOrderType;
export const apiUseRepairError = useRepairError;
export const apiUseGetUdiErrorData = useGetUdiErrorData;
export const apiUseGetUdiStateData = useGetUdiStateData;

// dcsAxios.js
export const apiUseGetDcsMenuList = useGetDcsMenuList;
