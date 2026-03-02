    this.status = status; 
  }
​
  introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
​
export class Shark extends Animal {
  constructor(name: string, age: number, status: string) {
    super(name, age, 0, "shark", status) 
  }
}
​
​
export class Cat extends Animal {
  constructor(name: string, age: number, status: string) {
    super(name, age, 4, "cat", status) 
  }
​
  override introduce(): string {
    return `${super.introduce()}  Meow meow!`;
  }
}
​
export class Dog extends Animal {
  master = ""
​
  constructor(name: string, age: number, status: string, master: string) {
    super(name, age, 4, "dog", status) 
    this.master = master;
  }
​
  greetMaster = () => {
    return `Hello ${this.master}`
  }
}