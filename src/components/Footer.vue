<template>
  <footer class="px-5 py-5 level has-text-white">
    <div class="level-left">
      <div class="level-item">
        <span class="icon is-large">
          <FaIcon class="fa-3x" :icon="['fab', 'vuejs']" />
        </span>
      </div>
      <div class="level-item">
        <span class="icon is-large">
          <FaIcon class="fa-3x" :icon="['fab', 'react']" />
        </span>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <span class="icon is-large">
          <FaIcon class="fa-3x" :icon="['fab', 'font-awesome']" />
        </span>
      </div>
      <div class="level-item">
        <figure class="is-3by1">
          <img
            src="../assets/made-with-bulma-dark.png"
            width="225"
            height="75"
            alt="Made with Bulma"
          />
        </figure>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
