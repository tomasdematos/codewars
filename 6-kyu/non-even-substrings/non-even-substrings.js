function solve(s){
  let r = 0
  for (let i = 0; i<s.length; i++) {  
    if((Number(s[i]) %2) === 1) r += 1+i;
  }
  return r;
};
​
​