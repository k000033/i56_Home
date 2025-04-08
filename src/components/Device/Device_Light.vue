<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  bg: {
    type: String,
    default: ''
  },
  qty: {
    type: String,
    default: ''
  },
  style: {
    type: String,
    default: ''
  }
});
</script>
<template>
  <div class="tw-flex tw-justify-center tw-flex-col tw-items-center">
    <span class="tw-text-[8pt]">{{ props.title }}</span>
    <div
      class="tw-w-5 tw-h-4 tw-bg-slate-200 tw-rounded-sm tw-border-[2px] tw-border-black/60 tw-flex tw-justify-center tw-items-center tw-text-[#f5deb3]"
      :style="[props.style, { 'background-color': props.bg }]">
      <span v-show="props.qty > 0" :class="['tw-text-xs']">
        {{ props.qty }}</span>
    </div>
  </div>
</template>
