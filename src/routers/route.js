import {createRouter, createWebHashHistory} from "vue-router";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'index',
            path: '/',
            component: () => import('../pages/index/index.vue')
        },
        {
            name: 'about',
            path: '/about',
            component: () => import('../pages/about/index.vue')
        }
    ]
})


export {
    router
}