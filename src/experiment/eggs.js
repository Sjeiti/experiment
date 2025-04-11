/**
 * Eggs
 * @module experiment/eggs
 * @see module:experiment/base
 */
import experiment from './base'

export const eggs = experiment('eggs',{init(target){
    this.fromUri('./static/html/eggs.html', target)
    }})
    .expose
