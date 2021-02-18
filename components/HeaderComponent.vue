<template>
  <header>
    <div class="navbar">
      <nuxt-link to="/" class="logo">
        ABEL MOREMI
      </nuxt-link>
      <nav>
        <ul>
          <li hidden>
            <nuxt-link to="/who">
              PROJECTS
            </nuxt-link>
          </li>
          <li hidden>
            <nuxt-link to="/who">
              BLOG
            </nuxt-link>
          </li>
          <li hidden>
            <nuxt-link to="/who">
              ABOUT
            </nuxt-link>
          </li>
          <li hidden>
            <nuxt-link to="/who">
              CONTACT
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div>
        <nuxt-link to="" class="logo">
          <ColorScheme placeholder="..." tag="span">
            <div v-if="$colorMode.value === 'light'" @click="$colorMode.preference = 'dark'">
              <IconifyIcon :icon="icons.sunIcon" :height="35" />
            </div>
            <div v-else-if="$colorMode.value === 'dark'" @click="$colorMode.preference = 'light'">
              <IconifyIcon :icon="icons.moonIcon" :height="35" />
            </div>
            <div v-else />
          </ColorScheme>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
import IconifyIcon from '@iconify/vue'
import sunIcon from '@iconify/icons-bi/sun'
import moonIcon from '@iconify/icons-bi/moon'

export default {
  components: {
    IconifyIcon
  },
  data () {
    return {
      icons: {
        sunIcon,
        moonIcon
      }
    }
  }
}
</script>

<style lang="scss">
  header {
    font-family: 'Roboto', sans-serif;
    background: var(--background);
    padding: 0.5em 10%;
    text-align: center;
    width: 100%;
    position: fixed;

    .navbar{
      display: flex;
      justify-content: space-between;
    }

    .logo{
      font-size: 1.2em;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
    }

    a {
      color: var(--text-color);
      text-decoration: none;
    }

    nav {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
    }

    ul {
      list-style-type: none;
      padding: 0;
      display: flex;

      li a {
        padding: 3em;
        font-size: 1em;
        font-weight: bold;
      }
    }
  }

  .light-mode {
    --background: #{ $light-background };
    --text-color: #{ $light-text-color };
  }

  .dark-mode {
    --background: #{ $dark-background };
    --text-color: #{ $dark-text-color };
  }
</style>
