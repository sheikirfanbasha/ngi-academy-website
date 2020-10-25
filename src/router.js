import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    mode: "history",
    routes: [
        {
            path: "/courses",
            name: "Courses",
            component: () => import(/* webpackChunkName: "course" */ "./components/Courses.vue"),
            children: [
                {
                    path: ":id",
                    name: "courseDetails",
                    component: () => import(/* webpackChunkName: "course" */ "./components/Course.vue")
                }
            ]
        },
        {
            path: "/about",
            name: "about",
            component: () => import(/* webpackChunkName: "about" */ "./components/About.vue")
        },
        {
            path: "/admin",
            name: "admin",
            component: () => import(/* webpackChunkName: "admin-corner" */ "./components/AdminCorner.vue")
        }
    ]
})
