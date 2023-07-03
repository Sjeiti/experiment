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

  <g style="--scale: 0.300; animation-delay: 52.472ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-15px) rotate(-25deg) scale(0.13,0.13); "></use></g>
  <g style="--scale: 0.300; animation-delay: 447.117ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-15px) rotate(-14deg) scale(0.12,0.11); "></use></g>
  <g style="--scale: 0.301; animation-delay: 447.554ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-20px) rotate(-34deg) scale(0.25,0.37); "></use></g>
  <g style="--scale: 0.303; animation-delay: 399.621ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-12px) rotate(-21deg) scale(0.20,0.41); "></use></g>
  <g style="--scale: 0.305; animation-delay: 342.137ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-24px) rotate(-17deg) scale(0.14,0.33); "></use></g>
  <g style="--scale: 0.308; animation-delay: 996.863ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-14px) rotate(34deg) scale(0.27,0.04); "></use></g>
  <g style="--scale: 0.311; animation-delay: 950.817ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-12px) rotate(38deg) scale(0.38,0.45); "></use></g>
  <g style="--scale: 0.316; animation-delay: 811.160ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-21px) rotate(-2deg) scale(0.24,0.41); "></use></g>
  <g style="--scale: 0.320; animation-delay: 781.516ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-13px) rotate(16deg) scale(0.26,0.48); "></use></g>
  <g style="--scale: 0.326; animation-delay: 521.494ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-16px) rotate(34deg) scale(0.17,0.31); "></use></g>
  <g style="--scale: 0.332; animation-delay: 371.095ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-19px) rotate(-28deg) scale(0.25,0.46); "></use></g>
  <g style="--scale: 0.338; animation-delay: 923.721ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-18px) rotate(47deg) scale(0.23,0.15); "></use></g>
  <g style="--scale: 0.346; animation-delay: 703.301ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-7px) rotate(-15deg) scale(0.32,0.30); "></use></g>
  <g style="--scale: 0.354; animation-delay: 81.474ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-17px) rotate(-16deg) scale(0.20,0.04); "></use></g>
  <g style="--scale: 0.362; animation-delay: 839.978ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-24px) rotate(34deg) scale(0.17,0.35); "></use></g>
  <g style="--scale: 0.371; animation-delay: 832.038ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-8px) rotate(-23deg) scale(0.10,0.00); "></use></g>
  <g style="--scale: 0.381; animation-delay: 581.644ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-25px) rotate(-49deg) scale(0.39,0.30); "></use></g>
  <g style="--scale: 0.392; animation-delay: 909.153ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-17px) rotate(-33deg) scale(0.17,0.07); "></use></g>
  <g style="--scale: 0.403; animation-delay: 109.836ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-20px) rotate(-15deg) scale(0.39,0.17); "></use></g>
  <g style="--scale: 0.414; animation-delay: 470.965ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-20px) rotate(-33deg) scale(0.35,0.06); "></use></g>
  <g style="--scale: 0.427; animation-delay: 366.967ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-17px) rotate(22deg) scale(0.14,0.25); "></use></g>
  <g style="--scale: 0.440; animation-delay: 372.970ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-26px) rotate(12deg) scale(0.39,0.05); "></use></g>
  <g style="--scale: 0.453; animation-delay: 734.193ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-13px) rotate(42deg) scale(0.16,0.33); "></use></g>
  <g style="--scale: 0.468; animation-delay: 754.851ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-23px) rotate(-42deg) scale(0.14,0.49); "></use></g>
  <g style="--scale: 0.483; animation-delay: 670.514ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-9px) rotate(-36deg) scale(0.10,0.26); "></use></g>
  <g style="--scale: 0.498; animation-delay: 396.674ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-14px) rotate(29deg) scale(0.21,0.06); "></use></g>
  <g style="--scale: 0.514; animation-delay: 324.104ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-6px) rotate(26deg) scale(0.25,0.25); "></use></g>
  <g style="--scale: 0.531; animation-delay: 834.586ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-22px) rotate(35deg) scale(0.15,0.15); "></use></g>
  <g style="--scale: 0.548; animation-delay: 108.131ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-25px) rotate(-39deg) scale(0.37,0.46); "></use></g>
  <g style="--scale: 0.567; animation-delay: 861.982ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-15px) rotate(-12deg) scale(0.27,0.37); "></use></g>
  <g style="--scale: 0.585; animation-delay: 466.721ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-7px) rotate(22deg) scale(0.31,0.04); "></use></g>
  <g style="--scale: 0.605; animation-delay: 402.287ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-7px) rotate(42deg) scale(0.29,0.02); "></use></g>
  <g style="--scale: 0.624; animation-delay: 465.376ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-25px) rotate(-35deg) scale(0.38,0.19); "></use></g>
  <g style="--scale: 0.645; animation-delay: 61.905ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-22px) rotate(-48deg) scale(0.32,0.33); "></use></g>
  <g style="--scale: 0.666; animation-delay: 303.155ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-13px) rotate(24deg) scale(0.22,0.45); "></use></g>
  <g style="--scale: 0.688; animation-delay: 472.950ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-24px) rotate(9deg) scale(0.13,0.49); "></use></g>
  <g style="--scale: 0.711; animation-delay: 656.645ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-18px) rotate(22deg) scale(0.27,0.33); "></use></g>
  <g style="--scale: 0.734; animation-delay: 58.655ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-13px) rotate(-43deg) scale(0.23,0.22); "></use></g>
  <g style="--scale: 0.758; animation-delay: 394.872ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-12px) rotate(-15deg) scale(0.21,0.27); "></use></g>
  <g style="--scale: 0.782; animation-delay: 723.744ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-18px) rotate(-17deg) scale(0.25,0.09); "></use></g>
  <g style="--scale: 0.807; animation-delay: 396.143ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-13px) rotate(6deg) scale(0.18,0.29); "></use></g>
  <g style="--scale: 0.833; animation-delay: 381.533ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-21px) rotate(40deg) scale(0.12,0.25); "></use></g>
  <g style="--scale: 0.859; animation-delay: 860.080ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-21px) rotate(8deg) scale(0.26,0.40); "></use></g>
  <g style="--scale: 0.886; animation-delay: 84.208ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-23px) rotate(3deg) scale(0.24,0.35); "></use></g>
  <g style="--scale: 0.913; animation-delay: 737.173ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-12px) rotate(13deg) scale(0.40,0.21); "></use></g>
  <g style="--scale: 0.942; animation-delay: 103.684ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-20px) rotate(22deg) scale(0.23,0.09); "></use></g>
  <g style="--scale: 0.971; animation-delay: 901.239ms;"><use xlink:href="#tree"></use>
    <use xlink:href="#tree" style=" transform-origin: center bottom; transform: translate(0,-9px) rotate(-27deg) scale(0.34,0.25); "></use>

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

		g {
		  position: relative;
			transform: translate(1E9px, 0);
			animation: hor calc(var(--t) * (1 / var(--scale))) linear infinite;
			color: color-mix(in lch, var(--d) calc(var(--scale) * 100%), var(--l));
		}
		use use { animation: none; }
  </style>
  <defs>
    <symbol id="tree" viewBox="-10 -64 20 67">
      <path style="fill: currentColor;" d="M-10,0L-9,-64L9,-64L10,0Q10,3 0,3Q-10,3 -10,0Hz"/>
    </symbol>
  </defs>
