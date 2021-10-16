import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

import HomeScreen from "@/screens/HomeScreen";
import CartScreen from "@/screens/CartScreen";

const routes = [
    {
        path: '/',
        name: 'HomeScreen',
        component: HomeScreen
    },
    {
        path: '/cart',
        name: 'CartScreen',
        component: CartScreen
    },
]

const router = createRouter({
    // history: createWebHistory(),
    history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
    base: process.env.BASE_URL,
    routes,
});

export default router