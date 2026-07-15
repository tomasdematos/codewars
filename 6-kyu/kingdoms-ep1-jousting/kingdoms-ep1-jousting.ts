 export function joust(listField: string[], vKnightLeft: number, vKnightRight: number): string[] {
  const [j1, j2] = listField;
  const i1 = j1.indexOf(">");
  const i2 = j2.indexOf("<");
  
  if(!vKnightLeft && !vKnightRight || i1 >= i2) return listField;
  
  let p1 = i1;
  let p2 = i2;
  let s = 0;
​
  while(p1 < p2) {
    p1+= vKnightLeft;
    p2-= vKnightRight;
    s++;
  }
​
 return [
    !vKnightLeft ? j1 : j1.slice(-s*vKnightLeft)+ j1.slice(0, j1.length -s*vKnightLeft), // ss + xxxxss
    !vKnightRight ? j2 :j2.slice(s*vKnightRight) + j2.slice(0,s*vKnightRight) // ssxxxx + ss
  ]
}  