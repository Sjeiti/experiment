import {createSignal} from 'state-signals'

import fullScreen from './fullscreen'
import resize from './resize'
import animate from './animate'
import key from './key'
import scroll from './scroll'
import {dragstart,drag,dragend} from '../signal/drag'

const modelLoaded = createSignal() // model
const routeChange = createSignal()// routefrom, routeto
const pageLoaded = createSignal()// page
const projectLoaded = createSignal()// project
const taxonomyHover = createSignal()
const lineHighlighted = createSignal()// from, to
const lockHeader = createSignal()// boolean
const experimentFrame = createSignal()// canvas

/*
const
  modelLoaded = new Signal // model
  ,routeChange = new Signal // routefrom, routeto
  ,pageLoaded = new Signal // page
  ,projectLoaded = new Signal // project
  ,taxonomyHover = new Signal
  ,lineHighlighted = new Signal // from, to
  ,lockHeader = new Signal // boolean
  ,experimentFrame = new Signal // canvas
*/
  
export {
  modelLoaded
  ,routeChange
  ,pageLoaded
  ,projectLoaded
  ,taxonomyHover
  ,lineHighlighted
  ,lockHeader
  ,experimentFrame
  //
  ,fullScreen
  ,resize
  ,animate
  ,dragstart
  ,drag
  ,dragend
  ,key
  ,scroll
}
