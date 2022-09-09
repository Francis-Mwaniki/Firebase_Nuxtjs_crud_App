<template>
  <main class="bg-gray-600 h-full sm:max-w-full max-w-7xl">
    <Nav />
    <Laptop />
    <Nuxt />
  </main>
</template>

<script>
import Laptop from "../components/Laptop.vue";
import Nav from "../components/Nav.vue";
export default {
  props: [],
  components: {
    Nav,
    Laptop,
  },
};
</script>
<style>
body {
  background-color: gray;
}
</style>
