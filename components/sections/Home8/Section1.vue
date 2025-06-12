<template>
    <div class="full-width">
        <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] grid items-center mx-auto lg:mt-[128px] max-w-[1320px] lg:gap-10 lg:grid-cols-2 xl:grid-cols-[minmax(695px,_1fr)_1fr]">
            <div class="flex-1">
                <span class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">Салбарын мэдээ</span>
              <h1 class="font-chivo text-[25px] leading-[34px] sm:text-[46px] sm:leading-[42px] md:text-heading-3 font-extrabold mb-6 lg:mb-10">
                <p class="font-bold inline-block">
                  Уурхайн зураг оруулах, Рейс автомат тоолох, Цаг ашиглалт бүртгэлжүүлэх, Сул зогсолт дата анализ, Аюулгүй байдал мэдээлэл, Техник ашиглалт болон төлөвлөлт
                </p>
              </h1>
                <p class="text-quote md:text-lead-lg text-gray-600 mb-[45px]">
                  Mining Academy-д нэгдээрэй.
                </p>
                <div class="bg-white py-3 px-4 flex items-center justify-between border border-gray-100 input-shadow rounded-[10px] max-w-[600px]">
                    <input class="outline-none ml-5 w-1/2" type="text" placeholder="Enter you mail .." />
                    <div>
                        <button class="flex items-center transition-colors duration-200 py-[17px] px-[26px] rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-900 whitespace-nowrap flex-1 w-fit gap-5">
                          Бүртгүүлэх имэйл хаяг “Бүртгэл”
                          <i> <img class="ml-[7px] w-[12px] filter-white" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="items-center flex-1 relative hidden gap-[17px] lg:flex">
              <div class="flex-1 z-10 relative">
                <img class="shadow-3 animate-float rounded-[158px] h-[410px] lg:max-w-[140px] xl:max-w-[184px]"
                     src="/assets/images/miner-2.png"
                     alt="agon hero banner" />
                <p class="absolute top-[78%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white text-sm text-center px-3 py-1 rounded">
                  Уул уурхайн компаниуд
                </p>
              </div>
              <div class="flex-1 z-10 relative pt-10">
                <img class="shadow-3 animate-float rounded-[158px] h-[410px] lg:max-w-[140px] xl:max-w-[184px]"
                     src="/assets/images/miner-3.png" alt="agon hero banner" />
                <p class="absolute top-[78%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white text-sm text-center px-3 py-1 rounded">
                  Туслан гүйцэтгэгчид
                </p>
              </div>
              <div class="flex-1 z-10 relative">
                <img class="shadow-3 animate-float rounded-[158px] lg:max-w-[140px] xl:max-w-[184px]"
                     src="/assets/images/miner-7.png" alt="agon hero banner" />
                <p class="absolute top-[78%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white text-sm text-center px-3 py-1 rounded">
                  Ханган нийлүүлэгчид
                </p>

              </div>
                <div class="rounded-full absolute opacity-50 w-[600px] h-[600px] bg-[#9BE9FB] blur-[200px] z-0 top-0 left-0 -translate-x-1/3 -translate-y-1/3"></div>
                <div class="rounded-full absolute opacity-50 w-[400px] h-[400px] bg-[#FFD5C8] blur-[200px] z-0 bottom-0 right-0 translate-x-1/3 translate-y-1/3"></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>