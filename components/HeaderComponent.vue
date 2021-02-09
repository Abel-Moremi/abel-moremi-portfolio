<template>
  <header>
    <div class="navbar">
      <nuxt-link to="/" class="logo">
        ABEL MOREMI
      </nuxt-link>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/who">
              PROJECTS
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/who">
              BLOG
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/who">
              ABOUT
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/who">
              CONTACT
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt-link to="/" class="logo">
        <IconifyIcon :icon="icons.sunIcon" :height="24" />
      </nuxt-link>
    </div>
  </header>
</template>

<script>
import IconifyIcon from '@iconify/vue'
import sunIcon from '@iconify/icons-bi/sun'

export default {
  components: {
    IconifyIcon
  },
  data () {
    return {
      icons: {
        sunIcon
      }
    }
  }
}
</script>

<style lang="scss">
  header {
    font-family: 'Roboto', sans-serif;
    background: $background-color;
    padding: 1em 10%;
    text-align: center;

    .navbar{
      display: flex;
      justify-content: space-between;
    }

    .logo{
      font-size: 1.2em;
      font-weight: bold;
    }

    a {
      color: $text-color;
      text-decoration: none;
    }

    nav {
      display: flex;
    }

    ul {
      list-style-type: none;
      padding: 0;
      display: flex;

      li a {
        padding: .5em;
        font-size: 1em;
        font-weight: bold;
      }
    }
  }
</style>
