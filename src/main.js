import Vue from 'vue'
import App from 'SRC/App'

Vue.config.productionTip = false

import 'boxicons'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'SCSS/app.scss'

import vuetify from 'PLUGINS/vuetify'

new Vue({
    vuetify,
    render: h => h(App),
}).$mount('#app')
