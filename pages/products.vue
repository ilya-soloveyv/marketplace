<template>
  <div>
    <h1>Продукты</h1>
    <pre>{{ products }}</pre>
  </div>
</template>

<script>
export default {
  computed: {
    products({ $store }) {
      return $store.state.product.list
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('product/GET_LIST')
  }
}
</script>
