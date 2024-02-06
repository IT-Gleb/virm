<script setup lang="ts">
const clickBtn = (event: MouseEvent) => {
  event.preventDefault();
};
</script>

<template>
  <button
    class="min-w-[181px] h-[52px] rounded-[4px] px-[24px] py-[12px] bg-btnBlack text-btnText font-nitro text-[16px] leading-5 hover:bg-aRefColor active:bg-bgCol1 active:text-btnText"
    @click="clickBtn"
  >
    <slot></slot>
  </button>
</template>
