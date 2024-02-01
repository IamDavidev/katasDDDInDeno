export function searchInsert(nums: number[], target: number) {
  if (nums.includes(target)) return nums.indexOf(target)
  if (target <= nums[0]) return 0

  for (let index = 0; index < nums.length - 1; index++) {
    if (nums[index] <= target && nums[index + 1] >= target) return index + 1
  }

  return nums.length
}
