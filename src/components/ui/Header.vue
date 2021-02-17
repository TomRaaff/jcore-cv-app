<template>
  <header>
    <h1>JCore</h1>
    <nav>
      <ul>
        <li><router-link to="/jcorians">Home</router-link></li>
        <li><router-link to="/">Versnel je carriere</router-link></li>
        <li><router-link to="/">Versnel uw organisatie</router-link></li>
        <li><router-link to="/">Over JCore</router-link></li>
        <li><router-link to="/">Blog</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
header {
  width: 100vw;
  background: rgb(214, 97, 4);
  background: linear-gradient(90deg, rgba(214, 97, 4, 1) 8%, rgba(176, 207, 37, 1) 92%);
  padding: 1rem 10vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: white;
}

li {
  display: inline;
  padding: 20px;
  border-radius: 10px 10px 0 0;
}

a {
  color: inherit;
  text-decoration: inherit;
}

li:hover {
  background: white;
  color: #b0cf25;
  transition: background-color ease-in-out 0.2s;
  cursor: pointer;
}
</style>
