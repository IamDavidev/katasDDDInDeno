import { assertEquals } from '@testing/asserts.ts'
import { pascalTriangleGenerator } from '../../katas/leet/pascal-triangle.ts'

Deno.test("Pascal's triangle", async t => {
  const it = t.step

  await it('Given 1 as number of rows then return [[1]] first row of pascal triangle', () => {
    // Given
    const numRows = 1
    const expected = [[1]]

    // When
    const triangle = pascalTriangleGenerator(numRows)

    // Then

    assertEquals(triangle, expected)
  })

  await it('Given 2 as number of rows then return [[1],[1,1]]', () => {
    const numRows = 2
    const expected = [[1], [1, 1]]
    const triangle = pascalTriangleGenerator(numRows)
    assertEquals(triangle, expected)
  })

  await it('Given 3 as number of rows then return correct triangle', () => {
    const numRows = 3
    const expected = [[1], [1, 1], [1, 2, 1]]
    const triangle = pascalTriangleGenerator(numRows)
    assertEquals(triangle, expected)
  })

  await it('Given 5 as number of rows then return correct triangle', () => {
    const numRows = 5
    const expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
    const triangle = pascalTriangleGenerator(numRows)
    assertEquals(triangle, expected)
  })

  await it('Given 0 as number of rows then return empty array', () => {
    const numRows = 0
    const expected = [] as []
    const triangle = pascalTriangleGenerator(numRows)
    assertEquals(triangle, expected)
  })

  await it('Given negative number as number of rows then return empty array', () => {
    const numRows = -1
    const expected = [] as []
    const triangle = pascalTriangleGenerator(numRows)
    assertEquals(triangle, expected)
  })

  await it('Given a large number of rows then return correct triangle', () => {
    const numRows = 10
    const expected = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
      [1, 8, 28, 56, 70, 56, 28, 8, 1],
      [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],
    ]
    const triangle = pascalTriangleGenerator(numRows)
    assertEquals(triangle, expected)
  })
})
