<script setup lang='ts'>
import { AlignRight, UserIcon } from 'lucide-vue-next';
import Button from './ui/Button.vue';
<<<<<<< HEAD
import { ref } from 'vue';
=======
import LetsCode from './LetsCode.vue';
>>>>>>> c6797551d80b8826f42feff548e26c3c8e6625e3


</script>

<template>
  <div class="max-w-7xl mx-auto px-3">
    <div class="flex items-center justify-between">
      <a href="" class="flex gap-4 items-center">
<<<<<<< HEAD
        <UserIcon :size="28" :stroke-width="2" />
        <span class="capitalize">
          quajo letsCode
        </span>
      </a>
      <ul class="hidden md:flex flex-row gap-4 items-center">
        <li>
          <a href="#">
            Courses
          </a>
        </li>
        <li>
          <a href="#">
            Pricing
          </a>
        </li>
        <li>
          <a href="#">
            Stack
          </a>
        </li>
      </ul>
      <div class="hidden md:flex items-center gap-3">
        <Button type="button" as="link" variant="gost" class="capitalize py-1.5">register</Button>
=======
        <LetsCode />
      </a>
      <ul class="hidden md:flex flex-row gap-4 items-center">
        <li>
          <RouterLink to="#">
            Courses
          </RouterLink>to
        </li>
        <li>
          <RouterLink to="#">
            Pricing
          </RouterLink>to
        </li>
        <li>
          <RouterLink to="#">
            Stack
          </RouterLink>to
        </li>
      </ul>
      <div class="hidden md:flex items-center gap-3">
        <Button type="button" as="link" :to="{ name: 'signup' }" variant="gost"
          class="capitalize py-1.5">register</Button>
>>>>>>> c6797551d80b8826f42feff548e26c3c8e6625e3
        <Button type="button" variant="primary" class="text-white capitalize py-1.5">enroll now</Button>
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