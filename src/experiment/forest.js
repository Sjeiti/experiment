/**
 * Forest
 * @module experiment/forest
 * @see module:experiment/base
 */
import experiment from './base'

const inst = experiment('forest', {
  init
})
const {zuper} = inst

function init(_target){

  _target.insertAdjacentHTML(
    'beforeend',
    `
<svg class="svg-example svg-trees" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
     x="0" y="0" width="100%" height="100%"
     viewBox="0 0 128 32"
     preserveAspectRatio="xMidYMax slice"
>
  <use xlink:href="#tree" style="--scale: 0.300; animation-delay: 164.993ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.301; animation-delay: 883.396ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.305; animation-delay: 213.447ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.312; animation-delay: 772.055ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.321; animation-delay: 408.134ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.333; animation-delay: 928.155ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.348; animation-delay: 90.985ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.365; animation-delay: 136.102ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.385; animation-delay: 571.913ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.407; animation-delay: 642.578ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.432; animation-delay: 266.957ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.460; animation-delay: 862.047ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.491; animation-delay: 439.998ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.524; animation-delay: 905.851ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.559; animation-delay: 720.294ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.598; animation-delay: 247.333ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.639; animation-delay: 776.316ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.682; animation-delay: 911.239ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.729; animation-delay: 135.360ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.778; animation-delay: 942.932ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.829; animation-delay: 59.707ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.884; animation-delay: 268.505ms;"></use>
  <use xlink:href="#tree" style="--scale: 0.940; animation-delay: 988.430ms;"></use>

  <style>
    .svg-trees {
			--t: 2343.731ms;
			--scale: 0.3;

			--d: #01002E;
			--l: #762B7F;

			background-color: var(--l);
			background: var(--l) linear-gradient(var(--l), var(--d));
		}

		@keyframes hor {
			0% {   transform: translate(-100%, 0) scale(var(--scale)); }
			100% { transform: translate(100%, 0) scale(var(--scale));	 }
		}

		use {
			transform: translate(1E9px, 0);
			animation: hor calc(var(--t) * (1 / var(--scale))) linear infinite;
			color: color-mix(in lch, var(--d) calc(var(--scale) * 100%), var(--l));
		}
  </style>
  <defs>
    <symbol id="tree" viewBox="-10 -64 20 67">
      <path style="fill: currentColor;" d="M-10,0L-9,-64L9,-64L10,0Q10,3 0,3Q-10,3 -10,0Hz"/>
    </symbol>
  </defs>
</svg>`

    // const svg = document.querySelector('.svg-trees')
    // Array.from(svg.querySelectorAll('use')).forEach(use=>use.remove())
    // const NSSVG = 'http://www.w3.org/2000/svg'
    // const NSXLINK = 'http://www.w3.org/1999/xlink'
    // const fragment = document.createDocumentFragment()
    // Array.from(new Array(47)).map((o,i,a)=>{
    //   const scale = (0.3 + 0.7*Math.pow(i/a.length, 2)).toFixed(3)
    //   const delay = (Math.random()*999).toFixed(3)
    //   const use = document.createElementNS(NSSVG, 'use')
    //   use.setAttributeNS(NSXLINK, 'href', '#tree')
    //   use.setAttribute('style', `--scale: ${scale}; animation-delay: ${delay}ms;`)
    //   fragment.appendChild(use)
    // })
    // svg.appendChild(fragment)

  )

  zuper.init(_target)
}


export const forest = inst.expose
