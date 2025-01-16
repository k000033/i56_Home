<script setup>
import {
  apiUseDeviceControlSignalR,
  apiUseSiteData
} from '../componentApi/index';
const { connectionAction } = apiUseDeviceControlSignalR();
const { getUdiConnectionKey, getSiteList, getSiteOrderType } = apiUseSiteData();
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
    <div class="tw-flex-1 tw-overflow-auto">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
