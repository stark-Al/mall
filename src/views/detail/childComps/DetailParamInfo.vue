<template>
  <div class="paramInfo" v-if="Object.keys(paramInfo).length !== 0">
      <table class="infoSize" 
      v-for="(table,index) in paramInfo.sizes" :key="index">
        <tr v-for="(tr,indey) in table" :key="indey">
            <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
        </tr>
      </table>
      <table class="infoParam">
          <tr v-for="(info,index) in paramInfo.infos" :key="index">
              <td class="infoParamKey">{{info.key}}</td>
              <td class="paramValue">{{info.value}}</td>
          </tr>
      </table>
      <div class="infoImg" v-if="paramInfo.image.length !== 0">
          <img :src="paramInfo.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        paramInfo:{
            type:Object,
            default(){
                return {};
            }
        }
    }
}

</script>

<style scoped>
    .paramInfo{
        display: block;
        border-bottom: 5px solid #f2f5f8;
    }

    table{
        width: 100%;
        margin-bottom: 10px;
        border-collapse: collapse;
        font-size: 12px;
        border-spacing: 0;
        line-height: 18px;
    }

    table>tr{
        vertical-align: middle;
    }

    tr{
        display: table-row;
        border-color: inherit;
    }

    td{
        padding: 8px;
        border: 1px solid #dadada;
        text-align: left;
        margin: 0;
        vertical-align: baseline;
        display: table-cell;
    }

    td:first-child{
        width: 72px;
    }
</style>
