<script setup>
const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  content2: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
});
const second = ref('');
let timer = '';

watch(
  () => props.content2,
  (newValue) => {
    if (newValue) {
      second.value = '';
      clearInterval(timer);
      timer = setInterval(() => {
        second.value = `執行 ${startTimer(newValue)} 秒`;
      }, 100);
    }
  },
  {
    immediate: true
  }
);

const startTimer = (dateString) => {
  if (!dateString) return '';
  // 指定的時間
  const specifiedTime = new Date(dateString);

  // 現在的時間
  const currentTime = new Date();

  // 計算時間差 (毫秒)
  const timeDifference = currentTime - specifiedTime;

  // 將毫秒轉為秒
  return Math.floor(timeDifference / 1000);
};
</script>
<template>
  <div :class="['tw-h-full', { 'tw-bg-[#FFF4C2]': props.color == '#E00' }]">
    <div class="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center">
      <div
        class="tw-px-2 tw-py-1 tw-text-sm tw-tracking-wide"
        :style="[{ color: props.color }]"
      >
        {{ props.content }}
      </div>
      <div class="tw-px-2 tw-py-1 tw-text-xs" :style="[{ color: props.color }]">
        {{ second }}
      </div>
    </div>
  </div>
</template>
