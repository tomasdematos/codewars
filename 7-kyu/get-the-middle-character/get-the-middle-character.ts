export function getMiddle(s:string) {
  const middle = Math.ceil(s.length / 2) - 1
  return s.slice(middle, s.length - middle)
}