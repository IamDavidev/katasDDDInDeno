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

	const isPalindrome = (str: string): boolean =>
		str === str.split('').reverse().join('')

	if (isPalindrome(word)) return []

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

	for (let outerIndex = 0; outerIndex < word.length; outerIndex++) {
		for (let innerIndex = 0; innerIndex < word.length; innerIndex++) {
			const newWord = swap(word, outerIndex, innerIndex)
			if (isPalindrome(newWord)) {
				return [outerIndex, innerIndex]
			}
		}
	}

	return null
}

const input = 'rotaratov'

const result = findIndexsForPalindrome(input)

console.log(result)
