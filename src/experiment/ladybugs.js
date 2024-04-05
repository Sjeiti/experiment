/**
 * Ladybugs
 * @module experiment/radialgradient
 * @see module:experiment/base
 */
import experiment from './base'

export const ladybugs = experiment('ladybugs',{init(target){
    this.target = target
    this.fromURI('/static/html/ladybugs.html')
  }})
    .expose
