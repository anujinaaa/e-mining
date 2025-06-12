<template>
    <ul class="navbar flex flex-col justify-center font-chivo gap-[14px] lg:flex-row">
      <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="/home">Нүүр</NuxtLink>

      <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="/about">Бидний тухай</NuxtLink>
      <li class="flex items-center group">
        <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="#">E-DIS</NuxtLink><i><img class="icon-caret group-hover:filter-green" src="/assets/images/icons/icon-caret.svg" alt="caret" /></i>
        <ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
          <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv1">
            <NuxtLink class="flex items-center text-[14px]" to="/services-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-gem.svg" alt="" /><span class="whitespace-nowrap">Диспетчер систем</span></NuxtLink>
          </li>
          <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv2">
            <NuxtLink class="flex items-center text-[14px]" to="/services-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-gem.svg" alt="" /><span class="whitespace-nowrap">Техник ашиглалт</span></NuxtLink>
          </li>
          <li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
          <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="p1">
            <NuxtLink class="flex items-center text-[14px]" to="/pricing-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-database.svg" alt="" /><span class="break-words whitespace-normal text-[14px] leading-5 w-[140px]">Удирдлагийн систем</span></NuxtLink>
          </li>
          <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="p2">
            <NuxtLink class="flex items-center text-[14px]" to="/pricing-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-database.svg" alt="" /><span class="whitespace-nowrap">Агуулах менежмент</span></NuxtLink>
          </li>
          <li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
          <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="faqs1">
            <NuxtLink class="flex items-center text-[14px]" to="/faqs-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-headset.svg" alt="" /><span class="break-words whitespace-normal text-[14px] leading-5 max-w-[140px]">Худалдан авалт төлөвлөлт</span></NuxtLink>
          </li>
        </ul>
      </li>

        <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="/contact">Хүний нөөц</NuxtLink>

      <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="/single">Miner academy</NuxtLink>

      <li class="flex items-center group">
        <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="#">UniMINE</NuxtLink>
        <i><img class="icon-caret group-hover:filter-green" src="/assets/images/icons/icon-caret.svg" alt="caret" /></i>
        <ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
          <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="s1">
            <NuxtLink class="flex items-center text-[14px]" to="/shop-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-edit.svg" alt="" /><span class="whitespace-nowrap">Shop 01</span></NuxtLink>
          </li>
          <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="s2">
            <NuxtLink class="flex items-center text-[14px]" to="/shop-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-edit.svg" alt="" /><span class="whitespace-nowrap">Shop 02</span></NuxtLink>
          </li>
          <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="product">
            <NuxtLink class="flex items-center text-[14px]" to="/single-product"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-edit.svg" alt="" /><span class="whitespace-nowrap">Product Details</span></NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
</template>
<script setup lang="ts">
</script>