<script setup>
import { apiUseSiteUI, apiUseSiteData } from '../../componentApi/index';
const { getSiteApServiceIP } = apiUseSiteUI();
const { openDetal, getUdiErrorData, getUdiStateData } = apiUseSiteData();
const udiErrorData = ref([]);
const udiStateData = ref([]);
watch(openDetal, async (newValue) => {
  if (newValue) {
    window.uidErrorAgGridApi?.showLoadingOverlay();
    window.unDoneAgGridApi?.showLoadingOverlay();
    udiErrorData.value = await getUdiErrorData();
    udiStateData.value = await getUdiStateData();
  }
});
</script>

<template>
  <div
    class="tw-absolute tw-top-0 tw-left-[56px] tw-bottom-0 tw-right-0 tw-bg-black tw-flex tw-items-center tw-justify-center"
  >
    <div
      id="detal"
      class="max-xl:tw-flex-col tw-w-full tw-h-full tw-flex tw-px-4 tw-py-4 tw-gap-1 tw-min-w-[600px]"
    >
      <div
        v-if="openDetal"
        class="tw-flex-1  tw-bg-detail-bg tw-bg-center tw-h-full tw-overflow-auto tw-bg-black tw-border tw-border-slate-700 tw-order-1 tw-pl-4 tw-pr-4 tw-py-4"
      >
        <Detail_Section>
          <template v-slot:title>
            <span>VERSION</span>
          </template>
          <template v-slot:content>
            <div class="tw-flex tw-items-center tw-gap-8 tw-flex-1"></div>
          </template>
        </Detail_Section>
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
                <div class="tw-text-2xl">
                  {{ getSiteApServiceIP.AP_IP }}
                </div>
              </div>
              <div>
                <div class="tw-tracking-widest tw-pb-2 tw-text-center">
                  DB 主機
                </div>
                <div class="tw-text-2xl">
                  {{ getSiteApServiceIP.DB_IP }}
                </div>
              </div>
            </div>
          </template>
        </Detail_Section>

        <Detail_Section>
          <template v-slot:title>
            <span>STATE</span>
          </template>
          <template v-slot:content>
            <Detail_StateAgGrid :data="udiStateData" />
          </template>
        </Detail_Section>

        <Detail_Section>
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
</template>
