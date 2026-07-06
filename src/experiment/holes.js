/**
 * Leafs
 * @module experiment/radialgradient
 * @see module:experiment/base
 */
import experiment from './base'

export const holes = experiment('holes',{init(target){
    this.fromUri('./static/html/holes.html', target)
    }})
    .expose
