import experiment from './base'
import color from '../math/color'
import vector from '../math/vector'
import perlin from '../math/perlin'

perlin.noiseDetail(1, 0.5)

let inst = experiment('plasma',{
    init
    ,handleAnimate
    ,handleResize
    ,handleClick
  })
  ,zuper = inst.zuper
  
  ,scale = 1
  ,center = vector(0,0)
  ,points = []
  ,num = 120
  ,elmCanvas
  ,context
  ,w,h
  ,target
  ,fillStyle = '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)
  ,strokeStyle = '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)

function init(_target) {
  //
  target = _target
  //
  elmCanvas = zuper.init(_target)
  elmCanvas.classList.add('canvas')
  elmCanvas.style.zoom = scale
  //
  context = inst.context
  //
  handleResize()
  //
  return elmCanvas
}

function handleClick(){
  fillStyle = '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)
  strokeStyle = '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)
  context.fillStyle = fillStyle
  context.strokeStyle = strokeStyle
}

function handleAnimate(deltaT,millis) {

  context.clearRect(0,0,w,h)

  context.fillStyle = fillStyle
  context.beginPath()
  context.rect(0,0,w,h)
  context.fill()
  context.closePath()
 
  context.fillStyle = strokeStyle
  const f = 0.01
  const pn = (x,y)=>
    perlin.noise(f*x, f*y, 0.0005*millis)-0.5

  // zoom
  context.save()
  if (false){
    const s = 1 + 2*(pn(262662,2770)+0.5)
    context.translate(w/2,h/2)
    context.scale(s,s)
    context.translate(-w/2,-h/2)
  }

  const offset = 1444
  const lineDist = h/num
  for(let i=0;i<num;i++){
    //const part = i/num
    //const part = (1+Math.cos(i/num*Math.PI))/2
    const part = 1 - Math.abs(i/num*2 - 1)
    const y = lineDist*i
    const lineH = (part+0.1)*lineDist * 0.7
    const p0 = [0,y]
    const p1 = [w/3,y]
    const p2 = [2*w/3,y]
    const p3 = [w,y]
    p0[1] += offset*pn(...p0)
    p1[1] += offset*pn(...p1)
    p2[1] += offset*pn(...p2)
    p3[1] += offset*pn(...p3)
    const p4 = [0,y+lineH]
    const p5 = [w/3,y+lineH]
    const p6 = [2*w/3,y+lineH]
    const p7 = [w,y+lineH]
    p4[1] += offset*pn(...p4)
    p5[1] += offset*pn(...p5)
    p6[1] += offset*pn(...p6)
    p7[1] += offset*pn(...p7)
    context.beginPath()
    context.moveTo(...p0)
    context.bezierCurveTo(...p1,...p2,...p3)
    context.lineTo(...p7)
    context.bezierCurveTo(...p6,...p5,...p4)
    context.fill()
    context.closePath()
  }

  context.restore()
}

function handleResize(){
  w = Math.ceil(target.clientWidth/scale)
  h = Math.ceil(target.clientHeight/scale)
  center.set(w/2,h/2,w/4+h/4)
  elmCanvas.width = w
  elmCanvas.height = h
  context.lineWidth = h/num/2
}

function rnd(f) {
  return f*(Math.random()-0.5)
}

export default inst.expose
