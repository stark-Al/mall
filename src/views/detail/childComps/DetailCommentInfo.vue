<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="commentInfo">
      <div class="infoHeader">
          <div class="headerTitle">用户评价</div>
          <div class="headerMore">更多
          </div>
              <i class="arrowRight"></i>
      </div>
      <div class="infoUser">
          <img :src="commentInfo.user.avatar" alt="">
          <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="infoDetail">
          <p>{{commentInfo.content}}</p>
          <div class="infoOther">
              <span class="date">{{commentInfo.created | showFormatDate}}</span>
              <span>{{commentInfo.style}}</span>
          </div>
          <div class="infoImgs">
              <img :src="item" v-for="(item,index) in commentInfo.images" alt="" :key="index">
          </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from "common/util/utils"

export default {
    props:{
        commentInfo:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    filters:{
        showFormatDate(value){
            // 时间戳以秒计算，date对象构造函数需要传入 以毫秒为单位的参数；
            let date = new Date(value*1000);
            
            const fmtDate = formatDate(date,"yyyy/MM/dd hh:mm:ss");

            return fmtDate;
        }
    }
}

</script>

<style scoped>
    .commentInfo{
        padding: 5px 12px;
        color: #333;
        border-bottom: 5px solid #f2f5f8;
    }

    .infoHeader{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgba(0, 0, 1, 0.1);
    }

    .headerTitle{
        float: left;
        font-size: 15px;
    }

    .headerMore{
        float: right;
        margin-right: 10px;
        font-size: 13px;

    }
    
    .infoUser{
        padding: 10px 0 5px;
    }

    .infoUser img{
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }

    .infoUser span{
        position: relative;
        font-size: 15px;
        top: -15px;
        margin-left: 10px;
    }

    .infoDetail{
        padding: 0 5px 15px;
    }

    .infoDetail p{
        font-size: 14px;
        color: #777;
        line-height: 1.5;
    }

    .infoDetail .infoOther{
        font-size: 12px;
        color: #999;
        margin-top: 10px;
    }

    .infoDetail .date{
        margin-right: 8px;
    }

    .infoImgs{
        margin-top: 10px;
    }

    .infoImgs img{
        width: 70px;
        height: 70px;
        margin-right: 5px;
    }
</style>
