MVC
1. what goes in the view
container
    row
        header
    row
        both players
            show wins and losses (stretch goal)
            show whose turn it is
            who won/tie (ending win condition first placement)
    row for the actual grid
        col (acts as a container)
        1 rows
            9 cols - size 4
                tile (synonymous with col)
                    X or o or blank (3 states possible)
    row
        restart button
    modal (show the winner or the tie) (ending win condition first placement)


2. what goes in the model

whose turn it is 
    "x" || "o" || "y" as a string
    count turns (0,1,2 -> n)
        dual purpose: keep track of game moves, set win condition
need to know who won
    number (based on the sum of all the rows, cols, diags)
        // use a controller method that would set the state of this number
    store turns in an array
        (0 for no click, 1 for x, 2 for o)
        [0, 1, 2, 3, 4, 5, 6, 7, 8] - ( stores 9 )
    Tile ("" for no click, "X" for x, "O" for o)
        {
            ""||"x"|| "o"
            "who clicked?" - can be abstracted
            "where it is?" - can be abstracted
            bgColor ""||"x"||"o" - can be abstracted
        }
    [
        Tile,Tile,Tile
        Tile,Tile,Tile
        Tile,Tile,Tile
    ]
    tile clickability //controller method
        on the finish of the game, lock the tiles
        on any in game click, lock specific tile
Board: (class)
{
    is the game complete?
    all tiles: array
    how many tiles do i have? - abstracted from length of array
    current state of all my tiles? - can be abstracted
}

Parent / Child relationships
parent has many children
children has one parent
children can have many siblings

3. what goes in the controller

- initialize
    //pseudocode this
    //about the length of a kata
- helper function for dynamic rendering 
    // generateElement
- render method

- tile click event listener
    // (moves>5) ? condition
    - win condition
    // check to see if there is a winner or tie?
    - set tile clickability
    - switch current player
- win condition
    did we have a winner?
    - set tile clickability for all tiles
    - display the final game state
- restart click even listener

