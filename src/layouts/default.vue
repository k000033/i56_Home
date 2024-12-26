<script setup>
import {
  apiUseDeviceControlSignalR,
  apiUseSiteData
} from '../componentApi/index';

import { onMounted } from 'vue';

const { connectionAction } = apiUseDeviceControlSignalR();
const { getUdiConnectionKey, getSiteList, getSiteOrderType } = apiUseSiteData();

onMounted(async () => {
  getSiteList();
  getSiteOrderType();
  await getUdiConnectionKey();
  connectionAction();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
