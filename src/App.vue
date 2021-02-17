<template>
  <Header></Header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import Header from './components/ui/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
ul li {
  margin:0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

section {
  margin: 0 auto;
  width: 85vw;
  box-sizing: border-box;
  padding: 1rem;
}

h2 {
  margin: 1rem 0;
}

article {
  background: #f5f5f5;
  padding: 1rem;
}

article.page-content {
  padding: 0;
}

article h3 {
  padding: 1rem;
}

button {
  display: inline-block;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0;
  text-decoration: none;
  font-size: 1rem;
  background: #b0cf25;
  color: black;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out,
  transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
}

hr {
  border: solid 1px white;
}
hr.right {
  margin: 1rem 0 1rem 75%;
}
hr.left {
  margin: 1rem 75% 1rem 0;
}

.tags {
  overflow-wrap: break-word;
  font-size: 0.75em;
  color: black;
  margin: 1rem 0;
}

.tag {
  background: #b0cf25;
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.2rem 0.5rem;
}

.quote {
  text-align: right;
}
</style>
