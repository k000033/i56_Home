<script setup>
import {
  apiUseDeviceControlSignalR,
  apiUseSiteData
} from '../componentApi/index';
const { connectionAction } = apiUseDeviceControlSignalR();
const { getUdiConnectionKey, getSiteList, getSiteOrderType, openDetal } =
  apiUseSiteData();
onMounted(async () => {
  await getSiteList();
  getSiteOrderType();
  await getUdiConnectionKey();
  connectionAction();
});
</script>
<template>
  <div class="tw-flex tw-justify-center">
    <Global_Menu />
    <div class="tw-flex-1 tw-overflow-auto tw-h-screen">
      <RouterView />
      <Detail_Content v-show="openDetal" />
    </div>
  </div>
</template>

<style scoped></style>
