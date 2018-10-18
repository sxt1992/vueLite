/* @flow */

import config from '../config'
import { noop } from 'shared/util'

export let warn = noop
export let tip = noop
export let formatComponentName: Function = (null: any) // work around flow check
