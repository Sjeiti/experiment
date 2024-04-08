/**
 * Base module to extend experiments from
 * @module experiment/base
 */
import {resize,animate,dragstart,drag,dragend,experimentFrame} from '../signal/signals'

const extend = Object.assign
const basePrototype = /** @name Experiment */{
  init
  ,exit
  ,pause
  ,handleResize
  ,handleAnimate
  ,handleDragStart
  ,handleDrag
  ,handleDragEnd
  ,handleClick
  ,fromSrc
}
const baseProperties = {}

/**
 * Initialise and append the canvas element, add event listeners
 * @param {HTMLElement} target
 * @returns {HTMLCanvasElement}
 */
function init(target){
  console.log('init', this, target) // todo: remove log
  //
  const canvas = document.createElement('canvas')
  const context = canvas.getContext(this.contextType,{preserveDrawingBuffer:true}) // preserveDrawingBuffer is for webgl to save images, but slower than the default false (=swapping instead of copying)
  //
  extend(this,{
    target
    ,canvas
    ,context
    ,paused: false
    ,w: 1 // todo: make into getter/setter
    ,h: 1
    ,isMouseDown: false
    ,lastX: null
    ,lastY: null
    ,offsetX: null
  })
  target.appendChild(canvas)
  //
  this.bindings = [
    resize.add(this.handleResize.bind(this))
    ,animate.add(this.handleAnimate.bind(this))
    ,dragstart.add(this.handleDragStart.bind(this))
    ,drag.add(this.handleDrag.bind(this))
    ,dragend.add(this.handleDragEnd.bind(this))
  ]
  this.canvas.addEventListener('click',this.handleClick)
  //
  return this.canvas
}

/**
 * Remove the canvas element, remove event listeners
 */
function exit() {
  const {target} = this
  this.bindings?.forEach(binding=>binding.remove())
  //this.bindings?.forEach(binding=>binding.detach())
  this.bindings?.splice(0, Number.MAX_SAFE_INTEGER)
  this.canvas?.removeEventListener('click',this.handleClick)
  this.canvas?.remove()
  while (target.children.length) target.firstChild.remove()
}

/**
 * Pause experiment by removing the animation signal
 */
function pause(_pause) {
  if (this.canvas&&this.canvas.parentNode&&(_pause===undefined||_pause!==this.paused)) {
    this.paused && animate.add(this.handleAnimate) || animate.remove(this.handleAnimate)
    this.paused = !this.paused
  }
}

/**
 * Default resize signal handler
 */
function handleResize() {
  let clientWidth = Math.max(2,this.target.clientWidth)
    ,clientHeight = Math.max(2,this.target.clientHeight)
  if (this.w!==clientWidth) {
    this.w = clientWidth
    this.canvas.width = clientWidth
  }
  if (this.h!==clientHeight) {
    this.h = clientHeight
    this.canvas.height = clientHeight
  }
}

/**
 * Base animation signal handler
 * @param {number} deltaT
 * @param {number} millis
 */
function handleAnimate(deltaT,millis) {
  experimentFrame.dispatch(this.canvas, deltaT, millis)
  // console.warn('overwrite experimentInstance.handleAnimate',deltaT,millis)
}

/**
 * Base dragstart signal handler
 */
function handleDragStart(){
  this.isMouseDown = true
}

/**
 * Base drag signal handler
 * @param {object[]} touchList
 */
function handleDrag(touchList){
  let touch
  touchList.forEach((id,tch)=>tch.pos&&(touch=tch))
  if (touch) {
    let x = touch.pos.getX()
      ,y = touch.pos.getY()
    if (this.lastX!==null) {
      this.offsetX += x-this.lastX
    }
    this.lastX = x
    this.lastY = y
  }
}

/**
 * Base dragend signal handler
 */
function handleDragEnd(){
  this.isMouseDown = false
  this.lastX = null
}

/**
 * Base click event handler
 */
function handleClick(){
  this.isMouseDown = false
  this.lastX = null
}

/**
 * Create experiment in iframe from uri
 * @param {string} uri
 * @returns {Experiment}
 */
function fromSrc(html, target){
  if (target) this.target = target
  const iframe = document.createElement('iframe')
  Object.assign(iframe.style, {width:'100%', height:'100%', border: '0'})
  this.target.appendChild(iframe)
  iframe.srcdoc = html
  return this
}

/**
 *
 * @param {string} name
 * @param {object} extension
 * @param {string} contextType
 * @returns {Experiment}
 */
export default function(name,extension,contextType) {
  let inst = Object.create(basePrototype,baseProperties)
  extend(inst,/** @name Experiment */{
    /** @type {string} */
    name: name || 'noName'
    /** @type {string} */
    ,contextType: contextType || '2d'
    //
    /** @type {Experiment} */
    ,expose: {} // The property the child object should return (type could be object, Array or function).
    /** @type {Experiment} */
    ,zuper: {} // Alas, super is reserved
  })
  //
  // create super
  for (let s in basePrototype) {
    if (basePrototype.hasOwnProperty(s)) {
      inst.zuper[s] = inst[s].bind(inst)
    }
    // bind private- unoverridden methods to inst
    if (extension?.hasOwnProperty(s)) {// todo: exclude public
      inst[s] = basePrototype[s].bind(inst)
    }
  }
  Object.freeze(inst.zuper) // Because we can
  //
  // extend the instance
  if (extension) {
    for (let fncName in extension) {
      if (extension.hasOwnProperty(fncName)) {
        inst[fncName] = extension[fncName].bind(inst)
      }
    }
  }
  // extend expose property with public methods
  extend(inst.expose,{
    init: inst.init.bind(inst)
    ,exit: inst.exit.bind(inst)
    ,pause: inst.pause.bind(inst)
    ,toString(){
      return '[object ' + inst.name + ']'
    }
  })
  //
  Object.defineProperty(inst.expose,'contextType',{
    value: inst.contextType
  })
  Object.defineProperty(inst.expose,'name',{
    enumerable: false,configurable: false,writable: false,value: inst.name
  })
  return inst
}
