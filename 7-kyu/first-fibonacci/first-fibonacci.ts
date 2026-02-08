export function solution(first: number, second: number): [number, number] {
  if(first > second) return [first, second];
​
  const [rf, rs] = solution(second-first, first);
  
  return rf > rs ? [rs, second] : [ rf, rs ];
}
​