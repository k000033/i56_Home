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
  { field: 'ORDER_ID', headerName: '批次', maxWidth: 120 },
  { field: 'OBJECT_ID', headerName: '設備', maxWidth: 120 },
  { field: 'ORDER_TYPE', headerName: '指令', maxWidth: 120 },
  { field: 'ORDER_NAME', headerName: '名稱', flex: 1 },
  { field: 'LAUNCH_TIME', headerName: '起始時間', maxWidth: 180 },
  { field: 'DONE_TIME', headerName: '完成時間', maxWidth: 180 }
]);

// 預設欄位功能
const defaultColDef = ref({
  filter: 'agTextColumnFilter',
  floatingFilter: true,
  sortable: true,
  resizable: true
});

const onGridReady = async (params) => {
  window.unDoneAgGridApi = params.api;
  // 自動調整 Grid 大小
  window.unDoneAgGridApi.sizeColumnsToFit();
};

// 當螢幕大小發生變化，agGrid 自動調整大小
window.addEventListener('resize', () => {
  window?.unDoneAgGridApi.sizeColumnsToFit();
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
  >
  </ag-grid-vue>
</template>
<style></style>
