<template>
    <div class="dashboard">
        <header>
            <h1>Bem-vindo ao Dashboard</h1>
            <button @click="logout">Sair</button>
        </header>
        <main>
            <p>Conteúdo do dashboard</p>
        </main>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const logout = () => {
            // Volta para a tela de login
            router.push('/');
        };

        return { logout };
    }
};
</script>

<style scoped>
.dashboard {
    text-align: center;
    padding: 20px;
}
</style>
