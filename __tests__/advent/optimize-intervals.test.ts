import { assertEquals } from '@testing/asserts.ts'
import {
  Intervals,
  optimizeIntervals,
} from '../../katas/advent/optimize-intervals.ts'

function assertOptimizedIntervals(intervals: Intervals, expected: Intervals) {
  /**
   * @When
   */
  const optimized = optimizeIntervals(intervals)

  /**
   * @Then
   */
  assertEquals(optimized, expected)
}

Deno.test('Optimize intervals', async t => {
  const it = t.step

  await it('Shoud return type "Intervals"', () => {
    /**
     * @Given
     */
    const intervals = [[1, 2]] as Intervals

    /**
     * @When
     */
    const optimized = optimizeIntervals(intervals)

    assertEquals(typeof optimized, 'object')
  })

  await it('should return the same intervals if there is only one interval', () => {
    /**
     * @Given
     */
    const intervals = [[1, 2]] as Intervals
    const expected = [[1, 2]] as Intervals

    /**
     * @Assert
     */
    assertOptimizedIntervals(intervals, expected)
  })
  await it('should return the same intervals if there is only one interval', () => {
    /**
     * @Given
     * We have a list of intervals with only one interval.
     */
    const intervals: Intervals = [[1, 2]]
    const expected: Intervals = [[1, 2]]

    /**
     * @Assert
     */
    assertOptimizedIntervals(intervals, expected)
  })

  await it('should optimize overlapping intervals into a single interval', () => {
    /**
     * Given
     */

    const intervals: Intervals = [
      [3, 4],
      [5, 8],
      [2, 7],
    ]
    const expected: Intervals = [[2, 8]]

    /**
     * @Assert
     */
    assertOptimizedIntervals(intervals, expected)
  })

  await it('should handle non-overlapping intervals separately', () => {
    /**
     * @Given
     * We have a list of non-overlapping intervals.
     */
    const intervals: Intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
    ]
    const expected: Intervals = [
      [1, 6],
      [8, 10],
    ]

    /**
     * Assert
     */
    assertOptimizedIntervals(intervals, expected)
  })
})
