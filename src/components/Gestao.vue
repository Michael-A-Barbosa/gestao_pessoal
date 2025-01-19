<template>
    <div class="dashboard">
      <header class="dashboard-header">
        <nav class="menu">
          <h1>Bem-vindo ao Dashboard</h1>
          <ul>
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Perfil</a></li>
            <li><a href="#">Configurações</a></li>
            <li><a href="#">Sair</a></li>
          </ul>
        </nav>
      </header>
      <main class="dashboard-content">
        <p>Conteúdo inicial do Dashboard...</p>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "Dashboard",
  };
  </script>
  
  <style scoped>
  .dashboard {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
  }
  
  .dashboard-header {
    background-color: #f4f4f4;
    padding: 10px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  
  .menu ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .menu li {
    display: inline;
  }
  
  .menu a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  
  .menu a:hover {
    color: #007BFF;
  }
  </style>
  