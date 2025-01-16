<script setup>
const props = defineProps({
  rate: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
});
</script>
<template>
  <div class="tw-flex tw-flex-col tw-justify-center tw-items-center">
    <div class="tw-text-[8pt] tw-py-1">
      <span>{{ rate }}%</span>
    </div>
    <div class="tw-flex-grow tw-w-4 tw-bg-[#1e293b99] tw-relative">
      <div
        class="tw-absolute tw-bottom-0 tw-left-0 tw-bg-[#70cafb] tw-w-full"
        :style="[{ height: props.rate + '%' }]"
      ></div>
    </div>
    <span class="tw-text-[8pt] tw-pt-1"
      ><span>{{ props.title }}</span></span
    >
  </div>
</template>
