type Gifts = number[]

/**
 *
 * @param gifts  - array of gifts is
 * @returns
 */
export function findFirstRepeated(gifts: Gifts): number {
	/**
	 * Map of gifts to boolean values
	 */
	const giftsMap = new Map<number, boolean>()

	/**
	 * Iterate through the gifts array
	 */
	for (const gift of gifts) {
		/**
		 * If the gift is already in the map, return it
		 * as the first repeated gift
		 */
		if (giftsMap.has(gift)) return gift

		/**
		 * Otherwise, add the gift to the map
		 */
		giftsMap.set(gift, true)
	}

	/**
	 * If no repeated gifts are found, return -1
	 */
	return -1
}
