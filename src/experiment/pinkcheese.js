/**
 * Recursive rotation
 * @module experiment/rotate
 * @see module:experiment/base
 */
import experiment from './base'

const inst = experiment('pinkcheese',{
  init
  ,handleAnimate
})
const {zuper} = inst

let main
let mainStyle

function init(_target){
  initWrapper(_target)
  initStyle(_target)
  zuper.init(_target)
}

function initWrapper(root){
  const div = document.createElement('div')
  div.innerHTML = '<label><input type="checkbox"><div></div></label>'
  const blueprint = div.querySelector('label')
  Array.from(new Array(22)).forEach(()=>{
    const inst = blueprint.cloneNode(true)
    const div = inst.querySelector('div')
    const size = 0.05*(1 + 2*Math.random())+'rem'
    Object.assign(div.style, {
      left: Math.random()*100+'%',
      top: Math.random()*100+'%',
      fontSize: size
    })
    root.appendChild(inst)
  })
}

function initStyle(root){
  const style = document.createElement('style')
  style.textContent = `
body {
  background-color: #F04;
}


div {
  --size: 1em;
  position: absolute;
  display: block;
  width: 40em;
  height: 40em;
  border-radius: 50%;
  border: 0;
  box-shadow:
    0 -3em 5em 3em #fff5,
    0 3em 6em 6em #0001,
    0 0 2em 2em #f046,
    0 0 2em 2em #f046 inset,
    calc(-10*var(--size)) calc(-10*var(--size)) 10em #FFF5 inset,
    calc(3*var(--size)) calc(3*var(--size)) 10em #0002 inset
  ;
  box-shadow:
    0.5em 1.5em 0.5em #FFF3,
    1em 3em 2em 1em #FFF5,
    calc(4*var(--size)) calc(3*var(--size)) 3em 1em #0001 inset,
    calc(5*var(--size)) calc(4*var(--size)) 8em 5em #0002 inset
  ;
  box-shadow:
    1em 2em 1em #FFF2,
    calc(4*var(--size)) calc(3*var(--size)) 3em 1em #0001 inset,
    calc(5*var(--size)) calc(4*var(--size)) 8em 5em #0002 inset
  ;
  background-color: #FA0044;
  mix-blend-mode: screen;
  mix-blend-mode: lighten;
  mix-blend-mode: normal;
}
input {
  display: none;
  &:checked ~ div {
    --size: -1em;
    background-color: #F04;
  }
}
`
  root.appendChild(style)
}

let start
function handleAnimate(deltaT,millis){
  start||(start=millis)
  const elapsed = millis-start
  setCSSProp('t', elapsed)
}

function element(type, prnt, atts, evts) {
  const elm = document.createElement(type)
  atts&&Object.entries(atts).forEach(([name,value])=>elm.setAttribute(name,value))
  evts&&Object.entries(evts).forEach(([name,value])=>elm.addEventListener(name,value))
  prnt&&prnt.appendChild(elm)
  return elm
}

function setCSSProp(name, value) {
  mainStyle.setProperty(`--${name}`, value)
}

function getRandomColor(){
  return '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)
}

export const pinkcheese = inst.expose
