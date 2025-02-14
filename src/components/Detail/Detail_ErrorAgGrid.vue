<script setup>
import { AgGridVue } from 'ag-grid-vue3';
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
  iconSetMaterial,
  colorSchemeDark
} from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

// 樣式
const myTheme = themeQuartz
  .withPart(iconSetMaterial)
  .withPart(colorSchemeDark)
  .withParams({
    headerHeight: 30,
    inputHeight: 23,
    inputPaddingStart: 21,
    inputBorder: { color: '#fff', style: 'dotted', width: 3 },
    inputBorderRadius: 5
  });

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});

//欄位
const colDefs = ref([
  { field: 'LOG_TIME', headerName: 'LOG_TIME', maxWidth: 200 },
  { field: 'DEVICE_ID', headerName: 'DEVICE_ID', maxWidth: 100 },
  { field: 'ORDER_ID', headerName: 'ORDER_ID', maxWidth: 100 },
  { field: 'MSG', headerName: 'MSG', maxWidth: 800 }
]);

// 預設欄位功能
const defaultColDef = ref({
  sortable: true,
  resizable: true
});

const onGridReady = async (params) => {
  window.uidErrorAgGridApi = params.api;
  // 自動調整 Grid 大小
  window.uidErrorAgGridApi.sizeColumnsToFit();
};

const getRowClass = (params) => {
  if (params.data.FIXED_TYPE == 2) {
    return 'autoRepair';
  }
};

// 當螢幕大小發生變化，agGrid 自動調整大小
window.addEventListener('resize', () => {
  window?.uidErrorAgGridApi.sizeColumnsToFit();
});
</script>

<template>
  <ag-grid-vue
    :rowData="props.data"
    :columnDefs="colDefs"
    :defaultColDef="defaultColDef"
    :theme="myTheme"
    style="width: 100%; height: 400px"
    @grid-ready="onGridReady"
    :getRowClass="getRowClass"
  >
  </ag-grid-vue>
</template>
<style scoped>
.autoRepair {
  color: goldenrod !important;
}
</style>
