import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthLayout from "@/views/layout/AuthLayout.vue";
import AppLayout from "@/views/layout/AppLayout.vue";

declare module "vue-router" {
  interface RouteMeta {
    title?: string; 
    requiresAuth?: boolean;
  }
}
const appName = import.meta.env.VITE_APP_NAME ?? "Quajo LetsCode";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      meta: {
        requiresAuth: false,
        title: "",
      },
      component: AppLayout,
      children: [
        {
          path: "/",
          component: HomeView,
        },
      ],
    },
    {
      path: "/",
      meta: {
        title: "",
      },
      component: AuthLayout,
      children: [
        {
          path: "/login",
          name: "login",
          meta: {
            title: "Login | " + appName,
          },
          component: () => import("@/views/auth/LoginView.vue"),
        },
        {
          path: "/signup",
          name: "signup",
          meta: {
            title: "Sign up |" + appName,
          },
          component: () => import("@/views/auth/RegisterView.vue"),
        },
      ],
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();

//   if (to.name !== 'login') {
//     document.querySelector('#app').classList.remove('d-flex', 'justify-content-center', 'align-items-center', 'align-content-center', 'vh-100', 'auth');
//   }
//   if (authStore.isAuthenticated && to.name === 'login') next({ name: 'menu' })
//   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//     next({ name: 'login' });
//   } else {
//     next();
//   }
// });

<<<<<<< HEAD
router.afterEach((to, from) => {
  
=======
router.afterEach((to) => {
>>>>>>> c6797551d80b8826f42feff548e26c3c8e6625e3
  if (typeof to.meta.title === "string" && to.meta.title.length > 0) {
    document.title = to.meta.title;
  } 
});
export default router;
