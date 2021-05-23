<template>
      <Swiper class="detailSwiper">
        <SwiperItem v-for="(item,index) in topImages" :key="index" class="swiperItem">
            <img :src="item" alt="">
        </SwiperItem>
      </Swiper>
</template>

<script>
import  {Swiper, SwiperItem} from "components/common/swiper"

export default {
    components:{
        Swiper, SwiperItem
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}

</script>

<style scoped>
    .detailSwiper{
        height: 300px;
        overflow: hidden;
    }
</style>
