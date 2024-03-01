<script setup lang="ts"></script>

<template>
  <footer class="w-[100%] bg-btnBlack text-btnText lg:pt-[150px] relative">
    <div class="w-fit mx-auto">
      <div
        class="px-[16px] flex flex-col place-items-start justify-center gap-[30px] md:flex-row md:place-items-stretch md:gap-[40px] xl:gap-[90px]"
      >
        <article
          class="pt-[50px] max-w-[320px] md:max-w-[390px] xl:max-w-[450px]"
        >
          <h2 class="text-[20px] leading-5 font-bold">Компания «РумТибет»</h2>
          <p class="pt-[17px] text-[14px] leading-5">
            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
            латыни из колледжа Hampden-Sydney.
          </p>
          <ul class="pt-[30px] flex flex-wrap gap-6">
            <li>
              <a class="underline" href="mailto:info@domain.com"
                >info@domain.com</a
              >
            </li>
            <li>
              <a class="underline" href="tel:+71234567890"
                >+7 (123) 456-78-90</a
              >
            </li>
          </ul>
          <ul class="flex gap-5 pt-[30px]">
            <li>
              <a href="#"
                ><img
                  class="w-[32px] h-[32px]"
                  src="/src/assets/images/buttons/telegramm.svg"
                  alt="Мы в Телеграмм"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  class="w-[32px] h-[32px]"
                  src="/src/assets/images/buttons/mdi_pinterest.svg"
                  alt="Мы в Pinterest"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  class="w-[32px] h-[32px]"
                  src="/src/assets/images/buttons/vk-with-circle.svg"
                  alt="Мы в VK"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  class="w-[32px] h-[32px]"
                  src="/src/assets/images/buttons/mdi_skype.svg"
                  alt="Мы в Skype"
              /></a>
            </li>
          </ul>
        </article>
        <article class="pt-[50px] max-w-[320px] xl:max-w-[400px]">
          <h2 class="text-[20px] leading-5 font-bold">Наши услуги</h2>
          <ul class="pt-[20px]">
            <li class="pb-4 text-[14px] font-normal leading-4">
              <a class="hover:text-aRefColor active:text-aRefColor" href="#"
                >>&nbsp;Прогулки в горы летом</a
              >
            </li>
            <li class="pb-4 text-[14px] font-normal leading-4">
              <a class="hover:text-aRefColor active:text-aRefColor" href="#"
                >>&nbsp;Зимние походы в горы</a
              >
            </li>
            <li class="pb-4 text-[14px] font-normal leading-4">
              <a class="hover:text-aRefColor active:text-aRefColor" href="#"
                >> Посещение храмов в горах</a
              >
            </li>
            <li class="pb-4 text-[14px] font-normal leading-4">
              <a class="hover:text-aRefColor active:text-aRefColor" href="#"
                >>&nbsp;Экстремальные виды туризма</a
              >
            </li>
            <li class="pb-4 text-[14px] font-normal leading-4">
              <a class="hover:text-aRefColor active:text-aRefColor" href="#"
                >>&nbsp;Походы в джунглях Амазонии</a
              >
            </li>
            <li class="pb-4 text-[14px] font-normal leading-4">
              <a class="hover:text-aRefColor active:text-aRefColor" href="#"
                >>&nbsp;Поездка в Африку</a
              >
            </li>
          </ul>
        </article>
        <article class="pt-[50px] max-w-[320px] xl:max-w-[400px]">
          <h2 class="text-[20px] leading-5 font-bold">Важно для путешествий</h2>
          <ul class="pt-[20px]">
            <li class="pb-4 text-[14px] font-normal leading-4">
              <a class="hover:text-aRefColor active:text-aRefColor" href="#"
                >>&nbsp;Как собрать в долгий поход?</a
              >
            </li>
            <li class="pb-4 text-[14px] font-normal leading-4">
              <a class="hover:text-aRefColor active:text-aRefColor" href="#"
                >>&nbsp;Жизненно важные предметы для похода</a
              >
            </li>
            <li class="pb-4 text-[14px] font-normal leading-4">
              <a class="hover:text-aRefColor active:text-aRefColor" href="#"
                >>&nbsp;Медицинская страховка, гарантии безопасности</a
              >
            </li>
            <li class="pb-4 text-[14px] font-normal leading-4">
              <a class="hover:text-aRefColor active:text-aRefColor" href="#"
                >>&nbsp;Если вы врач - загляните сюда</a
              >
            </li>
          </ul>
        </article>
      </div>
    </div>
    <div
      class="w-[100%] bg-bgCol1 text-btnText text-center text-[14px] leading-4 mt-20 py-5"
    >
      <p>ИП Константинопольский К.К., 2023</p>
      <p class="pt-2">Политика обработки персональных данных</p>
      <p class="text-left p-4">Верстка Gleb Torgashin 2023.</p>
    </div>
  </footer>
</template>
