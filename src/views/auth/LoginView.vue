<script setup lang="ts">
</script>

<template>
  <form class="mt-8 space-y-6" action="#" method="POST">
    <div class="rounded-xl shadow-sm -space-y-px">
      <div>
        <label for="full-name" class="sr-only">Full Name</label>
        <input id="full-name" name="name" type="text" autocomplete="name" required
          class="appearance-none rounded-none relative block w-full px-4 py-3 border-[1.5px] border-gray-300 placeholder-gray-500 rounded-t-xl focus:outline-none focus:ring-0 focus:border-sky-500 focus:z-10 sm:text-sm"
          placeholder="Full Name">
      </div>
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input id="email-address" name="email" type="email" autocomplete="email" required
          class="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-0-indigo focus:border-sky-500 focus:z-10 sm:text-sm"
          placeholder="Email address">
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input id="password" name="password" type="password" autocomplete="new-password" required
          class="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 rounded-b-xl focus:outline-none focus:ring-0 focus:border-sky-500 focus:z-10 sm:text-sm"
          placeholder="Password">
      </div>
    </div>

    <div class="flex items-center">
      <input id="terms" name="terms" type="checkbox" required
        class="h-4 w-4 text-primary-indigo focus:ring-0 border-gray-300 rounded">
      <label for="terms" class="ml-2 block text-sm">
        I agree to the
        <a href="#" class="font-medium text-primary-indigo hover:text-indigo-500">Terms of Service</a>
      </label>
    </div>

    <div>
      <button type="submit"
        class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-accent-teal hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-teal">
        Create My Free Account
      </button>
    </div>
  </form>
</template>

<style scoped></style>