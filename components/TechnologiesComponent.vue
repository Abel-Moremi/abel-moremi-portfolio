<template>
  <div class="technologies">
    <div class="tech-title">
      <ul>
        <li>
          <p class="title">
            TECHNOLOGIES
          </p>
        </li>
        <li>
          <p class="name-spna">
            DATA SCIENCE ENTHUSIAST
          </p>
        </li>
      </ul>
    </div>
    <div class="tech-icons">
      <div v-for="icon in icons" :key="icon.icon">
        <a :title="icon.title">
          <IconifyIcon :icon="icon.icon" :height="icon.size" />
        </a>
      </div>
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
        { icon: javaIcon, size: '32', title: 'Java' },
        { icon: logoPython, size: '32', title: 'Python' },
        { icon: bxlJavascript, size: '32', title: 'JavaScript' },
        { icon: html5Icon, size: '32', title: 'HTML' },
        { icon: bxsFileCss, size: '32', title: 'CSS' },
        { icon: bootstrapFill, size: '32', title: 'BootStrap' },
        { icon: vueJs, size: '32', title: 'VueJS' },
        { icon: nuxtJs, size: '32', title: 'NuxtJS' },
        { icon: bxlNodejs, size: '32', title: 'NodeJS' },
        { icon: djangoIcon, size: '32', title: 'Django' },
        { icon: googleCloud, size: '32', title: 'Google Cloud' },
        { icon: bxlFirebase, size: '32', title: 'Firebase' },
        { icon: herokuIcon, size: '32', title: 'Heroku' },
        { icon: dockerIcon, size: '32', title: 'Docker' },
        { icon: gitIcon, size: '32', title: 'Git' },
        { icon: pandasIcon, size: '32', title: 'Pandas' },
        { icon: tensorflowIcon, size: '32', title: 'TensorFlow' },
        { icon: pytorchIcon, size: '32', title: 'PyTorch' },
        { icon: scikitLearn, size: '32', title: 'Scikit-Learn' },
        { icon: sqlIcon, size: '32', title: 'SQL' },
        { icon: postgresqlIcon, size: '32', title: 'SQL' }
      ]
    }
  }
}
</script>

<style  lang="scss">
</style>
