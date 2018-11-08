/* @flow */

import config from '../config'

export function handleError (err: Error, vm: any, info: string) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info)
  } else {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(err)
    } else {
      throw err
    }
  }
}
