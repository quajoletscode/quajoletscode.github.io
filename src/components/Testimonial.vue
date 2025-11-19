<script setup lang="ts">

     const initials = (name: string): string => {
          if (!name) return '';
          const names = name.trim().split(' ');
          if (names.length === 0) return "";
          if (names.length === 1) return names[0]?.charAt(0).toUpperCase();
          return `${names[0]?.charAt(0)}${names[names.length - 1]?.charAt(0)}`.toUpperCase();
     }
     const userAvatar = (): string => {
          if (!props.avatar) {
               return "https://placehold.co/40x40/20B2AA/FFFFFF?text=" + initials(props.user)
          }
          return props.avatar;
     }
     interface Props {
          message: string,
          user: string,
          role: string,
          avatar?: string
     }

     const props = defineProps<Props>();
</script>
<template>
     <div class="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-xl border-t-4 border-accent-teal">
          <p class="italic">
               {{ props.message }}
          </p>
          <div class="mt-6 flex items-center">
               <img class="h-10 w-10 rounded-full object-cover" :src="props.avatar ? props.avatar : userAvatar()"
                 :alt="props.avatar ? props.avatar : userAvatar()" />
               <div class="ml-4">
                    <p class="text-base font-medium">
                         {{ props.user }}
                    </p>
                    <p class="text-sm text-accent-teal">
                         {{ props.role }}
                    </p>
               </div>
          </div>
     </div>
</template>