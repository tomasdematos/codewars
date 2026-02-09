function duplicateEncode(word){
   return word
    .toLowerCase()
    .split('')
    .map((c, _, w) =>  w.indexOf(c) == w.lastIndexOf(c) ? '(' : ')')
    .join('')
}
​