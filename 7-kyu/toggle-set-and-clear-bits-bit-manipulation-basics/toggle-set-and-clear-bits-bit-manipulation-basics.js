// 1. Toggle a bit at a given position
const toggleBit = (n, position) =>  n ^ (1 << position);
​
// 2. Set a bit at a given position
const setBit = (n, position) => n | (1 << position);
​
// 3. Clear a bit at a given position
const clearBit = (n, position) => n & ~(1 << position);
​
// 4. Check if a bit at a given position is set
const isBitSet = (n, position) =>  (n & (1 << position)) !== 0;
​
// 5. Set multiple bits using a mask
const setMultipleBits = (n, mask) => n | mask;
​
// 6. Clear multiple bits using a mask
const clearMultipleBits = (n, mask) => n & ~(mask);
​
// 7. Toggle multiple bits using a mask
const toggleMultipleBits = (n, mask) =>  n ^ (mask);