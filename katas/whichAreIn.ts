export function whichAreIn(a1: string[], a2: string[]): string[] {
	const str = a2.toString().replaceAll(',', '')
	const result = [] as string[]
	a1.forEach(word => str.includes(word) && result.push(word))
	return result.sort((a,b) => a.localeCompare(b))
}

const a1 = ['live', 'strong', 'arp']
const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']

console.log(whichAreIn(a1, a2))
