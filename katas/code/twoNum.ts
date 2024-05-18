/**
  Given an array of integers nums 
  and an integer target, return indices
  of the two numbers such that they add
  up to target.

  You may assume that each input would
  have exactly one solution, and you 
  may not use the same element twice.

  You can return the answer in any order.

 */

export function twoSum(nums: number[], target: number): number[] {
  const result: Map<number, number> = new Map();

  nums.map((num, index, nums) => {
    const diff = target - num;

    let findDiff = undefined;

    nums.forEach((num, indexFor) => {
      if (index === indexFor) return;
      if (num == diff) {
        findDiff = num;
      }
    });

    if (findDiff !== undefined) {
      result.set(index, num);
      result.set(nums.indexOf(findDiff), findDiff);
    }
  });

  return [...result].map(([key, _value]) => key);
}
