export function findNextSquare(sq:number):number {
  const sqrt = Math.sqrt(sq);
  if(!Number.isInteger(sqrt)) return -1;
​
  return (sqrt + 1) ** 2;
​
}