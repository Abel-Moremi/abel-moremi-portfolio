<template>
  <div class="hero">
    <div class="hero-text">
      <nav>
        <ul>
          <li>
            <p class="name-span">
              ABEL MOREMI
            </p>
          </li>
          <li>
            <p>FULL-STACK DEVELOPER</p>
          </li>
          <li>
            <p>DATA SCIENCE ENTHUSIAST</p>
          </li>
          <li>
            <p>resume button</p>
          </li>
          <li>
            <p>links</p>
          </li>
        </ul>
      </nav>
    </div>
    <div class="hero-image">
      <WaterIdea :style="styleSVG" />
    </div>
  </div>
</template>

<script>
import WaterIdea from '~/assets/images/water-idea-light.svg?inline'

export default {
  components: {
    WaterIdea
  },
  data () {
    return {
      styleSVG: {
        width: '40vh',
        height: '40vh'
      }
    }
  }
}
</script>

<style  lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.hero {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

</style>
