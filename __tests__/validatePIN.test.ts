import { describe, it } from '@testing/bdd.ts'
import { assertEquals } from '@testing/asserts.ts'

import { validatePIN } from '../katas/validatePIN.ts'
type IsValidate = boolean

interface PinValidation {
	[pin: string]: IsValidate
}

// const pinsWithValidate: PinValidation = {
// 	'1': false,
// 	'12': false,
// 	'123': false,
// 	'12345': false,
// 	'1234567': false,
// 	'-1234': false,
// 	'1.2345': false,
// 	'00000000': false,
// 	'a.234': false,
// 	'1234': true,
// 	'0000': true,
// 	'1111': true,
// 	'123456': true,
// 	'098765': true,
// 	'000000': true,
// }

const wrongPins: PinValidation = {
	'1': false,
	'12': false,
	'123': false,
	'12345': false,
	'1234567': false,
	'-1234': false,
	'1.2345': false,
	'00000000': false,
	'a.234': false,
}

const correctPins: PinValidation = {
	'1234': true,
	'0000': true,
	'1111': true,
	'123456': true,
	'098765': true,
	'000000': true,
}

describe('VALIDATE PIN', () => {
	Object.entries(wrongPins).forEach(([pin, isValid]) => {
		it(`should return ${isValid} when the pin is ${pin}`, () => {
			assertEquals(validatePIN(pin), isValid)
		})
	})

	Object.entries(correctPins).forEach(([pin, isValid]) => {
		it(`should return ${isValid} when the pin is ${pin}`, () => {
			assertEquals(validatePIN(pin), isValid)
		})
	})
})
