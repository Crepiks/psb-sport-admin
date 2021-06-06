import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/views/login/psb-login";
import appLayout from "@/views/layouts/psb-app-layout";
import events from "@/views/events/psb-events";
import admins from "@/views/admins/psb-admins";
import users from "@/views/users/psb-users";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/",
    component: appLayout,
    children: [
      {
        path: "",
        name: "events",
        component: events,
      },
      {
        path: "admins",
        name: "admins",
        component: admins,
      },
      {
        path: "users",
        name: "users",
        component: users,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
