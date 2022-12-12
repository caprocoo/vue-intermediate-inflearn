import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/index.js'
import {store} from './store/index.js'
import vuetify from './plugins/vuetify.js'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,

  vuetify,
  store
}).$mount('#app')
