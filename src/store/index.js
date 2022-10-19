import { createStore } from "vuex";

import componentStore from "./container";

// 创建一个新的 store 实例
const store = createStore({
    state:{
        ...componentStore.state,
        count:0
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        ...componentStore.mutations
    },
});

export default store;
