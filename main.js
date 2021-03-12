var app = document.getElementById('app')

var players = [];

class Tile {
    constructor(id, tileHTML) {
        this.id = id;
        this.clicked = false
        this.tileHTML = tileHTML
        this.symbol = ''
    }

}

class Board {
    constructor() {
        //this.tileClick = this.tileClick.bind(this);
        this.tileArray = []; // referencing board object to create tile array
        this.winner = ''
        this.moveCount = 0;
        this.winArrays = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    }
    generateBoard() {

        const container = document.createElement("div");
        container.className = "container mt-5";

        var header = document.createElement("div");
        header.className = "row mt-5 justify-content-center";
        header.innerHTML = "TIC-TAC-TOE";

        const row = document.createElement("div");
        row.className = "row p-4";

        const resetButton = document.createElement("div");
        resetButton.className = "btn btn-link text-center mt-5 mb-3 ";
        resetButton.addEventListener('click', this.resetGame.bind(this))
        resetButton.innerHTML = "Reset Game";

        for (let i = 0; i < 9; i++) {
            const col = document.createElement("div");
            col.className = "col-4 border border-secondary p-5 text-center fs-1";
            col.setAttribute('id', i)
            const tileObject = new Tile(i, col);
            col.addEventListener('click', this.clickTile.bind(this, tileObject));
            row.appendChild(col);
            this.tileArray.push(tileObject);

        }
        header.appendChild(resetButton);
        container.appendChild(header)
        container.appendChild(row);
        app.appendChild(container);
    }

    clickTile(obj) {
        if (obj.clicked == false) {
            obj.clicked = true
            if (this.moveCount % 2 == 0) {
                this.symbol = "X"
            } else {
                this.symbol = "O"
            }
            obj.tileHTML.innerText = this.symbol
            obj.symbol = this.symbol
            this.moveCount++;
            this.checkWin()
            //console.log(this.symbol)
            //console.log(this.tileArray)
            //console.log(this.moveCount)
        }
    }
    resetGame() {
        //this.moveCount = 0;
        //this.tileArray
        //console.log(resetGame);

    }

    checkWin() {
        //for loop of all of my items in winArrays
        for (let index = 0; index < this.winArrays.length; index++) {
            //let subArray = winArrays  [0,1,2]
            let subArray = this.winArrays[index];
            //console.log(subArray);
            //one if statement checking subArray indexes in the tileArray
            let index0 = subArray[0]
            let index1 = subArray[1]
            let index2 = subArray[2]
            //console.log('starting to look at win condition:', subArray)
            // //console.log(index0, index1, index2)
            // console.log('tileArray at index0 of subArray:', this.tileArray[index0].symbol)
            // console.log('tileArray at index1 of subArray:', this.tileArray[index1].symbol)
            // console.log('tileArray at index2 of subArray:', this.tileArray[index2].symbol)
            // console.log('Done checking win condition')
            //if ("X" == this.subArray) {
            if (this.tileArray[index0].symbol == "X" && this.tileArray[index1].symbol == "X" && this.tileArray[index2].symbol == "X") {
                this.winner = "X"

                //console.log("we found a match:", this.tileArray[index0].symbol)
            }
            if (this.tileArray[index0].symbol == "O" && this.tileArray[index1].symbol == "O" && this.tileArray[index2].symbol == "O") {
                this.winner = "O"

               // console.log("we found a match:", this.tileArray[index0].symbol)
            }
            
            // }
            // else {
                //     ("O" == this.subArray);
                //     this.winner = "O"
                
                // 
                
            }
            if (this.moveCount == 9 && this.winner.length !== 1) {
                this.winner = "Tie"
            }
            //If tileArray is filled with no winArray then tie. 
        //Run resetGame function
        console.log(this.winner)
        return this.winner;



    }

}


function init() {
    let tictactoe = new Board()
    console.log(tictactoe)
    tictactoe.generateBoard();
}
init()



//init method to call board, players, initializeStates, generateLayout, startGame, generateBoard
/*Possible reset function added on to the player state to let the game know to reset the board
this.removeEventListener('click', playerState);
resetBoard();
*/

/*class Player {
        constructor(playerName, playerIcon) {
            this.playerName = playerName
            this.playerTurn = playerTurn
            this.playerIcon = playerIcon
    let playerOne = new Player("PlayerOne", "?")
    let playerTwo = new Player("PlayerTwo","@" )
    console.log(player)
        }
}
//how do you take an object Board and add players to that object that can alternate between turns filling a tile id
//how do you let the computer know that someone has won the game through listing possible win condition arrays?
//how can I tell the game to reset the board and clear all tiles after a win condition has been met? -function
//Do I assign an id to an object player with array value of 1 and 2?
//how do I fill the blank array from board with player values
//How do I tell board to display tile with an icon after the value of 0 has been replaced by 1 or 2
*/

   // const tileObject = tileArray[index];
   // const subArray = winArray[index];

