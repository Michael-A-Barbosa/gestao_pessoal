// src/lib/requests.js
import axios from 'axios';
import BASE_URL from '../../environment';

// Função padrão para se conectar com o backend
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Função para fazer uma requisição GET
export const getData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer GET', error);
        throw error;
    }
};

// Função para fazer uma requisição POST
export const postData = async (endpoint, data) => {
    try {
        const response = await apiClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer POST', error);
        throw error;
    }
};

// Outras funções (PUT, DELETE, etc.) podem ser adicionadas aqui conforme necessário
