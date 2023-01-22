import { it, describe } from 'https://deno.land/std@0.173.0/testing/bdd.ts';
import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts';

import { firstNonRepeatingLetter } from '../katas/firstNonRepeatingLetter.ts';

const EXPECTED_EMPTY_STRING = '';

describe('first non repeating letter', () => {
  it('should be return empty string if the string is empty', () => {
    const act = firstNonRepeatingLetter('');

    assertEquals(act, EXPECTED_EMPTY_STRING);
  });

  it('should be return empty string if the string not contain unique character', () => {
    const act = firstNonRepeatingLetter('aaaaaaaaa');

    assertEquals(act, EXPECTED_EMPTY_STRING);
  });

  it('Should be return "t" if the string is "stress"', () => {
    const expected = 't';
    const act = firstNonRepeatingLetter('stress');

    assertEquals(act, expected);
  });

  it('Should be return "T" if the string is "sTreSS"', () => {
    const expected = 'T';
    const act = firstNonRepeatingLetter('sTreSS');

    assertEquals(act, expected);
  });

  it('Should be return "e" if the string is "moonmen"', () => {
    const expected = 'e';
    const act = firstNonRepeatingLetter('moonmen');

    assertEquals(act, expected);
  });

  it('Should be return empty string if the string is "abba"', () => {
    const act = firstNonRepeatingLetter('abba');

    assertEquals(act, EXPECTED_EMPTY_STRING);
  });
});
