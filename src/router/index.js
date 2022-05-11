import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home/Main.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/portfolio",
		name: "Portfolio",
		component: () => import("@/pages/Portfolio/Main.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
