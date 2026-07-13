export function uniqueInOrder (iterable: string | (string | number)[]):(string | number)[] {
  const res: (string | number)[] = [];
  
  for (let i = 0; i < iterable.length; i++) {
    if(res.length < 1 || res[res.length-1] !== iterable[i]) {
      res.push(iterable[i]);
    }
  }
  
  return res;
};
​