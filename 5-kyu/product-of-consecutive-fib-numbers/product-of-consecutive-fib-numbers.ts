export const productFib = (prod:number): [number,number,boolean] => {
  let f1 = 1;
  let f2 = 0; 
  let aux = 0;
​
  while (f1 * f2 < prod) {
    aux = f1;
    f1 = f1+f2;
    f2 = aux; 
  }
  return [f2,f1, f1*f2 === prod]
}