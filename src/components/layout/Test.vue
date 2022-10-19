<template>
<div class="main">
  <div class="container" >
    <div
        v-for="(item,index) in initList"
        class="item" :style="initList[index].style"
        draggable="true"
        @dragstart="handleDragStart"
        @dragover="handleDrop"
        @mousemove="handleMove"
        @mousedown="handleDown"
        @mouseup="handleUp"
        :data-index="index"
        :key="index">
        <div>{{item.value}}</div>
    </div>
  </div>
</div>
</template>
//        @mouseenter="handleIn"
//@mouseout="handleOut"
//
// TODO 添加挪动
<script setup>
import { onMounted,reactive,ref} from 'vue'
const initList = reactive([])

// 是否拖动
const dragging = ref(false)
// 是否被抓住
const take = ref(false)
// 当前拖动的元素
const curItem = reactive({})
const curIndex = ref(-1)

onMounted(() => {
  for (let i = 0;i<400;i++){
    initList.push({
      'value':i+1,
      'style':{
        'border': '1px solid black',
      }
    })

  }
})

function handleDown(e){
  let index = e.target.dataset.index;
  curIndex.value = index
  take.value = true

  const move = (e)=>{
    console.log(e)
    console.log("抓住"+index)
  }
  const up = (e)=>{
    console.log(e)
    console.log("松手了")
    document.removeEventListener("mousemove",move)
    document.removeEventListener("mouseup",up)
  }
  document.addEventListener("mousemove",move)
  document.addEventListener("mouseup",up)

}

</script>

<style scoped>
.container{
  position: relative;
  display: inline-grid;
  grid-template-columns: repeat(20,1fr);
  grid-template-rows: repeat(20,1fr);
  width: 500px;
  height: 500px;
}

</style>