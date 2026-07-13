const buildSubM = (m:number[][], i: number) => {
  const subM: number[][] = [];
  
  m.forEach((r, idx) => {
    if (idx === 0) return;
    
    // r2
    const nR: number[] = []
    r.forEach((c, cIdx) => {
      if(cIdx === i) return;
      nR.push(c);
    })
    subM.push(nR)
  })
  
  return subM;
}
​
export function determinant(m:number[][]) {
  if (m.length === 1) return m[0][0];
  
  if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  
  const r1 = m[0];
  let r = 0; 
  for(let i = 0; i < r1.length; i++) {
    r += (-1)**i * r1[i] * determinant(buildSubM(m, i));
  }
  
  return r; 
}
​