<template>
  <div>
      <navbar>
          <div slot="left" class="back" @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="title">
              <div v-for="(item,index) in titles" :key="index" class="titleItem" 
                    :class="{active:index===currentIndex}"
                    @click="titleClick(index)">
                  {{item}}
              </div>
          </div>
      </navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar"

export default {
    components:{
        navbar
    },
    data(){
        return{
            titles:["商品","参数","评论","推荐"],
            currentIndex:0
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex = index;
            this.$emit("titleClick",this.currentIndex);
        },
        backClick(){
            this.$router.back();
        }
    }
}

</script>

<style scoped>
    .title{
        display: flex;
        justify-content: space-evenly;
    }

    .back img{
        margin-top: 13px;
    }

    .active{
        color: var(--color-high-text);
    }
</style>
