export class Kata {
  static squareDigits(num: number): number {
      return parseInt(num.toString().split("").map((x) => parseInt(x)**2).join(""))
  }
}