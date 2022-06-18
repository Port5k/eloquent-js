// Deep comparison
// The == operator compares objects by identity. But sometimes you’d prefer to
// compare the values of their actual properties.
// Write a function deepEqual that takes two values and returns true only if they
// are the same value or are objects with the same properties, where the values
// of the properties are equal when compared with a recursive call to deepEqual.
// To find out whether values should be compared directly (use the === operator
// for that) or have their properties compared, you can use the typeof operator.
// If it produces "object" for both values, you should do a deep comparison.
// But you have to take one silly exception into account: because of a historical
// accident, typeof null also produces "object".
// The Object.keys function will be useful when you need to go over the properties of objects to compare them.




function deepEqual(value1, value2) {
    if (value1 === value2) return true;

    if (value1 == null || typeof value1 != "object" ||
        value2 == null || typeof value2 != "object") return false;

    let keysA = Object.keys(value1),
        keysB = Object.keys(value2);

    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(value1[key], value2[key])) return false;
    }
    return true;
}

let obj = {
    here: {
        is: "an"
    },
    object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {
    heres: 1,
    object: 2
}));
// → false
console.log(deepEqual(obj, {
    here: {
        is: "an"
    },
    man: 2
}));
// → true