export function uniqueInOrder (iterable: string | (string | number)[]):(string | number)[] {
  return [...iterable].filter((i, index) => i !== iterable[index+1] )
};
​