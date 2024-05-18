/**
 *
 * @param n
 */
export function digitalRoot(n: number): number {
  const MAX_NUMBER = 9
  const parseToSum = String(n).split('').map(Number)
  let sum = 0

  parseToSum.forEach(number => (sum += number))
  if (MAX_NUMBER >= sum) return sum

  return digitalRoot(sum)

  // return ( n - 1 ) % 9 + 1
}

console.log(digitalRoot(16))
console.log(digitalRoot(942))
console.log(digitalRoot(132189))
console.log(digitalRoot(493193))
