<template>
  <div class="container has-text-white">
    <div class="content">
      <p class="title is-1 has-text-white">
        Hey, I'm Paul <span class="wave">&#x1f44b;</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Body'
}
</script>

<style lang="sass" scoped>
.title:hover
  transform: scale(1.1);
  transition: all ease 500ms;
.title:not(:hover)
    transform: scale(1)
    transition: all ease 500ms
</style>
