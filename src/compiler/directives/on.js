/* @flow */

import { warn } from 'core/util/index'

export default function on (el: ASTElement, dir: ASTDirective) {
  el.wrapListeners = (code: string) => `_g(${code},${dir.value})`
}
