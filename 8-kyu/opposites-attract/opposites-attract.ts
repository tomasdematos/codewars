export function lovefunc(flower1: number, flower2: number): boolean {
  const a = flower1%2 === 0;
  const b = flower2%2 === 0;
  return a && !b || !a && b
}