import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:code",
      name: "validatecode",
      component: HomeView,
    },
    {
      path: "/invitation/:code",
      name: "invitation",
      component: () => import("../views/InvitationCard.vue"),
    },
  ],
});

export default router;
