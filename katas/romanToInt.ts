export const romanValues: Map<string, number> = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]);

const specialsValues: Map<string, number> = new Map([
  ['IV', 4],
  ['IX', 9],
  ['XL', 40],
  ['XC', 90],
  ['CD', 400],
  ['CM', 900],
]);

export function romanToInt(s: string): number {
  let sum = 0;
  let isSpacial = false;
  const arrS = s.split('');

  arrS.forEach((key, index) => {
    if (isSpacial === true) {
      isSpacial = false;
      return;
    }

    const isValueSpecial = specialsValues.get(key + arrS[index + 1]);

    if (isValueSpecial !== undefined) {
      sum = sum + isValueSpecial;
      isSpacial = true;
      return;
    }

    sum = sum + (romanValues.get(key) as number);
  });

  return sum;
}

console.log(romanToInt('MCDLXXVI'));
/*
M
CDLXXVI
*/
