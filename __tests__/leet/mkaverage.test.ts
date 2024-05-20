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

    await it('Should return -1 with less than M elements', () => {
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

    await it('Should return correct MKAverage with exactly M elements', () => {
      // Given
      const expected = 3
      const m = 3
      const k = 1
      const mkaverage = new MKAverage(m, k)
      const elementsToAdd = [3, 1, 10]

      // When
      elementsToAdd.forEach(n => mkaverage.addElement(n))

      const average = mkaverage.calculateMKAverage()

      // then
      assertEquals(expected, average)
    })

    await it('Should return correct MKAverage with more than M elements', () => {
      // Given
      const expected = 5
      const m = 3
      const k = 1
      const mkaverage = new MKAverage(m, k)
      const elementsToAdd = [3, 1, 10, 5, 5, 5]

      // When
      elementsToAdd.forEach(n => mkaverage.addElement(n))

      const average = mkaverage.calculateMKAverage()

      // then
      assertEquals(expected, average)
    })

    await it('Should return correct MKAverage with different values', () => {
      // Given
      const expected = 5
      const m = 5
      const k = 1
      const mkaverage = new MKAverage(m, k)
      const elementsToAdd = [1, 2, 3, 4, 5, 6, 7]

      // When
      elementsToAdd.forEach(n => mkaverage.addElement(n))

      const average = mkaverage.calculateMKAverage()

      // then
      assertEquals(expected, average)
    })

    await it('Should return same value when all elements are the same', () => {
      // Given
      const expected = 5
      const m = 3
      const k = 1
      const mkaverage = new MKAverage(m, k)
      const elementsToAdd = [5, 5, 5]

      // When
      elementsToAdd.forEach(n => mkaverage.addElement(n))

      const average = mkaverage.calculateMKAverage()

      // then
      assertEquals(expected, average)
    })

    await it('Should handle varying stream length correctly', () => {
      // Given
      const m = 4
      const k = 1
      const mkaverage = new MKAverage(m, k)

      // When
      mkaverage.addElement(10)
      mkaverage.addElement(20)
      mkaverage.addElement(30)
      mkaverage.addElement(40)
      let average = mkaverage.calculateMKAverage()
      assertEquals(25, average) // The last 4 elements are [10, 20, 30, 40], average of [20, 30] is 25

      mkaverage.addElement(50)
      average = mkaverage.calculateMKAverage()
      assertEquals(35, average) // The last 4 elements are [20, 30, 40, 50], average of [30, 40] is 35
    })
  }
)
