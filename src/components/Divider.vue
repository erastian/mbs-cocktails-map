<script setup lang="ts">

</script>

<template>
  <div class="divider"></div>
</template>

<style lang="scss" scoped>
$bgWidth: 10000px;

.divider {
  flex: 0 0 1px;
  opacity: .45;
  background: linear-gradient(to right, #1e5799 0%, #2ce0bf 19%, #76dd2c 40%, #dba62b 60%, #e02cbf 83%, #1e5799 100%);
  background-size: $bgWidth 100%;
  animation: bg 15s linear infinite;
  position: absolute;
  top: 4.5rem;
  width: 100%;
  height: 1px;
  z-index: -1;
}
@media screen and (max-width: 400px) {
  .divider {
    top: 3.5rem;
  }
}
@keyframes bg {
  0% {
    background-position-x: 0;
  }

  100% {
    background-position-x: $bgWidth;
  }
}
</style>
