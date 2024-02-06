<script setup lang="ts">
import { useButtons, useSlider } from "../../lib";
import { ref, toRef } from "vue";

const divRef = ref<HTMLDivElement>();

const { moveRight, moveLeft } = useSlider(toRef(divRef), 3, 285, 24);

const { KatalogBigBtn } = useButtons();

// onMounted(() => {
//   let node = divRef.value!.firstChild;
//   //  let node2 = divRef.value!.lastChild;
//   if (node) {
//     let myClone = node.cloneNode(true);
//     divRef.value!.appendChild(myClone);
//   }
//   //  if (node2) {
//   //    let myClone = node2.cloneNode(true);
//   //    let node1 = divRef.value!.firstChild;
//   //    divRef.value?.insertBefore(myClone, node1);
//   //  }
// });
</script>

<template>
  <section
    class="block max-w-[1024px] mx-auto my-[108px] px-[16px] lg:hidden relative"
  >
    <h6
      class="text-aRefColor text-[16px] lg:text-[24px] leading-5 font-normal w-fit mx-auto"
    >
      по версии отдыхающих
    </h6>
    <h2
      class="text-[22px] leading-7 text-btnBlack w-fit mx-auto mt-2 font-bold"
    >
      Популярные направления
    </h2>
    <div class="mt-[32px] w-[285px] h-[400px] mx-auto relative overflow-hidden">
      <div class="absolute top-0 flex gap-6" ref="divRef">
        <article
          class="w-[285px] h-[400px] bg-[url('../../assets/images/mainPage/group3/image1.png')] bg-no-repeat bg-contain bg-left-top relative"
        >
          <div
            class="w-[65px] h-[32px] bg-btnText bg-opacity-40 py-1 px-2 flex items-center gap-1 absolute right-0 top-[36.8px] rounded-s-lg"
          >
            <img
              src="../../assets/images/mainPage/group3/start.svg"
              alt="Изображение. Рейтинг"
              loading="lazy"
            />
            <span class="text-[14px] leading-[18px] font-semibold text-btnBlack"
              >4.9</span
            >
          </div>
          <div
            class="bg-white bg-opacity-20 w-[100%] flex items-center absolute bottom-0 left-0 pb-8 px-6"
          >
            <div>
              <h4 class="text-[18px] text-btnText leading-5 font-semibold py-6">
                Озеро возле гор
              </h4>
            </div>
            <div class="bg-white bg-opacity-30 px-4 py-2 text-center ml-auto">
              <span class="text-btnText">480 $</span>
            </div>
          </div>
        </article>
        <article
          class="w-[285px] h-[400px] bg-[url('../../assets/images/mainPage/group3/image2.png')] bg-no-repeat bg-contain bg-left-top relative"
        >
          <div
            class="w-[65px] h-[32px] bg-btnText bg-opacity-40 py-1 px-2 flex items-center gap-1 absolute right-0 top-[36.8px] rounded-s-lg"
          >
            <img
              src="../../assets/images/mainPage/group3/start.svg"
              alt="Изображение. Рейтинг"
              loading="lazy"
            />
            <span class="text-[14px] leading-[18px] font-semibold text-btnBlack"
              >4.5</span
            >
          </div>
          <div
            class="bg-white bg-opacity-20 w-[100%] flex items-center absolute bottom-0 left-0 pb-8 px-6"
          >
            <div>
              <h4 class="text-[18px] text-btnText leading-5 font-semibold py-6">
                Ночь в горах
              </h4>
            </div>
            <div class="bg-white bg-opacity-30 px-4 py-2 text-center ml-auto">
              <span class="text-btnText">500 $</span>
            </div>
          </div>
        </article>
        <article
          class="w-[285px] h-[400px] bg-[url('../../assets/images/mainPage/group3/image3.png')] bg-no-repeat bg-contain bg-left-top relative"
        >
          <div
            class="w-[65px] h-[32px] bg-btnText bg-opacity-40 py-1 px-2 flex items-center gap-1 absolute right-0 top-[36.8px] rounded-s-lg"
          >
            <img
              src="../../assets/images/mainPage/group3/start.svg"
              alt="Изображение. Рейтинг"
              loading="lazy"
            />
            <span class="text-[14px] leading-[18px] font-semibold text-btnBlack"
              >4.9</span
            >
          </div>
          <div
            class="bg-white bg-opacity-20 w-[100%] flex items-center absolute bottom-0 left-0 pb-8 px-6"
          >
            <div>
              <h4 class="text-[18px] text-btnText leading-5 font-semibold py-6">
                Йога в горах
              </h4>
            </div>
            <div class="bg-white bg-opacity-30 px-4 py-2 text-center ml-auto">
              <span class="text-btnText">230 $</span>
            </div>
          </div>
        </article>
      </div>
    </div>
    <button
      class="absolute left-0 top-[50%] px-2 py-2 text-[14px] bg-rose-600 text-lime-300 font-bold rounded-e-md shadow-sm"
      @click="moveLeft"
      title="Слайд назад"
    >
      &lt;&lt;
    </button>
    <button
      class="absolute right-0 top-[50%] px-2 py-2 text-[14px] bg-rose-600 text-lime-300 font-bold rounded-s-md shadow-sm"
      @click="moveRight"
      title="Слайд вперед"
    >
      >>
    </button>
  </section>

  <section
    class="hidden lg:block max-w-[1180px] mx-auto my-[108px] px-[16px] lg:px-0"
  >
    <h6
      class="text-aRefColor text-[16px] lg:text-[24px] leading-5 font-normal w-fit mx-auto"
    >
      по версии отдыхающих
    </h6>
    <h2
      class="text-[24px] lg:text-[32px] leading-7 font-bold text-btnBlack w-fit mx-auto mt-2"
    >
      Популярные направления
    </h2>
    <div class="mt-[50px] w-fit mx-auto flex items-center gap-5">
      <article
        class="w-[285px] h-[400px] xl:w-[380px] xl:h-[500px] bg-[url('../../assets/images/mainPage/group3/image1.png')] bg-no-repeat bg-contain bg-left-top relative"
      >
        <div
          class="w-[65px] h-[32px] bg-btnText bg-opacity-40 py-1 px-2 flex items-center gap-1 absolute right-0 top-[58px] rounded-s-lg"
        >
          <img
            src="../../assets/images/mainPage/group3/start.svg"
            alt="Изображение. Рейтинг"
            loading="lazy"
          />
          <span class="text-[14px] leading-[18px] font-semibold text-btnBlack"
            >4.9</span
          >
        </div>
        <div
          class="bg-white bg-opacity-20 w-[100%] py-5 px-8 flex items-center lg:gap-1 absolute left-0 bottom-0 lg:bottom-4 xl:bottom-0"
        >
          <div>
            <h4
              class="lg:text-[20px] leading-5 xl:text-[24px] xl:leading-7 text-btnText"
            >
              Озеро возле&nbsp;гор
            </h4>
            <p
              class="hidden xl:inline-block text-[14px] leading-[18px] text-btnText"
            >
              романтическое приключение
            </p>
          </div>
          <div class="bg-white bg-opacity-30 px-4 py-2 text-center ml-auto">
            <span class="text-btnText lg:text-[13px]">480&nbsp$</span>
          </div>
        </div>
      </article>
      <article
        class="w-[285px] h-[400px] xl:w-[380px] xl:h-[500px] bg-[url('../../assets/images/mainPage/group3/image2.png')] bg-no-repeat bg-contain bg-left-top relative"
      >
        <div
          class="w-[65px] h-[32px] bg-btnText bg-opacity-40 py-1 px-2 flex items-center gap-1 absolute right-0 top-[58px] rounded-s-lg"
        >
          <img
            src="../../assets/images/mainPage/group3/start.svg"
            alt="Изображение. Рейтинг"
            loading="lazy"
          />
          <span class="text-[14px] leading-[18px] font-semibold text-btnBlack"
            >4.5</span
          >
        </div>
        <div
          class="bg-white bg-opacity-20 w-[100%] py-5 px-8 flex items-center lg:gap-1 absolute left-0 bottom-0 lg:bottom-4 xl:bottom-0"
        >
          <div>
            <h4 class="lg:text-[22px] xl:text-[24px] text-btnText leading-7">
              Ночь в горах
            </h4>
            <p
              class="hidden xl:inline-block text-[14px] leading-[18px] text-btnText"
            >
              в компании друзей
            </p>
          </div>
          <div class="bg-white bg-opacity-30 px-4 py-2 text-center ml-auto">
            <span class="text-btnText lg:text-[13px]">500&nbsp;$</span>
          </div>
        </div>
      </article>
      <article
        class="w-[285px] h-[400px] xl:w-[380px] xl:h-[500px] bg-[url('../../assets/images/mainPage/group3/image3.png')] bg-no-repeat bg-contain bg-left-top relative"
      >
        <div
          class="w-[65px] h-[32px] bg-btnText bg-opacity-40 py-1 px-2 flex items-center gap-1 absolute right-0 top-[58px] rounded-s-lg"
        >
          <img
            src="../../assets/images/mainPage/group3/start.svg"
            alt="Изображение. Рейтинг"
            loading="lazy"
          />
          <span class="text-[14px] leading-[18px] font-semibold text-btnBlack"
            >5.0</span
          >
        </div>
        <div
          class="bg-white bg-opacity-20 w-[100%] py-5 px-8 flex items-center lg:gap-1 absolute left-0 bottom-0 lg:bottom-4 xl:bottom-0"
        >
          <div>
            <h4
              class="lg:text-[20px] leading-5 xl:text-[24px] xl:leading-7 text-btnText"
            >
              Йога в горах
            </h4>
            <p
              class="hidden xl:inline-block text-[14px] leading-[18px] text-btnText"
            >
              для тех, кто забоится о себе
            </p>
          </div>
          <div class="bg-white bg-opacity-30 px-4 py-2 text-center ml-auto">
            <span class="text-btnText lg:text-[13px]">230&nbsp;$</span>
          </div>
        </div>
      </article>
    </div>
    <div class="mt-[32px] lg:mt-[50px] w-fit mx-auto">
      <katalog-big-btn>Рейтинг направлений</katalog-big-btn>
    </div>
  </section>
</template>
