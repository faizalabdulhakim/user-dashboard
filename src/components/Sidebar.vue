<template>
  <div
    class="w-[280px] min-h-screen border-e bg-neutral-800 border-neutral-700 justify-between p-1"
  >
    <div class="relative flex flex-col h-full max-h-full gap-2">
      <!-- LOGO -->
      <div class="px-6 pt-4">
        <RouterLink
          class="flex items-center rounded-xl font-semibold focus:outline-none focus:opacity-80 gap-3"
          to="/"
        >
          <img class="w-9 h-9 rounded-xl" :src="Logo" alt="Logo" />
          <h1 class="text-xl text-white">User App</h1>
        </RouterLink>
      </div>

      <!-- NAVIGATION -->
      <nav class="p-3 w-full flex flex-col flex-wrap">
        <ul class="flex flex-col space-y-1">
          <li>
            <RouterLink
              :class="[
                'flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg ',
                titleStore.activeTitle === 'Dashboard'
                  ? 'bg-neutral-700 text-gray-100'
                  : 'hover:bg-neutral-500 hover:text-gray-100',
              ]"
              to="/"
            >
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Dashboard
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :class="[
                'flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg',
                titleStore.activeTitle === 'Users'
                  ? 'bg-neutral-700 text-gray-100'
                  : 'hover:bg-neutral-500 hover:text-gray-100',
              ]"
              to="/users"
            >
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Users
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Logo from '@assets/logo.svg';
import { useTitleStore } from '@/stores/useTitleStore';

const titleStore = useTitleStore();
</script>
