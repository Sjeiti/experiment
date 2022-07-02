/**
 * Radial gradients
 * @module experiment/radialgradient
 * @see module:experiment/base
 */
import experiment from './base'
import {animate} from '../signal/signals'
import {random, rnd} from '../math/lcg'
import {noise} from '../math/perlin'

let target
let input

const array = num => new Array(num).fill(0)
// const percent = () => Math.round(-50 + random()*200) + '%'
// const percent = n => Math.round(-50 + (n||random())*200) + '%'
const speed = 0.00001
const percent = now => {
  // const n = noise(now*speed, rnd())
  const n = noise(rnd() + now*speed, rnd())
  return (-100 + n*300) + '%'
}
const clr = () => '#'+('00000'+(random()*(1<<24)|0).toString(16)).slice(-6)

const getRange = (clr, num=10) => {
  const part = 100/num
  return array(num).map((o,i)=>`${clr} ${(i)*part}%, transparent ${(1+i)*part}%`).join(', ')
}

function setColor(){
  random(input.value, 222)
  const now = Date.now()
  target.style.background = array(3+random()*4<<0).map(() =>
      `radial-gradient(circle at ${percent(now)} ${percent(now)}, ${getRange(clr(), 2+random()*random()*30<<0)})`).join(',')
}

function init(_target){

  target = _target

  input = document.createElement('input')
  input.type = 'number'
  input.value = 223
  Object.assign(input.style, {
    border:0
    ,background:'transparent'
    ,width:'100%'
    ,height:'100%'
    ,verticalAlign:'top'
  })
  input.addEventListener('change', setColor)

  _target.appendChild(input)

  setColor()
  animate.add(setColor)
}

export default experiment('radialgradient',{init}).expose
