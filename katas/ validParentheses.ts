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
