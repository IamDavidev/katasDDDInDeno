export type Gifts = Array<string>
export type Materials = string

/**
 *
 * @param gift String array of gifts
 * @param materials  String of materials
 * @returns
 */
export function manufacture(gifts: Gifts, materials: Materials): Gifts {
	/**
	 * Gifts that can be manufactured
	 */
	const giftsThatCanBeManufactured: Gifts = []

	/**
	 * Iterate over each gift
	 */
	for (const gift of gifts) {
		/**
		 * Determine if the gift can be manufactured
		 */
		let isFactory = true

		/**
		 * Iterate over each letter of the gift
		 * to determine if materials contains all parts of the gift
		 */
		for (const letter of gift) {
			/**
			 * If materials does not contain the letter
			 * then the gift cannot be manufactured
			 */
			if (!materials.includes(letter)) {
				isFactory = false
				break
			}
		}

		/**
		 * If the gift can be manufactured
		 * then add it to the list of gifts that can be manufactured
		 */
		if (isFactory) {
			giftsThatCanBeManufactured.push(gift)
		}
	}

	/**
	 * Return the list of gifts that can be manufactured
	 */
	return giftsThatCanBeManufactured
}
