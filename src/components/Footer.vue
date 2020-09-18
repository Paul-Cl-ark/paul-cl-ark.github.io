<template>
  <footer class="level has-text-white">
    <div class="level-left">
      <div v-for="skill in skills" :key="skill.key" class="level-item">
        <span
          class="icon is-large"
          @mouseover="handleHover(skill.key)"
          @mouseleave="handleHover"
        >
          <FaIcon
            :class="[`fa-${skill.size}x`, skill.key === 'node' ? 'pl-3' : '']"
            :icon="['fab', skill.key]"
          />
        </span>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <a
          href="https://fontawesome.com/"
          target="_blank"
          class="icon is-large has-text-white"
        >
          <FaIcon class="fa-3x" :icon="['fab', 'font-awesome']" />
        </a>
      </div>
      <div class="level-item">
        <figure class="is-3by1">
          <a href="https://bulma.io/">
            <img
              src="../assets/made-with-bulma-dark.png"
              width="225"
              height="75"
              alt="Made with Bulma"
            />
          </a>
        </figure>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    skills: {
      type: Array,
      required: true
    }
  },
  emits: ['react', 'aws'],
  methods: {
    handleHover(icon) {
      if (icon === 'react') return this.$emit('react', true)
      else if (icon === 'aws') this.$emit('aws')
      this.$emit('react', false)
    }
  }
}
</script>
