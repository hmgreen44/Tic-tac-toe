var app = document.getElementById('app')

var players = [];

class Tile {
    constructor(id, tileHTML) {
        this.id = id;
        this.mark = ''
        this.clicked = false
        this.tileHTML = tileHTML
    }

}

class Board {
    constructor() {
        //this.tileClick = this.tileClick.bind(this);
        this.tileArray = []; // referencing board object to create tile array
        this.winner = ''
        this.symbol = ''
        this.moveCount = 0;
    }
    generateBoard() {

        const container = document.createElement("div");
        container.className = "container mt-5";

        var header = document.createElement("div");
        header.className = "row mt-5 justify-content-center";
        header.innerHTML = "TIC-TAC-TOE";

        const row = document.createElement("div");
        row.className = "row p-3";

        for (let i = 0; i < 9; i++) {
            const col = document.createElement("div");
            col.className = "col-4 border border-secondary p-4 ";
            col.setAttribute('id', i)
            const tileObject = new Tile(i, col);
            col.addEventListener('click', this.clickTile.bind(this, tileObject));
            row.appendChild(col);
            this.tileArray.push(tileObject);

        }
        container.appendChild(header)
        container.appendChild(row);
        app.appendChild(container);
    }

    clickTile(obj) {
        if (obj.clicked == false) {
            obj.clicked = true
            if (this.moveCount % 2 == 0) {
                this.symbol = "O"
            } else {
                this.symbol = "X"
            }
            console.log(this.symbol)
            obj.tileHTML.innerText = this.symbol
            console.log("whatever", obj)
            console.log(this.tileArray)
            this.moveCount++;
        }
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