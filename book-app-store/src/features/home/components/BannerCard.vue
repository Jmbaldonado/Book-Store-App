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

<script setup lang="ts">
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import '@/assets/css/swiper.css'


// import required modules
import {EffectCards} from 'swiper/modules';
import {ref} from "vue";

const modules = ref([EffectCards])

</script>