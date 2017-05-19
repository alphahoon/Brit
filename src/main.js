import Vue from 'vue'
import store from './store.js'
import App from './App.vue'

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
