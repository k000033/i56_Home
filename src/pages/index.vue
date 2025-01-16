<script setup>
import {
  apiUseDeviceControlSignalR,
  apiUseSiteData,
  apiUseSiteUI
} from '../componentApi/index';
import { onMounted } from 'vue';

const { connectionAction } = apiUseDeviceControlSignalR();
const { siteList } = apiUseSiteData();
const { getEnsureNineSiteCodes, getSiteBreathing, getSiteApServiceIP } =
  apiUseSiteUI();

const siteGrid = ref([]);

const toUDI = (ip) => {
  const udiUrl = `http://${ip}/dcs/udi.device_control/`;
  window.open(udiUrl);
};
const toI56 = (ip) => {
  const udiUrl = `http://${ip}/dcs/`;
  window.open(udiUrl);
};

onMounted(async () => {});
</script>
<template>
  <div class="tw-flex tw-flex-wrap tw-h-screen tw-gap-[4px]">
    <div
      v-for="item in siteList"
      :key="item.SITE_ID"
      class="max-xl:tw-w-full max-2xl:tw-w-[calc(100%/2-8px)] tw-w-[calc(100%/3-8px)] tw-h-[calc(100%/3-8px)] tw-border tw-border-slate-700 tw-min-h-[300px]"
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
        </div>
      </div>
      <Device_Content2 :siteId="item.SITE_ID" />
    </div>
  </div>
</template>
