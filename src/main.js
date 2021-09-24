import Vue from 'vue'
import App from 'SRC/App'

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'SCSS/app.scss'

new Vue({
  render: h => h(App),
}).$mount('#app')
