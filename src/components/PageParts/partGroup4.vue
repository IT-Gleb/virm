<script setup lang="ts">
import { useButtons } from "../../lib";
import { ref, toRef } from "vue";
import { useSlider } from "../../lib";

const { KatalogBigBtn } = useButtons();

const divRef = ref<HTMLDivElement>();
const { moveRight, moveLeft } = useSlider(toRef(divRef), 4, 285, 24);
</script>

<template>
  <section class="block lg:hidden w-[100%] bg-backSection px-4 relative">
    <h6 class="text-[16px] leading-5 text-aRefColor font-normal pt-20">
      делимся впечатлениями
    </h6>
    <h3 class="text-[24px] leading-7 text-btnBlack font-bold pt-[8px]">
      Блог о путешествиях
    </h3>
    <div class="mb-[40px] w-[285px] mx-auto mt-8 overflow-hidden">
      <div class="flex gap-x-6" ref="divRef">
        <div class="max-w-[374px] mx-auto flex">
          <article class="w-[285px] flex flex-col bg-btnText pb-4">
            <img
              class="object-contain object-left-top w-[285px]"
              src="../../assets/images/mainPage/group4/image1.png"
              alt="Изображение. Италия"
              loading="lazy"
            />
            <div class="px-4 mt-4">
              <h4 class="text-[20px] leading-6 font-semibold">
                Красивая Италия, какая она в реальности?
              </h4>
              <p class="mt-[14px] leading-5 font-normal truncate">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
              <ul class="flex items-center justify-between mt-4">
                <li>
                  <h6
                    class="text-[14px] leading-5 text-aRefColor font-semibold"
                  >
                    01/04/2023
                  </h6>
                </li>
                <li class="text-[14px] leading-5 font-semibold">
                  <a href="#">читать статью</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div class="max-w-[374px] mx-auto flex">
          <article class="w-[285px] flex flex-col bg-btnText pb-4">
            <img
              class="object-contain object-left-top w-[285px]"
              src="../../assets/images/mainPage/group4/image2.png"
              alt="Изображение. Италия"
              loading="lazy"
            />
            <div class="px-4 mt-4">
              <h4 class="text-[20px] leading-6 font-semibold">
                Долой сомнения! Весь мир открыт для вас!
              </h4>
              <p class="mt-[14px] leading-5 font-normal truncate">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
              <ul class="flex items-center justify-between mt-4">
                <li>
                  <h6
                    class="text-[14px] leading-5 text-aRefColor font-semibold"
                  >
                    01/04/2023
                  </h6>
                </li>
                <li class="text-[14px] leading-5 font-semibold">
                  <a href="#">читать статью</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div class="max-w-[374px] mx-auto flex">
          <article class="w-[285px] flex flex-col bg-btnText pb-4">
            <img
              class="object-contain object-left-top w-[285px]"
              src="../../assets/images/mainPage/group4/image3.png"
              alt="Изображение. Италия"
              loading="lazy"
            />
            <div class="px-4 mt-4">
              <h4 class="text-[20px] leading-6 font-semibold">
                Как подготовиться к путешествию в одиночку?
              </h4>
              <p class="mt-[14px] leading-5 font-normal truncate">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
              <ul class="flex items-center justify-between mt-4">
                <li>
                  <h6
                    class="text-[14px] leading-5 text-aRefColor font-semibold"
                  >
                    01/04/2023
                  </h6>
                </li>
                <li class="text-[14px] leading-5 font-semibold">
                  <a href="#">читать статью</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div class="max-w-[374px] mx-auto flex">
          <article class="w-[285px] flex flex-col bg-btnText pb-4">
            <img
              class="object-contain object-left-top w-[285px]"
              src="../../assets/images/mainPage/group4/image4.png"
              alt="Изображение. Италия"
              loading="lazy"
            />
            <div class="px-4 mt-4">
              <h4 class="text-[20px] leading-6 font-semibold">
                Индия ... летим?
              </h4>
              <p class="mt-[14px] leading-5 font-normal truncate">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
              <ul class="flex items-center justify-between mt-4">
                <li>
                  <h6
                    class="text-[14px] leading-5 text-aRefColor font-semibold"
                  >
                    01/04/2023
                  </h6>
                </li>
                <li class="text-[14px] leading-5 font-semibold">
                  <a href="#">читать статью</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div class="pb-[50px] text-center">
      <katalog-big-btn>Другие материалы</katalog-big-btn>
    </div>
    <div class="absolute w-[100%] flex justify-between left-0 top-[50%]">
      <button
        class="px-2 py-1 bg-rose-500 text-lime-400 font-bold rounded-e-md text-center shadow-md shadow-black active:bg-slate-100 active:text-btnBlack"
        title="Предыдущий слайд"
        @click="moveLeft"
      >
        &lt;&lt;
      </button>
      <button
        class="px-2 py-1 bg-rose-500 text-lime-400 font-bold rounded-s-md text-center shadow-md shadow-black active:bg-slate-100 active:text-btnBlack"
        title="Следующий слайд"
        @click="moveRight"
      >
        >>
      </button>
    </div>
  </section>

  <!-- //---------------------------------------------------------------------- -->
  <section class="hidden lg:block w-[100%] bg-backSection text-center">
    <h6 class="text-[24px] leading-5 text-aRefColor font-normal pt-20">
      делимся впечатлениями
    </h6>
    <h3 class="text-[32px] leading-10 text-btnBlack font-bold pt-[8px]">
      Блог о путешествиях
    </h3>
    <div class="mb-[40px] max-w-[1180px] mx-auto">
      <div
        class="mt-[40px] grid lg:grid-cols-1 lg:w-[50%] lg:mx-auto xl:w-[100%] xl:grid-cols-2 gap-x-5 gap-y-6"
      >
        <div class="w-[580px] h-[312px] bg-btnText rounded-md shadow-md p-4">
          <article class="grid grid-cols-2">
            <img
              src="../../assets/images/mainPage/group4/image1.png"
              alt="Изображение. Италия"
              loading="lazy"
            />
            <div class="text-left flex flex-col justify-between py-4">
              <h4 class="text-[24px] leading-8 font-semibold">
                Красивая Италия, какая она в реальности?
              </h4>
              <p class="mt-[24px] text-[14px] leading-5 font-normal truncate">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
              <ul class="mt-auto flex items-center justify-between">
                <li>
                  <h6
                    class="text-[14px] leading-5 text-aRefColor font-semibold"
                  >
                    01/04/2023
                  </h6>
                </li>
                <li class="text-[14px] leading-5 font-semibold">
                  <a href="#">читать статью</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div class="w-[580px] h-[312px] bg-btnText rounded-md shadow-md p-4">
          <article class="grid grid-cols-2">
            <img
              src="../../assets/images/mainPage/group4/image2.png"
              alt="Изображение. Италия"
              loading="lazy"
            />
            <div class="text-left flex flex-col justify-between py-4">
              <h4 class="text-[24px] leading-8 font-semibold">
                Долой сомнения! Весь мир открыт для вас!
              </h4>
              <p class="mt-[24px] text-[14px] leading-5 font-normal truncate">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации ... независимые способы реализации соответствующих
                условий активизации ...Для современного мира базовый вектор
                развития предполагает независимые способы реализации
                соответствующих условий активизации ... независимые способы
                реализации соответствующих условий активизации ...
              </p>
              <ul class="mt-auto flex items-center justify-between">
                <li>
                  <h6
                    class="text-[14px] leading-5 text-aRefColor font-semibold"
                  >
                    01/04/2023
                  </h6>
                </li>
                <li class="text-[14px] leading-5 font-semibold">
                  <a href="#">читать статью</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div class="w-[580px] h-[312px] bg-btnText rounded-md shadow-md p-4">
          <article class="grid grid-cols-2">
            <img
              src="../../assets/images/mainPage/group4/image3.png"
              alt="Изображение. Италия"
              loading="lazy"
            />
            <div class="text-left flex flex-col justify-between py-4">
              <h4 class="text-[24px] leading-8 font-semibold">
                Как подготовиться к путешествию в одиночку?
              </h4>
              <p class="mt-[24px] text-[14px] leading-5 font-normal truncate">
                Для современного мира базовый вектор развития предполагает.
              </p>
              <ul class="mt-auto flex items-center justify-between">
                <li>
                  <h6
                    class="text-[14px] leading-5 text-aRefColor font-semibold"
                  >
                    01/04/2023
                  </h6>
                </li>
                <li class="text-[14px] leading-5 font-semibold">
                  <a href="#">читать статью</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div class="w-[580px] h-[312px] bg-btnText rounded-md shadow-md p-4">
          <article class="grid grid-cols-2">
            <img
              src="../../assets/images/mainPage/group4/image4.png"
              alt="Изображение. Италия"
              loading="lazy"
            />
            <div class="text-left flex flex-col justify-between py-4">
              <h4 class="text-[24px] leading-8 font-semibold">
                Индия ... летим?
              </h4>
              <p class="mt-[24px] text-[14px] leading-5 font-normal truncate">
                Для современного мира базовый.
              </p>
              <ul class="mt-auto flex items-center justify-between">
                <li>
                  <h6
                    class="text-[14px] leading-5 text-aRefColor font-semibold"
                  >
                    01/04/2023
                  </h6>
                </li>
                <li class="text-[14px] leading-5 font-semibold">
                  <a href="#">читать статью</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
    <katalog-big-btn class="mb-[100px]">Другие материалы</katalog-big-btn>
  </section>
</template>
