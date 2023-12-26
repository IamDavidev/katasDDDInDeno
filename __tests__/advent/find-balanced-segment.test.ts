import { assertEquals } from '@testing/asserts.ts'
import {
  type Message,
  findBalancedSegment,
} from '../../katas/advent/find-balanced-segment.ts'

function assertBalancedSegment(msg: Message, seg: [number, number]) {
  /**
   * @When
   */
  const longestBalancedSegment = findBalancedSegment(msg)

  /**
   * @Then
   */
  assertEquals(longestBalancedSegment, seg)
}

// Deno.test('findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])', () => {
//   assertBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1], [2, 5])
// })
