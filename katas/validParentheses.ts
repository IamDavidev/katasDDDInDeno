/**
  Given a string s containing just the
  characters '(', ')', '{', '}', '[' and ']', 
  determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.
 
 */

export function isValid(s: string): boolean {
  if (!s) return false;

  let res = s;
  for (let i = 0; i < s.length; i++) {
    res = res.replaceAll('()', '').replaceAll('[]', '').replaceAll('{}', '');
    console.log(res);
  }

  console.log(res.replace('()', ''));
  if (res.length === 0) return true;
  return false;
}
