<script setup>
import {
  apiUseSiteData,
  apiUseSiteUI,
  apiUseDeviceControlSignalR
} from '../componentApi/index';
import { onMounted } from 'vue';

const { siteList, openDetail, detailId, getUdiConnectionKey } =
  apiUseSiteData();
const { getSiteBreathing } = apiUseSiteUI();
const { connectionActionSignalR, stopConectionSignalR } =
  apiUseDeviceControlSignalR();

const toUDI = (ip) => {
  const udiUrl = `http://${ip}/dcs/udi.device_control/`;
  window.open(udiUrl);
};
const toI56 = (ip) => {
  const udiUrl = `http://${ip}/dcs/`;
  window.open(udiUrl);
};

const openDetalAction = (siteId) => {
  openDetail.value = true;
  detailId.value = siteId;
};

onMounted(async () => {
  await getUdiConnectionKey();
  connectionActionSignalR();
});

onUnmounted(() => {
  stopConectionSignalR();
});
</script>
<template>
  <div class="tw-flex tw-flex-wrap tw-h-full tw-gap-[4px] s tw-w-full">
    <div
      v-for="item in siteList"
      :key="item.SITE_ID"
      class="max-xl:tw-w-full max-2xl:tw-w-[calc(100%/2-5px)] tw-w-[calc(100%/3-5px)] tw-h-[calc(100%/3-8px)] tw-border tw-border-slate-700 tw-min-h-[300px] tw-bg-black"
    >
      <div
        v-if="item != ''"
        class="tw-text-[#FFD700] tw-h-[40px] tw-text-2xl tw-pl-2 tw-py-1 tw-bg-[#333333]/40 tw-flex tw-items-center tw-gap-2"
      >
        <div class="tw-w-8">
          <SvgIcon name="twilight" :fill="getSiteBreathing(item.SITE_ID)" />
        </div>
        <div>
          <span>{{ item.CAPTION }}</span>
        </div>

        <div class="tw-ml-auto tw-flex tw-items-center tw-gap-2 tw-pr-2">
          <a
            class="tw-bg-slate-700 tw-text-sm tw-px-2 tw-py-1 tw-rounded-sm hover:tw-bg-slate-800 tw-cursor-pointer"
            @click="toUDI(item.AP_IP)"
            >UDI</a
          >
          <a
            class="tw-bg-slate-700 tw-text-sm tw-px-2 tw-py-1 tw-rounded-sm hover:tw-bg-slate-800 tw-cursor-pointer"
            @click="toI56(item.AP_IP)"
            >I56</a
          >
          <a
            class="tw-bg-slate-700 tw-text-sm tw-px-2 tw-py-1 tw-rounded-sm hover:tw-bg-slate-800 tw-cursor-pointer"
            >WAS</a
          >
          <a
            class="tw-w-7 tw-h-7 tw-cursor-pointer"
            @click="openDetalAction(item.SITE_ID)"
          >
            <SvgIcon name="more_vert" fill="#aaa" />
          </a>
        </div>
      </div>
      <Device_Content :siteId="item.SITE_ID" />
    </div>
  </div>
</template>
