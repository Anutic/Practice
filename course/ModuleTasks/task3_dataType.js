function lastSymbol(str){
    if (str.length === 0) return "";
    return(str[str.length - 1])
}

let str = 'abcde';
console.log(lastSymbol(str)); 