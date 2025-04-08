<script setup>
import { apiUseSiteData } from '../../componentApi/index';
const route = useRoute();
const router = useRouter();
const { openDetail, detailId } = apiUseSiteData();
const menuList = ref([
  { name: 'UDI', path: '/', idx: 'index' },
  { name: 'DCS', path: '/dcs', idx: 'dcs' }
]);

const pageSwitch = (pageName) => {
  openDetail.value = false;
  detailId.value = '';

  if (pageName == '/dcs') {
    const routeData = router.resolve({ path: pageName });
    window.open(routeData.href, '_blank');
  } else {
    router.push({ path: pageName });
  }
};
</script>
<template>
  <div class="tw-border-r tw-border-r-slate-600 tw-h-screen">
    <ul class="tw-text-orange-400 tw-text-2xl">
      <li
        v-for="menu in menuList"
        :key="menu.name"
        :class="[
          ' tw-px-2 tw-h-16 tw-flex tw-items-center',
          {
            'tw-border-r-2 tw-border-[#3b86c7] tw-bg-gradient-to-r tw-from-[#3b86c7]/50 tw-to-black tw-cursor-pointer':
              menu.idx == route.name
          }
        ]"
        @click="pageSwitch(menu.path)"
      >
        <div class="tw-font-fantasy tw-text-2xl">
          {{ menu.name }}
        </div>
      </li>
    </ul>
  </div>
</template>
