<template>
  <div class="goodsInfo" v-if="Object.keys(detailInfo).length !== 0">
      <div class="infoDesc">
          <div class="start">详情</div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>
      </div>
      <div class="infoKey">{{detailInfo.detailImage[0].key}}</div>
      <div class="infoList">
          <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" alt="" :key="index" @load="imgLoad">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    data(){
        return{
            counter:0,
            imagesLength:0
        }
    },
    methods:{
        imgLoad(){
            if(++this.counter == this.imagesLength){
                this.$emit("imgLoad");
            }
        }
    },
    watch:{
        detailInfo(){
            this.imagesLength = this.detailInfo.detailImage[0].list.length;
        }
    }
}

</script>

<style scoped>
    .goodsInfo{
        width: 100%;
        min-height: 5rem;
        padding-top: 0.12rem;
        padding-bottom: 0.34rem;
        border-bottom: 5px solid #f2f5f8;
    }

    .start{
        padding: 0 30%;
        text-align: center;
        color: #999;
        margin-bottom: 10px;
        background: #eee;
        border-top: 1px solid rgba(0,0,0,.1);
        height: 20px;
        content: '\20';
        display: block;
    }

    .desc{
        line-height: 28px;
        padding: 10px;
        background: #fff;
        color: #051B28;
        text-align: left;
        overflow: hidden;
        font-size: 16px;
        font-weight: 400;
    }

    .end{
        background: #eee;
        border-top: 1px solid rgba(0,0,0,.1);
        height: 10px;
        content: '\20';
        display: block;
    }

    .infoKey{
        background: #FFF;
        font-weight: 400;
        height: 34px;
        line-height: 34px;
        position: relative;
        padding: 6px 0 0 12px;
        font-size: 14px;
        color: #666;
        border-left: 3px solid #FF0036;
    }

    .infoList img{
        display: block;
        margin: 0 auto;
        /* vertical-align: top; */
        max-width: 100%;
    }
</style>
