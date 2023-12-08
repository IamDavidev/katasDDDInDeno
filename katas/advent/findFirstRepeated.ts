type Gifts = number[]

/**
 *
 * @param gifts  - array of gifts is
 * @returns
 */
export function findFirstRepeated(gifts: Gifts): number {
	const giftsMap = new Map<number, boolean>()

	for (const gift of gifts) {
		if (giftsMap.has(gift)) return gift

		giftsMap.set(gift, true)
	}

	return -1
}
