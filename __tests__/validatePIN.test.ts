import { assertEquals } from '@testing/asserts.ts'

import { validatePIN } from '../katas/validatePIN.ts'
type IsValidate = boolean

type PinValidation = Map<string, IsValidate>

Deno.test('Validate PIN', async t => {
	const it = t.step

	await t.step('should return true when the pin is correct', () => {
		/**
		 * @Given
		 */
		const correctPins: PinValidation = new Map([
			['1234', true],
			['0000', true],
			['1111', true],
			['123456', true],
			['098765', true],
			['000000', true],
		])

		correctPins.forEach((isValid, pin) => {
			/**
			 * @When
			 */
			const isValidPin = validatePIN(pin)

			/**
			 * @Then
			 */
			assertEquals(isValidPin, isValid)
		})
	})

	await it('should return false when the pin is wrong', () => {
		/**
		 * @Given
		 */
		const wrongPins: PinValidation = new Map([
			['1', false],
			['12', false],
			['123', false],
			['12345', false],
			['1234567', false],
			['-1234', false],
			['1.,345', false],
			['00000000', false],
			['a.,34', false],
		])

		wrongPins.forEach((isValid, pin) => {
			/**
			 * @When
			 */
			const isValidPin = validatePIN(pin)

			/**
			 * @Then
			 */
			assertEquals(isValidPin, isValid)
		})
	})
})
