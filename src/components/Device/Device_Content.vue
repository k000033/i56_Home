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
  getUnDoneState
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

const showRepair = (alarm) => {
  if (alarm.trim() != '#300') {
    return true;
  }
};

const repairError = async (deviceId, orderID) => {
  await repairErrorAction(props.siteId, deviceId, orderID);
};

// #1E90FF
</script>
<template>
  <div
    :class="[
      'tw-h-[calc(100%-40px)]',
      'tw-flex',
      'tw-flex-wrap',
      {
        ' tw-bg-slate-200/10': showContent && props.siteId != ''
      }
    ]"
  >
    <template v-if="showContent && props.siteId != ''">
      <h1
        class="tw-w-full tw-flex tw-justify-center tw-items-center tw-text-6xl tw-text-slate-600"
      >
        <span class="tw-tracking-widest">未上線</span>
      </h1>
    </template>

    <template v-if="!showContent">
      <div
        :class="[
          'tw-text-white',
          'tw-h-[calc(100%/2)]',
          'tw-w-1/2',
          'tw-flex',
          'tw-flex-col',
          'tw-border-[#1E90FF]/50',
          'tw-border-dashed',
          {
            'tw-border-b': index < 2,
            'tw-border-l': index % 2 != 0
          }
        ]"
        v-for="(device, index) in siteDeviceList"
        :key="device"
      >
        <div class="tw-flex tw-h-[95px]">
          <div
            class="tw-h-full tw-w-[130px] tw-relative tw-flex tw-justify-center tw-items-center tw-flex-col"
          >
            <!-- 設備名稱 -->
            <span
              class="tw-bg-blue-600 tw-font-bold tw-tracking-widest tw-absolute tw-top-1 tw-text-base tw-px-2 tw-rounded-md"
              >{{ device.DEVICE_ID }}
            </span>
            <!-- 設備ICON -->
            <SvgIcon
              name="computer"
              :fill="diviceStatus(device.STATE)"
              class="tw-absolute tw-top-4"
            />
            <!-- 完成率 -->
            <span
              :class="['tw-absolute', 'tw-top-[47px]']"
              :style="{ color: diviceStatus(device.STATE) }"
            >
              {{ device.QTY_RATE }}%
            </span>

            <div
              v-show="showRepair(device.BREATHING_ALARM)"
              class="tw-absolute tw-top-0 tw-ml-[1px] tw-left-0 tw-bottom-0 tw-right-0 tw-flex tw-justify-center tw-items-center"
            >
              <h1 class="tw-bg-red-700 tw-px-[0.35rem] tw-py-[0.6rem] tw-mt-6">
                <span class="tw-animate-fade">ERROR</span>
              </h1>
            </div>
          </div>

          <div class="tw-pt-[5px]">
            <!-- 批次 -->
            <div class="tw-flex tw-items-center">
              <span class="tw-text-[#CCCCCC]/50 tw-text-sm tw-w-[40px]">
                批次
              </span>
              <span class="tw-text-[#CCCCCC] tw-text-base tw-font-bold">
                {{ device.ORDER_ID }}
              </span>
            </div>
            <!-- 波次 -->
            <div class="tw-flex tw-items-center">
              <span class="tw-text-[#CCCCCC]/50 tw-text-sm tw-w-[40px]"
                >波次
              </span>
              <span class="tw-text-[#CCCCCC] tw-text-base tw-font-bold">
                {{ device.DESCRIPTION }}
              </span>
            </div>
            <!-- 工單 -->
            <div class="tw-flex tw-items-center">
              <span class="tw-text-[#CCCCCC]/50 tw-text-sm tw-w-[40px]"
                >工單
              </span>
              <span class="tw-text-[#CCCCCC] tw-text-base tw-font-bold">
                {{ device.WO_ASSIGN }}
              </span>
            </div>
            <div class="tw-flex tw-items-center">
              <span class="tw-text-[#CCCCCC]/50 tw-text-sm tw-w-[40px]"
                >指令
              </span>
              <span
                :class="[
                  'tw-text-[#CCCCCC] tw-text-base tw-font-bold',
                  {
                    'tw-text-red-600':
                      getUnDoneState(props.siteId, device.DEVICE_ID) > 1
                  }
                ]"
              >
                {{ getUnDoneState(props.siteId, device.DEVICE_ID) }}
              </span>
            </div>
          </div>
        </div>

        <div class="tw-relative tw-top-1 tw-flex tw-items-center tw-h-[24px]">
          <!-- 指示燈號 -->
          <div class="tw-w-[130px] tw-flex tw-justify-center tw-items-center">
            <div
              class="tw-w-10 tw-h-[12px] tw-rounded tw-ring-2 tw-ring-offset-0 tw-ring-black tw-shadow-inner tw-shadow-black/30"
              :style="[
                {
                  backgroundColor: workLight(
                    device.BREATHING_LIGHT,
                    device.BREATHING_ALARM
                  )
                }
              ]"
            >
              <SvgIcon
                v-show="showRepair(device.BREATHING_ALARM)"
                name="repaire"
                fill="#fff"
                @click="repairError(device.DEVICE_ID, device.ORDER_ID)"
              />
            </div>
          </div>
          <!-- 指示名稱 -->
          <div
            :style="[
              {
                color: workLight(device.BREATHING_LIGHT, device.BREATHING_ALARM)
              }
            ]"
            class="tw-text-base tw-font-semibold tw-tracking-wider"
          >
            {{
              getSiteDeviceState(
                props.siteId,
                device.BREATHING_ORDER,
                device.BREATHING_LIGHT,
                device.BREATHING_ALARM
              )
            }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<style scoped></style>
