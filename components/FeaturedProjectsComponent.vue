<template>
  <div class="featuredProjects" />
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
