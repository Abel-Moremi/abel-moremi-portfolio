<template>
  <div>
    <div class="hero">
      <div class="container">
        <h1>Welcome to my Blog</h1>
        <p class="subtitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, modi. Maxime explicabo neque odio facilis.
        </p>
        <nuxt-link to="/contact" class="hire">
          Hire me
        </nuxt-link>
      </div>
    </div>
    <div class="container">
      <main>
        <h2>
          Latest thoughts
        </h2>
        <ul>
          <li v-for="post in filteredList" :key="post.id">
            <img :src="post.mediaCover.url" alt="Post Cover Photo">
            <div class="content">
              <span>
                {{ post.publishedAt }}
              </span>
              <nuxt-link :to="'/blog/'+ post.slug">
                {{ post.title }}
              </nuxt-link>
              <p>
                {{ post.excerpt }}
              </p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
import getAllPosts from '~/apollo/queries/post/showAllposts'
export default {
  data () {
    return {
      posts: [],
      query: ''
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: getAllPosts
    }
  },
  computed: {
    filteredList () {
      return this.posts.filter((post) => {
        return post.title.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  }
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.hero{
  background: $primary-color;
  color: white;
  text-align: center;
  padding-top: 2em;

  h1 {
    margin-bottom: 1em;
  }

  .hire{
    background: darken($color: $primary-color, $amount: 10%);
    padding: .5em 3em;
    margin: 2em 0 3em;
    display: inline-block;
    color: $accent-color;
    text-decoration: none;
  }
}

.container ul {
  list-style-type: none;
  padding: 0;
}

main {
  li{
    background: white;
    border-radius: 1em;
    padding: .8em;
    margin: 1em 0;
    box-shadow: 15px 21px 40px 0px rgba(0,0,0,0.04);
  }

  img {
    width: 100%;
    border-radius: .5em;
  }

  .content {
    padding: .5em;
  }

  a {
    font-size: 1.5em;
    text-decoration: none;
    color: black;
    font-weight: bold;
    display: block;
    margin: .1em 0 .2em;
  }

  h2 {
    margin-top: 3em;
    text-transform: uppercase;
    font-size: .8em;
  }

  span {
    color: $primary-color;
    text-transform: uppercase;
  }
}

@media only screen and (min-width: 768px) {
  main li {
    display: grid;
    grid-template-columns: 180px auto;
    grid-column-gap: 1em;
  }
}

</style>
