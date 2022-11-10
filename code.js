let isCircleTurn = false;

const winningCombinations = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const player1 = prompt("Enter your name");
const player2 = prompt("Enter your name");

const cells = document.querySelectorAll(".cell");

function addClickEventListenerToCell(cell){

    cell.addEventListener('click', onCellClick);
}

cells.forEach(addClickEventListenerToCell);

function addMarker(clickedCell){

    if(isCircleTurn){
        clickedCell.classList.add("o");
    }
    else{
        clickedCell.classList.add("x");
    }
}

function checkIsMarked(clickedCell){

    const hasClassX = clickedCell.classList.contains("x");
    const hasClassO = clickedCell.classList.contains("o");

    return hasClassX || hasClassO;
    
}

function hasWon()
{
    const currentClass = isCircleTurn ? 'o' : 'x';
    
    const atleastOneWinningCombinationMatched  = winningCombinations.some((winningCombination) => {

    const didWinningCombinationMatched =  winningCombination.every((index) => {

            const cell = cells[index];
            const hasClass = cell.classList.contains(currentClass)
            return hasClass;
        });

        return didWinningCombinationMatched;
    });

    return atleastOneWinningCombinationMatched;
}

function isDraw(){

    const cellsArray = [...cells];

    return cellsArray.every((cell) => {

        return checkIsMarked(cell);
    });
}


function showWinningMessage(){

    if(isCircleTurn){

        alert(`${player2} won!!`);
        return;
    }

    alert(`${player1} won!!`);
}

function onCellClick(event){
    
    const clickedCell = event.currentTarget;
    const isAlreadyClicked = checkIsMarked(clickedCell);

    if(isAlreadyClicked){

        return;
    }
    addMarker(clickedCell);

    if(hasWon()){

        showWinningMessage();
        return;
    }

    if(isDraw()){

        alert("Draw!");
        return;
    }

    isCircleTurn = !isCircleTurn;
}







