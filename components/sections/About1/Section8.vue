<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]">
        <div class="items-center justify-between mb-[70px] md:mb-[90px] md:flex">
            <div class="">
                <h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 max-w-[725px]">Харилцагчидын санал хүсэлт</h2>
<!--                <p class="text-quote md:text-lead-lg text-gray-600">From Our blog and Event fanpage</p>-->
            </div>
            <button type="button">
                <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black w-fit" to="#"
                    ><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Дэлгэрэнгүй</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                ></NuxtLink>
            </button>
        </div>
      <div class="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
        <NuxtLink class="group block h-full" to="/single">
          <div class="flex flex-col justify-between h-full p-2 rounded-2xl">
            <div>
              <p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
                БНХАУ-ын Wechai үйлдвэртэй e-mining хамтран ажиллахаар бэлтгэж байна.
              </p>
              <div class="relative">
                <div class="relative aspect-[430/275]">
                  <img class="h-full w-full object-cover rounded-2xl z-10 relative" src="/assets/images/thumbnail-3.png" alt="Agon" />
                  <div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                    <div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink class="group block h-full" to="/single">
          <div class="flex flex-col justify-between h-full p-2 rounded-2xl">
            <div>
              <p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
                E-Mining платформ дотоодын 10 банктай хамтран ажиллахаар бэлтгэж байна.
              </p>
              <div class="relative">
                <div class="relative aspect-[430/275]">
                  <img class="h-full w-full object-cover rounded-2xl z-10 relative" src="/assets/images/thumbnail-4.png" alt="Agon" />
                  <div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                    <div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink class="group block h-full" to="/single">
          <div class="flex flex-col justify-between h-full p-2 rounded-2xl">
            <div>
              <p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
                Жил бүр e-mining хамт олон “Уул уурхайн салбарын Дижитал шилжилт” экспог зохион байгуулна.
              </p>
              <div class="relative">
                <div class="relative aspect-[430/275]">
                  <img class="h-full w-full object-cover rounded-2xl z-10 relative" src="/assets/images/thumbnail-5.png" alt="Agon" />
                  <div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                    <div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
</template>
