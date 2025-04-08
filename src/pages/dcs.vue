<script setup>
import { apiUseDcsData } from '../componentApi/index';
const { getDcsMenuList, menuList } = apiUseDcsData();
onMounted(async () => {
  await getDcsMenuList();
  console.log(menuList.value);
});
</script>
<template>
  <div>
    <!-- <DCS_SiteList /> -->
    <DCS_SiteMenu />
    <DCS_Tabs />
    <DCS_Iframe />
  </div>
</template>
