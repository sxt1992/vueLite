/* not type checking this file because flow doesn't play well with Proxy */

// object, 返回默认配置
import config from 'core/config'
/**
* warn 警告
*
* makeMap 生成 字符串转对象,检测属性是否存在
* e.g.
* var Func = makeMap('tao,xue');
* Func('tao')  // return true
* Func('Tao', true)  // 忽略属性大小写
*/
import { warn, makeMap } from '../util/index'

let initProxy

export { initProxy }
