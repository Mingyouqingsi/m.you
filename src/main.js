// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from  './router'
import store from './store'
// import Intelligent from  './components/Intelligent/Intelligent.vue'

import './mock/mockServer'

import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
// Vue.component('Intelligent',Intelligent);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render : h => h(App),
  // function (createElement){
  //   return createElement(app)
  // }
  router,
  store
})
