// 创建一个新的 store 实例

const componentStore = {
    state:{
        componentStoreList:[],
        curComponent:null,
        curComponentIndex:null
    },
    mutations:{
        // 解构赋值取出state 的数据  // index 参数
        doNull({curComponent},index){
            if (this.state.curComponentIndex === index) {
                console.log("")
            }
        }
    }

}

export default componentStore;



