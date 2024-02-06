<script setup lang="ts">
import { useButtons } from "../../lib";

const { KatalogBigBtn } = useButtons();
</script>

<template>
  <div class="w-[100%] bg-backSection py-[80px] px-4">
    <div class="max-w-[1180px] mx-auto flex flex-row items-center">
      <div class="lg:w-[50%]">
        <article>
          <h6
            class="text-[16px] lg:text-[24px] leading-5 text-aRefColor font-normal"
          >
            наше предложение
          </h6>
          <h2
            class="text-[24px] leading-6 lg:text-[32px] lg:leading-10 text-bgCol1 font-bold mt-2"
          >
            Лучшие программы для тебя
          </h2>
          <p
            class="text-[16px] leading-6 lg:text-[18px] lg:leading-7 mt-[40px]"
          >
            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
            латыни из колледжа.
          </p>

          <article class="flex items-stretch gap-4 mt-[40px]">
            <img
              class="w-[50px] h-[50px] p-2"
              src="../../assets/images/mainPage/group2/people.svg"
              alt="Опытный гид"
              loading="lazy"
            />
            <div>
              <h4 class="font-semibold text-[18px] leading-5">Опытный гид</h4>
              <p class="text-[14px] left-5 font-normal">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
            </div>
          </article>
          <article class="flex items-stretch gap-4 mt-[40px]">
            <img
              class="w-[50px] h-[50px] p-2"
              src="../../assets/images/mainPage/group2/shield.svg"
              alt="Опытный гид"
              loading="lazy"
            />
            <div>
              <h4 class="font-semibold text-[18px] leading-5">
                Безопасный поход
              </h4>
              <p class="text-[14px] left-5 font-normal">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
            </div>
          </article>
          <article class="flex items-stretch gap-4 mt-[40px]">
            <img
              class="w-[50px] h-[50px] p-2"
              src="../../assets/images/mainPage/group2/lopatka.svg"
              alt="Лояльные цены"
              loading="lazy"
            />
            <div>
              <h4 class="font-semibold text-[18px] leading-5">Лояльные цены</h4>
              <p class="text-[14px] left-5 font-normal">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
            </div>
          </article>
          <katalog-big-btn class="mt-[32px] lg:mt-[40px]"
            >Стоимость&nbsp;программ</katalog-big-btn
          >
        </article>
      </div>
      <div class="hidden lg:ml-auto lg:flex lg:flex-col lg:gap-[10px]">
        <div class="flex flex-row gap-[10px]">
          <img
            src="../../assets/images/mainPage/group2/image1.png"
            alt="Best programs for you"
            loading="lazy"
          />
          <img
            src="../../assets/images/mainPage/group2/image2.png"
            alt="Best programs for you"
            loading="lazy"
          />
        </div>
        <div class="flex flex-row gap-[10px]">
          <img
            src="../../assets/images/mainPage/group2/image3.png"
            alt="Best programs for you"
            loading="lazy"
          />
          <img
            src="../../assets/images/mainPage/group2/image4.png"
            alt="Best programs for you"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>
