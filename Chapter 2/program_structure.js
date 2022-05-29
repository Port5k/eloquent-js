// let mood = "light";
// console.log(mood);

// mood = "dark";
// console.log(mood);


// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log(luigisDebt);

// let one = 1,
//     two = 2;
// console.log(one + two);

// var man = "Ayda";
// const greeting = "Hello";
// console.log(greeting + man)

// let number = 0;
// while (number <= 12) {
//     console.log(number);
//     number = number + 2;
// }


// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result = result * 2;
//     counter = counter + 1;
// }

// console.log(result)

// let yourName;
// do {
//     yourName = prompt("Who are you");
// } while (!yourName);
// console.log(yourName);

// if (false != true) {
//     console.log("That makes sense");
//     if (1 < 2) {
//         console.log("No surprise there")
//     }
// }

// let y = 1;
// for (let x = 0; x < 10; x++) {
//     y = y * 2;
// }
// console.log(y)


switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella");
        break;
    case "sunny":
        console.log("Dress lightly");
        break
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("Unknown weather type");
        break;
}