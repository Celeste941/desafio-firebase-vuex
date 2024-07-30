<template>
  <div class="app-container">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Agregar Usuarios</router-link>
      <span class="separator">|</span>
      <router-link to="/about" class="nav-link">Lista de usuarios agregados</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
.app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #23a2b8;
  margin-bottom: 30px; 
}

.nav-link {
  font-weight: bold;
  color: #2c3e50; 
  text-decoration: none;
  margin: 0 20px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link:hover {
  background-color: #2c3e50; 
  color: #ffffff; 
}

.nav-link.router-link-exact-active {
  color: #23a2b8; 
  border-bottom: 2px solid #23a2b8; 
}

.separator {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 15px;
}
</style>
