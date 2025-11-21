<script setup lang='ts'>
  import { AlignRight } from 'lucide-vue-next';
  import Button from './ui/Button.vue';
  import LetsCode from './LetsCode.vue';
</script>

<template>
  <div class="max-w-7xl mx-auto px-3">
    <div class="flex items-center justify-between">
      <router-link to="/" class="flex gap-4 items-center">
        <LetsCode />
      </router-link>
      <ul class="hidden md:flex flex-row gap-4 items-center">
        <li>
          <RouterLink :to="{ name: 'free-courses' }"
            :class="{ 'text-emerald-400': $route.name === 'free-courses' || $route.fullPath.includes('end') }">
            Courses
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/#pricing" :class="{ 'text-emerald-400': $route.hash === '#pricing' }">
            Pricing
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/#stack" :class="{ 'text-emerald-400': $route.hash === '#stack' }">
            Stack
          </RouterLink>
        </li>
      </ul>
      <div class="hidden md:flex items-center gap-3">
        <Button type="button" as="link" :to="{ name: 'signup' }" variant="gost"
          class="capitalize py-1.5">register</Button>
        <Button @click="$router.push('/#pricing')" type="button" variant="green"
          class="text-white capitalize py-1.5">enroll now</Button>
      </div>
      <div class="md:hidden ">
        <Button @click="$emit('toggleMenu')" type="button" variant="none">
          <AlignRight :size="24" />
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>