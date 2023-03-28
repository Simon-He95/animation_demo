<script setup lang="ts">
import { preload } from '../utils'
const range = ref(0)

preload([
  new URL('../../public/images2/img1.png', import.meta.url).href,
  new URL('../../public/images2/img2.jpg', import.meta.url).href,
])
</script>

<template>
  <div w-full h-full relative items-center flex>
    <div w-full relative>
      <div
        class="outer"
        flex
        justify-center
        items-center
        box-border
        w-full
        bg="[url(../images2/img1.png)] cover"
        pt3
        pb1
        pr6
        pl6
        aspect="[2.3/1]"
      >
        <div
          class="inner"
          w-full
          bg="[100%] no-repeat center [url(../images2/img2.jpg)]"
          aspect="[2.3/1]"
          z--1
          border-rd-15
          :style="{ backgroundSize: `${100 + range / 2}%` }"
        />
      </div>
      <div flex gap4 justify-center mt8>
        <h4 font-bold>
          Macro Camera
        </h4>
        <input v-model="range" type="range">
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 300px) and (max-width: 767px) {
  .outer {
    padding: 2px 5px 0 8px;
  }
  .inner {
    border-radius: 27px;
  }
}

@media (min-width: 770px) and (max-width: 1025px) {
  .outer {
    padding: 4px 12px 0 16px;
  }
}
@media screen and (max-width: 285px) {
  .outer {
    padding: 0 6px 0 3px;
  }
}
</style>
