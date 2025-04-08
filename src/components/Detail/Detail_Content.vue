<script setup>
import {
  apiUseSiteUI,
  apiUseSiteData,
  apiUseDeviceControlSignalR
} from '../../componentApi/index';
const { getSiteApServiceIP } = apiUseSiteUI();
const {
  openDetail,
  getUdiErrorData,
  getUdiStateData,
  siteDeviceList,
  detailId,
  connection,
  siteState
} = apiUseSiteData();
const { GetSiteStateData } = apiUseDeviceControlSignalR();
const udiErrorData = ref([]);
const udiStateData = ref([]);
watch(openDetail, async (newValue) => {
  if (newValue) {
    // console.log(connection);
    window.uidErrorAgGridApi?.showLoadingOverlay();
    window.unDoneAgGridApi?.showLoadingOverlay();
    udiErrorData.value = await getUdiErrorData();
    udiStateData.value = await getUdiStateData();
    // GetSiteStateData(detailId.value + '_UDI');
  }
});

watch(
  () => siteDeviceList.value.get(detailId.value)?.get('udiUnDoneState'),
  async (newValue) => {
    if (newValue) {
      udiStateData.value = await getUdiStateData();
      udiErrorData.value = await getUdiErrorData();
      // console.log(1);
    }
  }
);

const cloceDetail = () => {
  openDetail.value = false;
  detailId.value = '';
};
</script>

<template>
  <div
    v-if="openDetail"
    class="tw-top-0 tw-left-0 tw-bottom-0 tw-right-0 tw-z-20 tw-bg-black tw-flex tw-items-center tw-justify-center"
  >
    <div
      class="tw-flex-1 tw-bg-detail-bg tw-bg-center tw-h-full tw-overflow-auto tw-bg-black tw-order-1 tw-pl-4 tw-pr-4 tw-py-4"
    >
      <div class="tw-flex tw-justify-end tw-w-full tw-mb-2">
        <div class="tw-w-10 tw-h-10" @click="cloceDetail">
          <SvgIcon name="close" fill="#fff"></SvgIcon>
        </div>
      </div>
      <div class="tw-flex tw-gap-4 max-2xl:tw-flex-col">
        <div class="tw-flex-grow tw-flex tw-flex-col tw-gap-4">
          <Detail_Section>
            <template v-slot:title>
              <span>IP</span>
            </template>
            <template v-slot:content>
              <div class="tw-flex tw-items-center tw-gap-8 tw-flex-1">
                <div>
                  <div class="tw-tracking-widest tw-pb-2 tw-text-center">
                    AP 主機
                  </div>
                  <div class="tw-text-xl">
                    {{ getSiteApServiceIP.AP_IP }}
                  </div>
                </div>
                <div>
                  <div class="tw-tracking-widest tw-pb-2 tw-text-center">
                    DB 主機
                  </div>
                  <div class="tw-text-xl">
                    {{ getSiteApServiceIP.DB_IP }}
                  </div>
                </div>
              </div>
            </template>
          </Detail_Section>
        </div>

        <div class="tw-flex tw-flex-grow tw-flex-col tw-gap-4">
          <Detail_Section class="tw-flex-grow">
            <template v-slot:title>
              <span>STATE</span>
            </template>
            <template v-slot:content>
              <Detail_StateAgGrid :data="udiStateData" />
            </template>
          </Detail_Section>

          <Detail_Section class="tw-flex-grow">
            <template v-slot:title>
              <span>ERROR</span>
            </template>
            <template v-slot:content>
              <Detail_ErrorAgGrid :data="udiErrorData" />
            </template>
          </Detail_Section>
        </div>
      </div>
    </div>
  </div>
</template>
