<template>
    <div class="login-container">
        <div v-if="!isLoggedIn" class="login-box">
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

        <div v-else class="main-content">
            <h1>Bem-vindo à plataforma</h1>
            <p>Você está logado!</p>
            <pre>{{ data }}</pre>
        </div>
    </div>
</template>

<script>
import { getData } from './lib/requests.js';

export default {
    data() {
        return {
            login: '',
            senha: '',
            isLoggedIn: false,
            errorMessage: '',
            data: null
        };
    },
    methods: {
        async handleLogin() {
            try {
                const response = await getData(
                    `get_usuario?LOGIN=${this.login}&SENHA=${this.senha}`
                );
                // Se os dados retornarem, login bem-sucedido
                if (response.length > 0) {
                    this.isLoggedIn = true;
                    this.errorMessage = '';
                    this.loadData(); // Chama o método para carregar os dados após o login
                } else {
                    this.errorMessage = 'Login ou senha inválidos';
                }
            } catch (error) {
                console.error('Erro ao realizar o login', error);
                this.errorMessage = 'Erro ao tentar fazer login';
            }
        },
        async loadData() {
            try {
                // Agora, faz uma requisição GET para pegar os dados
                const response = await getData('get_all_users');
                this.data = response;
            } catch (error) {
                console.error('Erro ao carregar os dados', error);
            }
        }
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
