<template>
  <div>
    <HeaderComponent />
    <Nuxt />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from '~/components/FooterComponent.vue'
import HeaderComponent from '~/components/HeaderComponent.vue'
export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
<style lang="scss">

</style>
