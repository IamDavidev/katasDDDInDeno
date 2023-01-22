/**
 *
 * Write a function named ( first_non_repeating_letter ) that
 * takes a string input, and returns the first character that
 * is not repeated anywhere in the string.
 *
 * For example, if given the input 'stress', the function should
 * return 't', since the letter t only occurs once in the string,
 * and occurs first in the string.
 *
 * As an added challenge, upper- and lowercase letters are considered
 * the same character, but the function should return the correct case
 * for the initial letter. For example, the input 'sTreSS' should return 'T'.
 *
 * If a string contains all repeating characters, it should return an
 * empty string ("") or None -- see sample tests.
 *
 */

export function firstNonRepeatingLetter(str: string): string {
  let letter = '';
  // Your code here
  const split = str.split('');
  for (let i = 0; i < str.length; i++) {
    const char = split[i];
    const findCharLength = split.filter(
      (c) => c.toLocaleLowerCase() === char.toLocaleLowerCase()
    ).length;
    console.info({
      char,
      findCharLength,
    });
    if (findCharLength === 1) {
      letter = char;
      break;
    }
  }

  return letter;
}
