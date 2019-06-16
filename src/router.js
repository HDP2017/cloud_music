import Main from './Main.vue'
import Home from './Home.vue'
import List from './List.vue'
import Social from './Social.vue'
import Play from './components/Play.vue'
import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const router = new VueRouter({
    mode : 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            children: [
                {path: 'home', name: 'home', component: Home},
                {path: 'list', name: 'list', component: List},
                {path: 'social', name: 'social', component: Social}
            ]
        },
        {path: 'play', name: 'play', component: Play}
    ]
});
export default router
