# Tic/Tac/Toe VueJS Tutorial

### Square
* Build a Square 
    * Empty Square
    * Pass it some value
    * Make it do something when clicked (alert box)

### Board 
* Render 9 Squares
    * All 9 squares have state  
    * Lift State
* TicTacToe math [1,2,3,4,5,6,7,8,9]
    * draw on white board
        * Arrays
        * Arrays are 0 based (indexed like --> [0,1,2,3,4,5,6,7,8])
        * Our Array is actually going to contain Strings ['X','O','X','X','O','X','X','O','O']
        * Each square corresponds to a spot in this array.
            * Learn math kids!!!
* Make a MARK!
    * mark 'X' instead of alert
* Take Turns - O needs a shot too! (plus more logic)
    * add `isXNext`
        * toggle character put into Board's `squares` array
        * toggle `isXNext` on each click to go back and forth
        * change the board's message as to who's turn it is
    * double turns??? 
        * if square is NOT NULL, don't don't update turn / fill square
* WINNING!!!
    * What makes up a win????
        * Solve the problem
            * 3 in a row, how in our array can we come up with 3 in a row?
            * 0,1,2
            * 3,4,5
            * 6,7,8
            * 0,3,6
            * 1,4,7
            * 2,5,8
            * 0,4,8
            * 2,4,6
            * if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            * this is a bit of shorthand, but it is saying, for each of those square #s in our `WINNERS`, check that
            * if square[a] IS TRUTHY
            * AND
            * if square[a] IS EQUAL TO square[b]
            * AND
            * if square[a] IS EQUAL TO square[c]

    