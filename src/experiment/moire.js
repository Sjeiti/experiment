/**
 * Moire glitch
 * @module experiment/moire
 * @see module:experiment/base
 */
import experiment from './base'
import {animate} from '../signal/signals'
import {noise} from '../math/perlin'

let root
let main
let mainStyle
let form

function init(_target){
  root = _target
  initWrapper(_target)
  initStyle(_target)
  initEvents()

}

function initWrapper(root){

  main = element('label',root,{class:'moire',for:'ui'})
  mainStyle = main.style

  element('input',main,{type:'checkbox',id:'ui'})

  form = element('form',main,null,{input:onFormInput,change:onFormChange})

  ;['clr','bclr'].forEach((name,i)=>{
    element('input',form,{name,type:'color',value:['white','black'][i]})
  })

  element('br',form)

  const name = 'type'
  const type = 'radio'
  ;[
    'yellow'
    ,'one'
    ,'lines'
    ,'matrix'
    ,'circles'
    ,'petals'
    ,'bulge'
    ,'corner'
    ,'rainbow'
  ].forEach(value=>{
    const label = element('label',form,{class:'label-'+value})
    element('input',label,{name,value,type})
  })

  element('br',form)

  const min = 0
  const max = 1
  const step = 0.001
  ;['part','total'].forEach(name=>{
    const range = element('input',form,{name,type:'range',min,max,step})
    range.dispatchEvent(new Event('input'), { bubbles: true })
    element('br',form)
  })

  initLocation(form)

}

function initLocation(form){
  try {
    const {hash} = location
    const data = tryParse(
      decodeURIComponent(hash.substring(1))
      ,{
        clr: '#ff0044'
        ,bclr: '#000000'
        ,type: 'bulge'
        ,total: 0.9
        ,part: 0.5
      }
    )
    Object.entries(data).forEach(([name,value])=>{
      form[name].value = value
      setValue(name,value)
    })
  }catch(err){
    alert(err)
  }
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
  while (root.children.length) root.firstChild.remove()
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

.moire {
  display: block;
  width: 100%;
  height: 100%;
  padding: 1rem;
}

.moire #ui {
  opacity: 0;
}
.moire #ui:not(:checked) + form {
  display: none;
}

/*/////////////////////////////////*/

::-webkit-color-swatch,
::-moz-color-swatch {
  border-color: transparent;
}
.moire input[type=color] {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  padding: 0;
  margin: 0 0.25rem 0.5rem 0;
  border: 2px solid var(--bclr);
}
.moire input[name=bclr] {
  border: 2px solid var(--clr);
}

.moire label {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(black,white);
  border-radius: 50%;
  margin: 0.5rem 0.25rem 0.5rem 0;
  background-color: var(--bclr);
  box-shadow: 0 0 0 2px var(--bclr) inset;
}
.moire label input {
  opacity: 0;
}






.moire input[type=range] {
  width: 100%;
  background: transparent;
  margin: 0.5rem auto;
  -webkit-appeareance: none;
}
.moire input[type=range]::-moz-range-track,
.moire input[type=range]::-webkit-slider-runnable-track {
  background: var(--bclr);
  border: 2px solid var(--clr);
}
.moire input[type=range]::-moz-range-thumb,
.moire input[type=range]::-webkit-slider-thumb {
  background: var(--clr);
  border: 2px solid var(--bclr);
  border-radius: 50%;
}
.moire input[type=range]:focus::-webkit-slider-runnable-track {
}






.moire .label-yellow {
  background: repeating-conic-gradient(
    var(--clr) 0 10%,
    var(--bclr) 10% 20%
  );
}
.moire.yellow {
  --end: calc(var(--total)*36deg);
  --start: calc(var(--part)*var(--end));
  background: repeating-conic-gradient(
    from calc(0.0001deg*var(--t)) at 50% 50%,
    var(--clr) 0deg var(--start),
    var(--bclr) var(--start) var(--end)
  );
}

.moire .label-circles {
  background: repeating-radial-gradient(
    circle at 80% 20%,
    var(--clr) 0 5%,
    transparent 5% 20%
  ),repeating-radial-gradient(
    circle at 20% 80%,
    var(--clr) 0 5%,
    var(--bclr) 5% 20%
  );
}
.moire.circles {
  --tt: calc(var(--t)*0.0001deg);
  --radial-total: calc(20%*var(--total));
  --radial-part: calc(var(--part)*var(--radial-total));
  --clr: rgba(255,255,255,1);
  background: repeating-radial-gradient(
    circle at calc(100%*var(--x)) calc(100%*var(--y)),
    var(--clr) 0 var(--radial-part),
    transparent var(--radial-part) var(--radial-total)
  ),repeating-radial-gradient(
    circle at 50% 50%,
    var(--clr) 0 var(--radial-part),
    var(--bclr) var(--radial-part) var(--radial-total)
  );
}

.moire .label-rainbow {
  --p: calc(100%/18);
  background: repeating-conic-gradient(
    #00F 0,
    #F0F calc(1*var(--p)),
    #F00 calc(2*var(--p)),
    #FF0 calc(3*var(--p)),
    #0F0 calc(4*var(--p)),
    #0FF calc(5*var(--p)),
    #00F calc(6*var(--p))
  );
}
.moire.rainbow {
  --end: calc(var(--total)*36deg);
  --p: calc(var(--end)/6);
  --tt: calc(0.01deg*var(--part)*var(--total)*var(--t));
  background: repeating-conic-gradient(
    from var(--tt) at 50% 50%,
    #00F 0,
    #F0F calc(1*var(--p)),
    #F00 calc(2*var(--p)),
    #FF0 calc(3*var(--p)),
    #0F0 calc(4*var(--p)),
    #0FF calc(5*var(--p)),
    #00F var(--end)
  );
}

