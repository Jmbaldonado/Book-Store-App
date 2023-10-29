<template>
  <div class="mt-28 px-4 lg:px-24 flex justify-center items-start">
    <img :src="bookData?.imageURL" alt="Book Image" class="w-[550px] h-[550px] object-contain">
    <div class="mx-10">
      <h2 class="mt-3 font-bold text-5xl mb-4">{{bookData?.title}}</h2>
      <h4>By: {{bookData?.authorName}}</h4>
      <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores cupiditate, delectus deleniti dicta dolore dolorum eveniet illum, iste, modi molestias natus optio possimus quam recusandae rerum sequi veritatis vero.</span><span>Accusantium amet at consectetur dolor dolorem dolorum ea eius et ex, facere iure maiores quibusdam quod suscipit ullam vel velit, voluptatum. Cum illo laborum magnam saepe. Amet dolores ipsam sequi.</span></p>
      <p><span>Atque ipsum itaque officiis optio ullam. Ab animi autem consequatur dolorem ducimus excepturi minus ratione. Ab accusantium at, blanditiis commodi consectetur, culpa delectus error fugit laboriosam nemo qui ullam vel?</span><span>Alias at deserunt dolor fugiat harum hic itaque quo sit temporibus vel. Amet delectus dicta ea illo mollitia nam officia perferendis? Illum ipsa nihil pariatur porro rem. Dolores, esse, ipsum.</span><span>Aliquid, hic in porro provident sed soluta voluptate. Amet eum ex, expedita labore optio qui voluptas. Cumque doloribus iusto quae quis rem sint? Architecto assumenda, itaque quo unde vel voluptatem.</span><span>Animi culpa deleniti dolorum error et explicabo, illum incidunt minima minus odit officia, repellendus veritatis voluptatem. Adipisci asperiores autem consectetur impedit ipsa natus odit sit. Cum dolores eum ipsa suscipit.</span></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi deserunt minima necessitatibus ratione sequi tempora. Accusamus, accusantium debitis distinctio fugit impedit maiores quisquam temporibus? Accusantium corporis doloremque dolorum velit?</p>
    </div>

  </div>
</template>

<style scoped>
p {
  @apply text-justify mt-4;
}
</style>

<script setup lang="ts">
import {computed, onMounted} from "vue";
import {useBooksStore} from "@/stores/books";
import {useRoute} from "vue-router";
const booksStore = useBooksStore();
const routes = useRoute();

onMounted(() => {
  booksStore.FETCH_SINGLE_BOOK(routes.params.id as string)
})
const bookData = computed(() => booksStore.GET_SINGLE_BOOK)

</script>