<template>
  <footer>
    <div class="">
      <p>Designed and Built by Abel Moremi</p>
      <div class="links">
        <div v-for="link in links" :key="link.icon">
          <a :href="link.href" :title="link.title" target="_blank">
            <IconifyIcon :icon="link.icon" :height="link.size" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import IconifyIcon from '@iconify/vue'
import githubIcon from '@iconify/icons-brandico/github'
import linkedinRect from '@iconify/icons-brandico/linkedin-rect'
import twitterFill from '@iconify/icons-akar-icons/twitter-fill'
import codepenCircleFilled from '@iconify/icons-ant-design/codepen-circle-filled'
import stackoverflowIcon from '@iconify/icons-cib/stackoverflow'
import alphaZBox from '@iconify/icons-mdi/alpha-z-box'
import emailAlt from '@iconify/icons-dashicons/email-alt'

export default {
  components: {
    IconifyIcon
  },
  data () {
    return {
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

<style lang="scss">
  footer {
    font-family: 'Roboto', sans-serif;
    background: var(--background);
    color: var(--text-color);
    box-shadow: 0 1px 0 var(--text-color) inset;
    padding: 2em 10%;
    text-align: center;
    height: 10em;
    width: 100%;
    z-index: 1;

    .links{
        padding-top: 1em;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
        color: var(--text-color);

        a {
            &:hover {
                color: $accent-color-2;
            }
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
