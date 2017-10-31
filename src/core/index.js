import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'

// 静态方法
// Vue.config
// Vue.util = {}
// Vue.set = set
// Vue.delete = del
// Vue.nextTick = nextTick
// Vue.options = {}
// Vue.options._base = Vue
initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

Vue.version = '2.4.2'

export default Vue
