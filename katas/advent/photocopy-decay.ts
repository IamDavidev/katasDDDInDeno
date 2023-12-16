/**
 *
 * Function that checks if the text has been copied correctly.
 *
 * Degradation rules:
 * A-Z -> a-z -> # -> + -> : -> . -> " "
 *
 * @param original  The original text
 * @param copy  The text has been copied
 * @returns
 */
export function photocopyDecayVerifier(
	original: string,
	copy: string
): boolean {
	if (original.length !== copy.length) return false
	const isCopy = original === copy || original.toLowerCase() === copy

	if (isCopy) return true

	const charsMayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const charsMinus = 'abcdefghijklmnopqrstuvwxyz'
	const charsSpecial = '#+:. '

	const verifierIsCopy = (original: string, copy: string): boolean => {
		let validCharsToDecay = original

		if (charsMayus.includes(original)) {
			validCharsToDecay += original.toLowerCase() + charsSpecial
		}
		if (charsMinus.includes(original)) {
			validCharsToDecay += charsSpecial
		}

		if (charsSpecial.includes(original)) {
			const maxIndex = charsSpecial.indexOf(original)
			validCharsToDecay = charsSpecial.slice(maxIndex)
		}
		return validCharsToDecay.includes(copy)
	}

	for (let iterator = 0; iterator < original.length; iterator++) {
		const originalChar = original[iterator]
		const copyChar = copy[iterator]

		const isCopyChar = verifierIsCopy(originalChar, copyChar)

		if (!isCopyChar) return false
	}

	return true
}
