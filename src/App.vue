<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useTheme } from './composables/useTheme';
// import 

// const { theme } = useTheme();
const { theme } = useTheme();
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
