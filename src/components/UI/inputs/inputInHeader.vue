<script setup lang="ts">
import pic1 from "/src/assets/images/buttons/arrow_done.svg";
import pic2 from "/src/assets/images/buttons/calendar.svg";
defineProps<{ placeText: string; labelText: string; howPic: number }>();
const checkClick = (event: MouseEvent) => {
  event.preventDefault();
};

// console.log(pic1);
// console.log(pic2);
</script>

<template>
  <label class="flex flex-col text-btnText text-[14px] font-normal">
    <div
      class="w-[270px] h-[52px] relative outline outline-btnText outline-1 rounded-lg flex gap-2 items-center"
    >
      <input
        class="ml-3 px-[16px] bg-transparent active:outline-none focus:outline-none text-[16px] leading-6"
        type="text"
        :placeholder="placeText"
      />
      <button class="absolute right-4 pl-2" @click="checkClick">
        <img
          class="w-[18px] h-[18px]"
          :src="howPic === 0 ? pic1 : pic2"
          alt="arrow"
          loading="lazy"
        />
      </button>
      <!-- "Локация для тура" -->
      <!-- выберите из списка -->
    </div>
    <span class="block pl-2 mt-2">{{ labelText }}</span>
  </label>
</template>
