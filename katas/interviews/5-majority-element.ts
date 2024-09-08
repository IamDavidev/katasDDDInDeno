/**
 * @param {number[]} nums
 * @returns {number} The majority Element.
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
