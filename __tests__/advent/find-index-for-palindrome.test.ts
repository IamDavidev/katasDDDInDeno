import { assertEquals } from '@testing/asserts.ts'

import { findIndexsForPalindrome } from '../../katas/advent/find-indexs-for-palidrome.ts'

function assertIndexForPalindrome(
	input: string,
	expected: [number, number] | [] | null
) {
	/**
	 * @When
	 */
	const indexs = findIndexsForPalindrome(input)

	/**
	 * @Then
	 */
	assertEquals(indexs, expected)
}

Deno.test('Tests for Find indexs for palindrome kata', async t => {
	const it = t.step
	await it('Should return [] when the words are already a palindrome', () => {
		/**
		 * @Given
		 */
		const input = [
			'anna',
			'civic',
			'kayak',
			'level',
			'madam',
			'mom',
			'noon',
			'racecar',
			'radar',
			'redder',
			'refer',
			'repaper',
			'rotator',
			'rotor',
			'sagas',
			'solos',
			'stats',
			'tenet',
			'wow',
		]
		const expected = [] as []

		/**
		 * @Run
		 */
		for (const word of input) {
			assertIndexForPalindrome(word, expected)
		}
	})

	await it('Should return [0,1] when the word is "abab"', () => {
		/**
		 * @Given
		 */
		const input = 'abab'
		const expected = [0, 1] as [number, number]

		/**
		 * @Then
		 */
		assertIndexForPalindrome(input, expected)
	})

	await it('should return [1,3] when the word is aaababa', () => {
		/**
		 * @Given
		 */
		const input = 'aaababa'
		const expected = [1, 3] as [number, number]

		assertIndexForPalindrome(input, expected)
	})

	await it('should return [4,8] when the word is rotaratov', () => {
		/**
		 * @Given
		 */
		const input = 'rotaratov'
		const expected = [4, 8] as [number, number]

		/**
		 * @Run
		 */
		assertIndexForPalindrome(input, expected)
	})

	await it('should return null when is not possible to make a palindrome', () => {
		/**
		 * @Given
		 */

		const inputs = [
			'abc',
			'abcd',
			'abcde',
			'abcdef',
			'abcdefg',
			'abcdefgh',
			'abcdefghi',
			'abcdefghij',
			'abcdefghijk',
			'abcdefghijkl',
			'abcdefghijklm',
			'abcdefghijklmn',
			'abcdefghijklmno',
			'abcdefghijklmnop',
			'abcdefghijklmnopq',
			'abcdefghijklmnopqr',
			'abcdefghijklmnopqrs',
			'abcdefghijklmnopqrst',
			'abcdefghijklmnopqrstu',
			'abcdefghijklmnopqrstuv',
			'abcdefghijklmnopqrstuvw',
			'abcdefghijklmnopqrstuvwx',
			'abcdefghijklmnopqrstuvwxy',
			'abcdefghijklmnopqrstuvwxyz',
		]
		const expected = null

		/**
		 * @Run
		 */
		for (const input of inputs) {
			assertIndexForPalindrome(input, expected)
		}
	})
})
