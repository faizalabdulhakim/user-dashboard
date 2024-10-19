<template>
  <div class="w-[400px] h-full p-5 self-start">
    <h1 class="text-2xl font-bold mb-5">Edit User</h1>
    <form @submit.prevent="submitEditForm" class="space-y-3">
      <div>
        <div class="sm:flex rounded-lg shadow-sm">
          <span
            class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
          >
            First Name
          </span>
          <input
            v-model="firstName"
            type="text"
            required
            class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>
      </div>

      <div>
        <div class="sm:flex rounded-lg shadow-sm">
          <span
            class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
          >
            Last Name
          </span>
          <input
            v-model="maskedLastName"
            @input="maskLastName"
            type="text"
            required
            class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>
      </div>

      <div>
        <div class="sm:flex rounded-lg shadow-sm">
          <span
            class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
          >
            Age
          </span>
          <input
            v-model="age"
            type="number"
            required
            class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>
      </div>

      <button
        type="submit"
        :disabled="!isFormComplete"
        class="mt-5 w-full py-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Edit User
      </button>
    </form>
    <p class="text-sm mt-2">See console log to see result!</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const firstName = ref('');
const lastName = ref('');
const maskedLastName = ref('');
const age = ref(0);
const route = useRoute();

const isFormComplete = computed(() => {
  return firstName.value !== '' && lastName.value !== '' && age.value > 0;
});

const maskLastName = () => {
  const originalInput = maskedLastName.value;
  lastName.value = originalInput;
  maskedLastName.value = originalInput.replace(/./g, '*');
};

// Fetch existing user data on component mount
onMounted(async () => {
  const userId = route.params.id;
  const response = await fetch(`https://dummyjson.com/users/${userId}`);
  const data = await response.json();
  firstName.value = data.firstName;
  lastName.value = data.lastName;
  maskedLastName.value = data.lastName.replace(/./g, '*');
  age.value = data.age;
});

// Submit edited form data
const submitEditForm = async () => {
  const userId = route.params.id;
  const response = await fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
    }),
  });
  const data = await response.json();
  console.log('User updated:', data);
};
</script>
