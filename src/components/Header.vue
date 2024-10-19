<template>
  <div
    class="w-full h-14 border-neutral-700 border-b flex items-center justify-between p-5"
  >
    <h2 class="text-lg font-medium tracking-wide">
      {{ titleStore.activeTitle == 'Dashboard' ? 'Dashboard' : 'Users' }}
    </h2>
  </div>
</template>

<script setup>
import { useTitleStore } from '@/stores/useTitleStore';

const titleStore = useTitleStore();
</script>
