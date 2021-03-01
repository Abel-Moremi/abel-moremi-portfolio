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
    <div class="project">
      <div class="project-image">
        image
      </div>
      <div class="project-text">
        text
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
