<template>
  <div class="shopInfo">
      <div class="shopTop">
          <img :src="shop.logo" alt="">
          <span class="shopName">{{shop.name}}</span>
      </div>
      <div class="shopMiddle">
          <div class="shopMiddleLeft">
              <div class="infoSell">
                  <div class="sellCount">
                      {{shop.sells | sellCountFilter}}
                  </div>
                  <div class="sellText">
                      总销量
                  </div>
              </div>
              <div class="infoGoods">
                  <div class="goodsCount">
                      {{shop.goodsCount}}
                  </div>
                  <div class="goodsText">
                      全部宝贝
                  </div>
              </div>
          </div>
          <div class="shopMiddleRight">
              <table>
                  <tr v-for="(item,index) in shop.score" :key="index">
                      <td>{{item.name}}</td>
                      <td class="score" :class="{'scoreBetter':item.isBetter}">{{item.score}}</td>
                      <td class="better" :class="{'betterMore':item.isBetter}">{{item.isBetter?"高":"低"}}</td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="shopBottom">
          <div class="enterShop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        shop:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    filters:{
        sellCountFilter:function(value){
            if(value<10000) return value;
            return (value/10000).toFixed(1)+'万';
        }
    }
}

</script>

<style scoped>
    .shopInfo{
        margin-top: 15px;
        padding: 0 8px 15px 8px;
        display: flex;
        flex-direction: column;
    }

    .shopTop{
        margin:10px 0px;
        position: relative;
        flex: 1;
    }

    .shopTop img{
        width: 60px;
        height: 60px;
        float: left;
        border-radius: 50%;
        box-shadow: 0 0 3px 1px;
    }

    .shopTop .shopName{
      position: absolute;
      left: 80px;
      top: 20px;
      font-size: 20px;
    }

    .shopMiddle{
        flex: 3;
        margin: 20px 10px;
        color: #222;
    }

    .shopMiddleLeft{
        border-right: 1px solid #d4d4d4;
        float: left;
    }

    .infoSell{
        padding:5px 10px;
        float: left;
    }

    .sellCount{
        padding: 8px 0px;
        font-size: 20px;
        text-align:center;
    }

    .sellText{
        padding: 8px 0px;
        font-size: 16px;
    }

    .infoGoods{
        padding:5px 10px;
        float: left;
    }

    .goodsCount{
        padding: 8px 0px;
        font-size: 20px;
        text-align:center;
    }

    .goodsText{
        padding: 8px 0px;
        font-size: 16px;
    }

    
    .shopMiddleRight{
        float:left;
        text-align: center;
    }

    .shopMiddleRight table tr td{
        padding:3px 5px;
    }

    .score{
        color:rgb(26,200,52);
    }

    .scoreBetter{
        color:var(--color-high-text);
    }

    .better{
        background-color:rgb(26,200,52);
        color: white;
    }

    .betterMore{
        background-color:var(--color-high-text);
    }

    .shopBottom{
        flex: 1;
        text-align:center;
        font-size: 18px;
    }

    .enterShop{
        margin: 0 100px;
        padding: 5px 0;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        color: #222;
    }
</style>
