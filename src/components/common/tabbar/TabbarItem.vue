<template>
  <div class="tabbarItem" @click="itemClick">
    <!-- 因为插槽被执行的操作将会是直接的替代，故对插槽内容添加的样式，应该写在插槽的外层 -->
      <div v-if="isActive"><slot name="item-icon-active"></slot></div>
      <div v-else><slot name="item-icon"></slot></div>
      <div :class="{active:isActive}" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"royalblue"
    }
  },
  data(){
    return{
      
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1;
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path).catch(err=>{});
    }
  }
}

</script>

<style scoped>
.tabbarItem{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tabbarItem img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
      margin-bottom: 2px;
  }

</style>
