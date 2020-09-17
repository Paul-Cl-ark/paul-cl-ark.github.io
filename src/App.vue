<template>
  <div id="main" class="hero is-fullheight px-5 py-5">
    <AppHeader class="hero-head" />
    <Body id="body" class="hero-body" />
    <Footer id="footer" class="hero-foot" />
  </div>
</template>

<script>
import { defineAsyncComponent as dac } from 'vue'
export default {
  name: 'App',
  components: {
    AppHeader: dac(() => import('./components/AppHeader')),
    Body: dac(() => import('./components/Body')),
    Footer: dac(() => import('./components/Footer'))
  }
}
</script>
