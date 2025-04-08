<script setup>
import { apiUseDcsData } from '../../componentApi/index';
const { tabList, currentTab } = apiUseDcsData();
const changeTab = (x) => {
  console.log(x);
  currentTab.value = x;
};

const removeTab = (x) => {
  console.log(x);
  tabList.value.splice(x, 1);
  if (tabList.value.length === 0) {
    currentTab.value = '';
  } else if (currentTab.value > x) {
    currentTab.value = currentTab.value - 1;
  } else if ((currentTab.value = x)) {
    currentTab.value = currentTab.value - 1;
  }
};

const handleClick = (x) => {
  if (x.index == currentTab.value) {
    // 找到 data-url 等於 _src 的元素，取得其 src 屬性
    var srcValue = document
      .querySelector('.ifmViewClass[data-id="' + parseInt(x.index) + '"]')
      ?.getAttribute('src');

    // 如果找到 srcValue，則設定到 data-id 等於 x.index 的元素
    if (srcValue) {
      var targetIframe = document.querySelector(
        '.ifmViewClass[data-id="' + x.index + '"]'
      );
      if (targetIframe) {
        targetIframe.setAttribute('src', srcValue);
      }
    }
  }
};
</script>
<template>
  <div class="text tw-border-b tw-border-gray-600">
    <el-tabs
      v-model="currentTab"
      type="border-card"
      class="demo-tabs"
      closable
      @tab-change="changeTab"
      @tab-remove="removeTab"
      @tab-click="handleClick"
    >
      <el-tab-pane v-for="(tab, index) in tabList" :key="tab.rul" :name="index">
        <template #label>
          <span class="tw-text-base" :style="[{ color: tab.color }]">{{
            tab.siteId + ' _ ' + tab.caption
          }}</span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped>
.text :deep(.el-tabs) {
  background-color: black;
  height: 30px;
}
.text :deep(.el-tabs__content) {
  display: none;
}

.text :deep(.el-tabs__nav-scroll) {
  background-color: #0f172a !important;
  border: none !important;
}

.text :deep(.el-tabs--top) {
  border: none;
  border-bottom: 1px solid rgba(65, 65, 65, 0.4);
}

.text :deep(.el-tabs__item) {
  height: 30px;
  opacity: 0.5;
}

.text :deep(.el-tabs__header) {
  border: none;
  /* border-bottom: 1px solid rgba(65, 65, 65, 0.4) !important; */
}
.text :deep(.el-tabs__item.is-active) {
  background: #424040 !important;
  opacity: 1;
  font-weight: bold;
}
</style>
