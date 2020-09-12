<template>
  <div class="pt-5 pl-5 columns is-multiline">
    <div class="column is-12">
      <figure class="image is-128x128">
        <img
          class="is-rounded"
          src="https://paul-clark-github-pages.s3.eu-west-2.amazonaws.com/profile-photo.png"
        />
      </figure>
    </div>
    <div class="column is-narrow">
      <a
        class="icon is-medium has-text-white"
        href="https://www.linkedin.com/in/paul-clark-javascript-dev/"
        target="_blank"
      >
        <FaIcon class="fa-lg" :icon="['fab', 'linkedin']" />
      </a>
      <a
        class="icon is-medium has-text-white"
        href="https://github.com/Paul-Cl-ark"
        target="_blank"
      >
        <FaIcon class="fa-lg" :icon="['fab', 'github']" />
      </a>
      <a
        class="icon is-medium has-text-white"
        href="https://twitter.com/P_aulClark"
        target="_blank"
      >
        <FaIcon class="fa-lg" :icon="['fab', 'twitter-square']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
