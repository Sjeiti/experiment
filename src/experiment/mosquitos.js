/**
 * Mosquitos
 * @module experiment/mosquitos
 * @see module:experiment/base
 */
import experiment from './base'

export const mosquitos = experiment('mosquitos',{init(target){
    this.fromUri('./static/html/mosquitos.html', target)
    }})
    .expose
