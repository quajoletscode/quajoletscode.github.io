<script setup lang='ts'>
import { withDefaults, computed, useAttrs } from 'vue';

type InputTypes = 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'date' | 'number';
type InputModes = "text" | "search" | "email" | "tel" | "url" | "none" | "numeric" | "decimal";
interface Props {
  type?: InputTypes;
  id?: string;
  placeholder?: string;
  modelValue?: string | number;
  label?: string;
  required?: boolean;
  autofocus?: boolean;
  error?: string,
  name?: string,
  // slots?: SlotsType,
  tabIndex?: string,
  step?: number | undefined,
  disabled?: boolean,
  list?: string,
  maxLength?: string,
  minLength?: string,
  max?: string,
  min?: string,
  inputmode?: InputModes
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  id: () => `input-${Math.random().toString(36).substring(7)}`,
  placeholder: 'Enter your text here',
  modelValue: '',
  label: 'text input',
  required: false,
  // autofocus: false,
  error: '',
});

const emit = defineEmits(['input', 'update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});


const attr = useAttrs();

const computedInputMode = computed<InputModes>(() => {
  switch (props.type) {
    case 'email':
      return 'email';
    case 'tel':
      return 'tel';
    case 'url':
      return 'url';
    case 'search':
      return 'search';
    case 'number':
      // Best for integers (e.g., quantity, age). Use 'decimal' for currency/prices.
      return 'numeric';
    case 'date':
      // The browser's date picker is used, so no soft keyboard is needed.
      return 'none';
    case 'text':
    case 'password':
    default:
      return 'text';
  }
});
</script>

<template>
<div class="inline-block w-full py-2 outline-0 border-0 relative input-container">
    <label class="inline-block relative w-full text-[size:inherit] font-[inherit] capitalize" v-if="props.label"
      :for="props.id || props.name">
      <slot> {{ props.label }} </slot>
      <span v-if="props.required" :title="props.required && 'Required field'" class="text-red-500">*</span>
    </label>
    <slot v-if="$slots.icon" name="icon" />
    <input :step="props.step" :tabindex="props.tabIndex" v-model="value" v-bind="attr" :type="props.type"
      :max="props.max" :min="props.min" :list="props.list" :maxlength="props.maxLength" :minlength="props.minLength"
      :id="props.id || props.name" :placeholder="props.placeholder" :required="props.required"
      :autofocus="props.autofocus" :inputmode="inputmode ?? computedInputMode"
      :class="{ 'outline-[1.5px] outline-red-500! focus:bg-transparent focus:outline-primary!': props.error, 'pl-11': $slots.icon }"
      class="p-2 w-full rounded border-none" />

    <span class="text-red-500 relative block" v-if="props.error">{{ props.error }}</span>
  </div>
</template>

<style scoped></style>