/**
 * Moire glitch
 * @module experiment/moire
 * @see module:experiment/base
 */
import experiment from './base'
import {animate} from '../signal/signals'
import {noise} from '../math/perlin'
  
let main
let mainStyle
let form

function init(_target){
  initWrapper(_target)
  initStyle(_target)
  initEvents()
}

function initWrapper(root){
  Array.from(new Array(22)).reduce((acc, o, i)=>{
    const div = document.createElement('div')
    i===0&&div.classList.add('rotate')
    acc.appendChild(div)
    return div
  }, root)

  run()
}

function initStyle(root){
  const style = document.createElement('style')
  style.textContent = getStyle()
  root.appendChild(style)
}

function initEvents(){
  animate.add(onAnimate)
}

function exit(){
  animate.remove(onAnimate)
}

function onFormChange(e){
  const {target: {name, value}} = e
  setValue(name,value)
  setData()
}

function onFormInput(e){
  const {target: {name, value}} = e
  setValue(name,value)
}

let start
function onAnimate(deltaT,millis){
  start||(start=millis)
  const speed = 0.0005
  const elapsed = millis-start
  setCSSProp('t', elapsed)
  setCSSProp('sin', Math.sin(speed*elapsed))
  setCSSProp('cos', Math.cos(speed*elapsed))
  setCSSProp('x', noise(speed*elapsed,3876.13))
  setCSSProp('y', noise(speed*elapsed,999.123))
}

function element(type, prnt, atts, evts) {
  const elm = document.createElement(type)
  atts&&Object.entries(atts).forEach(([name,value])=>elm.setAttribute(name,value))
  evts&&Object.entries(evts).forEach(([name,value])=>elm.addEventListener(name,value))
  prnt&&prnt.appendChild(elm)
  return elm
}

function setValue(name,value){
  //alert(name+value)
  name==='type'
    ?setMainClass(value)
    :setCSSProp(
      name
      ,['clr','bclr','part'].includes(name)
        ?value
        :easeInCirc(easeInCirc(value))
    )
}

function setMainClass(value){
  main.setAttribute('class', 'moire '+value)
}

function setCSSProp(name, value) {
  mainStyle.setProperty(`--${name}`, value)
}

function easeInCirc(x) {
  return 1 - Math.sqrt(1 - Math.pow(x, 2))
}

function setData(){
  const object = {}
  const formData = new FormData(form)
  formData.forEach((value, key) => object[key] = value)
  location.hash = JSON.stringify(object)
}

function tryParse(s,data={}){
  try {
    data = JSON.parse(s)
  } catch(err){}
  return data
}

////////

export default experiment('moire', {init, exit}).expose

function getStyle(){
  return `
:root {
  --start: 0.4deg;
  --end: 2deg;
  --clr: white;
  --bclr: black;
  --t: 0;
  --sin: 0;
  --cos: 1;
  --x: 1;
  --y: 1;
  --part: 0.1;
  --total: 1;
  --min: min(100vw,100vh);
  --max: max(100vw,100vh);
}

.rotate {
    width: 100%;
    height: 100%;
    padding: min(3vw, 3vh);
    background-size: 100% 100%;
    background-image: repeating-linear-gradient(calc(-0.1*var(--t)), black 0 4rem, gold 4rem 8rem);
}

.rotate div {
    padding: inherit;
    box-shadow: 0 0 2rem black;
    /*backdrop-filter: blur(0.2vw);*/
    background-image: inherit;
    transform: rotate(calc(0.01*var(--t)));
    transform-origin: 50% 50%;
    /*border-radius: 998rem;*/
}


  `
}
