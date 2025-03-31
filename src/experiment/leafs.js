/**
 * Leafs
 * @module experiment/radialgradient
 * @see module:experiment/base
 */
import experiment from './base'

export const leafs = experiment('leafs',{init(target){
    this.fromUri('./static/html/leafs.html', target)
    }})
    .expose
