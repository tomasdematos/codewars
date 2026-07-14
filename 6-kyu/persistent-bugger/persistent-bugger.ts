export function persistence(num: number): number {
  const nums = num.toString().split("").map((n) => parseInt(n));
  
  if(nums.length === 1) return 0;
  return 1 + persistence(nums.reduce((acc, n) => acc*n, 1));
}
​