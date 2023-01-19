export function solution(str: string, ends: string): boolean {
  // return str.endsWith(ends);

  const lenghtEnding = ends.length;
  const endingStr = str.slice(-lenghtEnding);

  if (endingStr === ends) return true;

  return false;
}

console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));
