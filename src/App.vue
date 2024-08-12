<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
console.log('🚀 ~ RouterView:', RouterView)



</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>
