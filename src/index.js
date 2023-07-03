import * as experiments from './experiment'
import {createElement} from './utils/html'

window.onerror = alert

const experimentWrapper = document.querySelector('.experiment')

let currentExperiment = experiments[location.hash.substring(1)]||experiments.rotate
currentExperiment.init(experimentWrapper)

const ul = document.querySelector('.menu__list')
Object.entries(experiments).forEach(([name, /**Experiment*/experiment])=>{
  const li = createElement('li', null, ul)
  createElement('button', 'menu__button', li, null, name)
    .addEventListener('click', onClickExperimentButton.bind(null, experiment))
})

document.querySelector('#height').addEventListener('change',e=>{
  experimentWrapper.classList.toggle('experiment--height', e.target.checked)
  window.dispatchEvent(new Event('resize'))
})

/**
 * Select an experiment
 * @param experiment {Experiment}
 */
function onClickExperimentButton(experiment){
  currentExperiment.exit()
  currentExperiment = experiment
  location.hash = experiment.name
  currentExperiment.init(experimentWrapper)
  console.log('experiment', experiment)
}
