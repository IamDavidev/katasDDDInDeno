import { assertEquals, assertNotEquals } from '@testing/asserts.ts'
import {
  distributeWeights,
  type Weigths,
} from '../../katas/advent/distribute-weights.ts'

function assertDistributeWeights(weights: Weigths, expected: Weigths): void {
  /**
   * @When
   */
  const curr = distributeWeights(weights)

  /**
   * @Then
   */
  assertEquals(curr, expected)
}

Deno.test('Properties Weigths', async t => {
  /**
   * @Given
   */
  const weights = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4],
  ]

  /**
   * @When
   */
  const distributed = distributeWeights(weights)

  const it = t.step

  await it('Should return the same rows', () => {
    /**
     * @Then
     */
    assertEquals(distributed.length, weights.length)
  })

  await it('Should return the same columns', () => {
    /**
     * @Then
     */
    assertEquals(distributed[0].length, weights[0].length)
  })

  await it('Should return a different array with weights distributed', () => {
    /**
     * @Then
     */
    assertNotEquals(distributed, weights)
  })
})

Deno.test(' Distribute weights in a scale', async t => {
  const it = t.step

  await it('should return distribute weights in 2x2', () => {
    /**
     * @Given
     */
    const weights = [
      [2, null],
      [null, 3],
    ]
    const expected = [
      [2, 3],
      [3, 3],
    ]

    /**
     * @Assert
     */
    assertDistributeWeights(weights, expected)
  })

  await it('should return distribute weights in 3x3', () => {
    /**
     * @Given
     */
    const weights = [
      [4, 5, 1],
      [6, null, 3],
      [8, null, 4],
    ]
    const expected = [
      [5, 3, 3],
      [6, 5, 3],
      [7, 6, 4],
    ]

    /**
     * @Assert
     */
    assertDistributeWeights(weights, expected)
  })

  await it('should return distribute weights in 2x3', () => {
    /**
     * @Given
     */
    const weights = [
      [2, 1, 1],
      [3, 4, null],
    ]

    const expected = [
      [2, 2, 1],
      [3, 3, 3],
    ]

    /**
     * @Assert
     */
    assertDistributeWeights(weights, expected)
  })

  await it('Should return all ones', () => {
    /**
     * @Given
     */
    const weights = [
      [null, 1, null, 1, null],
      [1, null, 1, null, 1],
    ]

    const expected = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ]

    /**
     * @Assert
     */

    assertDistributeWeights(weights, expected)
  })
})
