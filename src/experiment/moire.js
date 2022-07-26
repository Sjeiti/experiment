/**
 * Moire glitch
 * @module experiment/moire
 * @see module:experiment/base
 */
import experiment from './base'
import {animate} from '../signal/signals'
// import {random} from '../math/lcg'
// import {noise} from '../math/perlin'
  
let main
let mainStyle
let form

function init(_target){

  initWrapper(_target)
  initStyle(_target)
  initEvents()

}

function initWrapper(root){

  main = element('div',root,{class:'moire'})
  mainStyle = main.style

  form = element('form',main,null,{input:onFormInput,change:onFormChange})

  const name = 'type'
  const type = 'radio'
  ;['yellow','circles','rainbow','matrix','one','lines','still'].forEach(value=>{
    element('input',form,{name,value,type})
  })

  element('br',form)
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
    const data = JSON.parse(decodeURIComponent(hash.substring(1)))
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
  const speed = 0.001
  const elapsed = millis-start
  setCSSProp('t', elapsed)
  setCSSProp('sin', Math.sin(speed*elapsed))
  setCSSProp('cos', Math.cos(speed*elapsed))
}

function element(type, prnt, atts, evts) {
  const elm = document.createElement(type)
  atts&&Object.entries(atts).forEach(([name,value])=>elm.setAttribute(name,value))
  evts&&Object.entries(evts).forEach(([name,value])=>elm.addEventListener(name,value))
  prnt&&prnt.appendChild(elm)
  return elm
}

