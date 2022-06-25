// Flattening
// Use the reduce method in combination with the concat method to“ flatten”
// an array of arrays into a single array that has all the elements of the original
// arrays.

function flatten(array) {
    return array.reduce((arr1, arr2) => arr1.concat(arr2))
}

let testArray = [
    [4352, 4608],
    [12334, 12336],
    [12593, 12687],
    [12800, 12831],
    [12896, 12927],
    [43360, 43389],
    [44032, 55204],
    [55216, 55239],
    [55243, 55292],
    [65440, 65471],
    [65474, 65480],
    [65482, 65488],
    [65490, 65496],
    [65498, 65501]
];

console.log(flatten(testArray))