/**
 * Radial gradients
 * @module experiment/radialgradient
 * @see module:experiment/base
 */
import experiment from './base'
import {animate} from '../signal/signals'
import {random,rnd,presetJava,presetLehmer,presetNumeralRecipes} from '../math/lcg'
import {noise} from '../math/perlin'

presetLehmer(true)
presetNumeralRecipes()
presetJava()

let target
let input

const array = num => new Array(num).fill(0)
const speed = 0.000005
const speedScale = Math.PI
const scale = 400
const percent = now => {
  const n = noise(random()*speedScale + now*speed, random()*speedScale) - 0.5
  return n*scale + 50 + '%'
}
const clr = () => '#'+('00000'+(random()*(1<<24)|0).toString(16)).slice(-6)

const getRange = (clr, num=10) => {
  const divide = 0.5 + 2*random()
  const parts = new Array(num+1).fill(0).map((o,i)=>(Math.pow(i/num, divide))*100)
  const [clrIn, clrOut] = random()>0.5?[clr, 'transparent']:['transparent', clr]
  return array(num).map((o,i)=>`${clrIn} ${parts[i]}%, ${clrOut} ${parts[i+1]}%`).join(', ')
}

function setColor(deltaT, millis){
  random(input.value, 222)
  target.style.background = array(3+random()*4<<0).map(() =>
      `radial-gradient(circle at ${percent(millis)} ${percent(millis)}, ${getRange(clr(), 2+random()*random()*20<<0)})`).join(',')
}

function init(_target){

  target = _target

  input = document.createElement('input')
  input.type = 'number'
  input.value = 8191
  Object.assign(input.style, {
    border: '0'
    ,outline: 'none'
    ,background: 'transparent'
    ,width: '100%'
    ,height: '4rem'
    ,verticalAlign: 'top'
    ,fontFamily: 'courier'
    ,textAlign: 'center'
    ,fontSize: '2rem'
    ,fontWeight: 'bold'
  })
  // input.addEventListener('change', setColor)
  target.appendChild(input)

  target.addEventListener('click', ()=>input.value = random()*1E9<<0)

  animate.add(setColor)
}

export default experiment('radialgradient',{init}).expose
