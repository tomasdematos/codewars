import { MORSE_CODE } from './preloaded';
export const decodeBits = (bits: string) => {
  const [f1, l1] = [bits.indexOf("1"), bits.lastIndexOf("1")]
  const cleanBits = bits.slice(f1,l1+1);
  
  const rate = Math.min(
    ...cleanBits.split('0').map(item => item.length || Infinity),
    ...cleanBits.split('1').map((item => item.length || Infinity))
  );
  
  return cleanBits
    .replaceAll('111'.repeat(rate), '-')
    .replaceAll('000'.repeat(rate), ' ')
    .replaceAll('1'.repeat(rate), '.')
    .replaceAll('0'.repeat(rate), '');
};
​
export const decodeMorse = (morseCode: string) => {
    return morseCode
      .split('  ')
      .map(word => word
         .split(' ')
         .map(char => MORSE_CODE[char]).join('')
      ).join(' ')
};
​