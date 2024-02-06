<script setup lang="ts">
import { useButtons } from "../../lib";

const { KatalogBigBtn } = useButtons();
</script>

<template>
  <div
    class="max-w-[1180px] mx-auto pt-[25px] md:pt-[100px] pb-[100px] px-4 flex flex-col-reverse flex-wrap md:flex-row items-center justify-items-center"
  >
    <div class="pt-[50px] md:pt-0 md:w-[50%]">
      <div class="relative">
        <img
          class="w-[350px] h-[400px] rounded-xl"
          src="../../assets/images/mainPage/group1/Rectangle1.png"
          alt=""
          loading="lazy"
        />
        <img
          class="w-[350px] h-[400px] rounded-xl absolute left-0 md:left-[50%] md:translate-x-[-50%] top-0 md:top-[126px]"
          src="../../assets/images/mainPage/group1/Rectangle2.png"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
    <article class="block md:w-[50%] md:py-[64px]">
      <h6
        class="text-[16px] md:text-[24px] text-aRefColor leading-5 font-nitro"
      >
        о нашем походе
      </h6>
      <h2
        class="font-nitro text-[24px] leading-7 md:text-[32px] md:leading-9 font-bold mt-2"
      >
        Исследуйте все горные массивы мира вместе с нами
      </h2>
      <p
        class="text-[16px] leading-6 md:text-[18px] md:leading-7 mt-6 md:mt-10 font-nitro"
      >
        Его корни уходят в один фрагмент классической латыни 45 года н.э., то
        есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни
        из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных
        слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической
        латинской литературе.
      </p>
      <katalog-big-btn class="mt-10">Программа тура</katalog-big-btn>
    </article>
  </div>
</template>
