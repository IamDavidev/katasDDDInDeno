import { assertEquals } from '@testing/asserts.ts'
import { describe, it } from '@testing/bdd.ts'
import { findFirstRepeated } from '../../katas/advent/findFirstRepeated.ts'

describe('findFirstRepeated', () => {
	it('should return -1 when there are no repeated numbers', () => {
		const gifts = [1, 2, 3]
		const current = findFirstRepeated(gifts)
		const expected = -1
		assertEquals(current, expected)
	})

	it('should find the first repeated number with the smallest index', () => {
		const gifts = [2, 1, 3, 5, 3, 2]
		const current = findFirstRepeated(gifts)
		const expected = 3
		assertEquals(current, expected)
	})

	it('should handle repeated numbers at the beginning of the list', () => {
		const gifts = [5, 5, 1, 3, 4]
		const current = findFirstRepeated(gifts)
		const expected = 5
		assertEquals(current, expected)
	})

	it('should handle repeated numbers at the end of the list', () => {
		const gifts = [1, 2, 3, 4, 5, 5]
		const current = findFirstRepeated(gifts)
		const expected = 5
		assertEquals(current, expected)
	})

	it('should return -1 for an empty list', () => {
		const gifts: number[] = []
		const current = findFirstRepeated(gifts)
		const expected = -1
		assertEquals(current, expected)
	})

	it('should handle multiple repeated numbers, returning the first one with the smallest index', () => {
		const gifts = [3, 2, 3, 4, 5, 2, 1]
		const current = findFirstRepeated(gifts)
		const expected = 3
		assertEquals(current, expected)
	})

	it('should handle repeated numbers interspersed with other numbers', () => {
		const gifts = [1, 2, 3, 4, 2, 5, 3, 6, 4]
		const current = findFirstRepeated(gifts)
		const expected = 2
		assertEquals(current, expected)
	})

	it('should handle negative numbers as well', () => {
		const gifts = [-1, 2, 3, -1, 4, 5, 2, 3]
		const current = findFirstRepeated(gifts)
		const expected = -1
		assertEquals(current, expected)
	})

	it('should handle repeated zeros', () => {
		const gifts = [0, 1, 0, 2, 3, 4, 5, 2, 3]
		const current = findFirstRepeated(gifts)
		const expected = 0
		assertEquals(current, expected)
	})

	it('should handle large numbers in the list', () => {
		const gifts = [1000, 2000, 3000, 4000, 2000, 5000]
		const current = findFirstRepeated(gifts)
		const expected = 2000
		assertEquals(current, expected)
	})
})
