type Nums = Array<number | string>

/**
 *
 * Function to remove duplicates from an array of numbers
 * @param nums  Array of numbers
 * @returns   Count of unique values
 */
export function removeDuplicates(nums: Nums): number {
  const char = '_'

  const unique = new Set()
  const duplicates = [] as Nums

  nums.forEach(num => {
    if (unique.has(num)) duplicates.push(char)
    else unique.add(num)
  })

  /**
   * Mutate the input array
   */
  const newNums = [...unique].concat(duplicates)
  nums.splice(0, nums.length, ...(newNums as number[]))

  return unique.size
}
