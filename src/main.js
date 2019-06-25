import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')
