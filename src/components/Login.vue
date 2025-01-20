<template>
    <div
        class="login-container d-flex justify-content-center align-items-center"
    >
        <div class="login-box glass-effect p-4">
            <h2 class="text-white text-center mb-4">Login</h2>
            <form @submit.prevent="handleLogin">
                <div class="mb-3">
                    <label for="login" class="form-label text-white"
                        >Usuário</label
                    >
                    <input
                        type="text"
                        id="login"
                        class="form-control bg-transparent text-white"
                        v-model="login"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="senha" class="form-label text-white"
                        >Senha</label
                    >
                    <input
                        type="password"
                        id="senha"
                        class="form-control bg-transparent text-white"
                        v-model="senha"
                        required
                    />
                </div>
                <button type="submit" class="btn btn-primary w-100">
                    Entrar
                </button>
                <div v-if="errorMessage" class="error-message text-danger mt-3">
                    {{ errorMessage }}
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getData } from '../lib/requests.js';

export default {
    setup() {
        const router = useRouter();
        const login = ref('');
        const senha = ref('');
        const errorMessage = ref('');

        const handleLogin = async () => {
            try {
                const response = await getData(
                    `get_usuario?LOGIN=${login.value}&SENHA=${senha.value}`
                );
                if (response.length > 0) {
                    router.push('/dashboard');
                } else {
                    errorMessage.value = 'Login ou senha inválidos';
                }
            } catch (error) {
                console.error('Erro ao realizar o login', error);
                errorMessage.value = 'Erro ao tentar fazer login';
            }
        };

        return { login, senha, errorMessage, handleLogin };
    }
};
</script>

<style scoped>
/* Estilos Glassmorphism */
.login-container {
    height: 100vh;    
}

.login-box {
    max-width: 400px;
    width: 100%;
    padding: 20px;
}

.glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.18);
}

input {
    background-color: rgba(255, 255, 255, 0.15); /* Fundo com leve opacidade */
    border: 1px solid rgba(255, 255, 255, 0.3); /* Bordas visíveis */
    border-radius: 5px;
    padding: 10px;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
}

input:focus {
    background-color: rgba(255, 255, 255, 0.25); /* Fundo mais claro ao focar */
    border: 1px solid #007bff; /* Realce ao focar */
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.8); /* Glow azul ao focar */
}

button {
    border-radius: 5px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: white;
}

.error-message {
    font-size: 0.9rem;
}

@media (max-width: 576px) {
    .login-box {
        width: 100%;
        margin: 10px;
    }
}
</style>
