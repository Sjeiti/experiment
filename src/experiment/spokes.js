/**
 * Webgl noise spokes
 * @module experiment/spiralmap
 * @see module:experiment/base
 */
import webgl from './webgl'
let inst = webgl('spokes','/static/glsl/spokes.glsl',{
  offset: { x: 100, y: 100 }
})
export const spokes = inst.expose
