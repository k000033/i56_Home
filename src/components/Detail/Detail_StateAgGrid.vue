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
  { field: 'ORDER_ID', headerName: '批次', maxWidth: 110 },
  { field: 'OBJECT_ID', headerName: '設備', maxWidth: 100 },
  { field: 'ORDER_TYPE', headerName: '指令', maxWidth: 80 },
  { field: 'ORDER_NAME', headerName: '名稱', maxWidth: 150 },
  { field: 'LAUNCH_TIME', headerName: '起始時間', maxWidth: 160 },
  { field: 'DONE_TIME', headerName: '完成時間', maxWidth: 160 }
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
};

const getRowStyle = (params) => {
  if (params.data.DONE_TIME == '') {
    return { backgroundColor: '#399d3d' };
  }
  return null;
};

const getRowId = (x) => {
  return x.data.GUID;
};
</script>

<template>
  <ag-grid-vue
    :rowData="props.data"
    :columnDefs="colDefs"
    :defaultColDef="defaultColDef"
    :theme="myTheme"
    style="width: 100%; height: 450px"
    @grid-ready="onGridReady"
    :getRowId="getRowId"
    :getRowStyle="getRowStyle"
  >
  </ag-grid-vue>
</template>
<style></style>
