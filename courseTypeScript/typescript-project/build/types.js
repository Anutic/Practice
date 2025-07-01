"use strict";
function infiniteLoop() {
    while (true) {
        console.log("This loop runs forever!");
    }
}
function throwError(message) {
    throw new Error(message);
}
const partialUser = { name: "Alice" };
console.log(partialUser);
const readonlyUser = { name: "Bob", age: 30 };
console.log(readonlyUser);
