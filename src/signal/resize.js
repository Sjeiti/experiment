import {createSignal} from 'state-signals'

const win = window
const doc = document
const html = doc.documentElement
const body = doc.body

let [w,h] = getSize()

const resize = createSignal(w,h,w,h)

win.addEventListener('resize', function(docElm){
  const wOld = w
  const hOld = h
  const [wNew,hNew] = getSize()
  w = wNew
  h = hNew
  resize.dispatch(w,h,wOld,hOld)
},false)

function getSize(){
  return [
    win.innerWidth || html.clientWidth || body.clientWidth
    ,win.innerHeight || html.clientHeight|| body.clientHeight
  ]
}

export default resize
