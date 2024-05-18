/*

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.

*/

/**
 * Function to determiner if number is happy.
 *
 * @param n happy number
 * @returns Return true if n is a happy number, and false if not.
 */

export function isHappy(n: number): boolean {
  const stack = new Set<number>()

  const checkIsHappy = (n: number): boolean => {
    if (stack.has(n)) return false
    else stack.add(n)

    if (n === 1) return true

    const splitNumbers = String(n).split('')

    let sum = 0

    splitNumbers.forEach(n => (sum += Number(n) * Number(n)))

    return checkIsHappy(sum)
  }

  return checkIsHappy(n)
}

if (isHappy(19)) {
  console.log('is happy number')
} else {
  console.log("isn't happy number")
}
