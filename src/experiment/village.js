/**
 * Village
 * @module experiment/village
 * @see module:experiment/base
 */
import experiment from './base'

export const village = experiment('village',{init(target){
    this.fromUri('./static/html/village.html', target)
    }})
    .expose
