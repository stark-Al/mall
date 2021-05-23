<template>
  <div v-if="Object.keys(goods).length !== 0" class="baseInfo">
      <div class="infoTitle">{{goods.title}}</div>
      <div class="infoPrice">
          <span class="nPrice">{{goods.newPrice}}</span>
          <span class="oPrice">{{goods.oldPrice}}</span>
          <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
      </div>
      <div class="infoOther">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="infoService">
          <span class="infoServiceItem" v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon" alt="">
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}

</script>

<style scoped>
    .baseInfo{
        margin-top: 15px;
        padding: 0 8px;
        color: #999;
        border-bottom: 5px solid #f2f5f8;
    }

    .infoTitle{
        color: #222;
    }

    .infoPrice{
        margin-top: 10px;
    }

    .infoPrice .nPrice{
        font-size: 24px;
        color: var(--color-high-text);
    }

    .infoPrice .oPrice{
        font-size: 13px;
        margin-left: 5px;
        text-decoration: line-through;
    }

    .infoPrice .discount{
        color: white;
        background-color:var(--color-high-text);
        border-radius: 20%;
        padding: 2px;
        margin-left: 10px;
    }

    .infoOther{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        font-size: 14px;
        border-bottom: 1px solid #f2f5f8;
    }

    .infoService{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }

    .infoService .infoServiceItem{
        margin:20px 0;
        color:#666666;
    }

    .infoService img{
        height:15px;
        width:15px;
        float: left;
    }
</style>
