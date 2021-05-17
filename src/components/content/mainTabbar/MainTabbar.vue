<template>
  <div>
    <tabbar>
      <tabbarItem path="/home">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <div slot="item-text">首页</div>
      </tabbarItem>
      <tabbarItem path="/category">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <div slot="item-text">分类</div>
      </tabbarItem>
      <tabbarItem path="/shopcart">
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
        <div slot="item-text">购物车</div>
      </tabbarItem>
      <tabbarItem path="/profile">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <div slot="item-text">我的</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/Tabbar";
import tabbarItem from "components/common/tabbar/TabbarItem";

export default {
    components:{
        tabbar,tabbarItem
    }
}

</script>

<style scoped>

</style>
