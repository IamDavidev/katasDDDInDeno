export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let primaryIndex = m - 1
  let secondaryIndex = n - 1
  let mergedIndex = m + n - 1

  while (secondaryIndex >= 0) {
    if (primaryIndex >= 0 && nums1[primaryIndex] > nums2[secondaryIndex]) {
      nums1[mergedIndex] = nums1[primaryIndex]
      primaryIndex--
    } else {
      nums1[mergedIndex] = nums2[secondaryIndex]
      secondaryIndex--
    }
    mergedIndex--
  }
}
