<template>
  <section class="hero">
    <HeroComponent />
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

section {
  width: 100%;
  display: table;
  max-width: none;
  margin: 0;
  background: $background-color;

  .hero{
    height: 100vh;
  }
}
</style>
