export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  if(n<4) return [a,b,c].slice(0,n);
  const r = [a,b,c];
  
  for (let i = 0; i < n-3; i++) {
    r.push(r[i]+r[i+1]+r[i+2])
  }
  
  return r;
}