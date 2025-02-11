<script setup lang="ts">
import { ref } from 'vue';
import { useCocktailsStore } from '@/stores/cocktails.ts';

const cocktailStore = useCocktailsStore();
const burgerIsOpen = ref<boolean>(false);

const toggleMenu = () => {
  burgerIsOpen.value = !burgerIsOpen.value;
}

</script>

<template>
  <div class="relative">
    <div class="burgerButton" @click="toggleMenu">
      <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
              stroke-width="48" d="M88 152h336M88 256h336M88 360h336"/>
      </svg>
    </div>
    <div class="" v-if="true">
      <Teleport to="body">
        <div class="burgerNav" :class="{open: burgerIsOpen}">
          <ul>
            <li v-for="(_, rootName) in cocktailStore.cocktails" :key="rootName">
              <RouterLink :to="{ name: 'CocktailDetails', params: { id: rootName }}">
                {{ rootName.charAt(0).toUpperCase() + rootName.slice(1) }}
              </RouterLink>
            </li>
          </ul>
          <div class="close" @click="burgerIsOpen = false">
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
              <path fill="currentColor"
                    d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"/>
            </svg>
          </div>
        </div>
      </Teleport>
    </div>
  </div>
</template>

<style scoped lang="scss">
.burgerButton {
  width: 5rem;
  height: 5rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border-radius: 50%;
  border: 1px solid var(--vt-c-black-mute);
  filter: drop-shadow(0 3px 4px var(--vt-c-black-mute));
  transition: filter .3s ease-in-out, opacity .3s ease-in-out;
  cursor: pointer;
  opacity: .65;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter .3s ease-in-out, opacity .3s ease-in-out;
  }

  &:hover {
    filter: drop-shadow(0 5px 4px var(--vt-c-black-soft));
    opacity: 1;

    svg {
      filter: drop-shadow(0 3px 4px var(--vt-c-black-soft));
    }
  }
}

.burgerNav {
  top: 0;
  position: fixed;
  right: -100%;
  transition: right 0.3s ease-in-out;
  z-index: 40;
  background: var(--vt-c-black-mute);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  opacity: .95;
  width: 15rem;
  border-left: 1px solid var(--vt-c-divider-dark-1);

  &.open {
    right: 0;
  }

  ul {
    list-style: none;
    width: 100%;
    padding: 0;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: auto;

    li {
      width: 100%;
      text-align: end;

      a {
        font-family: "Tilt Neon", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.275rem;
        color: var(--vt-c-white-soft);
        text-decoration: none;
        width: 100%;
        display: block;
        padding: 0 1.5rem;

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

  .close {
    margin-top: auto;
    width: 5rem;
    height: 5rem;
    position: relative;
    right: 0;
    bottom: 0;
    align-self: end;
    cursor: pointer;
    transition: filter .3s ease-in-out;

    &:hover {
      filter: drop-shadow(0 3px 4px var(--vt-c-text-dark-2));
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media screen and (min-width: 724px) {
  .burgerNav, .burgerButton, .relative {
    display: none;
  }

}

@media screen and (max-width: 724px) {
  .burgerNav {
    display: flex;
  }
  .burgerButton {
    display: flex;
  }
}
</style>
