export function sequentialDigits(low: number, high: number): number[] {
  const result: number[] = []
  const startDigits = '123456789'

  for (let length = 2; length <= 9; length++) {
    for (let start = 0; start <= 9 - length; start++) {
      const numStr = startDigits.substring(start, start + length)
      const num = parseInt(numStr, 10)
      if (num >= low && num <= high) {
        result.push(num)
      }
    }
  }

  return result
}
