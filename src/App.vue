<template>
  <div id="main" class="hero is-fullheight px-5 py-5">
    <AppHeader class="hero-head" />
    <Body id="body" class="hero-body" />
    <Footer id="footer" class="hero-foot" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import Body from './components/Body'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { AppHeader, Body, Footer }
}
</script>
