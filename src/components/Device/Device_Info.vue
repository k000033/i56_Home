<script setup>
const props = defineProps({
  content: {
    type: [String, Number],
    default: ''
  },
  content2: {
    type: String,
    default: ''
  },
  contentColor: {
    type: String,
    default: ''
  },
  color: {
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
  <div class="tw-flex tw-items-center tw-px-1 tw-pt-[4px]">
    <div
      class="tw-text-xs tw-min-w-8 tw-w-10 tw-text-right tw-px-1 tw-rounded-sm"
      :style="[{ backgroundColor: props.color }]"
    >
      {{ title }}
    </div>
    <div
      :style="[{ borderColor: props.color }]"
      class="tw-text-[#FAFAFA] tw-h-[16px] tw-text-xs tw-leading-[12px] tw-w-full tw-pl-2 -tw-tracking-wide tw-relative tw-flex tw-items-center tw-gap-2 tw-border-b"
    >
      <span :style="[{ color: contentColor }]">{{ content }}</span>
    </div>
  </div>
</template>
