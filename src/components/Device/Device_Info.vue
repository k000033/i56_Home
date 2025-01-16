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
// const second = ref('');
// let timer = '';

// watch(
//   () => props.content2,
//   (newValue) => {
//     console.log(newValue);
//     if (newValue) {
//       timer = setInterval(() => {
//         second.value = `執行 ${startTimer(newValue)} 秒`;
//       }, 100);
//     } else {
//       second.value = '';
//       clearInterval(timer);
//     }
//   }
// );
</script>
<template>
  <div class="tw-flex tw-items-center tw-px-2 tw-pt-[4px]">
    <div
      class="tw-text-xs tw-w-10 tw-text-right tw-px-1 tw-rounded-sm"
      :style="[{ backgroundColor: props.color }]"
    >
      {{ title }}
    </div>
    <div
      :style="[{ borderColor: props.color }]"
      class="tw-text-[#FAFAFA] tw-h-[16px] tw-text-sm tw-leading-[12px] tw-w-full tw-pl-2 -tw-tracking-wide tw-relative tw-flex tw-items-center tw-gap-2 tw-border-b"
    >
      <span>{{ content }}</span>
    </div>
  </div>
</template>
