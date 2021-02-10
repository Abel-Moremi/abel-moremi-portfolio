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
            <div class="button-outer">
              <div class="button-inner">
                <IconifyIcon :icon="icons.arrowDownload16Filled" :height="16" />
                <p>RESUME</p>
              </div>
            </div>
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
      <WaterIdea :style="styleSVG" />
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
import WaterIdea from '~/assets/images/water-idea-light.svg?inline'

export default {
  components: {
    WaterIdea,
    IconifyIcon
  },
  data () {
    return {
      styleSVG: {
        width: '70vh',
        height: '70vh'
      },
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
      ]
    }
  }
}
</script>

<style  lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.hero {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    .hero-text {
        color: $text-color;
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
                border-color: $text-color;

                .button-inner {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-evenly;
                    align-items: center;
                    background-color: $accent-color;
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

</style>
