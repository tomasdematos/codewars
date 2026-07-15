type HitRecord = {
  count: number; 
  points: number; 
}
​
export function countAndSort(target: string[]): string[] {
  const center = Math.floor(target.length/2);
  const centerP = center+1;
  const hits = new Map<string, HitRecord>();
  
  target.forEach((line, i) => {
    [...line].forEach((hit, j) => {
      if(hit === "*") return;
      const hitLower = hit.toLowerCase();
      
      const isDouble = hit !== hitLower;  
      const dist = Math.max(Math.abs(i - center), Math.abs(j - center));
      const points = (center + 1) - dist;
      
      const record = hits.get(hitLower) || { count: 0, points: 0 };
      
      record.count += isDouble ? 2 : 1;
      record.points += points * (isDouble ? 2 : 1);
​
      hits.set(hitLower, record);
      
    })
  })
  
  return ([...hits].sort(([a,ra], [b,rb]) => {  
    if(ra.points > rb.points) return 1;
    if(ra.points < rb.points) return -1;
​
    if(ra.count > rb.count) return -1;
    if(ra.count < rb.count) return 1;
​
    if(a > b) return 1;
    return -1;
  }).map((([c])=> c)))
}