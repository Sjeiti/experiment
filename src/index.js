import xp from './experiment'
import {createElement} from './utils/html'

window.onerror = alert

const experimentWrapper = document.querySelector('.experiment')

let currentExperiment = xp.rotate
currentExperiment.init(experimentWrapper)

const ul = document.querySelector('.menu__list')
Object.entries(xp).forEach(([name, experiment])=>{
  const li = createElement('li', null, ul)
  createElement('button', 'menu__button', li, null, name)
    .addEventListener('click', onClickExperimentButton.bind(null, experiment))
})

function onClickExperimentButton(experiment){
  currentExperiment.exit()
  currentExperiment = experiment
  currentExperiment.init(experimentWrapper)
}
