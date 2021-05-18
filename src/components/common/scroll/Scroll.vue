<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
    data(){
        return {
            scroll:null
        }
    },
    methods:{
    // 解决 better-scroll2.0 带来的内容超过指定高度，但不滚动的问题
        refresh(){
            this.scroll.refresh();
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
        })
    }
}

</script>

<style scoped>

</style>
