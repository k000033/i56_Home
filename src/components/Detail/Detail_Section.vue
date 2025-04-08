<template>
  <section
    class="tw-text-white tw-flex tw-flex-col tw-border tw-border-gray-600 tw-px-2 tw-py-2 tw-rounded-xl"
  >
    <div class="tw-font-bold tw-w-32 tw-text-left tw-text-[#ffd700]">
      <slot name="title"></slot>
    </div>
    <div class="tw-flex tw-items-center tw-gap-4 tw-pt-2 tw-px-6 tw-flex-1">
      <slot name="content"></slot>
    </div>
  </section>
</template>
