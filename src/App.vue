<template>
  <div id="main" class="hero is-fullheight px-5 py-5">
    <Header class="hero-head" />
    <Body id="body" class="hero-body" />
    <Footer id="footer" :skills="skills" class="hero-foot is-hidden-mobile" />
    <MobileFooter
      id="mobileFooter"
      :skills="skills"
      class="hero-foot is-hidden-tablet"
    />
  </div>
</template>

<script>
import { defineAsyncComponent as dac } from 'vue'
export default {
  name: 'App',
  components: {
    Header: dac(() => import('./components/Header')),
    Body: dac(() => import('./components/Body')),
    Footer: dac(() => import('./components/Footer')),
    MobileFooter: dac(() => import('./components/MobileFooter'))
  },
  computed: {
    skills: () => [
      { key: 'js-square', size: 3 },
      { key: 'vuejs', size: 3 },
      { key: 'react', size: 3 },
      { key: 'node', size: 3 },
      { key: 'html5', size: 2 },
      { key: 'css3-alt', size: 2 },
      { key: 'sass', size: 2 },
      { key: 'git', size: 2 },
      { key: 'aws', size: 2 }
    ]
  }
}
</script>
