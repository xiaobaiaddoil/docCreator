<template>
  <div class="main">
    <div class="container" :style="props.GridStyle">
      <Item v-for="i in 400" >
        {{i}}
      </Item>
    </div>
  </div>
</template>

<script setup>
import Item from "./Item.vue";

const props = defineProps({
  HNum: {
    type: Number
  },
  VNum: {
    type: Number
  },
  GridStyle: {
    type:Object,
    default:{
      'width': '500px',
      'height': '500px',
      'display': "inline-grid",
      'grid-template-columns': ' repeat(20,1fr)',
      'grid-template-rows': 'repeat(20,1fr)',
    }
  }
})


</script>

<style scoped>
.main{
}

</style>