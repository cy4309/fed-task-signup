<script setup>
import { resolveDynamicComponent } from 'vue'

const props = defineProps({
  icon: {
    type: Object,
    default: () => {}
  },
  label: {
    type: [String, Number],
    default: null
  }
})
</script>

<template>
  <button class="btn">
    <component :is="resolveDynamicComponent(props.icon)" class="icon" />
    {{ props.label }}
  </button>
</template>
<style>
.btn {
  border-radius: 4px;
  width: 190px;
  height: 48px;
  background-color: #fff;
  border: 1px solid #3c71ff;
  font-size: 13px;
  cursor: pointer;
}
</style>
