<template>
  <nav>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/albums">Albums</router-link>
    <router-link to="/todos">Todos</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
html{
  height: 100%;
  width: 100%;
}
body {
  margin: 0px;
  min-height: 100%;
  min-width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  min-width: 100%;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &:active {
      color: #42b983;
    }
  }
}
</style>
