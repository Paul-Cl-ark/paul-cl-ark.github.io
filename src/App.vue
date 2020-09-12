<template>
  <div id="content">
    <AppHeader />
    <div id="main" />
    <Footer id="footer" />
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
