import {createSignal} from 'state-signals'

let frameNr = 0
let lastMillis = Date.now()
const millisNum = 10
const millisList = Array.from(new Array(millisNum)).map(()=>lastMillis)
const signal = createSignal(30, lastMillis, frameNr)

animate()

function animate(){
  // const [,lastMillis,frameNr] = signal.state
  frameNr++
  const iCurMillis = Date.now()
  millisList.push(iCurMillis-lastMillis)
  millisList.shift()
  const fDeltaT = millisList.reduce((acc,n)=>acc+n,0)/millisNum
  lastMillis = iCurMillis
  signal.dispatch(fDeltaT,iCurMillis,frameNr)
  requestAnimationFrame(animate)
}

/**
 * Animates something
 * @name animate
 * @memberof iddqd.animate
 * @method
 * @private
 * @param {Number} duration Length of animation in milliseconds.
 * @param {Function} step Function called each step with a progress parameter (a 0-1 float).
 * @param {Function} complete Callback function when animation finishes.
 * @return {Object} An animation object with a cancel function.
 */
signal.during = (duration,step,complete)=>{
  let timeStart = Date.now()
    ,isRunning = true
    ,fnRun = function(){
      if (isRunning) {
        let timeCurrent = Date.now()-timeStart
        if (timeCurrent<duration) {
          step(timeCurrent/duration)
          requestAnimationFrame(fnRun)
        } else {
          step(1)
          complete&&complete()
        }
      }
    };
  function cancel(){
    isRunning = false
  }
  fnRun()
  return {
    cancel
  }
}

export default signal
