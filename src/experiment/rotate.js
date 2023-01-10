/**
 * Moire glitch
 * @module experiment/moire
 * @see module:experiment/base
 */
import experiment from './base'
import {animate} from '../signal/signals'

let main
let mainStyle

function init(_target){
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
    }
    
    .rotate {
      width: 100%;
      height: 100%;
      padding: min(3vw, 3vh);
      background-size: 100% 100%;
      background-image: repeating-linear-gradient(calc(-0.01deg*var(--t)), var(--c1) 0 4rem, var(--c2) 4rem 8rem);
      overflow: hidden;
    }
    
    .rotate div {
      padding: inherit;
      box-shadow: 0 0 2rem #00000044;
      /*backdrop-filter: blur(0.2vw);*/
      background-image: inherit;
      transform: rotate(calc(0.001deg*var(--t)));
      transform-origin: 50% 50%;
      /*border-radius: 998rem;*/
    }`
  root.appendChild(style)
}

function initEvents(){
  animate.add(onAnimate)
}

function exit(){
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

export default experiment('rotate', {init, exit}).expose
