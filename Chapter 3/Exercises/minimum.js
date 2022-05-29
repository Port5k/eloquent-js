// Minimum
// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.


function min(a, b) {
    if (a - b < 0) return a
    else if (a - b > 0) return b
    else return "Numbers are equal"
}

console.log(min(-4, -4))