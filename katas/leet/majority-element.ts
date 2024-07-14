/**
 *
 */
export function majorityElement(nums: number[]): number {
  const mapNums = new Map<number, number>()

  for (const num of nums) {
    if (mapNums.has(num)) {
      const currentValue = mapNums.get(num) ?? 0
      mapNums.set(num, currentValue + 1)
    } else {
      mapNums.set(num, 1)
    }
  }

  console.table(mapNums)
  let max = [0, 0]

  for (const [num, appears] of mapNums) {
    if (appears > max[1]) {
      max = [num, appears]
    }
  }

  return max[0]
}

console.log(
  'nums = [2,2,1,1,1,2,2]',
  majorityElement([2, 2, 1, 1, 1, 2, 2, 5, 5, 5, 5, 5])
)
console.log('nums = [3,2,3]', majorityElement([3, 2, 3]))
console.log('[2,2]', majorityElement([2, 2]))
console.log('[1]', majorityElement([1]))
