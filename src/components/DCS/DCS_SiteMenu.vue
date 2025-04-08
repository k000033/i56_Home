<script setup>
import { apiUseSiteData } from '../../componentApi/index';
import { apiUseDcsData } from '../../componentApi/index';
const { siteList } = apiUseSiteData();
const { menuList, tabList, currentTab } = apiUseDcsData();

const colors = [
  '#FFFFFF', // 白色
  '#ffa191d9', // 亮金色
  '#FF4D4D', // 亮紅色
  '#38d7d1', // 淺灰色
  '#3399FF', // 亮藍色
  '#66CC66', // 亮綠色
  '#C060E0' // 亮紫色
];

// 找出父層
const menuParent = computed(() => {
  return menuList.value.filter((x) => x.PARENT_ID == '');
});

// 找出父層的子層
const menuItem = (parent) => {
  return menuList.value.filter((x) => x.PARENT_ID == parent);
};
// 選擇選單
const handleSelect = (menuItem) => {
  const [siteId, ip, url, color, caption] = menuItem.split(',');

  // 判斷有沒有相同的
  const exists = tabList.value.some(
    (tab) => tab.siteId === siteId && tab.url === url
  );

  // 不存在新增
  if (!exists) {
    tabList.value.push({
      siteId: siteId,
      ip: ip,
      url: url,
      color: color,
      caption: caption
    });
    // 如果是新增Tab，則設定新增的Tab為當前Tab
    currentTab.value = currentTab.value === '' ? 0 : tabList.value.length - 1;
  } else {
    // 如果是已存在的Tab，則設定當前Tab為該Tab
    currentTab.value = tabList.value.findIndex(
      (tab) => tab.siteId === siteId && tab.url === url
    );
  }
};

const test = (aa) => {
  const result = aa.substring(0, aa.length - 3);
  return result;
};
</script>
<template>
  <div class="tw-bg-[#3336] DCS_SiteMenu">
    <el-menu
      mode="horizontal"
      @select="handleSelect"
      text-color="#ffd700"
      :ellipsis="false"
      show-timeout="200"
    >
      <div class="tw-flex tw-items-center tw-pl-4 tw-pr-4">
        <span class="tw-text-[#ffd700] !tw-opacity-100 tw-text-2xl"
          >低溫物流系統</span
        >
      </div>

      <!-- 廠區 -->
      <el-sub-menu
        v-for="(site, idx) in siteList"
        :key="site.SITE_ID"
        :index="site.SITE_ID"
      >
        <template #title>
          <span class="tw-font-bold" :style="[{ color: colors[idx] }]">{{
            test(site.CAPTION)
          }}</span></template
        >
        <!-- 父層 -->
        <el-sub-menu
          v-for="parent in menuParent"
          :key="parent.MENU_ID"
          :index="parent.MENU_ID"
        >
          <template #title>{{ parent.CAPTION }}</template>

          <!-- 子層 -->
          <template
            v-for="item in menuItem(parent.MENU_ID)"
            :key="item.MENU_ID"
          >
            <el-menu-item
              v-if="item.PARENT_ID == parent.MENU_ID"
              :index="
                test(site.CAPTION) +
                ',' +
                site.AP_IP +
                ',' +
                item.URL +
                ',' +
                colors[idx] +
                ',' +
                item.CAPTION
              "
              >{{ item.CAPTION }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<style scoped></style>
