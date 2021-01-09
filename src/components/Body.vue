<template>
  <div class="container has-text-white">
    <div class="content">
      <p class="title is-1 is-size-3-mobile has-text-white">
        <span>Hey, I'm Paul </span>
        <span>&#x1f44b;</span>
      </p>
      <a
        v-if="aws"
        href="https://www.youracclaim.com/badges/73c1b4aa-d34d-48e9-abd4-83ac4091cf42/public_url"
        target="_blank"
      >
        <img
          width="80"
          src="../assets/aws-cloud-practitioner.png"
          alt="Certified AWS Cloud Practitioner"
        />
      </a>
      <a
        v-if="aws"
        href="https://www.youracclaim.com/badges/bbf46054-81be-452e-aa4f-74145c5baeb5/public_url"
        target="_blank"
        class="px-4"
      >
        <img
          width="80"
          src="../assets/aws-developer-associate.png"
          alt="Certified AWS Developer - Associate"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Body',
  props: {
    aws: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.title:hover
  transform: scale(1.1);
  transition: all ease 750ms;
.title:not(:hover)
    transform: scale(1)
    transition: all ease 1000ms
img:hover
  transform: scale(1.5);
  transition: all ease 750ms;
img:not(:hover)
    transform: scale(1)
    transition: all ease 1000ms
</style>
