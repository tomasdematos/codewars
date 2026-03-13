export function alphabetPosition(text:string):string {
  const chars = text.toUpperCase().split("")
  return chars.map((c) => {
    const code = c.charCodeAt(0)-64;
    if(code < 1 || code > 26) return;
    return code;
  }).filter(Boolean).join(" ")
}