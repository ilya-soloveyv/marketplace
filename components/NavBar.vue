<template>
  <ul>
    <li>
      <nuxt-link to="/" active-class="active" exact>Home</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/about" active-class="active">About</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/products" active-class="active">Продукты</nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  li {
    padding: 1rem;
    a {
      color: black;
      &.active {
        color: white;
      }
    }
  }
}
</style>
