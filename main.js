var app = document.getElementById('app')


class Board {
    constructor() {
        // this.tiles = [
        //     0,0,0,0,0,0,0,0,0
        // ]; // nine tiles as integers
    // how do you make an array of Tile(s) objects from the class Tile?
        this.tiles = [
            
        ]; // empty
        for(var i = 0; i < 9; i++){
            this.tiles.push(new Tile(i));
        }
    }
    generateBoard() {

        //class Board {
        //constructor(class, )
    
        const container = document.createElement("div");
        container.className = "container mt-5";

        const row = document.createElement("div");
        row.className = "row p-3";


        for (let i = 0; i < 9; i++) {
            const col = document.createElement("div");
            col.className = "col-4 border border-secondary p-4 ";
            //smallest to largest in opposite order
            row.appendChild(col);
        }
        container.appendChild(row);
        app.appendChild(container);
    }

    //init method to call board, players, initializeStates, generateLayout, startGame, generateBoard
}
class Tile {
    constructor(id) {
        this.id = id;
    }
    


}


let tictactoe = new Board()
console.log(tictactoe)
tictactoe.generateBoard();
//tictactoe.init()