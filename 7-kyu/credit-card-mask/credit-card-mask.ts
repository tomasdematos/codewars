// return masked string
export function maskify(cc: string): string {
  if(cc.length<5) return cc;
  
  const str = new Array(cc.length - 3).join("#");
  return str + cc.slice(-4)
}