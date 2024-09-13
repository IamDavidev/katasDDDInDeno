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

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
