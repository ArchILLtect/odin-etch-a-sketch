function createGrid(size = 4) {
    let gridTotal = size * size;
    let screen = document.getElementById("gridContainer");

    if ( size > 150 ) {
        size = 150;
    }
    // Clear existing grid
    screen.innerHTML = '';

    for (let currentNode = 1; currentNode <= gridTotal; currentNode++) {
        const newNode = document.createElement("div");
        newNode.classList.add('gridNode');
        screen.appendChild(newNode);
    }

    // Set the CSS grid properties for the mainContainer
    screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

createGrid(125);


// Helper Functions




// Clear Button

