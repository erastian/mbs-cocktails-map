<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Loader from './components/Loader.vue'
import { onMounted } from 'vue';
import { useCocktailsStore } from '@/stores/cocktails.ts';
import BurgerNav from '@/components/BurgerNav.vue';

const cocktails: string[] = [ 'margarita', 'mojito', 'a1', 'kir' ];

const cocktailStore = useCocktailsStore();

onMounted(() => {
  cocktailStore.fetchCocktails(cocktails);
})
</script>

<template>
  <Header/>

  <Loader v-if="cocktailStore.isLoading"/>

  <div v-else class="wrapper">
    <Nav :items="cocktails"/>
    <RouterView/>
  </div>

  <BurgerNav/>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: calc(100% - 4.5rem);
  display: flex;
  padding-top: 2rem;
}
</style>
