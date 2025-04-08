<script setup>
const props = defineProps({
  rate: {
    type: String,
    default: ''
  },
  assign: {
    type: Number,
    default: 0
  },
  result: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: ''
  }
});
</script>
<template>
  <div
    class="tw-w-1/2 tw-flex tw-flex-col tw-text-[8pt] tw-border-r tw-border-gray-700 tw-relative"
  >
    <div
      class="tw-relative tw-z-10 tw-flex tw-flex-col tw-items-end tw-pr-1 tw-py-1"
    >
      <span class="tw-text-gray-200 tw-text-sm">{{ title }}</span>
      <span>{{ assign }}</span>
    </div>
    <div
      class="tw-relative tw-z-10 tw-flex tw-flex-col tw-items-end tw-pr-1 tw-pb-1"
    >
      <span class="tw-text-gray-200">完成</span>
      <span>{{ result }}</span>
    </div>
    <div
      class="tw-relative tw-z-10 tw-text-yellow-300 tw-font-bold tw-flex tw-justify-center tw-items-center tw-flex-grow tw-text-right"
    >
      <span class="">{{ rate }}</span>
      <span>%</span>
    </div>
    <div
      class="tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-bg-[#a57110]"
      :style="[' max-height:100%', { height: rate + '%' }]"
    ></div>
  </div>
  <!-- <div class="tw-flex tw-flex-col tw-justify-center tw-items-center">
    <div class="tw-text-[8pt] tw-py-1">
      <span>{{ rate }}%</span>
    </div>
    <div class="tw-flex-grow tw-w-4 tw-bg-[#3f454fd4] tw-relative">
      <div
        class="tw-absolute tw-bottom-0 tw-left-0 tw-bg-[#70cafb] tw-w-full"
        :style="[{ height: props.rate + '%' }]"
      ></div>
    </div>
    <span class="tw-text-[8pt] tw-pt-1"
      ><span>{{ props.title }}</span></span
    >
  </div> -->
</template>
