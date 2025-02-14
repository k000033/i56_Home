<script setup>
import {
  apiUseDeviceControlSignalR,
  apiUseSiteData,
  apiUseSiteUI
} from '../componentApi/index';
import { onMounted } from 'vue';

const { siteList, openDetal, detalId } = apiUseSiteData();
const { getSiteBreathing } = apiUseSiteUI();

const toUDI = (ip) => {
  const udiUrl = `http://${ip}/dcs/udi.device_control/`;
  window.open(udiUrl);
};
const toI56 = (ip) => {
  const udiUrl = `http://${ip}/dcs/`;
  window.open(udiUrl);
};

const openDetalAction = (siteId) => {
  detalId.value = detalId.value == '' ? siteId : '';
  openDetal.value = !openDetal.value;

  if (!openDetal.value) {
    window.uidErrorAgGridApi.setGridOption('rowData', []);
    window.unDoneAgGridApi.setGridOption('rowData', []);
  }
};

onMounted(async () => {});
</script>
<template>
  <div class="tw-flex tw-flex-wrap tw-h-full tw-gap-[4px] tw-relative">
    <Teleport
      v-for="item in siteList"
      :disabled="detalId !== item.SITE_ID"
      to="#detal"
    >
      <div
        :key="item.SITE_ID"
        class="max-xl:tw-w-full max-2xl:tw-w-[calc(100%/2-8px)] tw-w-[calc(100%/3-8px)] tw-h-[calc(100%/3-8px)] tw-border tw-border-slate-700 tw-min-h-[300px] tw-bg-black"
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
        <button
          v-show="openDetal"
          class="tw-bg-[#333333f7] tw-text-slate-100 tw-w-full tw-text-center tw-text-lg tw-px-2 tw-py-1 tw-rounded-lg tw-mt-4 hover:tw-bg-[#333333f7]/80 tw-cursor-pointer"
          @click="openDetalAction(item.SITE_ID)"
        >
          <span>關閉</span>
        </button>
      </div>
    </Teleport>
  </div>
</template>
