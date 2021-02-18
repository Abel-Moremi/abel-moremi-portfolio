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
            <p class="title">
              FULL-STACK DEVELOPER
            </p>
          </li>
          <li>
            <p class="title">
              DATA SCIENCE ENTHUSIAST
            </p>
          </li>
          <li class="button">
            <a :href="resume.resumePDF.url" target="_blank">
              <div class="button-outer">
                <div class="button-inner">
                  <IconifyIcon :icon="icons.arrowDownload16Filled" :height="16" />
                  <p>RESUME</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <div class="links">
              <div v-for="link in links" :key="link.icon">
                <a :href="link.href" :title="link.title" target="_blank">
                  <IconifyIcon :icon="link.icon" :height="link.size" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="hero-image">
      <ColorScheme placeholder="..." tag="span">
        <WaterIdeaLight v-if="$colorMode.preference === 'light'" />
        <WaterIdeaDark v-if="$colorMode.preference === 'dark'" />
      </ColorScheme>
    </div>
  </div>
</template>

<script>
import IconifyIcon from '@iconify/vue'
import arrowDownload16Filled from '@iconify/icons-fluent/arrow-download-16-filled'
import githubIcon from '@iconify/icons-brandico/github'
import linkedinRect from '@iconify/icons-brandico/linkedin-rect'
import twitterFill from '@iconify/icons-akar-icons/twitter-fill'
import codepenCircleFilled from '@iconify/icons-ant-design/codepen-circle-filled'
import stackoverflowIcon from '@iconify/icons-cib/stackoverflow'
import alphaZBox from '@iconify/icons-mdi/alpha-z-box'
import emailAlt from '@iconify/icons-dashicons/email-alt'
import WaterIdeaLight from '~/assets/images/water-idea-light.svg?inline'
import WaterIdeaDark from '~/assets/images/water-idea-dark.svg?inline'
import getResume from '~/apollo/queries/resume/getResume'

export default {
  components: {
    WaterIdeaLight,
    WaterIdeaDark,
    IconifyIcon

  },
  data () {
    return {
      icons: {
        arrowDownload16Filled
      },
      links: [
        { icon: githubIcon, size: '24', title: 'Github', href: 'https://github.com/Abel-Moremi' },
        { icon: linkedinRect, size: '24', title: 'LinkedIn', href: 'https://www.linkedin.com/in/abel-moremi/' },
        { icon: twitterFill, size: '32', title: 'Twitter', href: 'https://twitter.com/MoremiAbel' },
        { icon: codepenCircleFilled, size: '32', title: 'CodePen', href: 'https://codepen.io/abel-moremi' },
        { icon: stackoverflowIcon, size: '28', title: 'StackOverflow', href: 'https://stackoverflow.com/users/9463524/abel-moremi' },
        { icon: alphaZBox, size: '32', title: 'Zindi', href: 'https://zindi.africa/users/Abel' },
        { icon: emailAlt, size: '32', title: 'Email', href: 'mailto: abelmoremiz@gmail.com' }
      ],
      resume: [],
      query: ''
    }
  },
  apollo: {
    resume: {
      prefetch: true,
      query: getResume
    }
  }
}
</script>

<style  lang="scss">
.hero {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    .hero-text {
        color: var(--text-color);
        padding-right: 5em;
        font-weight: bold;

        .name-span {
            letter-spacing: 1.5em;
            font-size: 0.875em;
        }

        .title {
            font-size: 2.25em;
        }

        .button {
            padding: 0.5em 20%;

            .button-outer {
                border-style: solid;
                border-width: 0.3em;
                border-color: var(--text-color);
                box-shadow: 0.08em 0.08em 0.08em 0.08em var(--box-shadow);

                &:hover {
                  background-color: green;
                  cursor: pointer;
                }

                &:active {
                  background-color: $accent-color-2;
                }

                .button-inner {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-evenly;
                    align-items: center;
                    background-color: $accent-color-2;
                    color: $accent-color-1;
                    margin: 0.2em;
                    padding: 0.1em;

                    p {
                        letter-spacing: 0.8em;
                        font-size: 0.875em;
                    }
                }
            }
        }

        .links{
            padding-top: 1em;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
            align-items: center;
        }
    }

    .hero-image {
      padding-left: 2.5em;
    }
}

.light-mode {
  --background: #{ $light-background };
  --text-color: #{ $light-text-color };
  --box-shadow: #{ light-box-shadow };
}

.dark-mode {
  --background: #{ $dark-background };
  --text-color: #{ $dark-text-color };
  --box-shadow: #{ $dark-box-shadow };
}

@media only screen and (min-width: 1401px) {
  .hero-image {
    svg {
      width: 70vh;
      height: 70vh;
    }
  }
}

@media only screen and (max-width: 1400px) {
  .hero-image {
    svg {
      width: 40vh;
      height: 40vh;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .hero-text {
    padding:1em
  }

  .hero-image {
    display: none;
    visibility: hidden;
  }
}

@media only screen and (max-width: 600px) {

  .hero {
    .hero-text{
      font-weight: bold;
      .name-span {
        font-size: 0.7em;
      }
      .title {
        font-size: 1.25em;
      }

      .button {
        .button-outer{
          .button-inner {
             p {
              font-size: 0.7em;
            }
          }
        }
      }
    }
  }
}
</style>
