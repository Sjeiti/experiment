/**
 * Circles
 * @see module:experiment/base
 */
import experiment from './base'

export const circles = experiment('circles',{init(target){
    this.fromUri('./static/html/circles.html', target)
  }})
  .expose
