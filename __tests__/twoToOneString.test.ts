import { assertEquals } from '@testing/asserts.ts'
import { longest } from '../katas/code/TwoToOneString.ts'


Deno.test('VALIDATE Two One String', async t => {
	const it = t.step

	await it('should return abcdefklmopqwxy', () => {
		const a = 'xyaabbbccccdefww',
			b = 'xxxxyyyyabklmopq'

		const expected = 'abcdefklmopqwxy'
		const current = longest(a, b)

		assertEquals(current, expected)
	})

	await it('should return abcdefghijklmnopqrstuvwxyz', () => {
		const a = 'abcdefghijklmnopqrstuvwxyz'
		const expected = 'abcdefghijklmnopqrstuvwxyz'

		const current = longest(a, a)

		assertEquals(current, expected)
	})

	await it('should return abcd', () => {
		const a = 'abc'
		const b = 'abcd'

		const expected = 'abcd'
		const current = longest(a, b)

		assertEquals(current, expected)
	})
})
