<script setup>
import { apiUseSiteUI } from '../componentApi/index';

const { getPCSites, getDCSites } = apiUseSiteUI();
</script>

<template>
  <div class="tw-px-4 tw-py-10 tw-space-y-4">
    <div class="tw-flex">
      <div
        class="tw-bg-red-200 tw-flex tw-flex-col tw-items-center tw-text-2xl tw-justify-center tw-px-2 tw-font-bold tw-gap-4 tw-bg-gradient-to-r tw-from-red-400 tw-from-[-10%] tw-via-black tw-via-10% tw-to-red-400 tw-to-[255%] tw-text-red-400 tw-border-l-[2px] tw-border-red-400"
      >
        <h1>P</h1>
        <h1>C</h1>
      </div>
      <div class="tw-flex tw-flex-1 tw-flex-col">
        <div
          v-for="(device, index) in getPCSites"
          :key="device"
          class="tw-border tw-border-gray-700"
        >
          <siteContain :deviceKey="device" />
        </div>
      </div>
    </div>
    <div class="tw-flex">
      <div
        class="tw-bg-red-200 tw-flex tw-flex-col tw-items-center tw-text-2xl tw-justify-center tw-px-2 tw-font-bold tw-gap-4 tw-bg-gradient-to-r tw-from-green-400 tw-from-[-10%] tw-via-black tw-via-10% tw-to-green-400 tw-to-[255%] tw-text-green-400 tw-border-l-[2px] tw-border-green-400"
      >
        <h1 class="">D</h1>
        <h1 class="">C</h1>
      </div>
      <div class="tw-flex tw-flex-1 tw-flex-col">
        <div
          v-for="(device, index) in getDCSites"
          :key="device"
          class="tw-border tw-border-gray-700"
        >
          <siteContain :deviceKey="device" />
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="tw-px-4 tw-py-10">
    <div v-for="(device, index) in keys" :key="device" class="tw-border">
      <divice_control :deviceKey="device" />
    </div>
  </div> -->
</template>
