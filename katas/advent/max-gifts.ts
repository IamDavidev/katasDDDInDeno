export type Houses = Array<number>
export function maxGifts(houses: Houses): number {

	if(houses.length === 0) return 0
	if(houses.length === 1) return houses[0]

	const posibleSolutions = new Array(houses.length).fill(0)

	posibleSolutions[0] = houses[0]
	posibleSolutions[1] = Math.max(houses[0], houses[1])

	for(let i = 2; i < houses.length; i++) {
		posibleSolutions[i] = Math.max(
			posibleSolutions[i - 1], 
			houses[i] + posibleSolutions[i - 2])
	}

	return posibleSolutions[houses.length - 1]
}
