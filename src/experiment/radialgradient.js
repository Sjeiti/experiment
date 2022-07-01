/**
 * Radial gradients
 * @module experiment/radialgradient
 * @see module:experiment/base
 */
import experiment from './base'

let inst = experiment('radialgradient',{init})

function init(target){

  const {style} = target

  const input = document.createElement('input')
  input.type = 'number'
  input.value = 223
  Object.assign(input.style, {
    border:0
    ,background:'transparent'
    ,width:'100%'
    ,height:'100%'
    ,verticalAlign:'top'
  })
  target.appendChild(input)

  const multiplier = 25214903917//48271//
  const increment = 11
  const modulus = 2E48//2147483647//
  let seed = 123
  function rnd(_seed,iterate=1) {
    if (_seed!==undefined) seed = _seed
    while (iterate--) seed = (multiplier*seed+increment)%modulus
    return seed
  }
  function random(seed,iterate) {
    return rnd(seed,iterate)/modulus
  }

  const array = num => new Array(num).fill(0)
  const percent = () => Math.round(-50 + random()*200) + '%'
  const clr = () => '#'+('00000'+(random()*(1<<24)|0).toString(16)).slice(-6)

  const getRange = (clr, num=10) => {
    const part = 100/num
    return array(num).map((o,i)=>`${clr} ${(i)*part}%, transparent ${(1+i)*part}%`).join(', ')
  }

  function setColor(){
    seed = input.value
    random(seed, 22)
    style.background = array(3+random()*4<<0).map(()=>`radial-gradient(circle at ${percent()} ${percent()}, ${getRange(clr(), 2+random()*random()*30<<0)})`).join(',')
  }
  input.addEventListener('change', setColor)

  setColor()
}

export default inst.expose
