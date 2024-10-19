<template>
  <div class="w-full h-full p-5">
    <RouterLink to="/users/add">
      <button
        type="button"
        class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none mb-2"
        v-if="!loading"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>

        Add User
      </button>
    </RouterLink>
    <div
      v-if="loading"
      class="text-center flex w-full justify-center items-center h-screen -mt-12"
    >
      <svg
        aria-hidden="true"
        class="w-8 h-8 text-gray-200 animate-spintext-gray-600 fill-amber-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        class="w-full text-sm text-left rtl:text-right text-neutral-500"
        v-if="!loading"
      >
        <caption
          class="p-4 text-sm font-normal text-left rtl:text-right text-white bg-neutral-800"
        >
          List of Users
        </caption>
        <thead class="text-xs uppercase bg-neutral-700 text-gray-300">
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Username</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Phone</th>
            <th scope="col" class="px-6 py-3">Role</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            class="border-b bg-neutral-800 border-gray-700 hover:bg-neutral-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ user.firstName }} {{ user.lastName }}
            </th>
            <td class="px-6 py-4">{{ user.username }}</td>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">{{ user.phone }}</td>
            <td class="px-6 py-4">{{ user.role }}</td>
            <td class="px-6 py-4 text-right">
              <RouterLink
                :to="`/users/edit/${user.id}`"
                class="font-medium text-amber-500 hover:underline"
                >Edit</RouterLink
              >
              <button
                @click="deleteUser(user.id)"
                class="text-xs text-red-500 hover:underline bg-none ml-2"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Logo from '@assets/logo.svg';

const users = ref([]);
const loading = ref(true);

onMounted(() => {
  fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => {
      users.value = data.users;
      loading.value = false;
    });
});

const deleteUser = async userId => {
  const confirmDelete = confirm('Are you sure you want to delete this user?');
  if (confirmDelete) {
    const response = await fetch(`https://dummyjson.com/users/${userId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log('User deleted:', data);

    users.value = users.value.filter(user => user.id !== userId);
  }
};
</script>
