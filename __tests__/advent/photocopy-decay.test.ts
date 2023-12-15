import { assertEquals } from '@testing/asserts.ts'
import { photocopyDecayVerifier } from '../../katas/advent/photocopy-decay.ts'
import { describe, it } from '@testing/bdd.ts'

function assertIsCopy(original: string, copy: string, expected: boolean) {
	/**
	 * @When
	 */
	const isCopy = photocopyDecayVerifier(original, copy)

	/**
	 * @Then
	 */
	assertEquals(isCopy, expected)
}

// describe('Tests for Photocopy decay verifier kata', () => {
type Original = string
type Copy = string

Deno.test(
	'Should return true when the copy is the same as the original',
	() => {
		/**
		 * @Given
		 */
		const original = 'Hello World'
		const copy = 'Hello World'

		/**
		 * @Then
		 */
		assertIsCopy(original, copy, true)
	}
)

Deno.test(
	"Should return false when the copy is not the same as the original because it's the same level of decay",
	() => {
		/**
		 * @Given
		 */
		const cards = new Map<Original, Copy>([
			['H', 'W'],
			['e', 'o'],
			['L', 'R'],
		])

		const expected = false

		/**
		 * @Run
		 */

		for (const [original, copy] of cards) {
			assertIsCopy(original, copy, expected)
		}
	}
)

Deno.test(
	'Should return false when the copy has different length than the original',
	() => {
		/**
		 * @Given
		 */
		const original = 'Santa Claus is coming'
		const copy = 'sa#ta Cl#us i+'

		const expected = false

		/**
		 * @Run
		 */
		assertIsCopy(original, copy, expected)
	}
)

Deno.test('Should return true when the copy is only one level of decay', () => {
	/**
	 * @Given
	 */
	const cards = new Map<Original, Copy>([
		['A', 'a'],
		['Z', 'z'],
		['a', '#'],
		['z', '+'],
		['a', ':'],
		['z', '.'],
		['A', ' '],
	])

	/**
	 * @Run
	 */

	for (const [original, copy] of cards) {
		assertIsCopy(original, copy, true)
	}
})
