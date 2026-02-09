function maxProduct(a) {
  let m1 = 0;
  let m2 = 0;
  
  a.forEach((item) => {
    if(item > m1) {
      m2 = m1;
      m1 = item
    } else if(item > m2) {
      m2 = item
    }
  })
  
  return m1*m2
}