function sumFirstHalf(arr) {
    const halfIndex = Math.floor(arr.length / 2);
    let sum = 0;
    
    for (let i = 0; i < halfIndex; i++) {
        sum += arr[i];
    }
    
    return sum;
}

console.log(sumFirstHalf([1, 2, 3, 4]));   
console.log(sumFirstHalf([1, 2, 3, 4, 5]));