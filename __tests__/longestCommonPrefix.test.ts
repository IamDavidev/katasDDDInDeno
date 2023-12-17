import { assertEquals } from '@testing/asserts.ts'

import { longestCommonPrefix } from '../katas/longestCommonPrefix.ts'

Deno.test('Longest Common Prefix', async t => {
	const it = t.step

	await it('Should return empty string if there is no common prefix ', () => {
		const strs: string[] = ['reflower', 'flow', 'flight']
		const expected = ''
		const act = longestCommonPrefix(strs)
		assertEquals(act, expected)
	})

	await it('Should return ', () => {
		const strs = ['abrcde', 'abzcde', 'abtcde']
		const expected = 'cde'
		const act = longestCommonPrefix(strs)

		assertEquals(act, expected)
	})

	await it('should return empty string', () => {
		const strs = ['dog', 'racecar', 'car']
		const expected = ''
		const act = longestCommonPrefix(strs)

		assertEquals(act, expected)
	})
})
