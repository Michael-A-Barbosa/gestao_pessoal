<template>
    <div id="appVue">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
/* Estilos globais */
#appVue {
    height: 100vh;
    background: linear-gradient(
            to bottom right,
            rgba(30, 30, 30, 0.7),
            rgba(30, 30, 30, 0.7)
        ),
        url('I:\PROJETOS\Financas\gestao_pessoal\src\assets\wall2.jpg');
    background-size: cover;
    background-position: center;
}
</style>
