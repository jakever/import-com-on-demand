import Vue from 'vue'
import App from './App.vue'

/*---------------------------------------全局引入-------------------------------------------*/
// import HARUI from 'har-awesome-ui'
// import 'har-awesome-ui/lib/css/index.css'
// Vue.use(HARUI)

/*---------------------------------------按需加载-------------------------------------------*/
import { Button, Input } from 'har-awesome-ui'
Vue.use(Button)
Vue.use(Input)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
