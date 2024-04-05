/**
 * Leafs
 * @module experiment/radialgradient
 * @see module:experiment/base
 */
import experiment from './base'
import html from '../static/html/leafs.html'

export const leafs = experiment('leafs',{init(target){
    this.fromSrc(html, target)
    }})
    .expose
