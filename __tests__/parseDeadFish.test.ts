import { assertEquals } from '@testing/asserts.ts'

import { parser } from '../katas/parserDeadFish.ts'

Deno.test('parser deadfish', async t => {
	const it = t.step

	await it('Should be return array empty if the string is empty', () => {
		const expected: [] = []
		const parse = parser('')

		assertEquals(parse, expected)
	})

	await it('Should be return [1] if the string is io', () => {
		const expected = [1]
		const parse = parser('io')

		assertEquals(parse, expected)
	})

	await it('Should be return [8,64] if the string is iiisdoso', () => {
		const expected = [8, 64]
		const parse = parser('iiisdoso')

		assertEquals(parse, expected)
	})

	await it('Should be return [8,64] if the string is iiisxxxdoso', () => {
		const expected = [8, 64]
		const parse = parser('iiisxxxdoso')

		assertEquals(parse, expected)
	})
})
