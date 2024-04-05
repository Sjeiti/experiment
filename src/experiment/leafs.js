/**
 * Leafs
 * @module experiment/radialgradient
 * @see module:experiment/base
 */
import experiment from './base'

export const leafs = experiment('leafs',{init(target){
      this.target = target
      this.fromURI('/static/html/leafs.html')
    }})
    .expose
