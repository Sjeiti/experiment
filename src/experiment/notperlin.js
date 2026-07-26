/**
 * Not Perlin
 * @module experiment/notperlin
 * @see module:experiment/base
 */
import experiment from './base'

export const notperlin = experiment('notperlin',{init(target){
    this.fromUri('./static/html/notperlin.html', target)
    }})
    .expose
