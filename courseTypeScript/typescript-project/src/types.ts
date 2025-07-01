type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

function infiniteLoop(): never {
  while (true) {
    console.log("This loop runs forever!");
  }
}

function throwError(message: string): never {
  throw new Error(message);
}


interface User {
  name: string;
  age: number;
}

const partialUser: MyPartial<User> = { name: "Alice" };
console.log(partialUser);

const readonlyUser: MyReadonly<User> = { name: "Bob", age: 30 };
console.log(readonlyUser);