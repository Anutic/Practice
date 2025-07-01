
function sortArray<T>(arr: T[]): T[] {
  return [...arr].sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}


type ConditionalType<T, Condition extends boolean> = Condition extends true ? string : number;

function getObjectKeys<T extends object>(obj: T): string[] {
  return Object.keys(obj) as string[];
}

const numbers: number[] = [3, 1, 4, 1, 5];
console.log(sortArray(numbers)); 

const strings: string[] = ["banana", "apple", "cherry"];
console.log(sortArray(strings)); 

type ResultType = ConditionalType<string, true>; 
type ResultType2 = ConditionalType<number, false>;

const testObj = { name: "Alice", age: 25 };
console.log(getObjectKeys(testObj)); // ["name", "age"]