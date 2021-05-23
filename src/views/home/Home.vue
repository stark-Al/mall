<template>
  <div id="home">
      <navbar class="homeNav">
        <div slot="center">购物街</div>
      </navbar>
      <!-- 多编写一份，当滑动距离超过时，呈现吸顶效果 -->
      <tabControl :titles="['流行','新款','精选']" 
                    @tabClick="tabClick" class="tabControl"
                    ref="outTabControl" v-show="isShowTab"></tabControl>

      <scroll class="content" ref="scroll" 
      :probeType="3" @scrollContent="scrollContent"
      :pullUpLoad="true" @pullingUp="pullingUp">

        <homeswiper :banners="banners" @homeSwiperImgLoad="homeSwiperImgLoad"></homeswiper>
        <recommendView :recommend="recommend"></recommendView>
        <featureView></featureView>
        <tabControl :titles="['流行','新款','精选']" 
                    @tabClick="tabClick" class="tabControl"
                    ref="tabControl"></tabControl>
        <goodsList :goods="showType"></goodsList>
      </scroll>
      <backTop @click.native="btClick" v-show="isShowBack"></backTop>
  </div>
</template>

<script>
import {itemListenerMixin} from "common/mixin"

import navbar from "components/common/navbar/NavBar"
import scroll from "components/common/scroll/Scroll"
import tabControl from "components/content/tabControl/TabControl"
import goodsList from "components/content/goods/GoodsList"
import backTop from "components/content/backTop/BackTop"

import homeswiper from "./childComps/HomeSwiper"
import recommendView from "./childComps/RecommendView"
import featureView from "./childComps/FeatureView"

import {getHomeMultidata,
        getHomeGoods} from "network/home"

export default {
  data(){
    return {
      banners:[],
      dKeyword:[],
      Keywords:[],
      recommend:[],
      goods:{
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]}
      },
      currentType:"pop",
      isShowBack:false,
      tabOffSetTop:0,
      isShowTab:false,
      saveY:0,
    }
  },
  components:{
    navbar,
    homeswiper,
    recommendView,
    featureView,
    tabControl,
    goodsList,
    scroll,
    backTop
  },
  mixins:[itemListenerMixin],
  created(){
      // 1. 请求多个数据
    this.getHomeMultidata();

    // 2. 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated(){
    // 跳转到上一次离开时的状态
    // console.log(this.saveY);
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0,this.saveY,0);
  },
  deactivated(){
    // 保留离开时的状态信息
    this.saveY = this.$refs.scroll.getPosition();

    // 取消总线上的事件
    this.$bus.$off("imgLoad",this.itemImgListener);
  },
  computed:{
    showType(){
      return this.goods[this.currentType].list;
    }
  },
  methods:{
    /* 
    事件监听的方法
    */
   tabClick(index){
     switch(index){
      case 0:
        this.currentType = "pop";
        break;
      case 1:
        this.currentType = "new";
        break;
      case 2:
        this.currentType ="sell";
        break;
     }
     this.$refs.outTabControl.currentIndex=index;
     this.$refs.tabControl.currentIndex = index;
   },
   btClick(){
     this.$refs.scroll.scrollTo(0,0);
   },
   scrollContent(position){
    //  1. 控制回到顶部的显示
     this.isShowBack = (-position.y)>1000?true:false;

    //  2. 控制tabcontrol的显示
    this.isShowTab = (-position.y)>this.tabOffSetTop?true:false;
   },
   pullingUp(){
     this.getHomeGoods(this.currentType);
   },
   homeSwiperImgLoad(){
     this.tabOffSetTop=this.$refs.tabControl.$el.offsetTop;
   },

    /* 
    网络请求相关的方法
     */
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      // console.log(res);
      this.banners = res.data.banner.list;
      this.dKeyword = res.data.dKeyword.list;
      this.Keywords = res.data.keywords.list;
      this.recommend = res.data.recommend.list;
      })
    },

    getHomeGoods(type){
      const page = this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        
        this.$refs.scroll.finishPullUp();
      })
    }
  }
}

</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .homeNav{
    background-color: var(--color-tint);
    color: white;

    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .tabControl{
    /* position: sticky;
    top: 44px;
    z-index: 9; */
    position: relative;
    z-index: 9;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
