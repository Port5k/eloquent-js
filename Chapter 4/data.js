const JOURNAL = require('./journal');

// let listOfNumbers = [2, 3, 5, 6, 7, 8, 23];
// console.log(listOfNumbers[3])
// console.log(listOfNumbers[0])
// console.log(listOfNumbers[3 - 1])



// let length1 = 'length'

// console.log(listOfNumbers.length)
// console.log(listOfNumbers[length1])

// let doh = "Doh";
// console.log(typeof doh.toUpperCase)
// console.log(typeof doh.toUpperCase())

// let sequence = [1, 2, 3];
// sequence.push(4)
// sequence.push(5)
// console.log(sequence)
// console.log(sequence.pop(5))
// console.log(sequence)


// let day1 = {
//     squirrel: false,
//     events: ["work", "touched tree", "pizza", "running"]
// }

// console.log(day1.squirrel)
// console.log(day1.wolf)
// day1['wolf'] = false;
// console.log(day1.wolf)

// let descriptions = {
//     "work": "went to work",
//     "touched tree": "touched a tree"
// }

// let anObject = {
//     left: 1,
//     right: 2
// }
// console.log(anObject.left)
// delete anObject.left;
// console.log(anObject.left)
// console.log("left" in anObject)
// console.log("right" in anObject)

// console.log(Object.keys({
//     x: 0,
//     y: 4,
//     z: 2
// }))

// let objectA = {
//     a: 1,
//     b: 2
// }

// Object.assign(objectA, {
//     b: 3,
//     c: 4
// })

// console.log(objectA)

// console.log(typeof [])

// let object1 = {
//     value: 10
// }
// let object2 = object1;
// let object3 = {
//     value: 10
// }
// console.log(object1 == object2)
// console.log(object1 == object3)

// object1.value = 15
// console.log(object2['value'])
// console.log(object3['value'])


// let number1 = Number(5)
// let number2 = number1;
// let number3 = 5;

// console.log(number1 == number3)
// console.log(number1 == number2)
// console.log(number3 == number2)

// console.log({
//     x: 10
// } == {
//     x: 10
// })

// THE LYCANTHROPE'S LOG

// let journal = [];

// function addEntry(events, squirrel) {
//     journal.push({
//         events,
//         squirrel
//     })
// }

// addEntry(["work", "touched tree", "pizza", "running", "television"], false)
// addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false)
// addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true)

// function phi(table) {
//     return (table[3] * table[0] - table[2] * table[1]) /
//         Math.sqrt((table[2] + table[3]) *
//             (table[0] + table[1]) *
//             (table[1] + table[3]) *
//             (table[0] + table[2]))
// }


// function tableFor(event, journal) {
//     let table = [0, 0, 0, 0];
//     for (let i = 0; i < journal.length; i++) {
//         let entry = journal[i],
//             index = 0;
//         if (entry.events.includes(event)) index += 1;
//         if (entry.squirrel) index += 2;
//         table[index] += 1
//     }
//     return table
// }

// console.log(tableFor("pizza", JOURNAL))

// // for (let entry of JOURNAL) {
// //     console.log(`${entry.events.length} events`)
// // }

// function journalEvents(journal) {
//     let events = [];
//     for (let entry of journal) {
//         for (let event of entry.events) {
//             if (!events.includes(event)) {
//                 events.push(event);
//             }
//         }
//     }
//     return events;
// }

// // for (let event of journalEvents(JOURNAL)) {
// //     console.log(event + ":", phi(tableFor(event, JOURNAL)))
// // }

// for (let event of journalEvents(JOURNAL)) {
//     let correlation = phi(tableFor(event, JOURNAL));
//     if (correlation > 0.1 || correlation < -0.1) {
//         console.log(event + ":", correlation)
//     }
// }

// for (let entry of JOURNAL) {
//     if (entry.events.includes("peanuts") && (!entry.events.includes("brushed teeth"))) entry.events.push("peanut teeth")
// }

// console.log(phi(tableFor("peanut teeth", JOURNAL)))


// let todoList = []

// function remember(task) {
//     todoList.push(task)
// }

// function getTask() {
//     return todoList.shift();
// }

// function rememberUrgently(task) {
//     todoList.unshift(task)
// }

// console.log([1, 2, 3, 1, 2].indexOf(2))
// console.log([1, 2, 3, 1, 2].lastIndexOf(2))

// console.log([0, 1, 2, 3, 4].slice(2, 4))
// console.log([0, 1, 2, 3, 4].slice(2))

// function remove(array, index) {
//     return array.slice(0, index).concat(array.slice(index + 1))
// }

// console.log(remove(["a", "b", "c", "d", "e"]))

// let kim = "Kim";
// kim.age = 88;
// console.log(kim.age)

// console.log(("coconuts".slice(4, 7)));
// console.log(("coconuts".indexOf("u")));
// console.log("one two three".indexOf("ee"))
// console.log("   okay   \n".trim())
// console.log(String(6).padStart(3, "0"))

// let sentence = "Secretarybirds specialize in stomping";
// let words = sentence.split(" ")
// console.log(words)
// console.log(words.join('. '))
// console.log("LA".repeat(3))

// let string = "abc";
// console.log(string.length)
// console.log(string[1])

// function max(...numbers) {
//     let result = -Infinity;
//     for (let number of numbers) {
//         if (number > result) result = number;
//     }
//     return result;
// }

// console.log(max(4, 1, 9, -2))

// let words = ["never", "fully"];
// console.log(["will", ...words, "understand"])

function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    };
}

console.log(randomPointOnCircle(2))

console.log(Math.floor(Math.random() * 1000))

// let {
//     name
// } = {
//     name: "Faraji",
//     age: 23
// };
// console.log(name);

let string = JSON.stringify({
    squirrel: false,
    events: ['weekend']
})

console.log(string)
console.log(JSON.parse(string).events)