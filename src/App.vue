<template>
  <div id="app">
    <Minimal></Minimal>
  </div>
</template>

<script>
import Minimal from './components/Minimal.vue'

export default {
  name: 'App',
  components: {
    Minimal
  }
}
</script>

<style>
   @import './assets/tailwind.css';
</style>
