/* @flow */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content: string, encoded: string): boolean {
  const div = document.createElement('div')
  div.innerHTML = `<div a="${content}"/>`
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
export const shouldDecodeNewlines = shouldDecode('\n', '&#10;')
