import { assertEquals } from '@testing/asserts.ts'
import { MKAverage } from '../../katas/leet/mkaverage.ts'

Deno.test(
  'Implement a data structure that calculates the MKAverage for the stream.',
  async t => {
    const it = t.step

    await it('Should add correctly in the internal stream', () => {
      // Given
      const expectedElements = [1, 3, 4]
      const mkaverage = new MKAverage(0, 0)

      // When
      expectedElements.forEach(n => mkaverage.addElement(n))

      // then
      assertEquals(expectedElements, mkaverage.streamElements)
    })

    await it('Should return -1 with less that M elements', () => {
      // Given
      const expected = -1

      const m = 3
      const k = 1
      const mkaverage = new MKAverage(m, k)
      const elementsToAdd = [3, 1]

      // When
      elementsToAdd.forEach(n => mkaverage.addElement(n))

      const average = mkaverage.calculateMKAverage()

      // then
      assertEquals(expected, average)
    })
  }
)
