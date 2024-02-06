<script setup lang="ts">
const clickBtn = (event: MouseEvent) => {
  event.preventDefault();
};
</script>

<template>
  <button
    class="w-[213px] h-[52px] rounded-[4px] px-[36px] py-[16px] bg-btnText text-btnBlack font-nitro text-[16px] leading-5 active:bg-black active:text-btnText hover:bg-aRefColor hover:text-btnText"
    @click="clickBtn"
  >
    <slot></slot>
  </button>
</template>
