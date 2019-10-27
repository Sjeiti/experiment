/**
 * Perlin noise lines
 * @module experiment/lines
 * @see module:experiment/base
 */
import webgl from './webgl'
let inst = webgl('knottywood','/static/glsl/lines.glsl',{
  images: {
    u_image0: '/static/img/knottywood.jpg'
  }
})
export default inst.expose
