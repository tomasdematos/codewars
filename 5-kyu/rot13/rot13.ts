export function rot13(str: string): string {
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lower_case = "abcdefghijklmnopqrstuvwxyz".split("");
​
  let result = "";
​
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
​
    if (upper_case.includes(char)) {
      let index = upper_case.indexOf(char);
      let rotated_Index = index < 13 ? index + 13 : index - 13;
      result += upper_case[rotated_Index];
    }
    else if (lower_case.includes(char)) {
      let index = lower_case.indexOf(char);
      let rotated_Index = index < 13 ? index + 13 : index - 13;
      result += lower_case[rotated_Index];
    }
    else {
      result += char;
    }
  }
​
  return result;
}