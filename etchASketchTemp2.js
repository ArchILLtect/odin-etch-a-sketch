// Created on 9/01/23 by ArchILLtect for The Odin Project

let rowNumber = 0;

function createGrid( size=4 ) {
    //let gridRows = size ;
    let gridTotal = size * size ;
    let screen = document.getElementById("gridContainer") ;
    
    for (currentNode = 1; currentNode <= gridTotal; currentNode++) {
        let addRow = currentNode % size ;
        
        const newNode = document.createElement("div") ;
        newNode.classList.add('gridNode') ;
        if (currentNode == 1) { currentRow = screen } ;
        if (addRow == 1 ) {
            const newRow = document.createElement("div") ;
            screen.appendChild(newRow) ;
            rowNumber++;
            newRow.id = "rowDiv" + rowNumber;
            currentRow = document.getElementById("rowDiv" + rowNumber);
            currentRow.appendChild(newNode) ;
        } else {
            currentRow.appendChild(newNode) ;}
    }
}

createGrid(15)
