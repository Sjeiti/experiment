/**
 * Melons
 * @see module:experiment/base
 */
import experiment from './base'

export const melons = experiment('melons',{init(target){
    this.fromUri('./static/html/melons.html', target)
  }})
  .expose
