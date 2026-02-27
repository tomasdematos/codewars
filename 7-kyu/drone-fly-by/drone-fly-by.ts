export function flyBy(lamps: string, drone: string): string {
  let ti = drone.indexOf("T")+1
  if(ti<1) {
    ti = drone.length
  }
  
  const n = Math.min(lamps.length, ti)
  return 'o'.repeat(n) + lamps.slice(n);
}