<script setup lang="ts">
import { useCocktailsStore } from '@/stores/cocktails.ts';

const cocktailStore = useCocktailsStore();
</script>

<template>
  <nav items="items">
    <ul>
      <li v-for="(_, rootName) in cocktailStore.cocktails" :key="rootName">
        <RouterLink :to="{ name: 'CocktailDetails', params: { id: rootName }}">
          {{ rootName.charAt(0).toUpperCase() + rootName.slice(1) }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  flex: 0 1 25%;

  ul {
    list-style: none;
    width: 100%;
    padding: 0;
    gap: 1rem;
    display: flex;
    flex-direction: column;

    li {
      width: 100%;

      a {
        font-family: "Tilt Neon", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.275rem;
        color: var(--vt-c-white-soft);
        text-decoration: none;
        width: 100%;
        display: block;
        padding: 0 1rem;

        &:hover {
          transition: 0.3s ease;
          animation: fade-ani 0.3s linear, neon2 1.5s ease-in-out infinite alternate;
        }

        &.active {
          transition: 0.3s ease;
          animation: neon2 1.5s ease-in-out infinite alternate;
        }
      }
    }
  }
}

@keyframes neon2 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
    0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
    0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
  }
}

@keyframes fade-ani {
  0% {
    opacity: .75;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 724px) {
  nav {
    display: none;
  }
}
</style>
