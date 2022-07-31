import { createWebHistory, createRouter } from "vue-router";

const routes =  [
    {
        path:"/",
        name:"",
        component: "",
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

