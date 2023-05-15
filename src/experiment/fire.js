/**
 * Fire in webgl
 * @module experiment/fire
 * @see module:experiment/base
 */
import webgl from './webgl'
const inst = webgl('fire','/static/glsl/fire.glsl')
export const fire = inst.expose
