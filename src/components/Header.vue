<script setup lang="ts">
import Divider from './Divider.vue';
</script>

<template>
  <header>
    <RouterLink to="/"><h1>Cocktails map <span>by Erastian</span></h1></RouterLink>
    <Divider/>
  </header>
</template>

<style scoped lang="scss">
$easeInOutQuad: cubic-bezier(0.455, 0.030, 0.515, 0.955);

header {
  display: flex;
  flex-direction: column;
  height: 4.5rem;
  position: relative;

  a {
    text-decoration: none;

    h1 {
      font-family: "Great Vibes", serif;
      font-weight: 400;
      font-style: normal;
      letter-spacing: 4px;
      color: white;
      font-size: 4em;
      text-align: left;
      animation: neon 1.5s ease-in-out infinite alternate;
      z-index: 10;

      span {
        font-family: 'Inter', sans-serif;
        letter-spacing: 1px;
        font-size: .525rem;
        animation: none;
        color: var(--vt-c-text-dark-2);
        text-transform: none;
        text-shadow: none;
      }
    }
  }
}

@media screen and (max-width: 724px) {
  header {
    height: 5rem;

    a h1 {
      text-align: center;

      span {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  header {
    height: 4rem;

    a h1 {
      font-size: 3rem;
    }
  }
}

@keyframes neon {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de,
    0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de,
    0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}
</style>
