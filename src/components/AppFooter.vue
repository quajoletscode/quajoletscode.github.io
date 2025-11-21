<script setup lang='ts'>
  import FacebookIcon from './icons/FacebookIcon.vue';
  import GithubIcon from './icons/GithubIcon.vue';
  import TiktokIcon from './icons/TiktokIcon.vue';
  import WhatsAppIcon from './icons/WhatsAppIcon.vue';
  import YouTubeIcon from './icons/YouTubeIcon.vue';
</script>

<template>
  <div class="bg-primary text-zinc-100 py-3 px-2">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        <span class="block">Ready to dive deep into full stack development?</span>
        <span class="block text-accent-teal">Join the Quajo LetsCode Full-Stack track today.</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:shrink-0">
        <div class="inline-flex rounded-xl shadow">
          <RouterLink :to="{ name: 'signup' }"
            class="transition-colors border border-teal-400 p-3 rounded-md bg-teal-600">
            Unlock Premium Access
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-slate-800 text-zinc-300 lg:py-10 py-6 px-2">
    <div class="max-w-7xl mx-auto px-3">
      <div class="flex items-center gap-4 flex-wrap md:justify-between justify-center">
        <p class="md:text-start text-center">
          &COPY; {{ new Date().getFullYear() }} Quajo LetsCode. All rights reserved. Made with <span
            class="text-red-600 text-lg">&hearts;</span> for Developers
        </p>
        <ul class="flex flex-row items-center flex-wrap gap-3">
          <li>
            <a target="_blank" href="https://github.com/quajoletscode" title="Github"
              class="bg-gray-600 p-2.5 rounded-md flex">
              <GithubIcon class="text-white" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/quajoletscode" title="Facebook"
              class="bg-gray-600 p-2.5 rounded-md flex">
              <FacebookIcon class="text-slate-50" />
            </a>
          </li>
          <li>
            <a target="_blank" href="#" title="Tiktok" class="bg-gray-600 p-2.5 rounded-md flex">
              <TiktokIcon class="text-slate-50" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://whatsapp.com/channel/0029Vb6sl97CMY09TqAGLD26" title="WhatsApp"
              class="bg-gray-600 p-2.5 rounded-md flex">
              <WhatsAppIcon class="text-slate-50" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://youtube.com/@quajoletscode?si=F3Kf-v43KyDts6SV"
              class="bg-gray-600 p-2.5 rounded-md flex">
              <YouTubeIcon class="text-slate-50" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>