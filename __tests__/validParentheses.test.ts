import { it } from 'https://deno.land/std@0.173.0/testing/bdd.ts';
import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts';
import { isValid } from '../katas/%20validParentheses.ts';

const EXPECTED_FALSE = false;
const EXPECTED_TRUE = true;

it('should return by default false ', () => {
  const act = isValid('');
  assertEquals(act, EXPECTED_FALSE);
});

it('should be return false if the string is not valid', () => {
  const act = isValid('()');
  assertEquals(act, EXPECTED_TRUE);
});

it('Should be return false if bracket } is not closed', () => {
  const act = isValid('()}');
  assertEquals(act, EXPECTED_FALSE);
});

it('should be return false if brakets are not closed corretly ', () => {
  const act = isValid('([])');
  assertEquals(act, EXPECTED_TRUE);
});
