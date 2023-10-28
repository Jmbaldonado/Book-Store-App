<template>
  <router-link :to='bookLink'>
    <div class="relative">
      <img :src="imageURL" alt="Book Image">
      <div class="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded">
        <font-awesome-icon :icon="['fas', 'cart-shopping']" class="w-4 h-4 text-white"/>
      </div>
    </div>
    <div>
      <div>
        <h3>{{ title }}</h3>
        <p>{{ authorName }}</p>
      </div>
      <div>
        <p>$10.00</p>
      </div>
    </div>
  </router-link>
</template>


<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {computed} from "vue";

const props = defineProps({
  bookId: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  }
})
const bookLink = computed(() => `/book/${props.bookId}`)
</script>