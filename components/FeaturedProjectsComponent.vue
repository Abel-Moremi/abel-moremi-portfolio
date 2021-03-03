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
    <div hidden class="projects">
      <div v-for="project in projects" :key="project.name" class="project">
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
                <IconifyIcon :icon="icons.earthEuropeAfricaFilled" size="32" />
              </a>
              <a v-if="link.name === 'zindi'" :href="link.address" title="Zindi" target="_blank">
                <IconifyIcon :icon="icons.alphaZBox" size="32" />
              </a>
              <a v-if="link.name === 'github'" :href="link.address" title="Github" target="_blank">
                <IconifyIcon :icon="icons.githubIcon" size="32" />
              </a>
              <a v-if="link.name === 'codepen'" :href="link.address" title="CodePen" target="_blank">
                <IconifyIcon :icon="icons.codepenCircleFilled" size="32" />
              </a>
              <a v-if="link.name === 'blog'" :href="link.address" title="Dev" target="_blank">
                <IconifyIcon :icon="icons.blogIcon" size="32" />
              </a>
            </div>
          </div>
          <div class="project-description">
            <div class="des-text">
              <p>{{ project.description }}</p>
            </div>
          </div>
          <div class="project-stack">
            <div v-for="tech in project.techAndLinks.tech" :key="tech">
              <p>{{ tech }}</p>
            </div>
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
import alphaZBox from '@iconify/icons-mdi/alpha-z-box'
import blogIcon from '@iconify/icons-carbon/blog'
import codepenCircleFilled from '@iconify/icons-ant-design/codepen-circle-filled'
import getFeaturedProjects from '~/apollo/queries/project/getFeaturedProjects'

export default {
  components: {
    IconifyIcon
  },
  data () {
    return {
      icons: {
        earthEuropeAfricaFilled,
        githubIcon,
        alphaZBox,
        blogIcon,
        codepenCircleFilled
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
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 3em;
    padding: 3em;

    .project {
      grid-column: span 2;
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;

      .project-image {
        padding: 0.5em;
        img {
          width: 100%;
          height: 100%;
          max-height: 15em;
          max-width: 15em;
        }
      }
      .project-text {
        color: var(--text-color);
        width: 20em;

        .project-name {
          font-weight: bold;
          padding: 0.1em;
          font-size: 1.5em;
        }
        .project-links {
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-start;
          align-items: left;

          .project-link {
            padding-right: 0.5em;

            a {
              &:hover {
                color: $accent-color-2;
              }
            }
          }
        }
        .project-description {
          padding: 0.5em 0 0.5em 0;

          .des-text {
            border-radius: 0.5em;
            box-shadow: 0.08em 0.08em 0.08em 0.08em var(--box-shadow);
            background: var(--tech-background);

            p {
              padding: 0.3em;
              text-align: justify;
              text-justify: inter-word;
              font-size: 1em;
            }
          }
        }
        .project-stack {
          display: flex;
          flex-flow: row wrap;
          justify-content: left;
          align-items: center;
          p {
              padding-right: 0.8em;
              font-size: 0.8em;
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

@media only screen and (max-width: 600px) {
  .featuredProjects{
    .project-title{
      padding: 1em;

      .name-span{
        font-size: 0.7em;
        letter-spacing: 1.1em;
      }
      .title {
        font-size: 1.25em;
      }
    }
    .projects{
      width: 20em;
      display: flex;
      overflow-x: auto;
      align-items: left;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;

      .project{
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        flex-flow: row wrap;
        scroll-snap-align: start;
        scroll-behavior: smooth;

        .project-image {
          padding: 0.5em;
          img {
            width: 100%;
            height: 100%;
            max-height: 12em;
            max-width: 12em;
          }
        }
        .project-text {
          color: var(--text-color);
          width: 20em;

          .project-name {
            padding: 0.1em;
            font-size: 1.25em;
          }

          .project-description {
            padding: 0.25em 0 0.25em 0;

            .des-text {
              p {
                font-size: .8em;
              }
            }
          }

          .project-stack {
            display: flex;
            flex-flow: row wrap;
            justify-content: left;
            align-items: center;
            p {
              padding-right: 0.8em;
              font-size: 0.6em;
            }
          }
        }
      }
    }
  }
}
</style>
