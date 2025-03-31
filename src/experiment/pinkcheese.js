/**
 * Pink cheese
 * @see module:experiment/base
 */
import experiment from './base'
//import html from '../static/html/pinkcheese.html'

export const pinkcheese = experiment('pinkcheese',{init(target){
    this.fromUri('./static/html/pinkcheese.html', target)
  }})
    .expose
