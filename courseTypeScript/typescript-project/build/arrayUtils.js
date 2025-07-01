"use strict";
function sortArray(arr) {
    return [...arr].sort((a, b) => {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    });
}
function getObjectKeys(obj) {
    return Object.keys(obj);
}
const numbers = [3, 1, 4, 1, 5];
console.log(sortArray(numbers));
const strings = ["banana", "apple", "cherry"];
console.log(sortArray(strings));
const testObj = { name: "Alice", age: 25 };
console.log(getObjectKeys(testObj)); // ["name", "age"]
