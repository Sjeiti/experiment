//import asdd from './experiment'
//alert(467)
/*window.onerror = function(msg,uri) {
    alert('Error caught'+msg+uri)
}*/
import xp from './experiment'

const {body} = document

window.onerror = alert

const div = document.createElement('div')
div.classList.add('experiment')
body.appendChild(div)

//alert(!!xp)s
// xp.river.init(document.body)
// xp.vertical.init(document.body)
// xp.fire.init(document.body)
// xp.radialgradient.init(document.body)
// xp.moire.init(document.body)

let currentExperiment = xp.rotate
currentExperiment.init(div)

const ul = document.createElement('ul')
ul.classList.add('experiments')
Object.entries(xp).forEach(([name, experiment])=>{
  const li = document.createElement('li')
  ul.appendChild(li)
  li.classList.add('experiments__experiment')
  const button = document.createElement('button')
  li.appendChild(button)
  button.classList.add('experiments__button')
  button.textContent = name
  button.addEventListener('click', onClickExperimentButton.bind(null, experiment))
})
body.appendChild(ul)

function onClickExperimentButton(experiment){
  currentExperiment.exit()
  currentExperiment = experiment
  currentExperiment.init(div)
}
