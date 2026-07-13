export function findNeedle(haystack: any[]):string {
  return "found the needle at position " + haystack.findIndex((i) => i === "needle")
}