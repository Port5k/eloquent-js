// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size
// = 8 and change the program so that it works for any size, outputting a grid
// of the given width and height.


let userWidth = Number(prompt("Please, input the width of your desired board"));
let userHeight = Number(prompt("Please, input the height of your desired board"));

let chessBoard = "";

for (let height = 1; height <= userHeight; height++) {
    let row = "";
    let black = "#";
    let white = " ";
    for (let rowCounter = 1; rowCounter <= userWidth; rowCounter++) {
        if ((height % 2 != 0))
            if (rowCounter % 2 != 0) row += white;
            else row += black;
        else if ((height % 2 == 0))
            if (rowCounter % 2 != 0) row += black;
            else row += white;

    }
    chessBoard += row;
    chessBoard += "\n";
}

console.log(chessBoard);