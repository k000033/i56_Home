<script setup>
import { apiUseSiteData } from '../componentApi/index';
const { siteList } = apiUseSiteData();
</script>
<template>
  <div>
    {{ siteList }}
  </div>
</template>
