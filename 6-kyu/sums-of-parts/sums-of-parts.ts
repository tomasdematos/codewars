export function partsSums(ls: number[]): number[] {
  const t = ls.reduce((a,b) => a+b, 0);
  const sol = [t]
  
​
  for (let i = 0; i < ls.length; i++) {
    sol[i+1] = sol[i]- ls[i]
  }
​
  return sol
}
​