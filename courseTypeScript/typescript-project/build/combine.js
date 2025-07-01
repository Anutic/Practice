"use strict";
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        throw new Error("Unsupported types");
    }
}
console.log(combine(5, 3));
console.log(combine("Hello, ", "World!"));
// console.log(combine(5, "test"));  // Ошибка
