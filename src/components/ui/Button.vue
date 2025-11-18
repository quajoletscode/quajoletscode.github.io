<script setup lang='ts'>
import type { StyleValue } from 'vue';
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router';


type Types = 'button' | 'submit' | 'reset' | undefined;

type As = 'link' | 'a' | 'button' | undefined;

type Variants = 'light' | 'primary' | 'none' | 'blue' | 'danger' | 'red' | 'warning' | 'green' | 'info' | 'gost' | undefined | null;

interface Button {
  variant?: Variants,
  type: Types,
  name?: string,
  id?: string,
  style?: StyleValue,
  class?: object | string | [],
  attr?: object | string | boolean,
  disabled?: boolean,
  title?: string,
  as?: As,
  href?: string,
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
}
const props = withDefaults(defineProps<Button>(), {
  variant: 'gost',
  type: 'button',
  disabled: false,
  as: 'button',
  to: ''
});
</script>

<template>
  <RouterLink :to="props.to" :title="props.title" role="button" v-bind:style="props.style" :href="props.href"
    v-if="props.as && props.as === undefined || props.as !== 'button'"
    class="text-body rounded-md p-2.5 cursor-pointer select-none text-base focus-visible:outline-0 flex items-center justify-center gap-2.5"
    :class="[props.class, {
      'bg-primary active:bg-primary-dark': props.variant === 'primary',
      'bg-blue-600 active:bg-blue-800': props.variant === 'blue',
      'bg-green-700 active:bg-green-900': props.variant === 'green',
      'bg-red-600 active:bg-red-800': props.variant === 'red',
      'bg-red-500/90 active:bg-red-700': props.variant === 'danger',
      'bg-amber-600 active:bg-amber-800': props.variant === 'warning',
      'bg-blue-400 active:bg-blue-500': props.variant === 'info',
      'bg-gray-200 active:bg-gray-400 text-black!': props.variant === 'light',
      'bg-body border border-slate-300 dark:border-slate-600 hover:bg-slate-200 active:bg-slate-300 dark:active:bg-slate-800 dark:hover:bg-slate-800': props.variant === 'gost',
    }]">
    <slot>link</slot>
  </RouterLink>
  <button v-else :aria-disabled="props.disabled" :title="props.title" :disabled="props.disabled"
    v-bind:attr="props.attr" :type="props.type" v-bind:style="props.style"
    class="text-body rounded-md p-2.5 text-base focus-visible:outline-0 flex items-center justify-center gap-2.5"
    :class="[props.class, {
      'bg-primary active:bg-primary-dark': props.variant === 'primary',
      'bg-blue-600 active:bg-blue-800': props.variant === 'blue',
      'bg-green-700 active:bg-green-900': props.variant === 'green',
      'bg-red-600 active:bg-red-800': props.variant === 'red',
      'bg-red-500/90 active:bg-red-700': props.variant === 'danger',
      'bg-amber-600 active:bg-amber-800': props.variant === 'warning',
      'bg-blue-400 active:bg-blue-500': props.variant === 'info',
      'bg-gray-200 active:bg-gray-400 text-black!': props.variant === 'light',
      'bg-body border border-slate-300 dark:border-slate-600 hover:bg-slate-200 active:bg-slate-300 dark:active:bg-slate-800 dark:hover:bg-slate-800': props.variant === 'gost',
      'opacity-50 cursor-not-allowed': props.disabled
    }]">
    <slot>button</slot>
  </button>
</template>

<style scoped></style>