<template>
  <div id="main" class="hero is-fullheight px-5 py-5">
    <Header class="hero-head" />
    <Body id="body" class="hero-body" />
    <Footer id="footer" class="hero-foot" />
  </div>
</template>

<script>
import { defineAsyncComponent as dac } from 'vue'
export default {
  name: 'App',
  components: {
    Header: dac(() => import('./components/Header')),
    Body: dac(() => import('./components/Body')),
    Footer: dac(() => import('./components/Footer'))
  }
}
</script>
