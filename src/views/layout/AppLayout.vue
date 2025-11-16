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
  <header class="sticky top-0 p-2 md:py-3 bg-body w-full shadow dark:shadow-gray-900 z-50">
    <AppHeader @toggle-menu="toggleMenu" />
  </header>
  <Transition mode="in-out" name="slide-in">
    <section v-if="isMenuOpen" @click.self="isMenuOpen = false" class="md:hidden w-full h-full z-55 fixed right-0 top-0"
      :class="{ 'bg-slate-800/30 backdrop-blur-xs': isMenuOpen }">
      <div class="shadow-2xl bg-body h-full max-w-xs float-end rounded-l">
        <div class="flex items-center justify-between py-2 px-3 bg-body shadow rounded-tl">
          <LetsCode/>
          <Button @click="isMenuOpen = false" type="button" as="button" variant="gost" class="p-1!">
            <XIcon class="" :stroke-width="2" />
          </Button>
        </div>
        <div class="px-3">
          <ul class="flex flex-col gap-2.5 items-start my-3 w-full">
            <li class="w-full">
              <RouterLink to="/#" class="flex">
                courses
              </RouterLink>
            </li>
            <li class="w-full">
              <RouterLink to="/#" class="flex">
                pricing
              </RouterLink>
            </li>
            <li class="w-full">
              <RouterLink to="" class="flex">
                stack
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="sticky top-full px-3">
          <p class="text-center text-sm">
            &copy; {{ new Date().getFullYear() }} | Quajo LetsCode. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  </Transition>
  <main class="max-w-7xl mx-auto px-3 h-full">
    <RouterView></RouterView>
  </main>
  <footer class="sticky top-full w-full shadow">
    <AppFooter />
  </footer>
</template>

<style scoped></style>