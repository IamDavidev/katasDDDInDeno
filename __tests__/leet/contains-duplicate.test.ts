// import {} from '@testing/asser"

import { assertEquals } from '@testing/asserts.ts'
import { containsDuplicate } from '../../katas/leet/contains-duplicate.ts'

Deno.test('Contains duplicate', async t => {
  const it = t.step

  await it('Should return true when a value appears at least twice in the array', () => {
    // Given

    const nums = [1, 2, 3, 1]
    const expectedResult = true

    // When

    const currentResult = containsDuplicate(nums)

    // Then
    assertEquals(
      currentResult,
      expectedResult,
      'The array contains elements duplicate'
    )
  })

  await it('Should return false when every element is distinct', () => {
    // Given
    const nums = [1, 2, 3, 4]
    const expectedResult = false

    // When

    const currentResult = containsDuplicate(nums)

    // Then
    assertEquals(
      currentResult,
      expectedResult,
      'The array no contains elements duplicate'
    )
  })
})
