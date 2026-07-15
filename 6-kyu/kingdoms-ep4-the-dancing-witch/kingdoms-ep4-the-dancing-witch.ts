export function figureOut(arr: string[]): string | null {
  for (let i = 1; i < arr.length; i++) {
    const prev = [...arr[i-1]];
    const current = [...arr[i]];
​
    const witch = current.find((c, idx) => !(c === " " ||
        c === prev[idx] ||
        idx < prev.length -1 && c === prev[idx+1] || 
        idx > 0 && c === prev[idx-1]
       ))
    
    if(witch) return witch;
  }
  
  return null
}
​