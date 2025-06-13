<template>
    <div class="full-width bg-gray-100">
        <div class="px-5 py-4 mx-auto max-w-[1320px]">
            <ul class="flex items-center flex-wrap gap-[8px]">
                <li class="flex items-center gap-[5px]">
                    <img src="/assets/images/icons/icon-home-gray.svg" alt="home icon" />
                    <NuxtLink class="text-md text-gray-500 transition-colors duration-200 hover:text-gray-900" to="/"> Нүүр</NuxtLink>
                </li>
                <li class="flex items-center gap-[8px]">
                    <img src="/assets/images/icons/icon-angle-right-gray.svg" alt="home icon" />
                    <NuxtLink class="text-md text-gray-500 transition-colors duration-200 hover:text-gray-900" to="/about"> Бидний тухай</NuxtLink>
                </li>
                <li class="flex items-center gap-[8px]">
                    <img src="/assets/images/icons/icon-angle-right-gray.svg" alt="home icon" />
                    <NuxtLink class="text-md text-gray-500 transition-colors duration-200 hover:text-gray-900" to="/single">Miner acedemy</NuxtLink>
                </li>
                <li class="flex items-center gap-[8px]">
                    <img src="/assets/images/icons/icon-angle-right-gray.svg" alt="home icon" />
                    <NuxtLink class="text-md text-gray-500 transition-colors duration-200 hover:text-gray-900" to="/shop-1">Unimine</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
