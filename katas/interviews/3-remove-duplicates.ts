/**
 * @param {number[]} nums
 * @return {number}
 */
export function removeDuplicates(nums) {
  if (nums.length === 0) return 0

  let k = 1 // k is both the index to place the next unique element and the count of unique elements

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]
      k++
    }
  }

  return k
}
