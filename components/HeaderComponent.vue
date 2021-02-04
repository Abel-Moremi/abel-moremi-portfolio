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
                who?
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/who">
                Posts
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/who">
                Contact
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
    header {
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
