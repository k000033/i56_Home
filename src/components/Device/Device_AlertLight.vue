<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  qty: {
    type: String,
    default: ''
  }
});

const bgColor = computed(() => {
  return props.qty > 0 ? '#e6df3c' : '#030';
});

const textColor = computed(() => {
  return props.qty > 0 ? '#E00' : '#030';
});
</script>
<template>
  <div class="tw-flex tw-justify-center tw-flex-col tw-items-center">
    <span class="tw-text-[8pt]">{{ props.title }}</span>
    <div
      class="tw-w-5 tw-h-4 tw-bg-slate-200 tw-rounded-sm tw-border-[2px] tw-border-black/60 tw-flex tw-justify-center tw-items-center tw-text-[#f5deb3]"
      :style="[{ 'background-color': bgColor }]"
    >
      <span
        v-show="props.qty > 0"
        :class="['tw-text-xs', ' tw-font-bold']"
        :style="[{ color: textColor }]"
      >
        {{ props.qty }}</span
      >
    </div>
  </div>
</template>
