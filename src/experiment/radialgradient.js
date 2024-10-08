/**
 * Radial gradients
 * @module experiment/radialgradient
 * @see module:experiment/base
 */
import experiment from './base'
import {animate} from '../signal/signals'
import {random} from '../math/lcg'
import {noise} from '../math/perlin'

let target
let input
const percentDecimals = 4
const speed = 0.000005
const speedScale = Math.PI
const scale = 400
const state = []
const bindings = []

function init(_target){

  target = _target

  const label = document.createElement('label')
  Object.assign(label.style, {
    position: 'absolute'
    ,left: '0'
    ,top: '0'
    ,width: '100%'
    ,height: '100%'
  })

  input = document.createElement('input')
  input.type = 'number'
  input.value = location.hash.substr(1)||8191
  Object.assign(input.style, {
    border: '0'
    ,outline: 'none'
    ,background: 'transparent'
    ,width: '100%'
    ,height: '100%'
    ,verticalAlign: 'top'
    ,fontFamily: 'courier'
    ,textAlign: 'center'
    ,fontSize: '2rem'
    ,fontWeight: 'bold'
    ,opacity: 0
  })
  label.appendChild(input)

  //target.appendChild(label)

  setState()
  initEvents()
}

function initEvents(){
  input.addEventListener('change', onInputChange, false)
  target.addEventListener('click', onTargetClick, false)
  window.addEventListener('hashchange', onHashChange, false)
  bindings.push(animate.add(setColor))
}

function exit(){
  input.removeEventListener('change', onInputChange)
  target.removeEventListener('click', onTargetClick)
  window.removeEventListener('hashchange', onHashChange)
  //animate.remove(setColor)
  bindings.splice(0,Number.MAX_SAFE_INTEGER)
    .forEach(b=>b.remove())
  target.style.removeProperty('background')
}

function onTargetClick(){
  location.hash = input.value = Math.random()*1E9<<0
  setState()
}

function onHashChange(){
  input.value = parseInt(location.hash.substr(1), 10)
  setState()
}

function onInputChange(){
  location.hash = input.value
  setState()
}

function setState(){
  random(input.value, 22)
  state.length = 0
  state.push(...array(3+random()*4<<0 ,()=>({
    positions: array(2,()=>array(2,()=>random()*speedScale))
    ,gradient: getRange(clr(), 2+random()*random()*20<<0)
  })))
}

function setColor(deltaT, millis){
  target.style.background = state.map(({positions,gradient}) =>
    `radial-gradient(circle at ${getPosition(positions, millis)}, ${gradient})`).join(',')
}

function getPosition(start,millis){
  millis = Date.now()
  return start.map(([a,b])=>{
    const n = noise(a + millis*speed, b) - 0.5
    return (n*scale + 50).toFixed(percentDecimals) + '%'
  }).join(' ')
}

function getRange(clr, num=10) {
  const divide = random()
  const parts = array(num+1,(o,i)=>100*easeCirc(i/num,divide).toFixed(percentDecimals))
  const [clrIn, clrOut] = random()>0.5?[clr, 'transparent']:['transparent', clr]
  return array(num).map((o,i)=>`${clrIn} ${parts[i]}%, ${clrOut} ${parts[i+1]}%`).join(', ')
}

function easeOutCirc(x){
  return Math.sqrt(1 - Math.pow(x - 1, 2))
}

function easeInCirc(x){
  return 1 - Math.sqrt(1 - Math.pow(x, 2))
}

function easeCirc(x, part){
  return part<0.4 && easeInCirc(x)
      || part>0.6 && easeOutCirc(x)
      || x
}

function clr(){
  return '#'+('00000'+(random()*(1<<24)|0).toString(16)).slice(-6)
}

function array(num, map){
  const a = new Array(num).fill(0)
  return map?a.map(map):a
}

const inst = experiment('radialgradient', {init, exit})

export const radialgradient = inst.expose
