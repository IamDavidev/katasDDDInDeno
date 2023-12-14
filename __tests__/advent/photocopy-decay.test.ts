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

describe('Tests for Photocopy decay verifier kata', () => {
	it('Should return true when the copy is the same as the original', () => {
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
})
