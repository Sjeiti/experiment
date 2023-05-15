/**
 * Clouds
 * @module experiment/clouds
 * @see module:experiment/base
 */
import webgl from './webgl'

const inst = webgl('clouds','/static/glsl/clouds.glsl')
export const clouds = inst.expose