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

const projectsContainer = document.getElementById('projects');
const experimentsContainer = document.getElementById('experiments');

var createNode = (element) => {return document.createElement(element)}
var appendNode = (parent, element) => {return parent.appendChild(element)}

var loadCards = (elem, cardContainer) =>{
  let experimentRow = 0;
  elem.map(function(elem) { // Map through the results and for each run the code below
    
    let col = createNode('div'), //  Create the elements we need
      card = createNode('div'),
      img = createNode('img'),
      desc = createNode('p'),
      linkedImg = createNode('a'),
      viewLive = createNode('span'),
      title = createNode('h2'),
      overlay = createNode('div'),
      stack = createNode('div')
      
    card.setAttribute('class', 'card') //  set attributes to the elements created
    overlay.setAttribute('class', 'description')
    title.setAttribute('class', 'title')
    img.src = elem.thumb
    img.setAttribute('alt', elem.name) 
    linkedImg.appendChild(img)
    linkedImg.setAttribute('href', elem.url)
    linkedImg.setAttribute('target', "_blank")
    title.innerHTML = `<a href="${elem.url}" target="_blank">${elem.name} </a>` 
    desc.innerHTML = elem.desc 
    viewLive.innerHTML = `<a href="${elem.url}" target="_blank">View Live </a>` 
    img.innerHTML = `<a href="${elem.url}" target="_blank">${img} </a>` 


    if((experimentRow==0)||(experimentRow==3)){ // create the grid according to index
      col.setAttribute('class', 'col-md-12 col-xs-12')
    }
    else{
      col.setAttribute('class', 'col-md-6 col-xs-12')
    }

    appendNode(overlay, desc)
    appendNode(overlay, loadTech(elem.stack))
    appendNode(overlay, viewLive)
    appendNode(card, title) //  Attach element to the card
    appendNode(card, linkedImg)
    appendNode(card, overlay)
    appendNode(col, card)
    experimentRow++
    return appendNode(cardContainer, col)
  })
}

var loadTech = (stack) => {
  let i = 0,
    tech = createNode('div')
  
  tech.setAttribute('class', 'techStack') 
  
  for(i = 0; i < stack.length; i++){
    tech.innerHTML +=  `<span class="badge badge-info">${stack[i]} </span>` 
  }
  return tech
}

loadCards(projects, projectsContainer);
loadCards(experiments, experimentsContainer);