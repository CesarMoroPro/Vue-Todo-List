import { createRouter, createWebHistory } from 'vue-router';

import TodoApp from '@/views/TodoApp.vue';
/* Le component Login est importé en lazy loading, donc directement dans la définiton de la route*/
// import Login from '@/views/Login.vue';

//> Création du tableau de routes
const routes = [
        {
                path: '/',
                name: 'home',
                component: TodoApp,
        },
    
        {
                path: '/login',
                name: 'login',
                component: () => import('@/views/Login.vue'),
        },

        {
                path: '/:catchAll(.*)',
                name: 'NotFound',
                component: () => import('@/views/NotFound.vue'),
        },
]

// > Mise en place du routeur
const router = createRouter({
        // web history
        history: createWebHistory(import.meta.env.BASE_URL),
        // tableau de routes
        routes,
})

export default router;