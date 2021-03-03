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
            PROJECTS
          </p>
        </li>
      </ul>
    </div>
    <div v-for="project in projects" :key="project.name" class="projects">
      <div class="project">
        <div class="project-image">
          <img :src="project.cover.url" alt="Project Image">
        </div>
        <div class="project-text">
          <div class="project-name">
            {{ project.name }}
          </div>
          <div class="project-links">
            <div v-for="link in project.techAndLinks.Links" :key="link" class="project-link">
              <a v-if="link.name === 'link'" :href="link.address" title="Web" target="_blank">
                <IconifyIcon :icon="icons.earthEuropeAfricaFilled" size="32" /></a>
              <a v-if="link.name === 'github'" :href="link.address" title="Github" target="_blank">
                <IconifyIcon :icon="icons.githubIcon" size="32" />
              </a>
            </div>
          </div>
          <div class="project-description">
            {{ project.description }}
          </div>
          <div class="project-stack">
            {{ project.techAndLinks.tech }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconifyIcon from '@iconify/vue'
import githubIcon from '@iconify/icons-brandico/github'
import earthEuropeAfricaFilled from '@iconify/icons-carbon/earth-europe-africa-filled'
import getFeaturedProjects from '~/apollo/queries/project/getFeaturedProjects'
export default {
  components: {
    IconifyIcon
  },
  data () {
    return {
      icons: {
        earthEuropeAfricaFilled,
        githubIcon
      },
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

  .projects {
    .project {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;

      .project-image {
        img {
          height: 15em;
          width: 15em;
        }
      }
      .project-text {
        color: var(--text-color);
        width: 20em;

        .project-name {
          font-weight: bold;
          padding: 0.1em;
          font-size: 1.25em;
        }
        .project-links {
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-start;
          align-items: left;

          .project-link{
            padding-right: 0.5em;

            a {
              &:hover {
                color: $accent-color-2;
              }
            }
          }
        }
      }
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
