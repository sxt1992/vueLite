import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'

// 静态方法
// Vue.config
// Vue.util = {}
// Vue.set = set
// Vue.delete = del
// Vue.nextTick = nextTick
// Vue.options = {}
// Vue.options._base = Vue
initGlobalAPI(Vue)

Vue.version = '2.4.2'

export default Vue
