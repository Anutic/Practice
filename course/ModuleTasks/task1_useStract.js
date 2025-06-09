'use strict';

function isValueInArray(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

const myArray = [1, 2, 3, 4, 5];
console.log(isValueInArray(myArray, 3)); 
console.log(isValueInArray(myArray, 6)); 