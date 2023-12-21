import { assertEquals } from '@testing/asserts.ts'
import { type Houses, maxGifts } from '../../katas/advent/max-gifts.ts'

function checkMaxGifts(houses: Houses, expected: number): void {
  /**
   * @When
   */
  const gifts = maxGifts(houses)

  /**
   * @Then
   */
  assertEquals(gifts, expected)
}

Deno.test('Get max gifts from array of houses', async (t): Promise<void> => {
  const it = t.step

  await it('Should return 0 if no houses', (): void => {
    /**
     * @Given
     */
    const houses: Houses = []
    const expected = 0

    /**
     * @Run
     */
    checkMaxGifts(houses, expected)
  })

  await it("should return max gifts if there's only one house", () => {
    /**
     * @Given
     */
    const houses: Houses = [1]
    const expected = 1

    /**
     * @Run
     */
    checkMaxGifts(houses, expected)
  })

  await it("Should return highest value if there's only two houses", () => {
    /**
     * @Given
     */
    const cases = new Map<Houses, number>([
      [[2, 1], 2],
      [[1, 2], 2],
      [[1, 1], 1],
      [[2, 2], 2],
      [[99, 66], 99],
      [[66, 99], 99],
      [[7892, 8302], 8302],
    ])

    /**
     * @Run
     */

    for (const [houses, expected] of cases) {
      checkMaxGifts(houses, expected)
    }
  })

  await it('Should return highest value of three houses', () => {
    /**
     * @Given
     */
    const cases = new Map<Houses, number>([
      [[1, 2, 3], 4],
      [[4, 4, 4], 8],
      [[1, 1, 1], 2],
      [[4, 5, 6], 10],
    ])
    /**
     * @Given
     */
    for (const [houses, expected] of cases) {
      checkMaxGifts(houses, expected)
    }
  })

  await it('Should retun highest value of the houses', () => {
    /**
     * @Given
     */
    const cases = new Map<Houses, number>([
      [[1, 2, 3, 4, 5], 7],
      [[1, 2, 3, 1], 4],
      [[1, 7, 9, 3, 2], 12],
    ])
    /**
     * @Run
     */
    for (const [houses, expected] of cases) {
      checkMaxGifts(houses, expected)
    }
  })
})