</svg>`
  )
  const rules = document.querySelector('.svg-trees style').sheet.cssRules
  const mainStyle = document.querySelector('.svg-trees').style
  console.log('rules',rules) // todo: remove log


  _target.addEventListener('click', ()=>{
    setCSSProp('d', getRandomColor(4))
    setCSSProp('l', getRandomColor())
  })

  function setCSSProp(name, value) {
    mainStyle.setProperty(`--${name}`, value)
  }

  function getRandomColor(max=16){
    return '#'+('00000'+(Math.random()*(1<<24)|0).toString(max)).slice(-6)
  }

  // const svg = document.querySelector('.svg-trees')
  // Array.from(svg.querySelectorAll('use')).forEach(use=>use.remove())
  // const NSSVG = 'http://www.w3.org/2000/svg'
  // const NSXLINK = 'http://www.w3.org/1999/xlink'
  // const fragment = document.createDocumentFragment()
  // Array.from(new Array(47)).map((o,i,a)=>{
  //   const scale = (0.3 + 0.7*Math.pow(i/a.length, 2)).toFixed(3)
  //   const delay = (Math.random()*999).toFixed(3)
  //
  //   const g = document.createElementNS(NSSVG, 'g')
  //   g.setAttribute('style', `--scale: ${scale}; animation-delay: ${delay}ms;`)
  //
  //   const use = document.createElementNS(NSSVG, 'use')
  //   use.setAttributeNS(NSXLINK, 'href', '#tree')
  //   g.appendChild(use)
  //
  //   const branch = document.createElementNS(NSSVG, 'use')
  //   branch.setAttributeNS(NSXLINK, 'href', '#tree')
  //   branch.setAttribute('style', `
  //     transform-origin: center bottom;
  //     transform:
  //         translate(0,-${(6+20*Math.random()).toFixed(0)}px)
  //         rotate(${(-50+100*Math.random()).toFixed(0)}deg)
  //         scale(${(0.1+0.3*Math.random()).toFixed(2)},${(0.5*Math.random()).toFixed(2)});
  //   `)
  //   g.appendChild(branch)
  //
  //   fragment.appendChild(g)
  // })
  // svg.appendChild(fragment)
  zuper.init(_target)
}


export const forest = inst.expose
