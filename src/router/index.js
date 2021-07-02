import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Qrcodereader from '@/views/Qrcodereader'
import Qrscanner from '@/views/Qrscanner'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/qrcodereader',
      name: 'Qrcodereader',
      component: Qrcodereader
    },{
      path: '/qrscanner',
      name: 'Qrscanner',
      component: Qrscanner
    }
  ]
})