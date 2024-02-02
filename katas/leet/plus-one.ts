export function plusOne(digits: number[]): number[] {
  const parser = (str: string): number[] => {
    try {
      const num = BigInt(str) + 1n
      console.log(num)
      return num.toString().split('').map(Number)
    } catch {
      return [0]
    }
  }

  return parser(digits.join(''))
}
