export function sumPairs(ints: number[], s: number): [number, number] | void {  
  const nums = new Set()
  let aux = 0; 
  for (let i = 0; i < ints.length; i++) {
      aux = s-ints[i];
      if(nums.has(aux)) return [aux, ints[i]];
      nums.add(ints[i]);
  }
}