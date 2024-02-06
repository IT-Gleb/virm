<script setup lang="ts">
import { toRef, ref } from "vue";
import { useButtons, useSlider } from "../../lib";

const { KatalogBigBtn } = useButtons();

const divRef = ref<HTMLDivElement>();
const { moveRight, moveLeft } = useSlider(toRef(divRef), 6, 280, 24);
</script>

<template>
  <section class="md:hidden w-[100%] mt-[32px] mb-[50px] px-4 relative">
    <h6 class="font-normal text-aRefColor text-[16px] leading-5 mb-2">
      фото-отчет
    </h6>
    <h4 class="font-semibold text-btnBlack text-[24px] leading-7 mb-8">
      Делимся впечатлениями
    </h4>

    <div class="w-[280px] h-[250px] mx-auto mb-8 overflow-hidden">
      <div class="flex gap-x-6" ref="divRef">
        <img
          src="../../assets/images/mainPage/group5/image1_small.png"
          alt="Изображение"
          loading="lazy"
        />
        <img
          src="../../assets/images/mainPage/group5/image2.png"
          alt="Изображение"
          loading="lazy"
        />
        <img
          src="../../assets/images/mainPage/group5/image3.png"
          alt="Изображение"
          loading="lazy"
        />
        <img
          src="../../assets/images/mainPage/group5/image4.png"
          alt="Изображение"
          loading="lazy"
        />
        <img
          src="../../assets/images/mainPage/group5/image5_small.png"
          alt="Изображение"
          loading="lazy"
        />
        <img
          src="../../assets/images/mainPage/group5/image6.png"
          alt="Изображение"
          loading="lazy"
        />
      </div>
    </div>

    <div class="text-center">
      <katalog-big-btn>Наш pinterest</katalog-big-btn>
    </div>
    <div class="w-[100%] flex justify-between absolute left-0 top-[50%]">
      <button
        class="px-2 py-1 bg-rose-500 text-lime-400 font-bold rounded-e-lg shadow-md shadow-black active:bg-lime-500 active:text-btnBlack"
        title="Предыдущий слайд"
        @click="moveLeft"
      >
        &lt;&lt;
      </button>
      <button
        class="px-2 py-1 bg-rose-500 text-lime-400 font-bold rounded-s-lg shadow-md shadow-black active:bg-lime-500 active:text-btnBlack"
        title="Следующий слайд"
        @click="moveRight"
      >
        >>
      </button>
    </div>
  </section>
  <section
    class="hidden md:block w-[100%] mt-[50px] mb-[150px] px-4 text-center"
  >
    <h6 class="font-normal text-aRefColor text-[24px] leading-5 mb-2">
      фото-отчет
    </h6>
    <h4 class="font-semibold text-btnBlack text-[32px] leading-8 mb-10">
      Делимся впечатлениями
    </h4>

    <div
      class="mb-[50px] max-w-[1180px] mx-auto grid grid-cols-4 gap-x-5 gap-y-5"
    >
      <div class="col-span-2">
        <img
          src="../../assets/images/mainPage/group5/image1.png"
          alt=""
          loading="lazy"
        />
      </div>
      <img
        src="../../assets/images/mainPage/group5/image2.png"
        alt=""
        loading="lazy"
      />
      <img
        src="../../assets/images/mainPage/group5/image3.png"
        alt=""
        loading="lazy"
      />
      <img
        src="../../assets/images/mainPage/group5/image4.png"
        alt=""
        loading="lazy"
      />
      <div class="col-span-2">
        <img
          src="../../assets/images/mainPage/group5/image5.png"
          alt=""
          loading="lazy"
        />
      </div>
      <img
        src="../../assets/images/mainPage/group5/image6.png"
        alt=""
        loading="lazy"
      />
    </div>
    <katalog-big-btn>Наш pinterest</katalog-big-btn>
  </section>
</template>
