<script setup lang="ts">
import { useButtons } from "../../lib";

const { KatalogBtn, FindProgBtn, inputInHeader } = useButtons();
</script>

<template>
  <div
    class="w-[100%] h-[100vh] bg-[url('../../../src/assets/images/mainPage/bgMain.jpg')] bg-cover bg-no-repeat bg-center"
  >
    <div class="w-[90%] xl:max-w-[1180px] mx-auto">
      <nav role="navigation" class="pt-4 flex items-center">
        <a class="pr-8 lg:pr-0" href="#">
          <img
            class="xl:w-[138px] xl:h-[48px]"
            src="../../../src/assets/images/mainPage/logo.svg"
            alt="Tibet logo" />
          <img
            class="xl:w-[138px] xl:h-[48px]"
            src="../../../src/assets/images/mainPage/logoText.svg"
            alt="Tibet logo"
        /></a>

        <ul
          class="hidden lg:flex lg:flex-wrap lg:items-center lg:gap-6 text-btnText lg:ml-auto"
          role="menu"
        >
          <li><a class="hover:text-aRefColor" href="#">Главная</a></li>
          <li><a class="hover:text-aRefColor" href="#">Про гида</a></li>
          <li><a class="hover:text-aRefColor" href="#">Программа тура</a></li>
          <li><a class="hover:text-aRefColor" href="#">Стоимость</a></li>
          <li><a class="hover:text-aRefColor" href="#">Блог</a></li>
          <li><a class="hover:text-aRefColor" href="#">Контакты</a></li>
        </ul>
        <katalog-btn class="ml-auto lg:ml-10">{{ "Консультация" }}</katalog-btn>
      </nav>
      <section class="h-[89dvh] flex flex-col justify-end">
        <h1
          class="font-nextArt text-btnText text-[21px] sm:text-[28px] xl:text-[50px] font-bold"
        >
          Насладись прогулкой в горах с&nbsp;командой единомышленников
        </h1>
        <form
          class="rounded-lg mt-[30px] xl:mt-[40px] lg:px-[42px] xl:bg-btnBlack xl:bg-opacity-55 mb-[50px] xl:mb-[80px]"
          action="#"
          method="post"
        >
          <fieldset
            class="block lg:flex lg:flex-col lg:place-items-center lg:justify-center lg:gap-6 xl:flex-row xl:place-items-stretch py-[42px]"
          >
            <input-in-header
              class="hidden lg:block"
              place-text="Локация для тура"
              label-text="выберите из списка"
              :how-pic="0"
            ></input-in-header>
            <input-in-header
              class="hidden lg:block"
              place-text="Дата похода"
              label-text="укажите диапазон"
              :how-pic="1"
            ></input-in-header>
            <input-in-header
              class="hidden lg:block"
              place-text="Участники"
              label-text="минимум 4 человека"
              :how-pic="0"
            ></input-in-header>

            <find-prog-btn>{{ "Найти программу" }}</find-prog-btn>
          </fieldset>
        </form>
      </section>
    </div>
  </div>
</template>
