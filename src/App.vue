<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div id="app">
    <RouterLink :to="{ name: 'home' }">← Back</RouterLink>
    <RouterLink to="/login">Log in</RouterLink>
  </div>
</template>

<style scoped>
#app {
  height: 100vh;
}
</style>
