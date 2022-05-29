// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let triangle = "";

for (let rowCounter = 1; rowCounter <= 7; rowCounter++) {
    let block = '#';

    // Build rows from individual blocks
    let row = "";
    for (let blockCounter = 1; blockCounter <= rowCounter; blockCounter++) {
        row += block;
    }

    //Add rows into triangle
    triangle += row;
    triangle += '\n';
}

console.log(triangle);