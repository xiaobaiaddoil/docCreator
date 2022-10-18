import { createRouter, createWebHashHistory} from "vue-router";

const routes =[
    {
        path:'/',component:()=> import("@/views/Home.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;