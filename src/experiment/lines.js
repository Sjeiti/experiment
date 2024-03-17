/**
 * Webgl lines
 * @see module:experiment/base
 */
import webgl from './webgl'
let inst = webgl('lines','/static/glsl/lines.glsl',{
  images: {
    u_image0: '/static/img/crystal0.jpg'
  },
  offset: { x: 400, y: 400 }
})
export const lines = inst.expose
