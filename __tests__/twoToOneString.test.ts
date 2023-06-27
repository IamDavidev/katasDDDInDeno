import { describe, it } from '@testing/bdd.ts'
import { assertEquals } from '@testing/asserts.ts'

import { longest } from '../katas/TwoToOneString.ts'

describe('VALIDATE Two One String', () => {
	it('should return abcdefklmopqwxy', () => {
		const a = 'xyaabbbccccdefww',
			b = 'xxxxyyyyabklmopq'

		const expected = 'abcdefklmopqwxy'
		const current = longest(a, b)

		assertEquals(current, expected)
	})
	it('should return abcdefghijklmnopqrstuvwxyz', () => {
		const a = 'abcdefghijklmnopqrstuvwxyz'
		const expected = 'abcdefghijklmnopqrstuvwxyz'

		const current = longest(a, a)

		assertEquals(current, expected)
	})

	it('should return abcd', () => {
		const a = 'abc'
		const b = 'abcd'

		const expected = 'abcd'
		const current = longest(a, b)

		assertEquals(current, expected)
	})
})
