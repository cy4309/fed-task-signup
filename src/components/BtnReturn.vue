<script setup></script>

<template>
  <button class="btn btn--return">
    <router-link :to="{ name: 'home' }" class="btn btn--return--home">← Back</router-link>
  </button>
</template>

<style scoped>
.btn--return {
  width: 100%;
  height: 100%;
  border: 0;
  margin-bottom: 30px;
}
.btn--return--home {
  border: 0;
  color: black;
  width: 100%;
  height: 100%;
  display: block;
  text-align: left;
  font-weight: 600;
}
</style>
