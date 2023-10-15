// Created on 9/01/23 by ArchILLtect for The Odin Project
const DEF_COLOR = 'black';
const DEF_MODE = 'color';

let currentColor = DEF_COLOR;
let currentMode = DEF_MODE;
let mouseDown = false;

let screen = document.getElementById("gridContainer");


function createGrid(size = 20) {
    let gridTotal = size * size;

    if ( size > 150 ) {
        size = 150;
    }
    // Clear existing grid
    screen.innerHTML = '';

    for (let currentNode = 1; currentNode <= gridTotal; currentNode++) {
        const gridNode = document.createElement("div");
        gridNode.classList.add('gridNode');
        gridNode.addEventListener('mouseover', nodePaint);
        screen.appendChild(gridNode);
        gridNode.draggable = false;
    }

    // Set the CSS grid properties for the mainContainer
    screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

// Switch paint colors:
function nodePaint(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    switch (currentMode) { 
        case 'rainbow':
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            break;  
        case 'color':
            e.target.style.backgroundColor = currentColor;
            break;
        case 'eraser':
            e.target.style.backgroundColor = '#FfFfFf';
            break;
        default:
            color = 'black';
            break;
    } 
}

function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
  }

function changeColor(event) {
    switch (event.target.dataset.color) { 
        case 'rainbow':
            color = 'rainbow';
            break;  
        case 'gray':
            color = 'gray';
            break;
        case 'eraser':
            color = 'eraser';
            break;
        default:
            color = 'black';
            break;
    } 
}

// focusButton:
function selectMode(newMode) {
    switch (currentMode) {
        case 'rainbow':
            rainbowBtn.classList.remove('active')
            break;  
        case 'color':
            rainbowBtn.classList.remove('active')
            break;
        case 'eraser':
            rainbowBtn.classList.remove('active')
            break;
    }

    switch (newMode) {
        case 'rainbow':
            rainbowBtn.classList.remove('active')
            break;  
        case 'color':
            rainbowBtn.classList.remove('active')
            break;
        case 'eraser':
            rainbowBtn.classList.remove('active')
            break;
    }



    if (currentMode === 'rainbow') {
      rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
      colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
      rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
      colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }
}

  
// Helper Functions:

// On Startup:
function appPrep() {
    clearScreen();
    createGrid();
    document.addEventListener('mousedown', function(){
        mouseDown = true;
    });
    document.addEventListener('mouseup', function(){
        mouseDown = false;
    });
}

window.addEventListener('load', function(){
    appPrep();
});


function buttonHover() {
    this.style.border = '1px solid #ffffff';
}

function buttonRevert() {
    this.style.border = '1px solid #FF0000';
}

// Clear Button
function clearScreen() {
    let gridNodes = document.querySelectorAll('.gridNode');
    gridNodes.forEach(node => node.style.backgroundColor = '#FfFfFf');
}

// Event Listeners:
const gridSizeSlider = document.getElementById('gridSizeSlider');
const gridSizeValue = document.getElementById('gridSizeValue');
//const allButtons = document.querySelectorAll('button');
const colorModeBtn = document.getElementById('colorModeBtn');
const RainbowModeBtn = document.getElementById('rainbowModeBtn');
const eraserModeBtn = document.getElementById('eraserModeBtn');
const toggleGridBtn = document.getElementById('toggleGridBtn');
const clearButton = document.getElementById('clearScreen');

// Toggle grid
toggleGridBtn.addEventListener('click', function(){
    let gridNodes = document.querySelectorAll('.gridNode');
    gridNodes.forEach(node => node.classList.toggle('gridOn'));
})
// Color Mode


// Rainbow Mode

// Eraser Mode

// Clear button
clearButton.addEventListener('click', clearScreen);

// Size Slider Listener:
gridSizeSlider.addEventListener('mousemove', function(e){
    gridSizeValue.innerHTML = `${e.target.value} x ${e.target.value}`;
});
gridSizeSlider.addEventListener('change', function(e){
    // Update size value
    gridSizeValue.innerHTML = `${e.target.value} x ${e.target.value}`;
    // Reload the grid
    createGrid(e.target.value)
});


