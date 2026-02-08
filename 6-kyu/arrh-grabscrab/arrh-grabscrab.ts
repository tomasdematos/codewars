​
function charCount(str: string): Record<string, number> {
  const map: Record<string, number> = {};
  
  for (const char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  
  return map;
}
​
export function grabscrab(anagram: string, dictionary: string[]): string[] {
  const chars = charCount(anagram);
​
  const compareCharCount = (word: string): boolean => {
    const map: Record<string, number> = charCount(word);
    
    return Object.keys(chars).every((key) => chars[key] === map[key])
  }
  
  return dictionary.filter((word) => anagram.length === word.length && compareCharCount(word));
}