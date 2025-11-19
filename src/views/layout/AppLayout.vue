<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import LetsCode from '@/components/LetsCode.vue';
import Button from '@/components/ui/Button.vue';
import { XIcon } from 'lucide-vue-next';
import { ref, watch } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = true
}

watch(isMenuOpen, (menu) => {
  if (menu) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})  
</script>

<template>
  <header class="sticky top-0 p-2 md:py-3 bg-body w-full shadow dark:border-b dark:border-primary dark:shadow-gray-900 z-50">
    <AppHeader @toggle-menu="toggleMenu" />
  </header>
  <Transition mode="in-out" name="slide-in">
    <section v-if="isMenuOpen" @click.self="isMenuOpen = false" class="md:hidden @container w-full h-full z-55 fixed right-0 top-0"
      :class="{ 'bg-slate-800/30 backdrop-blur-xs': isMenuOpen }">
      <div class="shadow-2xl bg-body h-full w-full max-w-md float-end rounded-l">
        <div class="flex items-center justify-between py-2 px-6 bg-body shadow shadow-slate-700 rounded-tl">
          <LetsCode />
          <Button @click="isMenuOpen = false" type="button" as="button" variant="gost" class="p-1!">
            <XIcon class="" :stroke-width="2" />
          </Button>
        </div>
        <div class="px-3">
          <ul class="flex flex-col gap-2.5 items-start my-2 w-full space-y-0">
            <li class="w-full">
              <RouterLink to="/#" class="flex hover:bg-slate-400 dark:hover:bg-slate-700 p-3 rounded-md capitalize">
                courses
              </RouterLink>
            </li>
            <li class="w-full">
              <RouterLink to="/#" class="flex hover:bg-slate-400 dark:hover:bg-slate-700 p-3 rounded-md capitalize">
                pricing
              </RouterLink>
            </li>
            <li class="w-full">
              <RouterLink to="" class="flex hover:bg-slate-400 dark:hover:bg-slate-700 p-3 rounded-md capitalize">
                stack
              </RouterLink>
            </li>
          </ul>
          <div class="flex items-center gap-4 px-3">
            <Button type="button" as="link" :to="{ name: 'signup' }" variant="gost"
              class="capitalize py-1.5">register</Button>
            <Button type="button" variant="primary" class="text-white capitalize py-1.5">enroll now</Button>

          </div>
        </div>
        <div class="sticky top-full px-3 py-6">
          <p class="text-center text-sm">
            &copy; {{ new Date().getFullYear() }} | Quajo LetsCode. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  </Transition>
  <main class="mx-auto h-full">
    <RouterView></RouterView>
  </main>
  <footer class="sticky top-full w-full shadow">
    <AppFooter />
  </footer>
</template>

<style scoped></style>