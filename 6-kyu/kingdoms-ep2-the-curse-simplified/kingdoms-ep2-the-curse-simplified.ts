 export function translate(speech: string, vocabulary: string[]): string {
  const words = speech.split(" ");
  
  const wordsMap = words.map((word) => {
    const cleanChars = [...word.replace(/[?!,.]/g, '')];
    
    const realWord = vocabulary.find((v) => {
      if( v.length !== cleanChars.length) return false; 
      return cleanChars.every((c, i) => c === "*" || c === v[i])
    }) || "";
​
    return realWord + word.slice(realWord.length);
  })
​
  return wordsMap.join(" ");
}  
​