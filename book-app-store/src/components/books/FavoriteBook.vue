<template>
  <div class="my-16 px-4 lg:px-24">
    <h2 class="text-5xl text-center font-bold text-black my-5">Best Seller Books</h2>

    <div>
      <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :pagination="{
      clickable: true,
    }"
          :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }"
          :modules="modules"
          class="mySwiper w-full h-full"
      >
        <swiper-slide v-for="book in books" :key="book.id">
          <BookCard
              :bookId="book.id"
              :imageURL="book.imageURL"
              :title="book.title"
              :authorName="book.authorName"
          />
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script setup lang="ts">
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import {computed, onMounted, ref} from "vue";
import {useBooksStore} from "@/stores/books";
import BookCard from "@/components/books/BookCard.vue";

const modules = ref([Pagination])

const booksStore = useBooksStore();
onMounted(booksStore.FETCH_BOOKS)

const books = computed(() => booksStore.GET_BOOKS)

</script>
