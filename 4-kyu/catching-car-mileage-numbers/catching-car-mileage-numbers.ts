const checkIntersting = (n: number, awesomePhrases: number[]): boolean =>  {
  if (n < 100) return false;  
  if (awesomePhrases.includes(n)) return true;
  
  const sn = [...n.toString()];
  // x0000000
  if (sn[0] !== "0" && sn.slice(1).every((c) => c === "0")) return true; 
  
  // all the same
  if(new Set(sn).size === 1) return true; 
  
  // increasing
  if(sn.every((c, i) => i === sn.length-1 ? true : c === `${parseInt(sn[i+1])-1}` || (c === "9" && sn[i+1] === "0" ))) return true;
  
  // decreasing
  if(sn.every((c, i) => i === sn.length-1 ? true : (c === `${parseInt(sn[i+1])+1}`))) return true;
  
  if (sn.reverse().join('') === n.toString()) return true
​
  return false
}
​
export function isInteresting(n: number, awesomePhrases: number[]): number {
  if(checkIntersting(n, awesomePhrases)) return 2; 
  if(checkIntersting(n+1, awesomePhrases) || checkIntersting(n+2, awesomePhrases) ) return 1;
  return 0
}
​