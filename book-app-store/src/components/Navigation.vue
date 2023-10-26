<template>
  <header class="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
    <nav class="py-4 lg:px-24 px-4" :class="isSticky ? 'sticky top-0 left-0 right-0 bg-blue-300': ''">
      <div class="flex justify-between items-center text-base gap-8">
        <router-link to="/" class="text-2xl font-bold text-blue-700 flex items-center gap-2">
          <font-awesome-icon :icon="['fas', 'blog']" class="inline-block"/> Books
        </router-link>

        <ul class="md:flex space-x-12 hidden">
          <li v-for="item in navigationItems" :key="item.name">
            <router-link :to="item.path" class="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
              {{ item.name }}
            </router-link>
          </li>
        </ul>

        <div class="space-x-12 hidden lg:flex items-center">
          <button><font-awesome-icon icon="bars-staggered"/></button>
        </div>

        <div class="md:hidden">
          <button @click="menuOpen" class="text-black focus:outline-none">
            <font-awesome-icon :icon="menuIcon" class="h-5 w-5 text-black"/>
          </button>
        </div>
      </div>

      <div class="space-y-4 px-4 mt-16 py-7 bg-blue-700" :class="isMenuOpen ? 'block fixed top-0 right-0 left-0': 'hidden'">
        <router-link v-for="item in navigationItems" :key="item.name" :to="item.path" class="block text-base text-white uppercase cursor-pointer">
          {{ item.name }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Shop', path: '/shop' },
  { name: 'Sell Your Book', path: '/admin/dashboard' },
  { name: 'Blog', path: '/admin/dashboard' },

]

const isMenuOpen = ref(false)
const isSticky = ref(false)

onMounted(() => {
  const handleScroll = () => {
    if(window.scrollY > 100) {
      isSticky.value = true
    } else {
      isSticky.value = false
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
})

const menuOpen = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const menuIcon = computed(() => isMenuOpen.value ? ['fas', 'xmark'] : ['fas', 'bars-staggered'])

</script>
