const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "group-foo" */ '@/pages/Home.vue'),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import(/* webpackChunkName: "group-foo" */ '@/pages/Users.vue'),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import(/* webpackChunkName: "group-foo" */ '@/pages/NotFound.vue'),
  },
];

export default routes