<template>
  <div class="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
    <div class="md:w-1/2">
      <img src="@/assets/images/others/favoritebook.jpg" alt="Favorite Books" class="rounded md:w-10/12">
    </div>

    <div class="md:w-1/2 space-y-6">
      <h2 class="text-5xl font-bold my-5 md:w-3/4 leading-snug">Find Your Favorite <span class="text-blue-700">Book Here!</span>
      </h2>
      <p class="mb-10 text-lg md:5/6"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, amet delectus deleniti dicta dolores doloribus eligendi eveniet excepturi inventore ipsum itaque nemo perferendis, praesentium quod reiciendis repellat sapiente?</span>
      </p>
      <div class="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
        <div>
          <h3 class="text-3xl font-bold">800+</h3>
          <p class="text-base">Book Listing</p>
        </div>
        <div>
          <h3 class="text-3xl font-bold">500+</h3>
          <p class="text-base">Registered Users</p>
        </div>
        <div>
          <h3 class="text-3xl font-bold">1200+</h3>
          <p class="text-base">PDF Downloads</p>
        </div>
      </div>
      <div class="mt-10">
        <router-link to="/shop"
                     class="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
          Explore More
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>