import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/views/login/demal-login";
import appLayout from "@/views/layouts/demal-app-layout";
import tours from "@/views/tours/demal-tours";
import admins from "@/views/admins/demal-admins";
import users from "@/views/users/demal-users";

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
        name: "tours",
        component: tours,
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
