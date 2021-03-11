var app = document.getElementById('app')


class Board {
    constructor() {
        var board = []; 
        this.tile = []; // empty
        for (var i = 0; i < 9; i++) {
            this.tile.push(new Tile(i));
        //tile.addEventListener('click', playerState);
        }
    }
    generateBoard() {

        //class Board {
        //constructor(class, )

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
            //board.push(0);
            //append child at bottom of function
            row.appendChild(col);

            //col.addEventListener(‘click’ playerstate);
        }
        container.appendChild(header)
        container.appendChild(row);
        app.appendChild(container);
    }

    //init method to call board, players, initializeStates, generateLayout, startGame, generateBoard
}
class Tile {
    constructor(id) {
        this.id = id;
        let tileObject = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    }
}
//create a playerstate function to check if player is equal to 1 or 2 and make the next turn the next player
function playerState() {
    if (player === 1) {
        player = 2;
        nextTurn = 1;
    } else {
        player = 1
        nextTurn = 2
    }
}

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
*/

let tictactoe = new Board()
console.log(tictactoe)
tictactoe.generateBoard();


//tictactoe.init() {

//how do you take an object Board and add players to that object that can alternate between turns filling a tile id
//how do you let the computer know that someone has won the game through listing possible win condition arrays?
//how can I tell the game to reset the board and clear all tiles after a win condition has been met?
//Do I assign an id to an object player with array value of 1 and 2? how do I fill the blank array from board with these integers
//How do I tell my board to fill a tile with an icon after the value of 0 has been replaced by 1 or 2

