export function duplicateEncode(word: string){
  let count: Record<string, number> = {}
  
  for(let char of word.toLowerCase()) {
    count[char] = (count[char] ?? 0) +1
  }
  
  return word.toLowerCase().split('').map((c) => count[c] > 1 ? ')' : '(').join('')
}