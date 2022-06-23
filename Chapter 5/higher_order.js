const SCRIPTS = require("./scripts")

// let total = 0,
//     count = 1;
// while (count <= 10) {
//     total += count;
//     count += 1;
// }

// console.log(total)

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// function repeatLog(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
// }

// repeatLog(50)

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i)
//     }
// }

// repeat(5, (i) => {
//     console.log(i ** 4)
// })


// function greaterThan(n) {
//     return m => m > n;
// }

// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11))

// function noisy(f) {
//     return (...args) => {
//         console.log("calling with ", args);
//         let result = f(...args);
//         console.log("called with", args, ", returned", result);
//         return result;
//     }
// }

// let noisyF = noisy(Math.min)

// console.log(noisyF)

// noisyF(1, 2, 34, 32)

// function unless(test, then) {
//     console.log(test)
//     if (!test) then()
// }

// repeat(3, n => {
//     unless(n % 2 == 1, () => {
//         console.log(n, "is odd")
//     })
// })

// ["A", "B"].forEach(l => console.log(l));



function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
// console.log(filter(SCRIPTS, script => script.living));


function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(map(rtlScripts, s => s.name))

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element)
    }
    return current
}

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

// console.log(SCRIPTS.reduce((a, b) => {
//     return characterCount(a) < characterCount(b) ? b : a;
// }));

let biggest = null;
for (let script of SCRIPTS) {
    if (biggest == null || characterCount(biggest) < characterCount(script)) {
        biggest = script;
    }
}

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year))));

console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year))));