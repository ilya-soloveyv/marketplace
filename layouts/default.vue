<template>
  <div class="app">
    <section class="main">
      <div class="container">
        <NavBar />
        <nuxt />
      </div>
    </section>
    <footer>
      <div class="container">
        Footer
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.app {
  background-color: yellow;
  height: 100%;
  display: flex;
  flex-direction: column;
  section {
    flex-grow: 1;
    // height: 0;
    // min-height: calc(100vh - 70px);
  }
  footer {
    flex-shrink: 0;
    // height: 70px;
    background-color: red;
    padding: 1rem;
  }
}
.container {
  min-height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: orange;
  @media (max-width: 1260px) {
    max-width: 992px;
  }
}
</style>
