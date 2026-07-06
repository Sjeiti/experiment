/**
 * Leafs
 * @module experiment/condens
 * @see module:experiment/base
 */
import experiment from './base'

export const condens = experiment('condens',{init(target){
    this.fromUri('./static/html/condens.html', target)
    }})
    .expose
