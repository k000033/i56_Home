<script setup>
import { apiUseSiteData, apiUseSiteUI } from '../../componentApi/index';
const props = defineProps({
  siteId: {
    type: String,
    default: ''
  }
});
const {
  getSiteDeviceList,
  diviceStatus,
  getSiteDeviceState,
  workLight,
  getUnDoneState,
  deviceBorderColor,
  getAutoRepair,
  getQueueOrderQty
} = apiUseSiteUI();
const { repairErrorAction } = apiUseSiteData();

// 廠區的設備清單
const siteDeviceList = computed(() => {
  const res = getSiteDeviceList(props.siteId);
  return res;
});

// 是否顯示內容
const showContent = computed(() => {
  if (!siteDeviceList.value || siteDeviceList.value?.length == 0) {
    return true;
  }
});

const toFixed = (num) => {
  return parseFloat(num).toFixed(1);
};
</script>
<template>
  <div
    :class="[
      'tw-h-[calc(100%-40px)]',
      'tw-flex',
      'tw-flex-wrap',
      'tw-gap-[4px]',
      'tw-relative'
    ]"
  >
    <template v-if="showContent">
      <h1
        class="tw-w-full tw-flex tw-justify-center tw-items-center tw-text-6xl tw-text-slate-600 tw-bg-slate-800/60"
      >
        <span class="tw-tracking-widest">未上線</span>
      </h1>
    </template>

    <template v-if="!showContent">
      <div
        :class="[
          'tw-text-white',
          'tw-h-[calc(100%/2-4px)]',
          'tw-w-[calc(100%/2-4px)]',
          'tw-flex',
          'tw-flex-col',
          'tw-border',
          {
            ' tw-ring-2 tw-ring-[#e00]':
              deviceBorderColor(device.BREATHING_ALARM) == '#E00'
          }
        ]"
        :style="[{ borderColor: deviceBorderColor(device.BREATHING_ALARM) }]"
        v-for="(device, index) in siteDeviceList"
        :key="device.DEVICE_ID"
      >
        <!-- 標題 -->
        <div
          :class="['tw-flex tw-justify-between tw-items-center', {}]"
          :style="diviceStatus(device.STATE)"
        >
          <div class="tw-flex tw-items-end tw-pl-1">
            <!-- 設備名稱 -->
            <span class="tw-pl-1 tw-text-lg tw-tracking-wider tw-font-bold">
              {{ device.DEVICE_ID }}</span
            >
          </div>

          <!-- 批次，波次 -->
          <div class="tw-flex tw-items-center tw-pr-2">
            <!-- 波次 -->
            <span class="tw-flex-grow tw-pl-1 tw-text-xs">
              {{ device.DESCRIPTION }}
            </span>
            <!-- 批次 -->
            <span class="tw-text-xs tw-pl-2">{{ device.ORDER_ID }}</span>
          </div>
        </div>
        <div class="tw-flex tw-h-full">
          <!-- left -->
          <div class="tw-flex-1">
            <!-- 閃燈 -->
            <div class="tw-px-2 tw-flex tw-items-center tw-gap-[10px]">
              <Device_Light
                :title="'CMD'"
                :bg="workLight(device.BREATHING_LIGHT, device.BREATHING_ALARM)"
                :qty="`${getUnDoneState(props.siteId, device.DEVICE_ID)}`"
              />
              <Device_Light :title="'Mtn'" :bg="'#030'" :qty="``" />
              <Device_Light :title="'Rdx'" :bg="'#030'" :qty="``" />
              <Device_Light :title="'LPE'" :bg="'#030'" :qty="``" />
              <Device_Light :title="'Ver'" :bg="'#030'" :qty="``" />
              <Device_AlertLight
                :title="'Err'"
                :qty="`${getAutoRepair(props.siteId, device.DEVICE_ID)}`"
              />
            </div>

            <!-- 內容 -->
            <div :class="['tw-h-[calc(100%-32px)]']">
              <div class="tw-flex tw-flex-col tw-h-full">
                <!-- 訊息 -->
                <div class="tw-flex">
                  <div class="tw-grow">
                    <Device_Info
                      :content="device.BE_TIME"
                      :color="'#13329d'"
                      :title="'開關'"
                    />
                    <Device_Info
                      :content="device.RESULT_TIME"
                      :color="'#a16b29'"
                      :title="'回收'"
                    />
                  </div>
                  <div class="tw-max-w-16 tw-grow">
                    <Device_Info
                      :content="
                        getQueueOrderQty(props.siteId, device.DEVICE_ID)
                      "
                      :color="'#45aac39e'"
                      :title="'佇列'"
                      :contentColor="
                        getQueueOrderQty(props.siteId, device.DEVICE_ID) > 0
                          ? '#0E0'
                          : ''
                      "
                    />
                  </div>
                </div>

                <!-- <Device_Info :content="`${device.WO_ASSIGN}`" :color="'#771499'" :title="'工單'" /> -->
                <!-- 執行動作 -->
                <div v-show="!device.ORDER_TIME == ''" class="tw-flex-grow">
                  <Device_Performance
                    :content="
                      getSiteDeviceState(
                        props.siteId,
                        device.BREATHING_ORDER,
                        device.BREATHING_LIGHT,
                        device.BREATHING_ALARM
                      )
                    "
                    :content2="device.ORDER_TIME"
                    :color="
                      workLight(device.BREATHING_LIGHT, device.BREATHING_ALARM)
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- 進度 -->
          <div
            class="tw-max-w-[90px] tw-flex-grow tw-flex tw-justify-around tw-bg-[#3c280db3]"
          >
            <Device_Progress
              :rate="toFixed(device.WO_RATE)"
              :assign="device.WO_ASSIGN"
              :result="device.WO_RESULT"
              :title="'WO'"
            />
            <Device_Progress
              :rate="toFixed(device.QTY_RATE)"
              :title="'WQ'"
              :assign="device.QTY_ASSIGN"
              :result="device.QTY_RESULT"
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
