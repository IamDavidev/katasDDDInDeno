export function solution(str: string, ends: string): boolean {
	const lengthEnding = ends.length
	const endingStr = str.slice(-lengthEnding)

	return endingStr === ends
}
