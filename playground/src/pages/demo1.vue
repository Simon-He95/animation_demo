<script setup lang="ts">
import { preload } from '../utils'
import svg1 from '../../public/images1/reno-black-lg.svg'
import svg2 from '../../public/images1/reno-orange.svg'
preload([
  '../../public/images1/reno-black-lg.svg',
  '../../public/images1/reno-orange.svg',
  '../../public/images1/reno-img1.png',
  '../../public/images1/reno-img2.png',
  '../../public/images1/renozsvg.svg',
])

const show1Class = ref('')
const show2Class = ref('')
const mask1Class = ref('')
const mask2Class = ref('')
onMounted(() => {
  setTimeout(() => {
    show1Class.value = 'show-move'
    show2Class.value = 'show-move'
  }, 200)
  setTimeout(() => {
    mask1Class.value = 'mask1-move'
    mask2Class.value = 'mask2-move'
  }, 1000)
})
</script>

<template>
  <div w-full h-full relative>
    <div absolute left="50%" top-0>
      <div absolute left="-50%" top-0 translate-x="20%">
        <div
          :class="mask1Class"
          transition-3000
          absolute
          bg-white
          w-full
          h-full
        />
        <img :src="svg1" alt="">
        <div class="text" text-white absolute left="50%" text-2xl top="50%">
          想象 更近一点
        </div>
      </div>

      <div aspect="[1.6/1]">
        <img
          :class="show1Class"
          translate="-100% -80%"
          transition-1000
          src="../../public/images1/reno-img1.png"
          w-full
          h-full
          alt=""
        >
      </div>
    </div>
    <div absolute left="50%" bottom-0>
      <div absolute left="-50%" bottom-0 z--1 translate-x="-45%">
        <div
          :class="mask2Class"
          transition-3000
          absolute
          bg-white
          w-full
          h-full
        />
        <img :src="svg2" alt="">
        <img
          class="textImg"
          src="../../public/images1/renozsvg.svg"
          alt="renozsvg"
          absolute
          right="50%"
          bottom="50%"
          w-30
        >
      </div>
      <div aspect="[1.6/1]">
        <img
          :class="show2Class"
          translate="0% 90%"
          transition-1000
          src="../../public/images1/reno-img2.png"
          w-full
          h-full
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.show-move {
  transform: translate(-50%, 0);
}

.mask1-move {
  transform: translateX(200%);
}
.mask2-move {
  transform: translateX(-200%);
}

@media (min-width: 450px) and (max-width: 1025px) {
  .text {
    font-size: 20px;
    left: 40%;
    top: 45%;
  }
  .textImg {
    width: 4.5rem;
  }
}
@media screen and (max-width: 450px) {
  .text {
    font-size: 14px;
    left: 40%;
    top: 45%;
  }
  .textImg {
    width: 3rem;
  }
}
</style>
