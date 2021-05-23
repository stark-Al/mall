<template>
  <div class="bottomBar">
      <div class="checkArea">
          <checkButton class="checkButton" :isChecked="isSelectAll" @click.native="checkClick"></checkButton>
          <span>全选</span>
      </div>

      <div class="price">
          合计：{{totalPrice}}
      </div>

      <div class="calculate">
          去计算：{{checkLength}}
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import checkButton from 'components/content/checkButton/CheckButton'

export default {
    components:{
        checkButton
    },
    computed:{
        ...mapGetters({
            cartList:'cartList'
        }),
        totalPrice(){
            return "￥"+this.cartList.filter(item=>{
                return item.checked;
            }).reduce((preValue,item)=>{
                return preValue+item.count*item.price;
            },0).toFixed(2);
        },
        checkLength(){
            return this.cartList.filter(item=>{
                return item.checked;
            }).length;
        },
        isSelectAll(){
            if(this.cartList.length === 0) return false;
            return !this.cartList.find(item => !item.checked);
        }
    },
    methods:{
        checkClick(){
            if(this.isSelectAll){
                this.cartList.forEach(item => {
                    item.checked = false;
                });
            }else{
                this.cartList.forEach(item => {
                    item.checked = true;
                });
            }
        }
    }
}

</script>

<style scoped>
    .bottomBar{
        position: fixed;
        bottom: 49px;
        height: 40px;

        display: flex;
        align-items: center;
        width: 100%;
        font-size: 20px;
        background-color:rgba(238, 238, 238,0.3);
    }

    .checkArea{
        margin-left: 5px;
        margin-right: 20px;
        text-align:center;
        /* width: 100px; */

        display: flex;
    }

    .checkButton{
        width: 25px;
        height: 25px;
        margin:5px 0px;
    }

    .checkArea span{
        margin: auto 5px;
    }

    .price{
        margin: auto 10px;
    }

    .calculate{
        flex-grow: 1;
        height: 100%;
        text-align: center;
        padding-top: 10px;

        background-color: red;
        color: #f6f6f6;
    }
</style>
