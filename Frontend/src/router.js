import { createWebHistory, createRouter } from "vue-router";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePageVue from "./components/HomePage.vue";
import CreateElectionVue from "./components/CreateElection.vue";
import IfMajeurVue from "./components/IfMajeur.vue";
import InterfaceVoteVue from "./components/InterfaceVote.vue";
import JoinVoteVue from "./components/JoinVote.vue";
import ShowResultatsVue from "./components/ShowResultats.vue";
import DifferentAcount from "@/components/DifferentAcount";
import UpdateUser from "@/components/UpdateUser";
import UpdateTypeAcount from "@/components/updateTypeAcount";
import UpdatePassword from "@/components/UpdatePassword";

const routes =  [
    {
        path: "/HomePageVue",
        name: "HomePageVue",
        component: HomePageVue,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/",
        name: "LoginForm",
        component: LoginForm,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/RegisterForm",
        name: "RegisterForm",
        component: RegisterForm,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/DifferentAcount",
        name: "DifferentAcount",
        component: DifferentAcount,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/CreateElectionVue",
        name: "CreateElectionVue",
        component: CreateElectionVue,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/IfMajeurVue",
        name: "IfMajeurVue",
        component: IfMajeurVue,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/InterfaceVoteVue",
        name: "InterfaceVoteVue",
        component: InterfaceVoteVue,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/ShowResultatsVue",
        name: "ShowResultatsVue",
        component: ShowResultatsVue,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/JoinVoteVue",
        name: "JoinVoteVue",
        component: JoinVoteVue,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/UpdateUser",
        name: "UpdateUser",
        component: UpdateUser,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/UpdateTypeAcount",
        name: "UpdateTypeAcount",
        component: UpdateTypeAcount,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/UpdatePassword",
        name: "UpdatePassword",
        component: UpdatePassword,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

