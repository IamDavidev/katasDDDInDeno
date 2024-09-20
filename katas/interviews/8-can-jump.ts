export function canJump(nums: number[]): boolean {
  console.table(nums)
  const INITIAL_INDEX = 0

  let steps = nums[INITIAL_INDEX]

  for (let index = 0; index < nums.length; index += steps) {
    steps = nums[index]
  }

  if (steps >= nums.length) return true

  return false
}
