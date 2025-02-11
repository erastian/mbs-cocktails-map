<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCocktailsStore } from '@/stores/cocktails.ts';
import { computed, watchEffect } from 'vue';
import type { ICocktail } from '@/shared/types/types';
import CocktailDetails from '@/components/CocktailDetails.vue';
import router from '@/router';

const route = useRoute();
const cocktailStore = useCocktailsStore();

const id = computed(() => route.params.id as string);
const cocktails = computed<ICocktail[]>(() => cocktailStore.cocktails[id.value] || []);

watchEffect(() => {
  if (!cocktailStore.cocktails[id.value]) {
    router.push({ name: 'NotFound' })
  }
})

</script>

<template>
  <div class="cocktailsWrapper">
    <div v-for="cocktail in cocktails" :key="cocktail.id" class="cocktail">
      <CocktailDetails :cocktail="cocktail"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cocktailsWrapper {
  width: 100%;
  height: fit-content;
  margin-bottom: 5rem;
}
</style>
