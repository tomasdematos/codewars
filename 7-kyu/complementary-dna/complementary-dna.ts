const m: Record<string, string> = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }
​
export class Kata {
  static dnaStrand(dna: string) {
    return [...dna].map((t) => m[t]).join("")
  }
}