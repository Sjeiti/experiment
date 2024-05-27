/** Signal for scrolling.<br/>
 * The callback for this signal is Function(scrollLeft,scrollTop)
 * @name iddqd.signal.scroll
 * @type Signal
 */

import {createSignal} from 'state-signals'
import {getScrollX,getScrollY} from '../utils/utils'

const scroll = createSignal()
const doc = document
const body = doc.body
const capture = true
const passive = true
const  listenerOptions = {capture,passive}

window.addEventListener('touchmove',handleScroll,listenerOptions);
window.addEventListener('scroll',handleScroll,listenerOptions);

function handleScroll(e){
	scroll.dispatch(e,getScrollX(),getScrollY())
}

export default scroll
