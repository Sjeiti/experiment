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
  ,num = 80
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
  //points.length = 0
  //for (let i = 0; i<num; i++) points.push(point())
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

  const offset = 444
  const lineDist = h/num
  for(let i=0;i<num;i++){
    const part = i/num
    const y = lineDist*i
    const lineH = (part+0.1)*lineDist
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
}

function handleResize(){
  w = Math.ceil(target.clientWidth/scale)
  h = Math.ceil(target.clientHeight/scale)
  center.set(w/2,h/2,w/4+h/4)
  elmCanvas.width = w
  elmCanvas.height = h
  context.lineWidth = h/num/2
}

// private methods

function point(){
  let position = vector(0,0,0)
    ,speed = vector(0,0,0)
    ,size
    ,color1 = null
    ,color2 = null
    ,color1Time = 1
    ,color2Time = 1
    ,o = {
      toString:function(){return '[object Point]';}
      ,color:null
      ,size:null
      ,setPos:position.set
      ,x:position.getX()
      ,y:position.getY()
      ,setSpd:speed.set
      ,step:step
      ,reset:reset
      ,resetColor:resetColor
    }
  reset()
  function reset() {
    let iSze = 900/scale
      ,fSpd = 3/scale
    position.set(rnd(iSze),rnd(iSze))
    speed.set(rnd(fSpd),rnd(fSpd))
    color1 = color()
    color2 = color()
    o.color = color()
    size = Math.random()*iSze
    return o
  }
  function resetColor(t){
    color2.set(color1.get())
    color1.randomize()
    color1Time = t
    color2Time = t + 10000 + (10000*Math.random()<<0)
  }
  function step(t){
    speed.add(position.clone().multiply(-0.0001)).add(vector(rnd(0.0001),rnd(0.0001)))
    position.add(speed)
    o.x = position.getX()
    o.y = position.getY()
    o.size = 0.1*w+Math.sin(t*0.0004+size)*0.1*w
    if (t>color2Time) resetColor(t)
    o.color.set(color1.get()).average(color2,1-(t-color1Time)/(color2Time-color1Time))
    return o
  }
  return o
}
function draw(point,i){
  //let i = point.size
  //context.shadowColor = point.color.hex
  //context.fillColor = point.color.hex
  //context.shadowBlur = i
  //context.fillRect(point.x-i/2,point.y-i/2,i,i)
  const fn = (i===0&&context.moveTo||context.lineTo).bind(context)
  fn(point.x, point.y)
}

function rnd(f) {
  return f*(Math.random()-0.5)
}

export default inst.expose
