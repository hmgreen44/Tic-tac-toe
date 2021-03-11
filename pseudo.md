Tic Tac Toe Pseudo

Turned based (State?)

Two objects in playing field: X (p1) and O (p2)


Board 3x3x3 [0,1,2,3,4,5,6,7,8] Two dimensional array. 

-----Generate board function------


function generateBoard() {
//Loop through rows

for (int i = 0; i < 3; i++) {

//Loop through columns

for (int j = 0; j < 3; j++) {
    board[i] [j] = '';
        }
    }
}

-----changePlayer function------
swap variable of currentPlayer between x and o
-Check what the variable current holds
-If var holds X change to O. Vice verse

changePlayer() {

if (currentPlayerMark == 'X'){
    currentPlayerMark = 'O';
}
else {
    currentPlayerMark ='X';

}

Cells need to store values to indicate if cell is empty or stores X or O
0 = empty 1 = X stored 2 = O stored

Win Condition: The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner

Wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

//Generate reset button to clear board and restart the game

Methods needed
-initializeGame

-generateBoard

-checkBoardFull

-checkForWin
    check rows? check columns? check diagonals? 





this keyword
_________________
this - references the *object* that is executing the current function

if the functions is part of an object that function is defined as a method

if that function is a method 



what objects do I want to have in a tic tac toe game?

a board

player - give player properties
    player1 is p1
    player1 has an icon
    player2 is p2




