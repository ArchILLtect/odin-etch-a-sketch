// Created on 9/01/23 by ArchILLtect for The Odin Project
let currentColor = 'black';
let currentMode = 'color';
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
        case 'color':
            e.target.style.backgroundColor = currentColor;
            break;
        case 'rainbow':
            e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;  
        case 'eraser':
            e.target.style.backgroundColor = '#FfFfFf';
            break;
        default:
            color = 'black';
            break;
    } 
}

function setCurrentColor(newColor) {
    currentColor = newColor
  }

function setCurrentMode(newMode) {
    selectMode(newMode)
    currentMode = newMode
}

// focusButton:
function selectMode(newMode) {
    switch (currentMode) {
        case 'color':
            colorModeBtn.classList.remove('active');
            break;  
        case 'rainbow':
            rainbowModeBtn.classList.remove('active');
            break;
        case 'eraser':
            eraserModeBtn.classList.remove('active');
            break;
    }

    switch (newMode) {
        case 'color':
            colorModeBtn.classList.add('active');
            break;  
        case 'rainbow':
            rainbowModeBtn.classList.add('active');
            break;
        case 'eraser':
            eraserModeBtn.classList.add('active');
            break;
    }
}

  
// Helper Functions:

// On Startup:
function appPrep() {
    clearScreen();
    createGrid();
    selectMode('color');
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
const colorChoice = document.getElementById('colorChoice');
const colorModeBtn = document.getElementById('colorModeBtn');
const rainbowModeBtn = document.getElementById('rainbowModeBtn');
const eraserModeBtn = document.getElementById('eraserModeBtn');
const toggleGridBtn = document.getElementById('toggleGridBtn');
const clearButton = document.getElementById('clearScreen');

// Color choice
colorChoice.addEventListener('change', function(e){
    setCurrentColor(e.target.value);
})

// Color Mode
colorModeBtn.addEventListener('click', function(){
    setCurrentMode('color');
});

// Rainbow Mode
rainbowModeBtn.addEventListener('click', function(){
    setCurrentMode('rainbow');
});

// Eraser Mode
eraserModeBtn.addEventListener('click', function(){
    setCurrentMode('eraser');
});

// Toggle grid
toggleGridBtn.addEventListener('click', function(){
    let gridNodes = document.querySelectorAll('.gridNode');
    gridNodes.forEach(node => node.classList.toggle('gridOn'));
    toggleGridBtn.classList.toggle('active');
})

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

const sliderTxt = document.querySelectorAll('.gridSliderContainer p');
sliderTxt.forEach(para => para.classList.add('noUse') )



