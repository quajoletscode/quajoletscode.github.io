<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

    <!-- <a href="index.html" class="flex items-center space-x-2 mb-8">
      <svg class="h-10 w-10 text-primary-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4">
        </path>
      </svg>
      <span class="text-3xl font-extrabold">Quajo <span class="text-accent-teal">LetsCode</span></span>
    </a> -->

    <div class="max-w-md w-full bg-gray-100 dark:bg-slate-800 p-8 sm:p-10 rounded-2xl shadow border-0 dark:border-slate-700">
      <div>
        <h2 class="text-center text-3xl font-extrabold">
          Welcome back
        </h2>
        <p class="mt-2 text-center text-sm">
          Sign in to access your premium courses.
        </p>
      </div>

      <RouterView></RouterView>
      <slot name="auth-footer" />
      <!-- <div class="mt-6 text-center">
                <p class="text-sm text-gray-600">
                    Don't have an account?
                    <a href="signup.html" class="font-medium text-accent-teal hover:text-teal-500">
                        Enroll for free
                    </a>
                </p>
            </div> -->
    </div>
  </div>
</template>

<style scoped></style>