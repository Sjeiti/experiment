/**
 * Ladybugs
 * @module experiment/radialgradient
 * @see module:experiment/base
 */
import experiment from './base'

export const ladybugs = experiment('ladybugs',{init(target){
    this.fromUri('./static/html/ladybugs.html', target)
  }})
    .expose
