import { describe, it } from '@testing/bdd.ts'
import { assertEquals } from '@testing/asserts.ts'

import { parser } from '../katas/parserDeadFish.ts'

describe('parser deadfish', () => {
	it('Should be return array empty if the string is empty', () => {
		const expected: [] = []
		const parse = parser('')

		assertEquals(parse, expected)
	})

	it('Should be return [1] if the string is io', () => {
		const expected = [1]
		const parse = parser('io')

		assertEquals(parse, expected)
	})

	it('Should be return [8,64] if the string is iiisdoso', () => {
		const expected = [8, 64]
		const parse = parser('iiisdoso')

		assertEquals(parse, expected)
	})

	it('Should be return [8,64] if the string is iiisxxxdoso', () => {
		const expected = [8, 64]
		const parse = parser('iiisxxxdoso')

		assertEquals(parse, expected)
	})
})
