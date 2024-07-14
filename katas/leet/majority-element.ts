/**
 *
 */
export function majorityElement(nums: number[]): number {
  const mapNums = new Map<number, number>()

  for (const num of nums) {
    mapNums.set(num, (mapNums.get(num) ?? 0) + 1)
  }

  let majorityElement = nums[0]
  let maxAppears = 0

  for (const [num, appears] of mapNums) {
    if (appears > maxAppears) {
      maxAppears = appears
      majorityElement = num
    }
  }

  return majorityElement
}

console.log(
  'nums = [2,2,1,1,1,2,2]',
  majorityElement([2, 2, 1, 1, 1, 2, 2, 5, 5, 5, 5, 5])
)
console.log('nums = [3,2,3]', majorityElement([3, 2, 3]))
console.log('[2,2]', majorityElement([2, 2]))
console.log('[1]', majorityElement([1]))
