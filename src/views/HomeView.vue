<script setup lang="ts">
  import mockupImage from "@/assets/code.mockup.png";
  import Testimonial from "@/components/Testimonial.vue";
  import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/50 rounded-full filter blur-3xl opacity-30 pointer-events-none z-0">
  </div>
  <div
    class="fixed bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[800px] h-[400px] bg-sky-500/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] filter blur-3xl opacity-30 pointer-events-none z-0">
  </div>
  <section class="relative pt-16 pb-20 sm:pt-24 lg:pt-32 lg:pb-36 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-12">
        <div class="text-center lg:text-left lg:col-span-6 xl:col-span-6">
          <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">Your Full Roadmap to </span>
            <span class="block  xl:inline">Full-Stack Mastery.</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-basesm:text-lg md:mt-5 md:text-xl lg:text-base xl:text-xl lg:mx-0">
            Go from zero to a job-ready developer focusing on modern Laravel, PHP, and the core
            Front-End stack (Vue js). Start with our free course today.
          </p>
          <div
            class="mt-8 md:max-w-lg md:mx-auto sm:text-center lg:text-left lg:mx-0 lg:flex lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            <!-- Primary CTA: Free Course -->
            <router-link to="/#pricing"
              class="w-full lg:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-white font-medium rounded-xl bg-accent-teal bg-teal-500 hover:bg-teal-600 md:py-4 md:text-lg md:px-10 shadow-lg transition-all transform hover:scale-[1.02] duration-300">
              Start Free Front-End Course
            </router-link>
            <!-- Secondary CTA: Premium/Stack -->
            <RouterLink :to="{ name: 'login' }"
              class="w-full lg:w-auto flex items-center justify-center px-8 py-3 border border-slate-200 dark:border-slate-600 font-medium rounded-xl text-primary bg-white hover:text-white hover:bg-slate-700 md:py-4 md:text-lg md:px-10 shadow-md transition-colors duration-300">
              Explore Full-Stack Track
            </RouterLink>
          </div>
        </div>
        <!-- Mockup Image/Illustration -->
        <div class="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-6 rounded-xl bg-none bg-blend-lighten">
          <img @contextmenu.prevent @drag.prevent @copy.prevent @dragstart.prevent @dragover.prevent
            class="w-full max-w-2xl mx-auto rounded-xl shadow-2xl object-cover h-full" :src="mockupImage"
            alt="Professional web development code screen mockup" />
        </div>
      </div>
    </div>
  </section>

  <!-- 2. Tech Stack Focus (Why Laravel?) -->
  <section id="stack" class="py-16 sm:py-24 bg-slate-400 dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-accent-teal font-semibold tracking-wide uppercase">
          The Modern Backend
        </h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          Become a <span class="text-emerald-200">Laravel</span> Expert.
        </p>
        <p class="mt-4 max-w-2xl lg:mx-auto">
          We don't just teach theory. We specialize in building real-world applications using the
          most elegant and powerful PHP framework.
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          <!-- Feature 1: Laravel -->
          <div
            class="flex flex-col p-6 relative bg-white dark:bg-slate-700 rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300">
            <div class="shrink-0">
              <span class="h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2v5m0-7h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
            <div class="mt-4">
              <dt class="text-lg leading-6 font-medium">Backend Powerhouse</dt>
              <dd class="mt-2 text-base">
                Build scalable APIs and robust web applications with Laravel, the framework
                employers demand.
              </dd>
            </div>
          </div>

          <!-- Feature 2: Full-Stack Integration -->
          <div
            class="flex flex-col p-6 relative bg-white dark:bg-slate-700 rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300">
            <div class="shrink-0">
              <span class="h-10 w-10 flex items-center justify-center rounded-full hover:dark:bg-slate-700 border">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
            </div>
            <div class="mt-4">
              <dt class="text-lg leading-6 font-medium">Seamless Integration</dt>
              <dd class="mt-2 text-base">
                Master the transition from Front-End (Vue/React) to Back-End endpoints using Inertia
                and Livewire or REST API.
              </dd>
            </div>
          </div>

          <!-- Feature 3: Career Ready -->
          <div
            class="flex flex-col p-6 relative bg-white dark:bg-slate-700 rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300">
            <div class="shrink-0">
              <span class="h-10 w-10 flex items-center justify-center rounded-full bg-accent-teal">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 13.255A23.565 23.565 0 0112 15c-3.185 0-6.223-.62-9-1.745M16 4v12l-4-2-4 2V4m6 0H6" />
                </svg>
              </span>
            </div>
            <div class="mt-4">
              <dt class="text-lg leading-6 font-medium">Portfolio Projects</dt>
              <dd class="mt-2 text-base">
                Build 3 full-stack projects that you can immediately showcase to potential
                employers.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <!-- 3. Course Tier Comparison/Pricing -->
  <section id="pricing" class="py-20 sm:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-3xl font-extrabold sm:text-4xl">Choose Your Path to Code Mastery</h2>
      </div>

      <div class="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 gap-4 lg:gap-8">
        <!-- FREE Front-End Fundamentals -->
        <div
          class="bg-body relative dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-3xl shadow p-8 flex flex-col justify-between transform transition duration-500 hover:shadow-lg">
          <div class="flex-1">
            <h3 class="text-2xl font-bold">Front-End Fundamentals</h3>
            <p class="mt-4">
              The perfect starting point. Learn the essentials of web design and interactivity with
              no commitment.
            </p>
            <p class="mt-6 text-4xl font-extrabold">
              FREE
              <span class="ml-1 text-base font-medium">/ forever</span>
            </p>
          </div>

          <div class="mt-8">
            <h4 class="text-lg font-semibold mb-4">What's Included:</h4>
            <ul role="list" class="space-y-4">
              <li class="flex items-start">
                <svg class="shrink-0 h-6 w-6 text-accent-teal" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3">Complete HTML5 & CSS3 Modules</span>
              </li>
              <li class="flex items-start">
                <svg class="shrink-0 h-6 w-6 text-accent-teal" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3">JavaScript ES6 Basics</span>
              </li>
              <li class="flex items-start">
                <svg class="shrink-0 h-6 w-6 text-accent-teal" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3">Responsive Design Principles</span>
              </li>
              <li class="flex items-start">
                <svg class="shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span class="ml-3 line-through">Full-Stack PHP(Laravel) Track Access</span>
              </li>
            </ul>
          </div>

          <RouterLink :to="{ name: 'free-courses.frontend' }" title="Access free frontend courses"
            class="mt-8 block w-full bg-accent-teal border border-transparent rounded-xl py-3 text-center font-medium text-white bg-teal-500 hover:bg-teal-600 shadow-md transition-colors">
            Access Free Course
          </RouterLink>
        </div>
        <!-- Free Backend Basics -->
        <div
          class="bg-body relative dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-3xl shadow p-8 flex flex-col justify-between transform transition duration-500 hover:shadow-lg">
          <div class="flex-1">
            <h3 class="text-2xl font-bold">Backend Fundamentals</h3>
            <p class="mt-4">
              Learn how web servers work, how to deploy basic backend project online. From domain name purchase, DNS
              management, and Database connection.
            </p>
            <p class="mt-6 text-4xl font-extrabold">
              FREE
              <span class="ml-1 text-base font-medium">/ forever</span>
            </p>
          </div>

          <div class="mt-8">
            <h4 class="text-lg font-semibold mb-4">What's Included:</h4>
            <ul role="list" class="space-y-4">
              <li class="flex items-start">
                <svg class="shrink-0 h-6 w-6 text-accent-teal" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3">Basics of PHP for backend</span>
              </li>
              <li class="flex items-start">
                <svg class="shrink-0 h-6 w-6 text-accent-teal" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3">Object Oriented Programming</span>
              </li>
              <li class="flex items-start">
                <svg class="shrink-0 h-6 w-6 text-accent-teal" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3">DNS Management</span>
              </li>
              <li class="flex items-start">
                <svg class="shrink-0 h-6 w-6 text-accent-teal" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3">Deploying to shared hosting</span>
              </li>
            </ul>
          </div>

          <RouterLink :to="{ name: 'free-courses.backend' }" title="Access free backend courses"
            class="mt-8 block w-full bg-accent-teal border border-transparent rounded-xl py-3 text-center font-medium bg-emerald-700 hover:bg-emerald-800 text-white shadow-md transition-colors">
            Access Free Course
          </RouterLink>
        </div>
        <!-- Full-Stack Laravel Career Track -->
        <div
          class="bg-body relative dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-3xl shadow p-8 flex flex-col justify-between transform transition duration-500 hover:shadow-lg">
          <div class="flex-1">
            <h3 class="text-2xl font-bold">Full-Stack Development</h3>
            <p class="mt-4 dark:text-indigo-200">
              The complete professional curriculum, designed to get you hired building modern web
              applications.
            </p>
            <p class="mt-6 text-4xl font-extrabold">
              $10/mo
              <span class="ml-1 text-base font-medium dark:text-indigo-200">/ billed monthly</span>
            </p>
          </div>

          <div class="mt-8">
            <h4 class="text-lg font-semibold mb-4">Everything in Free, plus:</h4>
            <ul role="list" class="space-y-4 dark:text-indigo-200">
              <li class="flex items-start">
                <svg class="shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3 font-medium">In-depth Laravel (Routing, Eloquent, MVC)</span>
              </li>
              <li class="flex items-start">
                <svg class="shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3">Database Management (SQL/MySQL)</span>
              </li>
              <li class="flex items-start">
                <svg class="shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3">Project Deployments & DevOps Basics</span>
              </li>
              <li class="flex items-start">
                <svg class="shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="ml-3">Direct Mentor Q&A / Exclusive Community</span>
              </li>
            </ul>
          </div>

          <RouterLink :to="{ name: 'full-stack' }" title="Upgrade to full-stack track"
            class="mt-8 block w-full dark:text-white bg-primary hover:bg-primary-dark text-white hover:text-slate-50 border border-transparent rounded-xl py-3 text-center font-medium  shadow-xl transition-colors">
            Upgrade to Full-Stack
          </RouterLink>
        </div>

      </div>
    </div>
  </section>

  <!-- 4. Testimonials & Social Proof -->
  <section class="py-10 md:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold sm:text-4xl">Hear From Our Successful Students</h2>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Testimonial 1 -->
        <Testimonial v-for="i in 3" :key="i" message="The free course got me my first freelance gig, and the Laravel track gave me the
            confidence to build a real business application. Quajo is the best roadmap out there." user="Carl Johnson"
          role="frontend developer" />

      </div>
    </div>
  </section>
</template>
