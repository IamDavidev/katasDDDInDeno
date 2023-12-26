import { assertEquals } from '@testing/asserts.ts'
import {
  type Message,
  findBalancedSegment,
} from '../../katas/advent/find-balanced-segment.ts'

function assertBalancedSegment(msg: Message, seg: [number, number] | []) {
  /**
   * @When
   */
  const longestBalancedSegment = findBalancedSegment(msg)

  /**
   * @Then
   */
  assertEquals(longestBalancedSegment, seg)
}

Deno.test('Properties of longest balanced segment', async t => {
  const commonMessage: Message = [1, 1, 0, 1, 1, 0, 1, 1]
  const it = t.step

  await it('Should return array of length 2', () => {
    /**
     * @Given
     */
    const expectedLength = 2

    /**
     * @When
     */
    const longestBalancedSegment = findBalancedSegment(commonMessage)

    /**
     * @Then
     */
    assertEquals(longestBalancedSegment.length, expectedLength)
  })

  await it('Should return array of numbers', () => {
    /**
     * @Given
     */
    const expectedType = 'number'

    /**
     * @When
     */
    const longestBalancedSegment = findBalancedSegment(commonMessage)

    /**
     * @Then
     */

    for (const index of longestBalancedSegment) {
      assertEquals(typeof index, expectedType)
    }
  })
})

Deno.test('Balaced Segment', async t => {
  const it = t.step

  await it('should return [2,5] when the message is [1, 1, 0, 1, 1, 0, 1, 1]', () => {
    /**
     * @Given
     */
    const message: Message = [1, 1, 0, 1, 1, 0, 1, 1]
    const expectedSegment: [number, number] = [2, 5]

    /**
     * @Assert
     */
    assertBalancedSegment(message, expectedSegment)
  })

  await it('should return [1,2] when the message is [1, 1, 0]', () => {
    /**
     * @Given
     */
    const message: Message = [1, 1, 0]
    const expectedSegment: [number, number] = [1, 2]

    /**
     * @Assert
     */
    assertBalancedSegment(message, expectedSegment)
  })

  await it('should return [] when the message is [1, 1, 1]', () => {
    /**
     * @Given
     */
    const message: Message = [1, 1, 1]
    const expectedSegment: [] = []

    /**
     * @Assert
     */
    assertBalancedSegment(message, expectedSegment)
  })

  await it('should return [5,10] when the message is [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0]', () => {
    /**
     * @Given
     */
    const message: Message = [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0]
    const expectedSegment: [number, number] = [5, 10]

    /**
     * @Assert
     */
    assertBalancedSegment(message, expectedSegment)
  })
})
