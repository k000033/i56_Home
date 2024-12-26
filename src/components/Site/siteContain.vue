<script setup>
import { defineProps } from 'vue';
import { apiUseDeviceControlSignalR } from '../../componentApi/index';
const { siteList } = apiUseDeviceControlSignalR();

const props = defineProps({
  deviceKey: {
    type: String,
    default: ''
  }
});

const siteUdiBreathing = computed(() => {
  if (siteList.value.get(props.deviceKey).size === 0) {
    return { BREATHING: '#030' };
  } else if (
    siteList.value.get(props.deviceKey).get('udiBreathing') === undefined
  ) {
    return { BREATHING: '#030' };
  } else {
    return siteList.value.get(props.deviceKey).get('udiBreathing');
  }
});

const siteDevice = computed(() => {
  if (siteList.value.get(props.deviceKey).size > 0) {
    return siteList.value.get(props.deviceKey).get('divControl');
  }
});

const isDiviceOpen = (state) => {
  if (!state) {
    return '#aaa';
  }
  switch (state) {
    case 2: // 關閉
      return '#030';
    case 1: // 開啟
      return '#0e0';
    default: // 處理中
      return 'yellow';
  }
};

const SiteName = computed(() => {
  switch (props.deviceKey) {
    case 'PC5_UDI':
      return '五股PC';
    case 'DC5_UDI':
      return '五股DC';
    case 'DC7_UDI':
      return '西螺DC';
    default:
      return 'Unknown Site';
  }
});
</script>
<template>
  <div class="tw-relative tw-h-[160px]">
    <div
      class="tw-text-[#d4b761] tw-w-full tw-bg-[#15171E] tw-text-lg tw-px-2 tw-py-1 tw-flex tw-items-center"
    >
      <h1 class="tw-w-[65px] tw-font-mono">{{ SiteName }}</h1>
      <div v-if="siteUdiBreathing.BREATHING" class="tw-w-7 tw-h-7 tw-ml-2">
        <SvgIcon name="twilight" :fill="siteUdiBreathing.BREATHING" />
      </div>
    </div>
    <div class="tw-flex tw-items-center">
      <div v-for="(device, index) in siteDevice" :key="device">
        <div
          class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-relative"
        >
          <div
            class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-relative"
          >
            <SvgIcon name="computer" :fill="isDiviceOpen(device.STATE)" />
            <span class="tw-text-[#d4b761] tw-absolute tw-top-[25%]"
              >{{ device.DEVICE_ID }}
            </span>
            <div
              class="tw-absolute tw-top-[50%] tw-left-0 tw-right-0 tw-mx-auto tw-w-10 tw-h-[12px] tw-rounded tw-ring-2 tw-ring-offset-0 tw-ring-black tw-shadow-inner tw-shadow-black/30"
              style="background: rgb(0, 51, 0)"
            ></div>
          </div>
          <div
            class="tw-relative -tw-top-4 tw-flex tw-flex-col tw-items-center"
          >
            <span class="tw-text-[#d4b761]">{{ device.DESCRIPTION }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
