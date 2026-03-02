export abstract class Animal {
  /** @param {number} value The length of the animal in parrots. */
  private parrotsSize = 0;
  protected constructor(public value: number) {
    this.parrotsSize = value
  }
​
  getSize (): number {
    return this.parrotsSize
  }
  
  convertTo (someone: Animal): number {
      return this.parrotsSize / someone.getSize()
  }
}
​
export class Boa extends Animal {
  constructor() {
    super(38)
  }
}
​
export class Parrot extends Animal {
  constructor() {
    super(1)
  }
}
​
export class Monkey extends Animal {
  constructor() {
    super(7.6)
  }
}
​