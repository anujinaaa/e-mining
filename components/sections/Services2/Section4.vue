<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[260px]">
        <div class="bg-bg-2 relative px-[12px] py-[70px] rounded-[50px]">
            <div class="text-center relative mb-[70px] md:mb-[90px]">
                <h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Бидний санал болгож буй зүйл</h2>
                <p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[43ch]">Уурхайн анхан шатны ажилтан бүрээс дата мэдээлэл цуглуулах, бүх түвшин удирдлага хяналт</p>
            </div>
            <swiper
                :slides-per-view="5"
                :space-between="0"
                :loop="true"
                :autoplay="{
                    delay: 8000,
                    disableOnInteraction: true
                }"
                :breakpoints="{
                    320: {
                        slidesPerView: 1
                        // spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2
                        // spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 2
                        // spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2
                        // spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3
                        // spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3
                        // spaceBetween: 30,
                    }
                }"
                :pagination="{
                    el: '.swiper-pagination',
                    clickable: true
                }"
                :navigation="{
                    nextEl: '.h1n',
                    prevEl: '.h1p'
                }"
                :modules="modules"
                class="offer-list dots"
            >
              <swiper-slide class="rounded-2xl bg-white transition-all duration-300 hover:translate-y-[-3px] min-h-[400px] flex flex-col px-[24px] py-[20px] md:px-[63px] md:py-[43px] md:mx-5">
                <img class="w-[50px] h-[50px] object-cover mb-[30px]" src="/assets/images/icons/icon-trees.svg" alt="icon" />
                <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Хугацаат сэлбэг төлөвлөлт</h3>
                <p class="text-text text-gray-600 mt-auto">Техник гарын авлага болон аж ахуй нэгжийн заасан хугацаанд тулгуурлан сэлбэг төлөвлөлт</p>
              </swiper-slide>

              <swiper-slide class="rounded-2xl bg-white transition-all duration-300 hover:translate-y-[-3px] min-h-[400px] flex flex-col px-[24px] py-[20px] md:px-[63px] md:py-[43px] md:mx-5">
                <img class="w-[50px] h-[50px] object-cover mb-[30px]" src="/assets/images/icons/icon-sun.svg" alt="icon" />
                <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Дата суурилсан зөвлөмж</h3>
                <p class="text-text text-gray-600 mt-auto">Бодит сэлбэг хэрэглээ дата анализ суурилсан датан авалт зөвлөмж</p>
              </swiper-slide>

              <swiper-slide class="rounded-2xl bg-white transition-all duration-300 hover:translate-y-[-3px] min-h-[400px] flex flex-col px-[24px] py-[20px] md:px-[63px] md:py-[43px] md:mx-5">
                <img class="w-[50px] h-[50px] object-cover mb-[30px]" src="/assets/images/icons/icon-hat.svg" alt="icon" />
                <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Байршил</h3>
                <p class="text-text text-gray-600 mt-auto">Сэлбэг баркод суурилсан байршил тогтоох. Тээвэр хана явж байгаа болон аль агуулахад хэн хүлээн авсан. Агуулахаас аль тоног төхөөрөмжид тависан гэх мэт.</p>
              </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation]
        };
    }
};
</script>
