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
export function photocopyDecayVerifier(original: string, copy: string): boolean {
	const isCopy = copy === original

	return isCopy
}
