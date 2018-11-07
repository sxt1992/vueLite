// Vue.prototype._init = function (options?: Object) {}
import { initMixin } from './init'
// Vue.prototype.$data
// Vue.prototype.$props
// Vue.prototype.$set = set
// Vue.prototype.$delete = del
import { stateMixin } from './state'
// Vue.prototype.$nextTick = function (fn: Function) { }
// Vue.prototype._render = function (): VNode { }
// Vue.prototype._s = _toString
// Vue.prototype._v = createTextVNode
// Vue.prototype._n = toNumber
// Vue.prototype._e = createEmptyVNode
// Vue.prototype._q = looseEqual
// Vue.prototype._i = looseIndexOf
// Vue.prototype._m = function () { }
// Vue.prototype._o = function () { }
// Vue.prototype._f = function resolveFilter(id) { }
// Vue.prototype._l = function () { }
// Vue.prototype._t = function () { }
// Vue.prototype._b = function () { }
// Vue.prototype._k = function () { }
import { renderMixin } from './render'
// Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component
// Vue.prototype.$once = function (event: string, fn: Function): Component
// Vue.prototype.$off = function (event?: string, fn?: Function): Component {}
// Vue.prototype.$emit = function (event: string): Component {}
import { eventsMixin } from './events'
// Vue.prototype._mount = function () { }
// Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) { }
// Vue.prototype._updateFromParent = function () { }
// Vue.prototype.$forceUpdate = function () { }
// Vue.prototype.$destroy = function () { }
import { lifecycleMixin } from './lifecycle'

function Vue(options) {
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
