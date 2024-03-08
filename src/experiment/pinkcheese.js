import color from '../math/color'

/**
 * Recursive rotation
 * @module experiment/rotate
 * @see module:experiment/base
 */
import experiment from './base'
const name = 'pinkcheese'

const inst = experiment(name,{
  init
  ,handleAnimate
})
const {zuper} = inst

let main
let mainStyle
const holeStyles = []

function init(_target){
  initWrapper(_target)
  initStyle(_target)
  zuper.init(_target)
}

function initWrapper(root){
  main = element('div', root,{class:name})
  mainStyle = main.style

  const div = document.createElement('div')
  div.innerHTML = '<label><input type="checkbox"><div></div></label>'
  const blueprint = div.querySelector('label')
  Array.from(new Array(22)).forEach(()=>{
    const inst = blueprint.cloneNode(true)
    const div = inst.querySelector('div')
    const {style} = div
    holeStyles.push(style)
    setHoleStyle(style)
    main.appendChild(inst)
  })

  setColor('#F04')
  main.addEventListener('click', onMainClick)
}

function initStyle(root){
  const style = document.createElement('style')
  style.textContent = `
.${name} {
  --size: 1em;
  --color: #F04;
  --color-dark: #FA0044;


  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--color);
  background-image: radial-gradient(circle at 60% 90%, var(--color) 0, var(--color-dark) 50%);
  
  div {
    position: absolute;
    display: block;
    width: 40em;
    height: 40em;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    box-shadow:
      1em 2em 1em #FFF2,
      calc(4*var(--size)) calc(3*var(--size)) 3em 1em #0001 inset,
      calc(5*var(--size)) calc(4*var(--size)) 8em 5em #0002 inset,
      -1em -2em 1em #0001
    ;
    background-color: var(--color-dark);
  }
  input {
    display: none;
    &:checked ~ div {
      --size: -1em;
      background-color: var(--color);
    }
  }
}

`
  root.appendChild(style)
}

function onMainClick(e) {
  if(e.target.classList.contains(name)){
    setColor(getRandomColor())
    holeStyles.forEach(setHoleStyle)
  }
}

function setColor(colorMain){
  const colorObj = color(colorMain)
  setCSSProp('color', colorMain)
  setCSSProp('color-dark', colorObj.multiply(0.95).hex)

}

function setHoleStyle(holeStyle) {
  const size = 0.05*(1 + 2*Math.random())+'rem'
  Object.assign(holeStyle, {
    left: Math.random()*100+'%',
    top: Math.random()*100+'%',
    fontSize: size,
    transform: `translate(-50%, -50%) rotate(${40*(Math.random()-0.5)<<0}deg) scale(calc(1.5 + 0.5*sin(${1E4*Math.random()} + 0.00015*var(--t))))`,
    borderRadius: [0,0,0,0].map(()=>(45+Math.random()*30<<0)+'%').join(' ')
  })
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
