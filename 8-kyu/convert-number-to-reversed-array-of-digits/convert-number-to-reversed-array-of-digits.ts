export const digitize = (n: number): number[] => {
  return `${n}`.split("").reverse().map((c) => parseInt(c))
};