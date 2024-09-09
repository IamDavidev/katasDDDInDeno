export function rotate(nums: number[], k: number): void {
  const n = nums.length

  k = k % n

  const rotated = new Array(n)

  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = nums[i]
  }

  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i]
  }
}
