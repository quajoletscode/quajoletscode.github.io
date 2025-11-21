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
  linkActiveClass: '',
  linkExactActiveClass: '',
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
        {
          path: "/free-courses",
          name: "free-courses",
          component: () => import("@/views/FreeCoursesView.vue"),
          meta: {
            title: "Free Courses | " + appName,
          },
          children: [
            {
              path: "backend",
              name: "free-courses.backend",
              component: () => import("@/views/BackendCourseView.vue"),
              meta: {
                title: "Backend Free Courses | " + appName,
              },
            },
            {
              path: "frontend",
              name: "free-courses.frontend",
              component: () => import("@/views/FreeCoursesView.vue"),
              meta: {
                title: "Frontend Free Courses | " + appName,
              },
            },
          ],
        },
        {
          path: "full-stack",
          name: "full-stack",
          component: () => import("@/views/FullStackCourseView.vue"),
          meta: {
            title: "Full Stack Course | " + appName,
          },
        }
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
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

router.afterEach((to) => {
  if (typeof to.meta.title === "string" && to.meta.title.length > 0) {
    document.title = to.meta.title;
  }
});
export default router;
