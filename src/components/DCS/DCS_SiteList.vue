<script setup>
import { apiUseSiteData } from '../../componentApi/index';
const { siteList } = apiUseSiteData();
let currentSiteId = '';

const openI56Web = (siteId, event) => {
  event.preventDefault();
  console.log(siteId);
  const offWidth = document.querySelector('#' + siteId).offsetWidth;
  const offleft = document.querySelector('#' + siteId).offsetLeft;

  document.querySelector('#line').style.left = offleft + 'px';
  document.querySelector('#line').style.width = offWidth + 'px';
};
</script>

<template>
  <div class="tw-text-white">
    <div class="tw-flex tw-w-full tw-relative">
      <a
        v-for="item in siteList"
        :key="item.SITE_ID"
        href="#"
        :id="item.SITE_ID"
        class="tw-flex-grow tw-flex tw-justify-center tw-items-center tw-py-3 tw-text-2xl"
        @click="openI56Web(item.SITE_ID, $event)"
        >{{ item.SITE_ID }}</a
      >
      <span
        id="line"
        class="tw-block tw-absolute tw-bottom-0 tw-left-0 tw-h-1 tw-w-6 tw-bg-slate-100 tw-duration-300"
      ></span>
    </div>
  </div>
</template>
