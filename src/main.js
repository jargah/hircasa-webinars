import Vue from 'vue'
import App from 'SRC/App'

Vue.config.productionTip = false

import 'boxicons'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'SCSS/app.scss'

import vuetify from 'PLUGINS/vuetify'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax, {
  // options here
})

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
Vue.use(VueSweetalert2)


Vue.directive('numeric',  {
	bind: function (el, binding, vnode) {
		el.onkeydown = function (event) {
			//delete, backpsace, tab, escape, enter, point, point
			let special = [46, 8, 9, 27, 13, 190, 110,45]

			if(event.keyCode === 69) {
				event.preventDefault()
			}
			else if(!event.shiftKey && ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) || special.indexOf(event.keyCode) !== -1 )  {
				return true
			}
			else {
				event.preventDefault()
			}
		}
	},
	unbind: function (el) {
		document.body.removeEventListener('onkeydown', el.clickOutsideEvent)
	}
})

new Vue({
    vuetify,
    render: h => h(App),
}).$mount('#app')
