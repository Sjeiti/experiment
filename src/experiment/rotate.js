/**
 * Moire glitch
 * @module experiment/moire
 * @see module:experiment/base
 */
import experiment from './base'
import {animate} from '../signal/signals'


const inst = experiment('rotate',{
  init
  ,exit
  // ,handleAnimate
  // ,handleResize
})
// const {zuper} = inst

let root
let main
let mainStyle

function init(_target){
  root = _target
  initWrapper(_target)
  initStyle(_target)
  initEvents()
}

function initWrapper(root){
  main = element('div', root,{class:'rotate'})
  mainStyle = main.style
  main.addEventListener('click', ()=>{
    setCSSProp('c1', getRandomColor())
    setCSSProp('c2', getRandomColor())
    const size = 0.125 + 12*Math.random()
    const sizeRem = size.toFixed(2)+'rem'
    const sizeRem2 = (2*size).toFixed(2)+'rem'
    setCSSProp('size', sizeRem)
    setCSSProp('size2', sizeRem2)
    setCSSProp('borderRadius', Math.random()<0.5?0:'999rem')
  })

  Array.from(new Array(22)).reduce(acc=>element('div', acc), main)
}

function initStyle(root){
  const style = document.createElement('style')
  style.textContent = `
    :root {
      --t: 0;
      --c1: black;
      --c2: #F04;
      --size: 4rem;
      --size2: 8rem;
      --borderRadius: 0;
    }
    
    .rotate {
      width: 100%;
      height: 100%;
      padding: min(3vw, 3vh);
      background-size: 100% 100%;
      background-image: repeating-linear-gradient(calc(-0.01deg*var(--t)), var(--c1) 0 var(--size), var(--c2) var(--size) var(--size2));
      overflow: hidden;
    }
    
    .rotate div {
      padding: inherit;
      box-shadow: 0 0 2rem #00000044;
      /*backdrop-filter: blur(0.2vw);*/
      background-image: inherit;
      transform: rotate(calc(0.001deg*var(--t)));
      transform-origin: 50% 50%;
      border-radius: var(--borderRadius);
    }`
  root.appendChild(style)
}

// let start
// function handleAnimate(deltaT,millis){
//   console.log('handleAnimate', arguments) // todo: remove log
//   start||(start=millis)
//   const elapsed = millis-start
//   setCSSProp('t', elapsed)
// }

function initEvents(){
  animate.add(onAnimate)
}

function exit(){
  // zuper.exit()
  while (root.children.length) root.firstChild.remove()
  animate.remove(onAnimate)
}

let start
function onAnimate(deltaT,millis){
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

////////

// export default experiment('rotate', {init, exit}).expose
export default inst.expose
