<template>
  <div id="main" class="tile is-ancestor">
    <AppHeader class="pt-5 pl-5 tile is-9" />
    <div id="body" class="tile is-12" />
    <Footer id="footer" class="px-5 tile is-12" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { AppHeader, Footer }
}
</script>
