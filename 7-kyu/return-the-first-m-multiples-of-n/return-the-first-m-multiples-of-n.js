function multiples(m, n){
  return Array.from({ length: m }, (_, i) => n * (i + 1));
}
​