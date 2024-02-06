<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <div class="container mx-auto px-0 md:px-5">
    <h2 class="text-2xl text-bold w-fit mx-auto">Всем привет</h2>
    <div class="columns-4 gap-2 text-white">
      <p class="w-full bg-slate-500 text-[16px] font-semibold leading-6 px-2">
        Дата похода {{ msg }}
      </p>
      <p class="w-full bg-slate-500 text-[18px] font-normal">
        {{ msg }}
      </p>
      <p class="w-full bg-slate-500 text-[24px] font-bold">
        {{ msg }}
      </p>
      <p class="w-full bg-slate-500 text-[14px] font-light">
        {{ msg }}
      </p>
    </div>
    <div>
      <p class="font-nextArt text-[28px]">
        Насладись прогулкой в горах с командой единомышленников
      </p>
    </div>
  </div>
</template>
