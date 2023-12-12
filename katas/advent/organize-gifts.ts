/**
 * 
 * Function that takes a string of gifts and organizes them into containers
 * 
 * e.g `76a11b` --> [a]{a}{a}(aaaaaa){b}(b)
 * 
 * The containers are:
 * 	- pallets: 50 gifts - [a]
 * 	- boxes: 10 gifts - {a}{a}
 * 	- bags: 1 gift - (aaaaaa)
 *
 * @param str - The string of gifts
 * @returns - The organized gifts
 */
export function organizeGifts(str: string): string {
	/**
	 * Dictionary of formatters for each type of container
	 */
	const charsFormatters = {
		box: (letter: string): string => '{' + letter + '}',
		pallet: (letter: string): string => '[' + letter + ']',
		bag: (letter: string, count: number): string =>
			'(' + letter.repeat(count) + ')',
	}

	/**
	 * Store to return organized gifts
	 */
	let store = ''

	/**
	 * Matches all the numbers followed by a letter
	 * 
	 * Regex explanation:
	 *  - (\d+) => matches all the numbers
	 * 	- (\w) => matches the letter
	 * 	- g => global flag
	 */
	const matches = str.match(/(\d+)(\w)/g)

	/**
	 * Iterate over the matches
	 */
	matches?.forEach(match => {
		/**
		 * Destructure the match
		 * [0] => the whole match (e.g. 100e)
		 * [1] => the count (e.g. 100)
		 * [2] => the letter (e.g. e)
		 * e
		 */
		const [_, count, letter] = match.match(/(\d+)([a-z])/) ?? []
		/**
		 * Convert the count to integer
		 */
		const countInt = parseInt(count, 10)

		/**
		 * Calculate the number of pallets, boxes and bags
		 * By using the ~~ operator we convert the result to integer (e.g. ~~1.5 = 1)
		 */
		const pallets = ~~(countInt / 50)
		const remainderPallet = countInt % 50
		const boxes = ~~(remainderPallet / 10)
		const remainderBoxes = remainderPallet % 10
		const bags = ~~(remainderBoxes / 1)

		/**
		 * Concatenate the store with the formatted containers
		 * Check if the count is greater than 0 to avoid adding empty containers
		 */
		if (pallets > 0) store += charsFormatters.pallet(letter).repeat(pallets)
		if (boxes > 0) store += charsFormatters.box(letter).repeat(boxes)
		if (bags > 0) store += charsFormatters.bag(letter, bags)
	})

	/**
	 * Return the store
	 */
	return store
}

