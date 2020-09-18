<template>
  <footer class="has-text-white">
    <span v-for="skill in skills" :key="skill.key" class="icon is-large">
      <FaIcon
        :class="['fa-2x', skill.key === 'node' ? 'pl-2' : '']"
        :icon="['fab', skill.key]"
      />
    </span>
  </footer>
</template>

<script>
export default {
  name: 'MobileFooter',
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>
