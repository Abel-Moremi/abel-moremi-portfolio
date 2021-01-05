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
              <nuxt-link :to="{ path: post.slug }">
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
import postsQuery from '~/apollo/queries/post/posts'
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
      query: postsQuery
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
