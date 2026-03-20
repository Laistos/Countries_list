import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/homePage/homePage.vue"),
    },
    {
      path: "/promotional",
      name: "promotional",
      component: () =>
        import("@/views/promotionalTarifCard/promotionalTarifCard.vue"),
    },
    {
      path: "/about",
      name: "countries",
      component: () => import("@/views/promotionalTarif/promotionalTarif.vue"),
    },
    {
      path: "/success",
      name: "success",
      component: () => import("@/views/successComponent/successComponent.vue"),
    },
    {
      path: "/standard",
      name: "standard",
      component: () => import("@/views/standardTarif/standardTarif.vue"),
    },
  ],
});

export default router;
