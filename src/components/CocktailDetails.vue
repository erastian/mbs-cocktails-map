<script setup lang="ts">
import type { ICocktail } from '@/shared/types/types';
import { ref } from 'vue';

const { cocktail } = defineProps<{
  cocktail: ICocktail,
}>()

const isLoaded = ref(false);
</script>

<template>
  <div class="cocktailDetails">
    <div class="cocktailInfo">
      <h3>{{ cocktail.name }}</h3>
      <div class="cocktailMeta">
        <p>{{ cocktail.category }}</p>
        <p>{{ cocktail.alcoholic }}</p>
        <p>{{ cocktail.glass }}</p>
      </div>
      <div class="cocktailInstructions">
        <p>Instructions: </p>
        <p>{{ cocktail.instructions }}</p>
      </div>
      <div class="cocktailIngredients">
        <p>List of ingredients:</p>
        <p v-for="ingredient in cocktail.ingredients">
          {{ ingredient.measure }} {{ ingredient.ingredient }}
        </p>
      </div>
    </div>
    <div class="cocktailImage">
      <img
        :src="cocktail.image"
        :alt="cocktail.name"
        loading="lazy"
        @load="isLoaded = true"
        :class="{loaded: isLoaded}"
      />
      <div v-if="!isLoaded" class="placeholder">Loading...</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cocktailDetails {
  display: flex;
  max-width: 100%;
  margin-bottom: 6rem;
  gap: 1rem;

  .cocktailInfo {
    flex: 1 0 50%;

    h3 {
      font-family: "Tilt Neon", serif;
      font-size: 1.75rem;
      color: var(--vt-c-white-mute);
      margin-bottom: 2rem;
    }

    .cocktailMeta {
      display: flex;
      flex-direction: column;
      gap: .5rem;
      font-family: 'Inter', sans-serif;
      margin-bottom: 2rem;

      p {
        color: var(--vt-c-white-mute);
      }
    }

    .cocktailInstructions {
      margin-bottom: 2rem;

      p:first-child {
        color: var(--vt-c-white-mute);
      }
    }

    .cocktailIngredients {
      p:first-child {
        color: var(--vt-c-white-mute);
      }
    }
  }

  .cocktailImage {
    flex: 0 0 50%;
    border-radius: .5rem;
    overflow: hidden;
    position: relative;
    max-width: 20rem;
    max-height: 20rem;
    margin-top: .5rem;

    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      transition: opacity 0.3s ease-in-out;
      opacity: 0;

      &.loaded {
        opacity: 1;
      }
    }

    .placeholder {
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--vt-c-divider-light-1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      color: var(--vt-c-text-dark-2);
    }
  }
}

@media screen and (max-width: 724px) {
  .cocktailDetails {
    flex-direction: column;
    border-bottom: 1px solid var(--vt-c-black-mute);
    padding-bottom: 1.5rem;
    margin-bottom: 2rem;

    .cocktailInfo {
      order: 1;
      flex: 1 1 100%;
    }

    .cocktailImage {
      flex: 1 0 100%;
      max-width: 100%;
      max-height: 35rem;
      height: fit-content;
      margin: 0;
      order: 0;

      img, .placeholder {
        position: unset;
      }
    }
  }
}
</style>
