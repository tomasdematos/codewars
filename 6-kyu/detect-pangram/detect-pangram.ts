export const isPangram = (phrase: string): boolean => {
  const letters = new Set(phrase.toLowerCase().match(/[a-z]/g));
  return letters.size === 26
}