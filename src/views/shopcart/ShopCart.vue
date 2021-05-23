<template>
  <div class="shopCart">
      <navbar class="shopCartNav">
        <div slot="center">购物车({{length}})</div>
      </navbar>
      <shopCartList></shopCartList>
      <shopCartBottomBar></shopCartBottomBar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import navbar from "components/common/navbar/NavBar"

import shopCartList from "./childComps/ShopCartList"
import shopCartBottomBar from './childComps/ShopCartBottomBar'

export default {
  components:{
    navbar,
    shopCartList,
    shopCartBottomBar
  },
  computed:{
    ...mapGetters({
      length: 'cartLength'
    }) 
  }
}

</script>

<style scoped>
  .shopCart{
    height:100vh;
  }

  .shopCartNav{
    background-color: var(--color-tint);
    color: white;
  }

</style>
