import color from '../math/color'
import experiment from './base'
import {requestAnimationFrame} from '../utils/utils'

/**
 * Pink cheese
 * @module experiment/rotate
 * @see module:experiment/base
 */

const name = 'pinkcheese'
const colorWhite = color(255,255,255)

const inst = experiment(name,{
  init
  ,handleAnimate
})
const {zuper} = inst

let main
let mainStyle

const div = document.createElement('div')
div.innerHTML = '<label><input type="checkbox"><div></div></label>'
const blueprint = div.querySelector('label')

function init(_target){
  initWrapper(_target)
  initStyle(_target)
  zuper.init(_target).remove()
}

function initWrapper(root){
  main = element('div', root,{class:name})
  mainStyle = main.style

  requestAnimationFrame(fillMain)

  setColor('#F04')
  main.addEventListener('click', onMainClick)
}

function initStyle(root){
  const style = document.createElement('style')
  style.textContent = `
:root {
  --deg: 0;
  --radians: 0;
  --lightRadians: -2.1;
  --w: 40;
  --h: 40;
  --sin: 1;
  --t: 1;
}
.${name} {
  --size: 1em;
  --color: #F04;
  --color-dark: #FA0044;
  --color-light: #F2B;
  
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--color);
  background-image: radial-gradient(circle at 70% 140%, #fff2 0, transparent 50% 70%, #0002 100%)
  overflow: hidden;
  transition: all 300ms ease;
  
  div {
    --radians: calc(var(--deg)/-180*pi);
    --rdns: calc(var(--radians) + var(--lightRadians));
    --emX: calc(cos(var(--rdns))*1em);
    --emY: calc(sin(var(--rdns))*1em);
    
    position: absolute;
    display: block;
    width:  calc(1em*var(--w));
    height: calc(1em*var(--h));
    transform: translate(-50%,-50%) rotate(calc(1deg*var(--deg))) scale(calc(1 + 0.5*sin(calc(var(--sin) + 0.00005*var(--t)))));
    border-radius: 50%;
    box-shadow:
      calc( 1*var(--emX)) calc( 1*var(--emY)) 3em #FFF2,
      calc( 6*var(--emX)) calc( 6*var(--emY)) 12em 4em #0001 inset,
      calc( 5*var(--emX)) calc( 5*var(--emY)) 8em 5em #0002 inset,
      calc(-7*var(--emX)) calc(-7*var(--emY)) 9em 0 var(--color) inset,
      calc(-1*var(--emX)) calc(-1*var(--emY)) 2em #0001
    ;
    background-color: var(--color-dark);
    transition: all 300ms ease;
  }
  input {
    display: none;
  }
  input:checked ~ div {
    --radians: calc(var(--deg)/-180*pi);
    --rdns: calc(var(--radians) + var(--lightRadians));
    --emX: calc(cos(var(--rdns))*1em);
    --emY: calc(sin(var(--rdns))*1em);
    
    box-shadow:
      calc( 1*var(--emX)) calc( 1*var(--emY)) 2em #FFF2,
      calc( 3*var(--emX)) calc( 3*var(--emY)) 3em 1em #0001 inset,
      calc( 5*var(--emX)) calc( 5*var(--emY)) 8em 5em #0002 inset,
      calc( 9*var(--emX)) calc( 9*var(--emY)) 4em 13em var(--color) inset,
      calc(-4*var(--emX)) calc(-4*var(--emY)) 2em #0001
    ;
    background-color: var(--color-light);
  }
}
`
  root.appendChild(style)
}

function fillMain(){
  const {clientHeight:h,clientWidth:w} = main
  main.style.fontSize = Math.sqrt(w*h*5E-5) + 'px'
  const numTarget = 12
  const numCurrent = main.children.length
  if (numCurrent>numTarget) {
    while (main.children.length>numTarget) main.firstChild.remove()
  } else if (numCurrent<numTarget) {
    Array.from(new Array(numTarget-numCurrent)).forEach(()=>{
      main.appendChild(blueprint.cloneNode(true))
    })
  }
  Array.from(main.querySelectorAll('label>div')).forEach((div)=>{
    setHoleStyle(div.style)
  })
}

function onMainClick(e){
  if(e.target.classList.contains(name)){
    fillMain()
  } else {
    const inputs = Array.from(main.querySelectorAll('input'))
    const allChecked = !inputs.map(n=>n.checked).includes(false)
    if (allChecked){
      setTimeout(()=>{
        setColor(getRandomColor())
        inputs.forEach(n=>n.checked = false)
      },1000)
    }
  }
}

function setColor(colorMain){
  const colorObj = color(colorMain)
  setCSSProp('color', colorMain)
  setCSSProp('color-dark', colorObj.clone().multiply(0.95).hex)
  setCSSProp('color-light', colorObj.average(colorWhite, 0.3).hex)

}

function setHoleStyle(holeStyle){
  Object.assign(holeStyle, {
    left: Math.random()*100+'%',
    top: Math.random()*100+'%',
    borderRadius: [0,0,0,0].map(()=>(45+Math.random()*30<<0)+'%').join(' ')
  })
  const randomSize = Math.random()
  holeStyle.setProperty('--w', 30+20*randomSize<<0)
  holeStyle.setProperty('--h', 30+20*(1-randomSize)<<0)
  holeStyle.setProperty('--deg', 360*(Math.random()-0.5)<<0)
  holeStyle.setProperty('--sin', 1E4*Math.random())
}

let start
function handleAnimate(deltaT,millis){
  start||(start=millis)
  const elapsed = millis-start
  setCSSProp('t', elapsed)
}

function element(type, prnt, atts, evts){
  const elm = document.createElement(type)
  atts&&Object.entries(atts).forEach(([name,value])=>elm.setAttribute(name,value))
  evts&&Object.entries(evts).forEach(([name,value])=>elm.addEventListener(name,value))
  prnt&&prnt.appendChild(elm)
  return elm
}

function setCSSProp(name, value){
  mainStyle.setProperty(`--${name}`, value)
}

function getRandomColor(){
  return '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)
}

export const pinkcheese = inst.expose
