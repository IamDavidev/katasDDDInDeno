/**
 *
 * Function that determines if a word can be made
 * into a palindrome by changing only two positions.
 *
 * @param word  is a string of letters
 * @returns  the indexs of the letters that can be changed to make the word a palindrome or
 * null if it is not possible
 */
export function findIndexsForPalindrome(
	word: string
): [number, number] | [] | null {
	/**
	 * Determines if a string is a palindrome
	 */
	const isPalindrome = (str: string): boolean =>
		str === str.split('').reverse().join('')

	/**
	 * If the word is a palindrome,
	 * we do not need to change any letter
	 */
	if (isPalindrome(word)) return []

	/**
	 * Changes the position of two letters in a string
	 *
	 */
	const swap = (
		originaStr: string,
		outerIndex: number,
		innerIndex: number
	): string => {
		const str = originaStr.split('')

		const temporal = str[outerIndex]
		str[outerIndex] = str[innerIndex]
		str[innerIndex] = temporal

		return str.join('')
	}

	/**
	 * We iterate over the word and swap the position of two letters
	 */
	for (let outerIndex = 0; outerIndex < word.length; outerIndex++) {
		for (let innerIndex = 0; innerIndex < word.length; innerIndex++) {
			/**
			 * We swap the position of two letters
			 */
			const newWord = swap(word, outerIndex, innerIndex)
			/**
			 * If the new word is a palindrome,
			 * we return the indexs of the letters that we changed
			 */
			if (isPalindrome(newWord)) {
				return [outerIndex, innerIndex]
			}
		}
	}

	/**
	 * If it is not possible to make a palindrome,
	 */
	return null
}
