// Created on 9/01/23 by ArchILLtect

let rowNumber = 0;

function createGrid( size=4 ) {
    let gridRows = size ;
    let gridTotal = size * size ;
    let screen = document.getElementById("mainContainer") ;
    
    for (currentNode = 1; currentNode <= gridTotal; currentNode++) {
        let addRow = currentNode % size ;
        
        const newNode = document.createElement("div") ;
        newNode.classList.add('gridNode') ;
        if (currentNode == 1) { currentRow = screen } ;
        if (addRow == 1 ) {
            const newRow = document.createElement("div") ;
            screen.appendChild(newRow) ;
            rowNumber++;
            console.log(rowNumber)
            newRow.id = "rowDiv" + rowNumber;
            console.log("rowDiv" + rowNumber)
            currentRow = document.getElementById("rowDiv" + rowNumber);
            currentRow.appendChild(newNode) ;
        } else {
            currentRow.appendChild(newNode) ;}
    }
}

createGrid(40)
