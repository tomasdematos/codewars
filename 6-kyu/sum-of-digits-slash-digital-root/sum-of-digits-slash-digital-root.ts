export const digitalRoot = (n:number):number => {
  const num = n.toString().split("").map((x) => parseInt(x)).reduce((acc, x) => acc+x,0);
  if(num < 10) return num;
  return digitalRoot(num);
};