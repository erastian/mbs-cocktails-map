<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCocktailsStore } from '@/stores/cocktails.ts';
import { computed, watchEffect } from 'vue';

const router = useRouter();
const cocktailStore = useCocktailsStore();

const firstCocktail = computed(() => {
  const cocktails = Object.keys(cocktailStore.cocktails);
  return cocktails.length ? cocktails[0] : null;
})

watchEffect(() => {
  if (!cocktailStore.isLoading && firstCocktail.value) {
    router.replace(`/cocktail/${ firstCocktail.value }`)
  }
})
</script>

<template>

</template>
