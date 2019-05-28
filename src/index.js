import 'bootstrap'
import bg from './img/bg-paper01.jpg'
import atlanta from './img/atlanta.jpg'
import am from './img/am.jpg'
import bdg from './img/bdg.jpg'
import dhf from './img/dhf.jpg'
import dnb from './img/dnb.jpg'
import gg from './img/gg.jpg'
import made from './img/made.jpg'
import mo from './img/mo.jpg'
import ts from './img/ts.jpg'
import tt from './img/tt.jpg'
import './sass/main.scss'
import projects from './data/projects.json'
import experiments from './data/experiments.json'

let projectRow  = 0;
let experimentRow = 0;

const projectsContainer = document.getElementById('projects');
const experimentsContainer = document.getElementById('experiments');

var createNode = (element) => {return document.createElement(element)}
var appendNode = (parent, element) => {return parent.appendChild(element)}

var loadProjects = () =>{
  
  projects.map(function(project) { // Map through the results and for each run the code below
    let col = createNode('div'), //  Create the elements we need
      card = createNode('div'),
      img = createNode('img'),
      title = createNode('h2')
      
    card.setAttribute('class', 'card')
    title.setAttribute('class', 'title')
    img.src = project.thumb  // Add the source of the image to be the src of the img element
    title.innerHTML = `<a href="${project.url}" target="_blank">${project.name} </a>` // Make the HTML of our span to be the first and last name of our author

    if((projectRow==0)||(projectRow==3)){
      col.setAttribute('class', 'col-md-12 col-xs-12')
    }
    else{
      col.setAttribute('class', 'col-md-6 col-xs-12')
    }
    
    appendNode(card, img)
    appendNode(card, title)
    appendNode(col, card)
    projectRow++
    return appendNode(projectsContainer, col)
  })
}

var loadExperiments = () =>{
  experiments.map(function(experiment) { // Map through the results and for each run the code below
    let col = createNode('div'), //  Create the elements we need
      card = createNode('div'),
      img = createNode('img'),
      title = createNode('h2')
      
    card.setAttribute('class', 'card')
    title.setAttribute('class', 'title')
    img.src = experiment.thumb  // Add the source of the image to be the src of the img element
    img.setAttribute('alt', experiment.name) // Add alternative texte to the image to the img element
    title.innerHTML = `<a href="${experiment.url}" target="_blank">${experiment.name} </a>` // Make the HTML of our span to be the first and last name of our author

  
    if((experimentRow==0)||(experimentRow==3)){
      col.setAttribute('class', 'col-md-12 col-xs-12')
    }
    else{
      col.setAttribute('class', 'col-md-6 col-xs-12')
    }
    
    appendNode(card, img)
    appendNode(card, title)
    appendNode(col, card)
    experimentRow++
    return appendNode(experimentsContainer, col)
  })
}

        
loadProjects();
loadExperiments();