export const josephus = <T>(items: T[], k: number): T[] => {
	const result: T[] = []
	let index = 0

	while (items.length > 0) {
		index = (index + k - 1) % items.length
		result.push(items[index])
		items.splice(index, 1)
	}

	return result
}

const items = ['1', '2', '3', '4', '5', '6', '7']
const permutation = 3

console.log(josephus(items, permutation))
