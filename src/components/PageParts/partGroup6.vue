<script setup lang="ts">
import { useButtons } from "../../lib";

const { KatalogBigBtn } = useButtons();
</script>

<template>
  <section class="xl:hidden w-[100%] px-4 mb-[50px]">
    <div class="bg-white shadow-lg shadow-black flex flex-col p-6">
      <h6 class="font-normal text-[16px] leading-5 text-aRefColor">
        фото-отчет
      </h6>
      <h3 class="font-bold text-[24px] leading-7 text-btnBlack mt-2">
        Делимся впечатлениями
      </h3>
      <h6 class="font-semibold text-btnBlack mt-4">Введите e-mail адрес</h6>
      <form class="flex flex-col" action="submit" method="post">
        <input
          class="mt-2 bg-backSection w-[300px] h-[44px] px-4"
          type="text"
          placeholder="name@domain.com"
          name="emailAddress"
          id="emailAddress"
        />
        <katalog-big-btn class="w-fit mt-4"
          >Подписаться на новости</katalog-big-btn
        >
        <p class="mt-6 text-[14px] leading-4 text-btnBlack font-semibold">
          подписываясь на новости, вы автоматически соглашаетесь с условиями
          обработки персональных данных и правилами рекламных рассылок
        </p>
      </form>
    </div>
  </section>
  <section class="hidden xl:block w-[100%] absolute top-[101%] z-10">
    <div
      class="max-w-[1180px] mx-auto flex items-center gap-x-16 shadow-lg shadow-black p-10 bg-white rounded-lg"
    >
      <div class="w-[45%]">
        <h6 class="text-aRefColor text-[18px] leading-5 font-normal">
          актуально
        </h6>
        <h3 class="font-bold text-[28px] leading-8 text-btnBlack mt-2">
          Получайте полезные рассылки о путешествиях
        </h3>
      </div>
      <form class="w-[65%]" action="" method="submit">
        <fieldset class="flex flex-col">
          <span
            class="inline-block font-semibold text-[16px] leading-5 text-btnBlack"
            >Введите e-mail адрес</span
          >
          <label class="flex gap-x-4 mt-2">
            <input
              class="px-4 bg-backSection min-w-[280px]"
              type="text"
              name="emailAddress"
              id="emailAddress"
              placeholder="name@domain.com"
            />
            <katalog-big-btn>Подписаться на новости</katalog-big-btn>
          </label>
          <label class="font-semibold text-[14px] text-btnBlack leading-4 mt-2">
            подписываясь на новости, вы автоматически соглашаетесь с условиями
            обработки персональных данных и правилами рекламных рассылок
          </label>
        </fieldset>
      </form>
    </div>
  </section>
</template>
