<template>
  <div class="tech">
    <div class="tech-title">
      <ul>
        <li>
          <p class="title">
            TECHNOLOGIES
          </p>
        </li>
        <li>
          <p class="name-span">
            I HAVE WORKED WITH
          </p>
        </li>
      </ul>
    </div>
    <div class="tech-icons">
      <a v-for="icon in icons" :key="icon.icon" class="icon">
        <div :title="icon.title">
          <IconifyIcon :icon="icon.icon" :height="icon.size" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import IconifyIcon from '@iconify/vue'
import javaIcon from '@iconify/icons-cib/java'
import logoPython from '@iconify/icons-carbon/logo-python'
import bxlJavascript from '@iconify/icons-bx/bxl-javascript'
import html5Icon from '@iconify/icons-typcn/html5'
import bxsFileCss from '@iconify/icons-bx/bxs-file-css'
import bootstrapFill from '@iconify/icons-bi/bootstrap-fill'
import vueJs from '@iconify/icons-cib/vue-js'
import nuxtJs from '@iconify/icons-cib/nuxt-js'
import bxlNodejs from '@iconify/icons-bx/bxl-nodejs'
import djangoIcon from '@iconify/icons-cib/django'
import googleCloud from '@iconify/icons-cib/google-cloud'
import bxlFirebase from '@iconify/icons-bx/bxl-firebase'
import herokuIcon from '@iconify/icons-cib/heroku'
import dockerIcon from '@iconify/icons-cib/docker'
import gitIcon from '@iconify/icons-fe/git'
import pandasIcon from '@iconify/icons-simple-icons/pandas'
import tensorflowIcon from '@iconify/icons-cib/tensorflow'
import pytorchIcon from '@iconify/icons-cib/pytorch'
import scikitLearn from '@iconify/icons-simple-icons/scikit-learn'
import sqlIcon from '@iconify/icons-carbon/sql'
import postgresqlIcon from '@iconify/icons-cib/postgresql'

export default {
  components: {
    IconifyIcon
  },
  data () {
    return {
      icons: [
        { icon: javaIcon, size: '50', title: 'Java' },
        { icon: logoPython, size: '50', title: 'Python' },
        { icon: bxlJavascript, size: '50', title: 'JavaScript' },
        { icon: html5Icon, size: '50', title: 'HTML' },
        { icon: bxsFileCss, size: '50', title: 'CSS' },
        { icon: bootstrapFill, size: '50', title: 'BootStrap' },
        { icon: vueJs, size: '50', title: 'VueJS' },
        { icon: nuxtJs, size: '50', title: 'NuxtJS' },
        { icon: bxlNodejs, size: '50', title: 'NodeJS' },
        { icon: djangoIcon, size: '50', title: 'Django' },
        { icon: googleCloud, size: '50', title: 'Google Cloud' },
        { icon: bxlFirebase, size: '50', title: 'Firebase' },
        { icon: herokuIcon, size: '50', title: 'Heroku' },
        { icon: dockerIcon, size: '50', title: 'Docker' },
        { icon: gitIcon, size: '50', title: 'Git' },
        { icon: pandasIcon, size: '50', title: 'Pandas' },
        { icon: tensorflowIcon, size: '50', title: 'TensorFlow' },
        { icon: pytorchIcon, size: '50', title: 'PyTorch' },
        { icon: scikitLearn, size: '50', title: 'Scikit-Learn' },
        { icon: sqlIcon, size: '50', title: 'SQL' },
        { icon: postgresqlIcon, size: '50', title: 'SQL' }
      ]
    }
  }
}
</script>

<style  lang="scss">

.tech{
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background: var(--tech-background);

    .tech-title{
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

    .tech-icons {
        color: $primary-color;
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 3em;
        padding: 3em;
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
