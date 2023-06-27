/*
		Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

		Examples:
		
		a = "xyaabbbccccdefww"
		b = "xxxxyyyyabklmopq"
		longest(a, b) -> "abcdefklmopqwxy"

		a = "abcdefghijklmnopqrstuvwxyz"
		longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

/* 
		return [...new Set([...s1, ...s2]).values()].sort().join('')
*/
export function longest(s1: string, s2: string): string {
	return Array.from(new Set([...s1, ...s2]).values())
		.sort((a, b) => {
			return a.localeCompare(b)
		})
		.join('')
}

const a = 'xyaabbbccccdefww',
	b = 'xxxxyyyyabklmopq'

longest(a, b)
