<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[93px]">
        <div class="mb-[50px]">
            <h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Катлоги</h2>
        </div>

      <div class="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            <div @click="scrollToSection" class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
                <NuxtLink class="block">
                  <ul class="flex items-center justify-center">
                    <li class="h-20 w-20 text-6xl flex items-center justify-center">
                      &#9881;&#65039;
                    </li>
                  </ul>
                    <p class="text-heading-6 font-chivo font-bold mb-[5px]">Техникийн сэлбэг эд анги
                    </p>
                </NuxtLink>
            </div>
            <div @click="scrollToSection" class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
                <NuxtLink class="block">
                  <ul class="flex items-center justify-center">
                    <li class="h-20 w-20 text-6xl flex items-center justify-center">
                      &#128295;
                    </li>
                  </ul>
                  <p class="text-heading-6 font-chivo font-bold mb-[5px]">Гидрийн систем</p>
                </NuxtLink>
            </div>
            <div @click="scrollToSection" class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
                <NuxtLink class="block" >
                  <ul class="flex items-center justify-center">
                    <li class="h-20 w-20 text-6xl flex items-center justify-center">
                      &#129690;&#65039;
                    </li>
                  </ul>
                  <p class="text-heading-6 font-chivo font-bold mb-[5px]">Тос, шингэн, хими</p>
                </NuxtLink>
            </div>
            <div @click="scrollToSection" class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
                <NuxtLink class="block" >
                  <ul class="flex items-center justify-center">
                    <li class="h-20 w-20 text-6xl flex items-center justify-center">
                      &#9889;
                    </li>
                  </ul>
                  <p class="text-heading-6 font-chivo font-bold mb-[5px]">Цахилгаан, электроник</p>
                </NuxtLink>
            </div>
            <div @click="scrollToSection" class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
                <NuxtLink class="block">
                  <ul class="flex items-center justify-center">
                    <li class="h-20 w-20 text-6xl flex items-center justify-center">
                      &#128736;&#65039;
                    </li>
                  </ul>
                  <p class="text-heading-6 font-chivo font-bold mb-[5px]">Засварын багаж хэрэгсэл</p>
                </NuxtLink>
            </div>
            <div @click="scrollToSection" class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
                <NuxtLink class="block" >
                  <ul class="flex items-center justify-center">
                    <li class="h-20 w-20 text-6xl flex items-center justify-center">
                      &#129657;
                    </li>
                  </ul>
                  <p class="text-heading-6 font-chivo font-bold mb-[5px]">Аюулгүй ажиллагаа PPE</p>
                </NuxtLink>
            </div>
            <div @click="scrollToSection" class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
                <NuxtLink class="block" >
                  <ul class="flex items-center justify-center">
                    <li class="h-20 w-20 text-6xl flex items-center justify-center">
                      &#129517;
                    </li>
                  </ul>
                  <p class="text-heading-6 font-chivo font-bold mb-[5px]">Дугуй ба түүнтэй холбоотой эд анги</p>
                </NuxtLink>
            </div>
            <div @click="scrollToSection" class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
                <NuxtLink class="block" >
                  <ul class="flex items-center justify-center">
                    <li class="h-20 w-20 text-6xl flex items-center justify-center">
                      &#128663;
                    </li>
                  </ul>
                  <p class="text-heading-6 font-chivo font-bold mb-[5px]">Тээврийн хэрэгслийн эд анги</p>
                </NuxtLink>
            </div>
            <div @click="scrollToSection" class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
                <NuxtLink class="block">
                  <ul class="flex items-center justify-center">
                    <li class="h-20 w-20 text-6xl flex items-center justify-center">
                      &#127858;
                    </li>
                  </ul>
                  <p class="text-heading-6 font-chivo font-bold mb-[5px]">Уурхайн нэмэлт хэрэглээ</p>
                </NuxtLink>
            </div>
            <div @click="scrollToSection" class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
                <NuxtLink class="block" >
                  <ul class="flex items-center justify-center">
                    <li class="h-20 w-20 text-6xl flex items-center justify-center">
                      &#128247;
                    </li>
                  </ul>
                  <p class="text-heading-6 font-chivo font-bold mb-[5px]">Камер, мэдрэгч</p>
                </NuxtLink>
            </div>
            <div @click="scrollToSection" class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
                <NuxtLink class="block">
                  <ul class="flex items-center justify-center">
                    <li class="h-20 w-20 text-6xl flex items-center justify-center">
                      &#128736;&#65039;
                    </li>
                  </ul>
                  <p class="text-heading-6 font-chivo font-bold mb-[5px]">Түрээсийн тоног төхөөрөмж</p>
                </NuxtLink>
            </div>
            <div ref="targetSection" class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">
                <NuxtLink class="block" to="#">
                  <ul class="flex items-center justify-center">
                    <li class="h-20 w-20 text-6xl flex items-center justify-center">
                      &#128667;
                    </li>
                  </ul>
                  <p class="text-heading-6 font-chivo font-bold mb-[5px]">Тээвэр, ложистек</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const targetSection = ref(null)

const scrollToSection = () => {
  targetSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>