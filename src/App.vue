<template>
    <div>
        <h1>Dados da API</h1>
        <pre>{{ data }}</pre>
    </div>
</template>

<script>
import { getData } from './lib/requests.js';

export default {
    data() {
        return {
            data: null
        };
    },
    async mounted() {
        try {
            // Fazendo uma requisição GET ao backend
            const response = await getData('/dados'); // Ajuste o endpoint conforme sua API
            this.data = response;
        } catch (error) {
            console.error('Erro ao carregar os dados', error);
        }
    }
};
</script>

<style scoped>
/* Estilos do componente */
</style>
