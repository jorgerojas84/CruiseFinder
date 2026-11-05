import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import SavedCruises from "../pages/SavedCruises.vue";
import SearchCruises from "../pages/SearchCruises.vue";
import CruiseDetails from "../pages/CruiseDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/saved",
    name: "saved",
    component: SavedCruises,
  },
  {
    path: "/search",
    name: "search",
    component: SearchCruises,
  },
  {
    path: "/details",
    name: "details",
    component: CruiseDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
