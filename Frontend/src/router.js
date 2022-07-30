import { createWebHistory, createRouter } from "vue-router";

const routes =  [
    {
        path:"",
        name:"",
        component: Component,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

