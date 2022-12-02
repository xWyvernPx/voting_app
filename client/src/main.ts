import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import Homepage from "./pages/Homepage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Homepage,
    },
  ],
});
createApp(App).use(router).mount("#app");
