<template>
  <div id="app">
    <header>
      <h1>Bülent Büyükkahraman</h1>
      <h2>Cybersecurity Director | CISO</h2>
      <nav>
        <ul>
          <li><router-link to="/">About</router-link></li>
          <li><router-link to="/experience">Experience</router-link></li>
          <li><router-link to="/education">Education</router-link></li>
          <li><router-link to="/certifications">Certifications</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2024 Bülent Büyükkahraman. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Add your styles here */
body {
  font-family: Arial, sans-serif;
}
header {
  background-color: #f5f5f5;
  padding: 10px;
}
nav ul {
  list-style: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin-right: 10px;
}
</style>
