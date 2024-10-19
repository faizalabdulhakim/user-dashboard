import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Users from '@/views/Users.vue';
import AddUser from '@/views/AddUser.vue';
import EditUser from '@/views/EditUser.vue';
import { useTitleStore } from '@/stores/useTitleStore';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  { path: '/users/add', name: 'AddUser', component: AddUser },
  {
    path: '/users/edit/:id',
    name: 'EditUser',
    component: EditUser, // Pastikan komponen ini sudah ada
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const titleStore = useTitleStore();
  if (to.path === '/') {
    titleStore.setTitle('Dashboard');
  } else if (to.path === '/users') {
    titleStore.setTitle('Users');
  } else if (to.path === '/users/add') {
    titleStore.setTitle('Users');
  }
  next();
});

export default router;
