<template>
  <header>
    <div class="container">
      <div class="navbar">
        <nuxt-link to="/" class="logo">
          Abel Moremi
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
        background: $primary-color;
        padding: 1em 0;
        text-align: center;

        .navbar{
            display: flex;
            justify-content: space-between;
            font-weight: bold;
        }

        a {
            color: white;
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
            font-weight: normal;
            padding: .5em;
            }
        }
    }
</style>
