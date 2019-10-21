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
  const f = 0.005
  const pn = (x,y)=>
    perlin.noise(f*x, f*y, 0.0005*millis)-0.5

  // zoom
  context.save()
  if (!false){
    const s = 1 + 2*(pn(262662,2770)+0.5)
    context.translate(w/2,h/2)
    context.scale(s,s)
    context.translate(-w/2,-h/2)
  }

  const wSub = 1+1*3
  const wP = w/(wSub-1)
  const offset = 944
  const lineDist = h/num
  const ln = []
  for(let i=0;i<num;i++){
    //const part = i/num
    //const part = (1+Math.cos(i/num*Math.PI))/2
    const part = 1 - Math.abs(i/num*2 - 1)
    const y = lineDist*i
    const lineH = (part+0.1)*lineDist * 0.7
    for(let j=0;j<wSub;j++){
      const x = j*wP
      const k = 2*wSub-j-1
      ln[j] = [x,y]
      ln[k] = [x,y+lineH]
      ln[j][1] += offset*pn(...ln[j])
      ln[k][1] += offset*pn(...ln[k])
    }
    context.beginPath()
    //ln.forEach((p,j)=>{
    for(let j=0,l=ln.length;j<l;j++){
      const p = ln[j]
      if (j===0) context.moveTo(...p)
      else if (j===wSub) context.lineTo(...p)
      else {
        const c1 = p//ln[j]
        const c2 = ln[j+1]
        const p3 = ln[j+2]
        context.bezierCurveTo(...c1,...c2,...p3)
        j += 2
        //const q = 
        //context.quadraticCurveTo(...q,...p)
        //context.lineTo(...p)
      }
    }
    //})
    /*
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
    //context.bezierCurveTo(...p1,...p2,...p3)
    context.lineTo(...p1)
    context.lineTo(...p2)
    context.lineTo(...p3)
    context.lineTo(...p7)
    context.lineTo(...p6)
    context.lineTo(...p5)
    context.lineTo(...p4)
    //context.bezierCurveTo(...p6,...p5,...p4)
    */
    context.fill()
    context.closePath()
    //!window.p&&(alert(ln),window.p=true)
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
