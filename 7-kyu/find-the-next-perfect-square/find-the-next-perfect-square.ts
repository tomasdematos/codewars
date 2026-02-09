export function findNextSquare(sq:number):number {
  if(!Number.isInteger(Math.sqrt(sq))) return -1
  
  let next = sq+1;
  while(!Number.isInteger(Math.sqrt(next))) {
    next++
  }
  return next;
}