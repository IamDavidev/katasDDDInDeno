import { describe, it } from '@testing/bdd.ts'
import { assertEquals } from '@testing/asserts.ts'

import { longestCommonPrefix } from '../katas/longestCommonPrefix.ts'

describe('Longest Common Prefix', () => {
	it('Should return empty string if there is no common prefix ', () => {
		const strs: string[] = ['flower', 'flow', 'flight']
		const expected = 'fl'
		const act = longestCommonPrefix(strs)

		assertEquals(act, expected)
	})

	it('Should return ', () => {
		const strs = ['abrcde', 'abzcde', 'abtcde']
		const expected = 'cde'
		const act = longestCommonPrefix(strs)

		assertEquals(act, expected)
	})

	it('should return empty stri', () => {
		const strs = ['dog', 'racecar', 'car']
		const expected = ''
		const act = longestCommonPrefix(strs)

		assertEquals(act, expected)
	})

	it('Should return empty string if there is no common prefix ', () => {
		const strs: string[] = ['reflower', 'flow', 'flight']
		const expected = ''
		const act = longestCommonPrefix(strs) as string

		assertEquals(act, expected)
	})
})
