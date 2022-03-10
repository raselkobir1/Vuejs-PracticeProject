import Vue from "vue";
import Router from "vue-router";
import PublicLayout from "@scripts/Layouts/PublicLayout.vue";



Vue.use(Router);


let router = new Router({
    mode: "history",
    routes: [
        {
            path: "/", name: "public-layout", component:PublicLayout,
            children: [
                //others route
            ]
        }
    ]
});

router.beforeEach((to, from, next) =>{
    console.log("router to from :",to,from);
    next();
})
export default router;