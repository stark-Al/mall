<template>
  <div>
      <Swiper>
          <Swiper-item v-for="item in banners" :key="item.id">
              <a :href="item.link">
                  <img :src="item.image" alt="" @load="homeSwiperImgLoad">
              </a>
          </Swiper-item>
      </Swiper>
  </div>
</template>

<script>
import  {Swiper, SwiperItem} from "components/common/swiper"

export default {
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            isLoad:false,
        }
    },
    components:{
        Swiper, SwiperItem
    },
    methods:{
        homeSwiperImgLoad(){
            if(!this.isLoad){
                this.isLoad = !this.isLoad;
                this.$emit("homeSwiperImgLoad");
            }
        }
    }
}

</script>

<style scoped>

</style>
