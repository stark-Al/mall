<template>
  <div class="goodsList">
      <goodsListItem v-for="item in goods" :key="item.id" :goodsItem="item"></goodsListItem>
  </div>
</template>

<script>
import goodsListItem from "./GoodsListItem"

export default {
    props:{
        goods:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    components:{
        goodsListItem
    }
}

</script>

<style scoped>
    .goodsList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>
