<template>
  <div class="banner">
    <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.swiper {
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-image: url('@/assets/images/banner/book1.png');
}

.swiper-slide:nth-child(2n) {
  background-image: url('@/assets/images/banner/book2.png');
}

.swiper-slide:nth-child(3n) {
  background-image: url('@/assets/images/banner/book3.png');
}

.swiper-slide:nth-child(4n) {
  background-image: url('@/assets/images/banner/book4.png');
}

.swiper-slide:nth-child(5n) {
  background-image: url('@/assets/images/banner/book5.png');
}
</style>
<script setup lang="ts">
import 'swiper/css/effect-cards';
import {EffectCards} from 'swiper/modules';
import {ref} from "vue";

const modules = ref([EffectCards])

</script>