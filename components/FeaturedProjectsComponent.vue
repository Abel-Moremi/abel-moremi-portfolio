<template>
  <div class="featuredProjects">
    <div class="project-title">
      <ul>
        <li>
          <p class="name-span">
            FEATURED
          </p>
        </li>
        <li>
          <p class="title">
            PROJETCS
          </p>
        </li>
      </ul>
    </div>
    <div class="projects">
      <div v-for="project in projects" :key="project.name" class="project">
        <div class="project-image">
          <img :src="project.cover.url" alt="Project Image">
        </div>
        <div class="project-text">
          {{ project.name }}
          {{ project.techAndLinks.tech }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getFeaturedProjects from '~/apollo/queries/project/getFeaturedProjects'
export default {
  data () {
    return {
      projects: [],
      query: ''
    }
  },
  apollo: {
    projects: {
      prefetch: true,
      query: getFeaturedProjects
    }
  }
}
</script>

<style  lang="scss">

.featuredProjects{
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

     .project-title{
        color: var(--text-color);
        font-weight: bold;
        padding: 3em;

        .name-span {
            letter-spacing: 1.5em;
            font-size: 0.875em;
        }

        .title {
            font-size: 2.25em;
        }
    }
}

.light-mode {
  --tech-background: #{ $light-tech-background };
  --text-color: #{ $light-text-color };
  --box-shadow: #{ $light-box-shadow };
}

.dark-mode {
  --tech-background: #{ $dark-tech-background };
  --text-color: #{ $dark-text-color };
  --box-shadow: #{ $dark-box-shadow };
}
</style>
