/**
 * Radial gradients
 * @module experiment/radialgradient
 * @see module:experiment/base
 */
import experiment from './base'
import {animate} from '../signal/signals'
import {random,rnd,presetJava} from '../math/lcg'
import {noise} from '../math/perlin'

presetJava()

let target
let input

const array = (num, map) => {
  const a = new Array(num).fill(0)
  return map?a.map(map):a
}
const percentDecimals = 2
const speed = 0.000005
const speedScale = Math.PI
const scale = 400
const state = []
const clr = () => '#'+('00000'+(random()*(1<<24)|0).toString(16)).slice(-6)

const getRange = (clr, num=10) => {
  const divide = 0.5 + 2*random()
  const parts = new Array(num+1).fill(0).map((o,i)=>(Math.pow(i/num, divide)*100).toFixed(percentDecimals))
  const [clrIn, clrOut] = random()>0.5?[clr, 'transparent']:['transparent', clr]
  return array(num).map((o,i)=>`${clrIn} ${parts[i]}%, ${clrOut} ${parts[i+1]}%`).join(', ')
}

function getPosition(start,millis){
  return start.map(([a,b])=>{
    const n = noise(a + millis*speed, b) - 0.5
    return (n*scale + 50).toFixed(percentDecimals) + '%'
  }).join(' ')
}

function setColor(deltaT, millis){
  target.style.background = state.map(({positions,gradient}) =>
    `radial-gradient(circle at ${getPosition(positions, millis)}, ${gradient})`).join(',')
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
  input.addEventListener('change', onChangeSeed)
  target.appendChild(input)

  target.addEventListener('click', ()=>{
    input.value = Math.random()*1E9<<0
    location.hash = input.value
    onChangeSeed()
  })

  window.addEventListener('hashchange', ()=>{
    input.value = parseInt(location.hash.substr(1), 10)
    onChangeSeed()
  }, false)

  onChangeSeed()
  animate.add(setColor)
}

function onChangeSeed(){
  random(input.value, 22)
  state.length = 0
  state.push(...array(3+random()*4<<0 ,()=>({
    positions: array(2,()=>array(2,()=>random()*speedScale))
    ,gradient: getRange(clr(), 2+random()*random()*20<<0)
  })))
}

export default experiment('radialgradient',{init}).expose