.moire .label-matrix {
  --p: 0.866;
  --end: 20deg;
  --part: 0.2;
  --start: calc(var(--part)*var(--end));
  background: repeating-conic-gradient(
    from 0 at calc(50% - 2rem) 50%,
    var(--clr) 0 var(--start),
    transparent var(--start) var(--end)
  ), repeating-conic-gradient(
    from 0 at calc(50% + 2rem) 50%,
    var(--clr) 0 var(--start),
    transparent var(--start) var(--end)
  ), repeating-conic-gradient(
    from 0 at 50% calc(50% + var(--p)*2rem),
    var(--clr) 0 var(--start),
    var(--bclr) var(--start) var(--end)
  );
}
.moire.matrix {
  --p: 0.866;
  --tt: calc(var(--t)*0.001deg);
  --end: calc(var(--total)*20deg);
  --start: calc(var(--part)*var(--end));
  background: repeating-conic-gradient(
    from var(--tt) at calc(50% - var(--min)) 50%,
    var(--clr) 0 var(--start),
    transparent var(--start) var(--end)
  ), repeating-conic-gradient(
    from var(--tt) at calc(50% + var(--min)) 50%,
    var(--clr) 0 var(--start),
    transparent var(--start) var(--end)
  ), repeating-conic-gradient(
    from calc(-1*var(--tt)) at 50% calc(50% + var(--p)*var(--min)),
    var(--clr) 0 var(--start),
    var(--bclr) var(--start) var(--end)
  );
}

.moire .label-one {
  background: repeating-radial-gradient(
    var(--clr) 0 10%,
    var(--bclr) 10% 20%
  );
}
.moire.one {
  --tt: calc(var(--t)*0.0001deg);
  --radial-total: calc(50%*var(--total));
  --radial-part: calc(var(--part)*var(--radial-total));
  background: repeating-radial-gradient(
    circle at calc(50% + 0.1%*var(--sin)) calc(50% + 0.1%*var(--cos)),
    var(--clr) 0 var(--radial-part),
    var(--bclr) var(--radial-part) var(--radial-total)
  );
}

.moire .label-lines{
  background: repeating-linear-gradient(
    30deg,
    var(--clr) 0% 10%,
    var(--bclr) 10% 20%
  );
}
.moire.lines{
  --tt: calc(var(--t)*0.0001deg);
  --radial-total: calc(10%*var(--total));
  --radial-part: calc(var(--part)*var(--radial-total));
  background: repeating-linear-gradient(
    var(--tt),
    var(--clr) 0% var(--radial-part),
    var(--bclr) var(--radial-part) var(--radial-total)
  );
}

.moire .label-petals{
  background: repeating-conic-gradient(
    var(--clr) 0 4%,
    transparent 4% 10%
  )
  ,repeating-linear-gradient(
    30deg,
    var(--clr) 0% 5%,
    var(--bclr) 5% 15%
  );
}
.moire.petals{
  --tt: calc(var(--t)*0.0001deg);
  --radial-total: calc(6%*var(--total));
  --radial-part: calc(var(--part)*var(--radial-total));
  --end: calc(var(--total)*20deg);
  --start: calc(var(--part)*var(--end));
  background: repeating-conic-gradient(
    from calc(0.0001deg*var(--t)) at calc(180%*var(--x) - 40%) calc(180%*var(--y) - 40%),
    var(--clr) 0deg var(--start),
    transparent var(--start) var(--end)
  ),repeating-linear-gradient(
    calc(var(--t)*-0.001deg),
    var(--clr) 0% var(--radial-part),
    var(--bclr) var(--radial-part) var(--radial-total)
  );
}

.moire .label-bulge{
  background: repeating-conic-gradient(
    var(--clr) 0 4%,
    transparent 4% 10%
  )
  ,repeating-radial-gradient(
    var(--clr) 0% 5%,
    var(--bclr) 5% 12%
  );
}
.moire.bulge{
  --radial-total: calc(20%*var(--total));
  --radial-part: calc(var(--part)*var(--radial-total));
  --end: calc(var(--total)*36deg);
  --start: calc(var(--part)*var(--end));
  background: repeating-radial-gradient(
    circle at calc(180%*var(--x) - 40%) calc(180%*var(--y) - 40%),
    var(--clr) 0% var(--radial-part),
    transparent var(--radial-part) var(--radial-total)
  ), repeating-conic-gradient(
    from calc(0.0001deg*var(--t)) at 50% 50%,
    var(--clr) 0deg var(--start),
    var(--bclr) var(--start) var(--end)
  );
}

.moire .label-corner{
  background: repeating-linear-gradient(
    30deg,
    var(--clr) 0% 5%,
    transparent 5% 12%
  )
  ,repeating-radial-gradient(
    var(--clr) 0% 5%,
    var(--bclr) 5% 12%
  );
}
.moire.corner{
  --radial-total: calc(20%*var(--total));
  --radial-part: calc(var(--part)*var(--radial-total));
  --radiall-total: calc(10%*var(--total));
  --radiall-part: calc(var(--part)*var(--radiall-total));
  background: repeating-radial-gradient(
    circle at calc(50%*var(--x) + 25%) calc(50%*var(--y) + 25%),
    var(--clr) 0% var(--radial-part),
    transparent var(--radial-part) var(--radial-total)
  ), repeating-linear-gradient(
    calc(var(--t)*-0.001deg),
    var(--clr) 0% var(--radiall-part),
    var(--bclr) var(--radiall-part) var(--radiall-total)
  );
}







  `
}
