<template>
  <div class="shopCartList">
      <scroll class="content" ref="scroll">
          <shopCartListItem v-for="(item,index) in cartList" :key="index" :product="item"></shopCartListItem>
      </scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import scroll from "components/common/scroll/Scroll"

import shopCartListItem from "./ShopCartListItem"

export default {
    components:{
        scroll,
        shopCartListItem
    },
    computed:{
        ...mapGetters({
            cartList:"cartList"
        })
    },
    activated(){
        this.$refs.scroll.refresh();
    }
}

</script>

<style scoped>
    .shopCartList{
        height: 100%;
        overflow: hidden;
    }

    .content{
        height: calc(100% - 44px - 49px - 40px);
    }
</style>
