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

function init(_target){
  initStyle(_target)
  initDOM(_target)
}

function initStyle(_target){
  const style = document.createElement('style')
  style.textContent = `
:root {
  --radians: 0;
  --lightRadians: -1.1;
  --animT: 500ms;
  --color: #f04;

  --rndMult: 9999827;
  --index: 111;
}
.leaf {
  width: 100%;
  height: 100%;
  background: #462 radial-gradient(circle at 10% 10%, #fff4, transparent);
}
.ladybug {
  --rdns: calc(var(--radians) + var(--lightRadians));
  --remX: calc(cos(var(--rdns))*1rem);
  --remY: calc(sin(var(--rdns))*-1rem);
  --percX: calc(cos(var(--rdns))*1%);
  --percY: calc(sin(var(--rdns))*-1%);

  --seed0: calc((1 + var(--index))*var(--rndMult));
  --rand0: calc(0.5 + 0.5*sin(var(--seed0)));

  --seed1: calc((2 + var(--index))*var(--rndMult));
  --rand1: calc(0.5 + 0.5*sin(var(--seed1)));

  --seed2: calc((3 + var(--index))*var(--rndMult));
  --rand2: calc(0.5 + 0.5*sin(var(--seed0)));

  --seed3: calc((4 + var(--index))*var(--rndMult));
  --rand3: calc(0.5 + 0.5*sin(var(--seed1)));

  --seed4: calc((5 + var(--index))*var(--rndMult));
  --rand4: calc(0.5 + 0.5*sin(var(--seed4)));

  --seed5: calc((6 + var(--index))*var(--rndMult));
  --rand5: calc(0.5 + 0.5*sin(var(--seed5)));

  --seed6: calc((7 + var(--index))*var(--rndMult));
  --rand6: calc(0.5 + 0.5*sin(var(--seed6)));

  --color: hsl(calc(20 * var(--rand4)) calc(100% - 20% * var(--rand5)) calc(35% + 15% * var(--rand6)));

  position: absolute;
  width: 1.4rem;
  height: 2rem;
  transform: rotate(calc(var(--radians)*1rad));
  transform-origin: 50% 50%;
  transition:
    transform calc(0.7*var(--animT)) ease-out,
    top var(--animT) ease,
    left var(--animT) ease
  ;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: -10%;
    top: -10%;
    width: 120%;
    height: 120%;
    background:
      linear-gradient( 30deg, transparent 0% 49%, #000 49% 51%, transparent 51% 100%),
      linear-gradient(  0deg, transparent 0% 49%, #000 49% 51%, transparent 51% 100%),
      linear-gradient(-30deg, transparent 0% 49%, #000 49% 51%, transparent 51% 100%)
    ;
  }
              &:after {
                      content: '';
                      display: block;
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      border-radius: 50% 50% 60% 60%;
    background-color: var(--color);
                      background-image:
                              radial-gradient(ellipse at calc(50% - 20*var(--percX)) calc(50% - 20*var(--percY)), #FFFA 0%, transparent 30%),
                              radial-gradient(circle at 80% 5%, #FFF 0 8%, transparent 8%),
                              radial-gradient(circle at 20% 5%, #FFF 0 8%, transparent 8%),
                              radial-gradient(circle at 50% -10%, #000 0% 35%, transparent 35%),
                              radial-gradient(circle at calc(50% + 40%*var(--rand0)) calc(30% + 40%*var(--rand2)), #000 0 10%, transparent 12%),
                              radial-gradient(circle at calc(50% - 40%*var(--rand0)) calc(30% + 40%*var(--rand2)), #000 0 10%, transparent 12%),
                              radial-gradient(circle at calc(50% + 40%*var(--rand1)) calc(60% + 35%*var(--rand3)), #000 0 7%, transparent 9%),
                              radial-gradient(circle at calc(50% - 40%*var(--rand1)) calc(60% + 35%*var(--rand3)), #000 0 7%, transparent 9%),
                              linear-gradient(90deg, transparent 0% 48%, #0008 48% 52%, transparent 52% 100%)
                ;
                      box-shadow:
                              calc(0.4*var(--remX)) calc(0.4*var(--remY)) 0.5rem #FFF3 inset,
                              calc(-0.4*var(--remX)) calc(-0.4*var(--remY)) 0.4rem #0008 inset,
                              calc(0.4*var(--remX)) calc(0.4*var(--remY)) 0.1rem #0005
                ;
    /*transition: background-color calc(2.7*var(--animT)) linear;*/
              }
}
  `
  _target.appendChild(style)
}

function initDOM(_target){
  const w = document.documentElement.clientWidth // todo update onresize
  const h = document.documentElement.clientHeight
  const step = 60
  const num = w*h/3E3<<0
    
  const leaf = document.createElement('div')
  leaf.classList.add('leaf')
  _target.appendChild(leaf)

  const bugs = Array.from(new Array(num)).map((o,i)=>{
    const ladybug = document.createElement('div')
    ladybug.classList.add('ladybug')
    const {style} = ladybug
    Object.assign(style,{
      left: Math.random()*w*0.9+'px',
      top: Math.random()*h*0.9+'px'
    })
    setStyle(style,{
      radians: Math.random()*2*Math.PI,
      index: 88 + i,
      animT: (300 + Math.random()*200<<0)+'ms'
    })
    ladybug.addEventListener('click',()=>walk(style))
    leaf.appendChild(ladybug)
    return ladybug
  })

  function walk(style){
    const x = parseFloat(style.left)
    const y = parseFloat(style.top)
    const radians = parseFloat(style.getPropertyValue('--radians')) + 3*(Math.random() - 0.5)
    const nx = x + step*Math.cos(radians - 0.5*Math.PI)
    const ny = y + step*Math.sin(radians - 0.5*Math.PI)
    const left = nx + 'px'
    const top = ny + 'px'
    const animT = parseInt(style.getPropertyValue('--animT'),10)
    Object.assign(style, {left,top})
    setStyle(style,{radians})
    setTimeout(()=>{
      walkClosest(style)
      style.transition = 'none'
      requestAnimationFrame(()=>{
        ;(nx>w||nx<0)&&(style.left = (nx + 2*w)%w + 'px')
        ;(ny>h||ny<0)&&(style.top = (ny + 2*h)%h + 'px')
        requestAnimationFrame(()=>style.removeProperty('transition'))
      })
    },animT)
  }

  function walkClosest(style){
    const x = toNumber(style.left)
    const y = toNumber(style.top)
    bugs.filter(bug=>{
      const bugStyle = bug.style
      if (style!==bugStyle){
        const bx = toNumber(bugStyle.left)
        const by = toNumber(bugStyle.top)
        const dx = x-bx
        const dy = y-by
        const d = Math.sqrt(dx*dx+dy*dy)
        return Math.abs(d)<32
      }
    }).forEach(close=>{
      walk(close.style)
    })
  }

  function toNumber(s){
    return parseFloat(s.replace(/[^\d.]/g,''))
  }

  function setStyle(style,props){
    Object.entries(props).forEach(([key,value])=>{
      style.setProperty('--'+key, value)
    })
  }
}

const inst = experiment('ladybugs', {init})

export const ladybugs = inst.expose
