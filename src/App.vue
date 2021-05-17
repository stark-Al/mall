<template>
  <div id="app">
    <router-view/>
    <mainTabbar></mainTabbar>
  </div>
</template>

<script>
import mainTabbar from "components/content/mainTabbar/MainTabbar"

export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style>
  @import "~assets/CSS/base.css";
</style>
