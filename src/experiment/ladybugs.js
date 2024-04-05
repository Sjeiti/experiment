/**
 * Ladybugs
 * @module experiment/radialgradient
 * @see module:experiment/base
 */
import experiment from './base'
import html from '../static/html/ladybugs.html'

export const ladybugs = experiment('ladybugs',{init(target){
    this.fromSrc(html, target)
  }})
    .expose
