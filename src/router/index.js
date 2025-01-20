import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue'; // Importando o novo Login.vue
import Gestao from '../components/Gestao.vue'; // Dashboard

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Gestao
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    console.log('Navegando para:', to.path);
    next();
});

console.log('Rotas configuradas:', routes);

export default router;
