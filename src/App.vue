<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/formDemo">表单demo</RouterLink>
  <div class="RouterView">
    <RouterView />

  </div>
</template>

<style scoped>
.RouterView {
  width: 100%;
  height: 100%;
  background-color: red
}
</style>
