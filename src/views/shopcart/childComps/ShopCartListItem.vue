<template>
  <div class="shopItem">
      <div class="itemSelector">
          <checkButton :isChecked="product.checked" @click.native="checkClick"></checkButton>
      </div>
      <div class="itemImg">
          <img :src="product.image" alt="">
      </div>
      <div class="itemInfo">
          <div class="itemTitle">{{product.title}}</div>
          <div class="itemDesc">{{product.desc}}</div>
          <div class="infoBottom">
              <div class="itemPrice left">￥{{product.price}}</div>
              <div class="itemCount right">x{{product.count}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import checkButton from 'components/content/checkButton/CheckButton'

export default {
    props:{
        product:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    components:{
        checkButton
    },
    methods:{
        checkClick(){
            this.product.checked = !this.product.checked;
        }
    }
}

</script>

<style scoped>
    .shopItem{
        width:100%;
        display: flex;
        font-size: 0;
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }

    .itemSelector{
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .itemTitle, .itemDesc{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .itemImg{
        padding: 5px;
    }

    .itemImg img{
        width: 80px;
        height: 100px;
        display: block;
        border-radius: 5px;
    }

    .itemInfo{
        font-size: 17px;
        color: #333;
        padding: 5px 10px;
        position: relative;
        overflow: hidden;
    }

    .itemInfo .itemDesc{
        font-size: 14px;
        color: #666;
        margin-top: 15px;
    }

    .infoBottom{
        margin-top: 10px;
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
    }

    .infoBottom .itemPrice{
        color: orangered;
    }
</style>
