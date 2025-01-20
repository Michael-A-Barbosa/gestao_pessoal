<template>
    <div class="login-container">
        <div class="login-box">
            <h2>Login</h2>
            <form @submit.prevent="handleLogin">
                <div>
                    <label for="login">Usuário</label>
                    <input type="text" v-model="login" required />
                </div>
                <div>
                    <label for="senha">Senha</label>
                    <input type="password" v-model="senha" required />
                </div>
                <button type="submit">Entrar</button>
                <div v-if="errorMessage" class="error-message">
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
/* Estilos da tela de login */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-box {
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
    border-radius: 5px;
    text-align: center;
}

input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.error-message {
    color: red;
    margin-top: 10px;
}

.main-content {
    text-align: center;
    padding: 20px;
}
</style>
