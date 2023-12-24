import { assertEquals, assertInstanceOf } from '@testing/asserts.ts'
import { Clock, Time, drawClock } from '../../katas/advent/draw-clock.ts'

function assertClockDrawn(time: Time, expectedClock: Clock) {
  /**
   * @When
   */
  const clock = drawClock(time)

  /**
   * @Then
   */
  assertEquals(clock, expectedClock)
}

Deno.test('Clock properties', async t => {
  const it = t.step

  /**
   * @Given
   */
  const commonTime = '00:00'

  /**
   * @When
   */
  const clock = drawClock(commonTime)

  await it('Should return type of clock', () => {
    /**
     * @Then
     */
    assertInstanceOf(clock, Array)
    assertInstanceOf(clock[0], Array)
  })

  await it('Should return  7 rows', () => {
    /**
     * @Then
     */

    assertEquals(clock.length, 7)
  })

  await it('Should return 17 columns', () => {
    /**
     * @Then
     */

    assertEquals(clock[0].length, 17)
  })

  await it('should return a separator between hours and minutes', () => {
    /**
     * @Given
     */
    const emptySeparator = ' '
    const filledSeparator = '*'

    const rowsEmpty = [0, 1, 3, 5, 6]
    const rowsFilled = [2, 4]

    const col = 8

    /**
     * @Then
     */
    for (const row of rowsEmpty) {
      assertEquals(clock[row][col], emptySeparator)
    }

    for (const row of rowsFilled) {
      assertEquals(clock[row][col], filledSeparator)
    }
  })

  await it('Should return each 3 columns a empty separator', () => {
    /**
     * @Given
     */
    const emptySeparator = ' '
    const columns = [3, 7, 9, 13]
    const rows = 7

    /**
     * @Then
     */
    for (const col of columns) {
      for (let row = 0; row < rows; row++) {
        assertEquals(clock[row][col], emptySeparator)
      }
    }
  })
})

Deno.test('Draw clock', async t => {
  const it = t.step

  await it('Should draw 01:30', () => {
    /**
     * @Given
     */
    const time = '01:30'
    const expectedClock = [
      [
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*',
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        ' ',
        '*',
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
      ],
      [
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*',
      ],
    ]

    /**
     * @When
     */
    assertClockDrawn(time, expectedClock)
  })

  await it('Should draw 17:39', () => {
    /**
     * @Given
     */
    const time = '17:39'
    const expectedClock = [
      [
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*',
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*',
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*',
      ],
    ]

    /**
     * @When
     */

    assertClockDrawn(time, expectedClock)
  })
})
