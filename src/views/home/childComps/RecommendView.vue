<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item,index in recommend" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
          <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        recommend:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}

</script>

<style scoped>
    .recommend{
        display:flex;
        width: 100%;
        text-align: center;
        font-size: 12px;

        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
    }

    .recommend-item{
        flex: 1;
    }

    .recommend-item img{
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }
</style>
