<script setup lang="ts">
import mockupImage from '@/assets/code.mockup.png';
</script>

<template>
  <section class="relative pt-16 pb-20 sm:pt-24 lg:pt-32 lg:pb-36 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-12">
        <div class="text-center lg:text-left lg:col-span-6 xl:col-span-6">
          <h1
            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">Your Full Roadmap to </span>
            <span class="block text-primary-indigo xl:inline">Full-Stack Mastery.</span>
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl lg:text-base xl:text-xl lg:mx-0">
            Go from zero to a job-ready developer focusing on modern **Laravel**, PHP, and the core
            Front-End stack. Start with our free course today.
          </p>
          <div
            class="mt-8 md:max-w-lg md:mx-auto sm:text-center lg:text-left lg:mx-0 lg:flex lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            <!-- Primary CTA: Free Course -->
            <a href="#courses"
              class="w-full lg:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-accent-teal hover:bg-teal-500 md:py-4 md:text-lg md:px-10 shadow-lg transition-all transform hover:scale-[1.02] duration-300">
              Start Free Front-End Course
            </a>
            <!-- Secondary CTA: Premium/Stack -->
            <a href="#stack"
              class="w-full lg:w-auto flex items-center justify-center px-8 py-3 border border-primary-indigo text-base font-medium rounded-xl text-primary-indigo bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 shadow-md transition-all duration-300">
              Explore Full-Stack Track
            </a>
          </div>
        </div>
        <!-- Mockup Image/Illustration -->
        <div class="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-6 rounded-xl bg-none bg-blend-lighten">
          <img class="w-full max-w-2xl mx-auto rounded-xl shadow-2xl object-cover h-full" :src="mockupImage"
            alt="Professional web development code screen mockup">
        </div>
      </div>
    </div>
  </section>

</template>
