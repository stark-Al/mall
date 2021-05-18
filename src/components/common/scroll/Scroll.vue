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
