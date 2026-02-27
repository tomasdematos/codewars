export function menFromBoys(arr: number[]): number[] {
  const men = new Set<number>();
  const boys = new Set<number>();
  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2) {
      boys.add(arr[i])
    } else {
      men.add(arr[i])
    }
  }
  
  return [...Array.from(men).sort((a,b)=> a-b), ...Array.from(boys).sort((a,b)=> b-a)]
}