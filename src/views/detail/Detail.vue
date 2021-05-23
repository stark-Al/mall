<template>
  <div id="detail">
      <detailNavBar class="detailNav" @titleClick="titleClick" ref="nav"></detailNavBar>
      <scroll class="content" ref="scroll" :probeType="3" @scrollContent="scrollContent">
        <detailSwiper :topImages="topImages"></detailSwiper>
        <detailBaseInfo :goods="goods"></detailBaseInfo>
        <detailShopInfo :shop="shop"></detailShopInfo>
        <detailGoodsInfo :detailInfo="detailInfo" @imgLoad="imgLoad"></detailGoodsInfo>
        <detailParamInfo :paramInfo="goodsParam" ref="param"></detailParamInfo>
        <detailCommentInfo :commentInfo="commentInfo" ref="comment"></detailCommentInfo>
        <goodsList :goods="commends" ref="commend"></goodsList>
      </scroll>
      <backTop @click.native="btClick" v-show="isShowBack"></backTop>
      <detailBottomBar @addToCart="addToCart"></detailBottomBar>  
  </div>
</template>

<script>
import {debounce} from "common/util/utils"
import {itemListenerMixin} from "common/mixin"

import detailNavBar from "./childComps/DetailNavBar"
import detailSwiper from "./childComps/DetailSwiper"
import detailBaseInfo from "./childComps/DetailBaseInfo"
import detailShopInfo from "./childComps/DetailShopInfo"
import detailGoodsInfo from "./childComps/DetailGoodsInfo"
import detailParamInfo from "./childComps/DetailParamInfo"
import detailCommentInfo from "./childComps/DetailCommentInfo"
import detailBottomBar from "./childComps/DetailBottomBar"

import scroll from "components/common/scroll/Scroll"
import backTop from "components/content/backTop/BackTop"

import goodsList from "components/content/goods/GoodsList"

import {getDetail,getRecommend,Goods,Shop,GoodsParam} from "network/detail"

export default {
    name:"Detail",
    components:{
        detailNavBar,
        detailSwiper,
        detailBaseInfo,
        detailShopInfo,
        detailGoodsInfo,
        detailParamInfo,
        detailCommentInfo,
        detailBottomBar,
        scroll,
        backTop,
        goodsList,
    },
    data(){
        return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            goodsParam:{},
            commentInfo:{},
            commends:[],
            offSetTopY:[],
            getThemeTopY:null,
            isShowBack:false
        }
    },
    mixins:[itemListenerMixin],
    created(){
        // 获取当前商品ID
        this.iid = this.$route.params.iid;

        // 获取详情信息
        this.getDetail();

        // 获取推荐信息
        this.getRecommend();

        this.getThemeTopY =debounce(()=>{
            this.offSetTopY=[];

            this.offSetTopY.push(0);
            this.offSetTopY.push(this.$refs.param.$el.offsetTop);
            this.offSetTopY.push(this.$refs.comment.$el.offsetTop);
            this.offSetTopY.push(this.$refs.commend.$el.offsetTop);
        },100)
    },
    destroyed(){
        // 取消总线上的事件
        this.$bus.$off("imgLoad",this.itemImgListener);
    },
    methods:{
        getDetail(){
            getDetail(this.iid).then((res)=>{
                const result = res.result;
                // 获取轮播图
                this.topImages = result.itemInfo.topImages;
                // 获取商品信息
                this.goods = new Goods(result.itemInfo,result.columns,result.shopInfo.services);
                // 获取商店信息
                this.shop = new Shop(result.shopInfo);
                // 获取详情信息
                this.detailInfo = result.detailInfo;
                // 获取商品参数信息
                this.goodsParam = new GoodsParam(result.itemParams.info,result.itemParams.rule);
                // 获取评论信息
                if(result.rate.cRate !== 0){
                    this.commentInfo = result.rate.list[0];
                }
            })
        },
        getRecommend(){
            getRecommend().then(res=>{
                this.commends = res.data.list;
            });
        },
        imgLoad(){
            this.$refs.scroll.refresh();

            // 图片加载完成后，获取组件的正确的高度；
            this.getThemeTopY();
        },
        titleClick(index){
            this.$refs.scroll.scrollTo(0,-(this.offSetTopY[index]),100);
        },
        scrollContent(position){
            this.isShowBack = (-position.y)>1000?true:false;

            let y =-position.y;
            for(let i=this.offSetTopY.length-1;i>=0;i--){
                if(y>=this.offSetTopY[i]){
                    this.$refs.nav.currentIndex = i;
                    break;
                }
            }
        },
        btClick(){
            this.$refs.scroll.scrollTo(0,0);
        },
        addToCart(){
            const product ={};
            product.image = this.topImages[0];
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.price = this.goods.realPrice;
            product.iid = this.iid;

            this.$store.dispatch("addToCart",product).then(res=>{
                this.$toast.showToast(res,2000);
            });
        }
    }
}

</script>

<style scoped>
    #detail{
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }

    .detailNav{
        position: relative;
        z-index: 9;
        background-color: white;
    }

    .content{
        height: calc(100% - 44px - 49px);
    }
</style>
