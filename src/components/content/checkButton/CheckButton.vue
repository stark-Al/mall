<template>
  <div class="checkButton">
      <img src="~assets/img/cart/tick.svg" alt="" :class="{'check':isChecked}" >
  </div>
</template>

<script>
export default {
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    }
}

</script>

<style scoped>
    .checkButton{
        border-radius: 50%;
        border: 2px solid #aaa;
    }

    .checkButton img{
        border-radius: 50%;
    }

    .check{
        background-color: red;
        border-color: red;
    }
</style>
