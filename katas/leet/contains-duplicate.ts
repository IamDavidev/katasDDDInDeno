/**
 * Function that determine if array contains only elements distinct
 *
 * @param {number[]} nums Integerr array
 * @returns {boolean} true if any value appears at least twince in the array and return false if every element is distinct.
 */
export function containsDuplicate(nums: number[]): boolean {
  // const setNums = new Set<number>()

  // for (const num of nums) {
  //   if (setNums.has(num)) return true
  //   setNums.add(num)
  // }

  // return false

  const set = new Set<number>(nums)
  return set.size !== nums.length
}
