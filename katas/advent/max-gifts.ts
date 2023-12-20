/**
 * Type of the input array of houses
 */
export type Houses = Array<number>
/**
 * Function to determine the maximum value of gifts that can be stolen
 * from the houses without alerting the children
 * 
 * @param houses Array of houses with the value of the gifts
 * @returns  The maximum value of gifts that can be stolen
 */
export function maxGifts(houses: Houses): number {

	/**
	 * If there are no houses, return 0
	 */
	if(houses.length === 0) return 0
	/**
	 * If there is only one house, return the value of that house
	 */
	if(houses.length === 1) return houses[0]

	/**
	 * Initialize an array with the same length as the input array
	 */
	const posibleSolutions = new Array(houses.length).fill(0)

	/**
	 * The first two values of the array are the first and second house
	 */
	posibleSolutions[0] = houses[0]
	/**
	 * The second value of the array is the maximum between the first and second house
	 */
	posibleSolutions[1] = Math.max(houses[0], houses[1])

	/**
	 * Iterate over the rest of the houses
	 */
	for(let i = 2; i < houses.length; i++) {
		/**
		 * The maximum value of gifts that can be stolen from the first i houses is the maximum between:
		 * - The maximum value of gifts that can be stolen from the first i - 1 houses
		 * - The maximum value of gifts that can be stolen from the first i - 2 houses plus the value of the i house
		 * 
		 */
		posibleSolutions[i] = Math.max(
			posibleSolutions[i - 1], 
			houses[i] + posibleSolutions[i - 2])
	}

	/**
	 * Return the maximum value of gifts that can be stolen from the first houses
	 */
	return posibleSolutions[houses.length - 1]
}
