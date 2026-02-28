export function dblLinear(n: number): number {
 const u = [1];
  let i2 = 0, i3 = 0;
​
  for (let i = 0; i < n; i++) {
    const y = 2 * u[i2] + 1;
    const z = 3 * u[i3] + 1;
​
    if (y < z) {
      u.push(y);
      i2++;
    } else if (z < y) {
      u.push(z);
      i3++;
    } else {
      u.push(y);
      i2++;
      i3++;
    }
  }
​
  return u[n];
}