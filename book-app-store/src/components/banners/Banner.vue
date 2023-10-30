<template>
  <div class="px-4 lg:px-24 bg-teal-100 flex items-center">
    <div class="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
      <div class="space-y-8 md:w-1/2 h-full">
        <h2 class="text-5xl font-bold leading-snug text-black">Buy and Sell Your Books <span class="text-blue-700">for the Best Prices</span></h2>
        <p class="md:w-4/5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus at, consequatur corporis delectus dignissimos dolores eveniet facere harum illo impedit quas, repellat unde! Explicabo nobis quasi sed. Earum, nulla.A adipisci aperiam asperiores assumenda aut, consequuntur cum dicta dolores eveniet ex impedit laboriosam libero modi necessitatibus nihil pariatur perferendis quidem quod ratione repellendus soluta tenetur ut voluptatem. Ea, libero?</p>
        <div>
          <input type="search" name="search" id="search" placeholder="Search a Book" class="py-2 px-2 rounded-s-sm outline-none" />
          <button class="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Search</button>
        </div>
      </div>
      <div>
        <BannerCard/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BannerCard from "@/components/banners/BannerCard.vue";
</script>