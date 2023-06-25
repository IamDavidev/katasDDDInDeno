import { describe, it } from '@testing/bdd.ts'
import { assertEquals } from '@testing/asserts.ts'

import { romanToInt } from '../katas/romanToInt.ts'

describe('Roman To Int', () => {
	it('Shuold return 1 with a roman value of I', () => {
		const expected = 1
		const act = romanToInt('I')
		assertEquals(act, expected)
	})

	it('Shuold return 5 with a roman value of V', () => {
		const expected = 5
		const act = romanToInt('V')
		assertEquals(act, expected)
	})

	it('Shuold return 1000 with a roman value of M', () => {
		const expected = 1000
		const act = romanToInt('M')
		assertEquals(act, expected)
	})

	it('Should return 2 with roman value of II', () => {
		const expected = 2
		const act = romanToInt('II')
		assertEquals(act, expected)
	})

	it('Should return 12 with roman value of XII', () => {
		const expected = 12
		const act = romanToInt('XII')
		assertEquals(act, expected)
	})

	it('Should return 3 with roman value of III', () => {
		const expected = 3
		const act = romanToInt('III')
		assertEquals(act, expected)
	})

	it('Should return 58 with roman value of LVIII', () => {
		const expected = 58
		const act = romanToInt('LVIII')
		assertEquals(act, expected)
	})

	it('Should return 1994 with roman value of MCMXCIV', () => {
		const expected = 1994
		const act = romanToInt('MCMXCIV')
		assertEquals(act, expected)
	})
})
