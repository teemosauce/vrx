// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import My from './components/My'
import Index from './components/Index'
import Message from './components/Message'
import Discover from './components/Discover'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element);
Vue.use(VueRouter);

import store from './state/index'

const router = new VueRouter({
	routes:[{
		path: '/',
		component: Index
	},{
		path: '/index',
		component: Index
	},{
		path: '/discover',
		component: Discover
	},{
		path: '/message',
		component: Message
	},{
		path: '/my',
		component: My
	}]
})


/* eslint-disable no-new */
new Vue({
	router,
	el: '#app',
	template: '<App/>',
	store,
	components: {
		App
	}
})