<script setup>
import { apiUseDcsData } from '../../componentApi/index';
const { tabList, currentTab } = apiUseDcsData();

// 產生完整的URL
const completeUrl = (ip, url) => {
  if (url.indexOf('?') > -1) {
    return `http://${ip}/dcs/${url}&dcsUser=123456`;
  } else {
    return `http://${ip}/dcs/${url}?dcsUser=123456`;
  }
};
</script>
<template>
  <div>
    <div v-for="(tab, index) in tabList" :key="tab.siteID + tab.url">
      <iframe
        :data-id="index"
        v-show="index == `${currentTab}`"
        :src="completeUrl(tab.ip, tab.url)"
        frameborder="0"
        class="ifmViewClass tw-h-[calc(100vh-72px)] tw-w-full"
      ></iframe>
    </div>
  </div>
</template>
