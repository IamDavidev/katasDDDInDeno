import { assertEquals } from '@testing/asserts.ts'
import { photocopyDecayVerifier } from '../../katas/advent/photocopy-decay.ts'

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

type Original = string
type Copy = string

Deno.test('Photocopy decay verifier', async t => {
	const it = t.step

	await it('Should return true when the copy is the same as the original', () => {
		/**
		 * @Given
		 */
		const original = 'Hello World'
		const copy = 'Hello World'

		/**
		 * @Then
		 */
		assertIsCopy(original, copy, true)
	})

	await it("Should return false when the copy is not the same as the original because it's the same level of decay", () => {
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
	})

	await it('Should return false when the copy has different length than the original', () => {
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
	})

	await it('Should return true when the copy is only one level of decay', () => {
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

	await it('Should return true when the copy is correctly', () => {
		/**
		 * @Given
		 */
		const original = 'Santa Claus'
		const copy = 's#+:. c:. s'
		const expected = true

		/**
		 * @Run
		 */
		assertIsCopy(original, copy, expected)
	})

	await it('Should return false when there is a character that is not valid', () => {
		/**
		 * @Given
		 */
		const original = 'Santa Claus'
		const copy = 's#+:.#c:. s'
		const expected = false

		/**
		 * @Run
		 */
		assertIsCopy(original, copy, expected)
	})
})
