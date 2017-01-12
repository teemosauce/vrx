import Vue from 'vue'
import VueX from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import state from './modules/app'

Vue.use(VueX)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug


export default new VueX.Store({
	state,
	mutations,
	actions,
	debug
})