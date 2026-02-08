​
const SCORING_RULES: Record<number, { triplet: number; individual: number }> = {
  1: { triplet: 1000, individual: 100 },
  2: { triplet: 200,  individual: 0   },
  3: { triplet: 300,  individual: 0   },
  4: { triplet: 400,  individual: 0   },
  5: { triplet: 500,  individual: 50  },
  6: { triplet: 600,  individual: 0   },
};
​
const calculatePoints = (face: number, amount: number) => {
  const {triplet, individual} = SCORING_RULES[face];
​
  return Math.floor(amount/3)*triplet + (amount%3)*individual;
​
}
​
export function score(dice: number[]): number {
  const scores = new Array(6).fill(0)
  dice.forEach((item) => scores[item-1]++)
  return scores.reduce((acc, val, i) =>  acc+(calculatePoints(i+1, val)),0)
​
}