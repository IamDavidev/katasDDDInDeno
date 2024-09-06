export function removeElement(nums: number[], val: number): number {
  let nonValIndex = 0

  for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
    if (nums[currentIndex] !== val) {
      nums[nonValIndex] = nums[currentIndex]
      nonValIndex++
    }
  }

  return nonValIndex
}
