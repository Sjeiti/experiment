import {
  glass
  , blob
  , grid
  , snow
  , boids
  , hypno
  , spiralmap
  , clouds
  , infinitecubes
  , starzoom
  , knottywood
  , touches
  , marbles
  , vertical
  , fire
  , plasma
  , radialdifference
  , radialgradient
  , bezier
  , moire
  , rotate
} from './experiment'
import {createElement} from './utils/html'

window.onerror = alert

const experiments = /** @type {Object.<string, Experiment>} */{
  glass
  , blob
  , grid
  , snow
  , boids
  , hypno
  , spiralmap
  , clouds
  , infinitecubes
  , starzoom
  , knottywood
  , touches
  , marbles
  , vertical
  , fire
  , plasma
  , radialdifference
  , radialgradient
  , bezier
  , moire
  , rotate
}

const experimentWrapper = document.querySelector('.experiment')

let currentExperiment = experiments[location.hash.substring(1)]||experiments.rotate
currentExperiment.init(experimentWrapper)

const ul = document.querySelector('.menu__list')
Object.entries(experiments).forEach(([name, /**Experiment*/experiment])=>{
  const li = createElement('li', null, ul)
  createElement('button', 'menu__button', li, null, name)
    .addEventListener('click', onClickExperimentButton.bind(null, experiment))
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
