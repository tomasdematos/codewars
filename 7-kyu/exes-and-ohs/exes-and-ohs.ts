export function xo(str: string) : boolean {
  let count = 0;
  [...str].forEach((c) =>{
    if(["X", "x"].includes(c)) 
      count++  
      
    if(["O", "o"].includes(c)) 
      count-- 
  })
  return count === 0;
}