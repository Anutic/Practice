class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  
  getName(): string {
    return this.name;
  }
}


const person = new Person("Alice");
console.log(person.getName());
