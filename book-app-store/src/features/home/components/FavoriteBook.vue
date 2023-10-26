<template>
  <BookCards headline="Best Seller Books"/>
</template>

<script setup>
import {onMounted} from "vue";
import {useBooksStore} from "@/stores/books";
import BookCards from "@/components/BookCards.vue";
const booksStore = useBooksStore();
onMounted(booksStore.FETCH_BOOKS)

</script>