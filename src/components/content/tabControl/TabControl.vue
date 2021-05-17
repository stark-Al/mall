<template>
  <div class="tabControl">
      <div v-for="(item,index) in titles" :key="index" class="tabControlItem"
        @click="tabControlClick(index)"
        :class="{active:currentIndex===index}">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        tabControlClick(index){
            this.currentIndex = index;
            this.$emit("tabClick",index);
        }
    }
}

</script>

<style scoped>
    .tabControl{
        display:flex;
        width: 100%;
        line-height: 40px;
        height: 40px;

        text-align: center;
        background-color: #fff;
    }

    .tabControlItem{
        flex: 1;
    }

    .tabControlItem span{
        padding: 10px;
    }

    .active{
        color: var(--color-high-text);
    }

    .active span {
        border-bottom: 3px solid var(--color-tint);
    }
</style>
