<template>
  <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] flex flex-col gap-8 lg:mt-[120px] lg:flex-row xl:gap-[88px]">
    <div class="lg:max-w-[400px]">
      <h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-[28px]">
        Хэрхэн ажилдаг вэ?
      </h1>
      <p class="text-excerpt text-gray-600">
        Тоног төхөөрөмж бүр нэгдсэн мэдээлэл. Хэн хэзээ үзлэг хийсэн үзлэгийн түүх, Засвар үйлчилгээ мэдээлэл зэрэг техникийн нэгдсэн хялбаршуулсан түүх
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-[30px] w-full">
      <!-- Card 1 -->
      <div class="aspect-square flex flex-col justify-between items-start p-6  hover:translate-y-[-3px] transition-all duration-300">
        <img class="h-[64px] w-[64px]" src="/assets/images/icons/icon-resources.svg" alt="icon" />
        <div>
          <h3 class="font-bold font-chivo text-[20px] leading-[26px] mb-[14px]">1. Work order</h3>
          <p class="text-excerpt text-sm text-gray-600">Ажлын даалгавар өгөх, Явц хянах, үр дүн оруулах. Сэлбэг бүр дээр хийгдсэн ажил, хариуцсан ажилтан түүх.</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="aspect-square flex flex-col justify-between items-start p-6 hover:translate-y-[-3px] transition-all duration-300">
        <img class="h-[64px] w-[64px]" src="/assets/images/icons/icon-cards.svg" alt="icon" />
        <div>
          <h3 class="font-bold font-chivo text-[20px] leading-[26px] mb-[14px]">2. History</h3>
          <p class="text-excerpt text-sm text-gray-600">Нэгдсэн түүх, тоног төхөөрөмж тус бүр болон төрлөөр харах боломж. Дугуй тос, үзлэг, засвар, төсөл шилжих зэрэг бүхий л мэдээлэл нэг дор.</p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="aspect-square flex flex-col justify-between items-start p-6 hover:translate-y-[-3px] transition-all duration-300">
        <img class="h-[64px] w-[64px]" src="/assets/images/icons/icon-stats.svg" alt="icon" />
        <div>
          <h3 class="font-bold font-chivo text-[20px] leading-[26px] mb-[14px]">3. Maintance plan</h3>
          <p class="text-excerpt text-sm text-gray-600">Засвар үйлчилгээний нэгдсэн төлөвлөгөө. Мот цагт суурилсан засвар үйлчилгээ, шаардлагатай сэлбэгийн мэдээлэл багтсан.</p>
        </div>
      </div>
    </div>
  </div>

</template>
