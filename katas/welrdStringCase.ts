/**
 * to weird case kata with ts
 *
* 
 */

export function toWeirdCase(string: string): string {
  if (string === '' || string === ' ') return string;

  const caseWord = string
    .split(' ')
    .map((word, index) => {
      const wordWeird = word
        .split('')
        .map((letter, index) => {
          const isUpperCase = index % 2 === 0;
          if (isUpperCase) return letter.toUpperCase();
          return letter;
        })
        .join('');
      return wordWeird;
    })
    .join(' ');

  console.log(caseWord);

  return caseWord;

}

console.log(toWeirdCase('hola como estas'));
console.log(toWeirdCase('this is a test'));
