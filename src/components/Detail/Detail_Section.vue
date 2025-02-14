<template>
  <section class="tw-text-white tw-flex tw-pt-6 tw-pb-8">
    <div
      class="tw-text-2xl tw-font-bold tw-w-32 tw-text-center tw-text-[#ffd700]"
    >
      <slot name="title"></slot>
    </div>
    <div class="tw-flex tw-items-center tw-gap-4 tw-px-6 tw-flex-1">
      <slot name="content"></slot>
    </div>
  </section>
</template>
