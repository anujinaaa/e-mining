<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:grid lg:grid-cols-2 gap-[35px] xl:gap-0">
        <div class="relative lg:flex">
            <ElementsProductThumbSlider />
        </div>
        <div class="col-start-2 mt-[30px] lg:ml-6">
            <div class="flex items-center justify-between mb-[22px]">
                <p class="text-sm text-gray-500 font-bold">Уул уурхай тоног төхөөрөмжийн худалдаа</p>
                <div class="flex items-center gap-[10px]">
                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[20%]">
                            <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" />
                            <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" />
                            <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" />
                            <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" />
                            <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" />
                        </div>
                    </div>
                    <p class="text-tiny font-semibold text-gray-400">(138 rates)</p>
                </div>
            </div>
            <h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-8">2 PC FLOATING BALL VALVE</h3>
            <p class="text-text text-gray-500 ">size range: 1/2"-"12", DN15-DN300</p>
            <p class="text-text text-gray-500 ">pressure rating: Class 150- Class600, PN16-PN100</p>
            <p class="text-text text-gray-500 ">pressure rating: Class 150- Class600, PN16-PN100</p>
            <p class="text-text text-gray-500 ">cast steel body material: WCB, CF8, CF8M, CF3, CF3M</p>
            <p class="text-text text-gray-500 ">forged steel body material: A105, LF2, F304, F316</p>
            <p class="text-text text-gray-500 mb-8">seat: PTEE, RPTFE, TMF1600, PEEK, NYLON, DEVLON, MO- LON</p>

<!--            <div class="flex flex-col gap-5 mb-[30px] md:flex-row md:gap-[37px]">-->
<!--                <div class="flex-1">-->
<!--                    <div class="font-chivo text-heading-6 font-bold text-green-1000 mb-[10px]"><span class="block">Hurry up!</span><span class="block">Sales ends soon!</span></div>-->
<!--                    <div class="w-full bg-gray-200 h-[11px] rounded-[10px] mb-[6px]">-->
<!--                        <div class="bg-danger h-[11px] rounded-[10px] w-[60%]"></div>-->
<!--                    </div>-->
<!--                    <p class="text-gray-500 font-bold text-sm">63/158 sold</p>-->
<!--                </div>-->
<!--&lt;!&ndash;                <ElementsCountdown :countDay="2" />&ndash;&gt;-->
<!--            </div>-->
            <div class="w-full bg-gray-200 h-[1px] mb-[46px]"></div>
            <div class="flex flex-col gap-[10px] mb-[26px] md:flex-row">
                <div class="detail-qty border border-green-100 rounded-lg flex items-center justify-between w-[118px]">
                    <input class="qty-val text-green-1000 px-4 text-center font-bold font-chivo text-[20px] max-w-[80px]" v-model="qtyVal" />
                    <div class="flex flex-col">
                        <span class="qty-down cursor-pointer" @click="increaseCount"
                            ><i><img src="/assets/images/icons/icon-caret-up-green.svg" alt="caret icon" /></i
                        ></span>
                        <span class="qty-up cursor-pointer" @click="decreaseCount"
                            ><i><img src="/assets/images/icons/icon-caret-down-green.svg" alt="caret icon" /></i
                        ></span>
                    </div>
                </div>
                <div class="flex items-center gap-[10px]">
                  <button
                      @click="showForm = true"
                      class="bg-green-100 flex items-center rounded transition-colors duration-300 border border-green-100 py-[15px] px-[22px] gap-[13px] hover:bg-white"
                  >
                    <a class="text-green-1000 font-chivo font-bold text-[14px] md:text-[18px] md:leading-[20px]">
                      Үнийн санал
                    </a>
                  </button>
<!--                    <div class="border border-green-100 grid place-items-center cursor-pointer transition-all duration-300 w-[50px] h-[50px] rounded-[5px] hover:bg-green-100 hover:translate-y-[-5px]">-->
<!--                        <img src="/assets/images/icons/icon-heart.svg" alt="icon" />-->
<!--                    </div>-->
<!--                    <div class="border border-green-100 grid place-items-center cursor-pointer transition-all duration-300 w-[50px] h-[50px] rounded-[5px] hover:bg-green-100 hover:translate-y-[-5px]">-->
<!--                        <img src="/assets/images/icons/icon-shuffle.svg" alt="icon" />-->
<!--                    </div>-->

                  <div
                      v-if="showForm"
                      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                  >
                    <div class="bg-white p-6 rounded-lg w-full max-w-xl shadow-lg relative">
                      <button
                          @click="showForm = false"
                          class="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
                      >
                        &times;
                      </button>
                      <h2 class="text-xl font-bold mb-4">Үнийн санал авах</h2>
                      <form @submit.prevent="submitForm" class="bg-white space-y-5">
                        <!-- 1. Нэр (full row) -->
                        <div>
                          <label class="block text-sm font-medium text-gray-700 mb-1">Нэр</label>
                          <input
                              type="text"
                              v-model="form.name"
                              required
                              placeholder="Таны нэр"
                              class="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>

                        <!-- 2. Утас + Имэйл (2 column row) -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Утасны дугаар</label>
                            <input
                                type="tel"
                                v-model="form.phone"
                                required
                                placeholder="99998888"
                                class="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                          <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Имэйл хаяг</label>
                            <input
                                type="email"
                                v-model="form.email"
                                required
                                placeholder="name@example.com"
                                class="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                        </div>

                        <!-- 3. Байгууллага + Албан тушаал (2 column row) -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Байгууллагын нэр</label>
                            <input
                                type="text"
                                v-model="form.organization"
                                placeholder="Байгууллагын нэр"
                                class="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                          <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Албан тушаал</label>
                            <input
                                type="text"
                                v-model="form.position"
                                placeholder="Таны албан тушаал"
                                class="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                        </div>

                        <!-- Submit -->
                        <button
                            type="submit"
                            class="w-full bg-green-100 hover:bg-green-200 text-green-1000 font-semibold py-3 rounded-lg transition duration-300"
                        >
                          Илгээх
                        </button>
                      </form>

                    </div>
                  </div>
                </div>
            </div>
            <div class="flex flex-col">
                <p class="text-sm"><span>Vendor:</span><span class="text-gray-500">&nbsp;Categories: Уул уурхай тоног төхөөрөмжийн худалдаа, Ball Valve - бөмбөлгөн хаалт, Valve- хавхлага, хаалт, Газар тариалангийн тоног төхөөрөмж худалдаа</span></p>
                <p class="text-sm"><span>SKU:</span><span class="text-gray-500">&nbsp;Tag: DALIAN DV VALVE CO</span></p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
const qtyVal = ref(1);
function increaseCount() {
    qtyVal.value += 1;
}
function decreaseCount() {
    if (qtyVal.value > 1) {
        qtyVal.value -= 1;
    }
}

const showForm = ref(false)

const form = ref({
  name: '',
  phone: '',
  email: '',
  organization: '',
  position: ''
})

const submitForm = () => {
  console.log('Form Submitted:', form.value)
  showForm.value = false
  alert('Амжилттай илгээгдлээ!')
}
</script>