function setValue(name,value){
  name==='type'
    ?setMainClass(value)
    :setCSSProp(
      name
      ,name==='part'
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

////////

export default experiment('moire', {init, exit}).expose



function getStyle(){
  return `
:root {
  --start: 0.4deg;
  --end: 2deg;
  --clr: rgba(255,255,255,0.3);
  --t: 0;
  --sin: 0;
  --cos: 1;
  --part: 0.1;
  --total: 1;
}


.moire {
  width: 100%;
  height: 100%;
  padding: 1rem;

  --tt: calc(var(--t)*0.001deg);

  background: repeating-conic-gradient(
    from 0deg at calc(50% + 10%*var(--sin)) 50%,
    #FF0000 0deg var(--start),
    transparent var(--start) var(--end)
  ), repeating-conic-gradient(
    from calc(0.01deg*var(--t)) at 30% 40%,
    #00FF00 0deg var(--start),
    transparent var(--start) var(--end)
  ), repeating-conic-gradient(
    from 45deg at 55% 35%,
    #0000FF 0deg var(--start),
    transparent var(--start) var(--end)
  );

  --tt: calc(var(--t)*0.0001deg);
  --start: 0.15deg;
  --end: 1.5deg;
  --clr: rgba(255,255,255,1);
  --min: min(100vw,100vh);
  --max: max(100vw,100vh);
  background: repeating-conic-gradient(
    from var(--tt) at 50% 50%,
    var(--clr) 0 var(--start),
    transparent var(--start) var(--end)
  ),repeating-radial-gradient(
    circle at 50% 50%,
    var(--clr) 0 0.2%,
    transparent 0.2% 0.8%
  );

  background: repeating-radial-gradient(
    circle at 65% 45%,
    #FFFFFF 0% .5%,
    transparent .5% 1.4%
  ), repeating-radial-gradient(
    circle at 35% 15%,
    #FFFFFF 0% .5%,
    transparent .5% 1.4%
  );

  --radial-total: calc(10%*var(--total));
  --radial-part: calc(var(--part)*var(--radial-total));
  background: repeating-radial-gradient(
    circle at 65% 45%,
    #FFFFFF 0% var(--radial-part),
    transparent var(--radial-part) var(--radial-total)
  ), repeating-radial-gradient(
    circle at 35% 15%,
    #FFFFFF 0% var(--radial-part),
    transparent var(--radial-part) var(--radial-total)
  );


  --tt: calc(var(--t)*0.0001deg);
  --radial-total: calc(10%*var(--total));
  --ravdial-part: calc(var(--part)*var(--radial-total));
  --end: calc(var(--total)*20deg);
  --start: calc(var(--part)*var(--end));
  background: repeating-conic-gradient(
    from calc(0.0001deg*var(--t)) at 50% 50%,
    #FF0 0deg var(--start),
    transparent var(--start) var(--end)
  ),repeating-linear-gradient(
    calc(var(--t)*-0.001deg),
    #FF0 0% var(--radial-part),
    transparent var(--radial-part) var(--radial-total)
  );

  /*
  --clr: #FF0;
  --tt: calc(var(--t)*0.0001deg);
  --linear-total: calc(5%*var(--total));
  --linear-part: calc(var(--part)*var(--linear-total));
  --radial-total: calc(10%*var(--total));
  --radial-part: calc(var(--part)*var(--radial-total));
  background: repeating-radial-gradient(
    circle at 50% 50%,
    var(--clr) 0 var(--radial-part),
    transparent var(--radial-part) var(--radial-total)
  ),0 calc(0.01px*var(--t)) repeating-linear-gradient(
    calc(var(--total)*var(--t)*-0.013deg),
    #FF0 0% var(--linear-part),
    transparent var(--linear-part) var(--linear-total)
  );
  */
}
.moire.yellow {
  --end: calc(var(--total)*4deg);
  --start: calc(var(--part)*var(--end));
  background: repeating-conic-gradient(
    from calc(0.0001deg*var(--t)) at 50% 50%,
    #FFFF00 0deg var(--start),
    transparent var(--start) var(--end)
  );
}
.moire.circles {
  --tt: calc(var(--t)*0.0001deg);
  --radial-total: calc(10%*var(--total));
  --radial-part: calc(var(--part)*var(--radial-total));
  --clr: rgba(255,255,255,1);
  background: repeating-radial-gradient(
    circle at calc(57% + 10%*var(--sin)) calc(50% + 35%*var(--cos)),
    var(--clr) 0 var(--radial-part),
    transparent var(--radial-part) var(--radial-total)
  ),repeating-radial-gradient(
    circle at 50% 50%,
    var(--clr) 0 var(--radial-part),
    transparent var(--radial-part) var(--radial-total)
  );
}
.moire.rainbow {
  --tt: calc(var(--t)*0.0001deg);
  --end: calc(var(--total)*16deg);
  --start: calc(var(--part)*var(--end));
  --clr: rgba(255,255,255,1);
  background: repeating-conic-gradient(
    from var(--tt) at 50% 50%,
    rgba(0,255,0,1) 0 var(--start),
    transparent var(--start) var(--end)
  ),repeating-conic-gradient(
    from calc(-1.3*var(--tt)) at 50% 50%,
    rgba(255,0,0,1) 0 var(--start),
    transparent var(--start) var(--end)
  ),repeating-conic-gradient(
    from calc(-1.9*var(--tt)) at 50% 50%,
    rgba(0,0,255,1) 0 var(--start),
    transparent var(--start) var(--end)
  );
}
.moire.matrix {
  --p: 0.866;
  --tt: calc(var(--t)*0.001deg);
  --end: calc(var(--total)*20deg);
  --start: calc(var(--part)*var(--end));
  --clr: lime;
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
    transparent var(--start) var(--end)
  );
}
.moire.one {
  --tt: calc(var(--t)*0.0001deg);
  --radial-total: calc(50%*var(--total));
  --radial-part: calc(var(--part)*var(--radial-total));
  --clr: rgba(255,255,255,1);
  background: repeating-radial-gradient(
    circle at calc(50% + 0.1%*var(--sin)) calc(50% + 0.1%*var(--cos)),
    var(--clr) 0 var(--radial-part),
    transparent var(--radial-part) var(--radial-total)
  );
}
.moire.lines{
  --tt: calc(var(--t)*0.0001deg);
  --radial-total: calc(10%*var(--total));
  --radial-part: calc(var(--part)*var(--radial-total));
  background: repeating-linear-gradient(
    var(--tt),
    #FF0 0% var(--radial-part),
    transparent var(--radial-part) var(--radial-total)
  );
}
  `
}
