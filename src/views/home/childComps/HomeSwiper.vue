<template>
  <div>
      <Swiper>
          <Swiper-item v-for="item in banners" :key="item.id">
              <a :href="item.link">
                  <img :src="item.image" alt="">
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
    components:{
        Swiper, SwiperItem
    }
}

</script>

<style scoped>

</style>
