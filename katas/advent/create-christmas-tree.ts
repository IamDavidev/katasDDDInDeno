/**
 * @description
 * Function that takes a string of symbols and a number
 * and returns a string representation of a christmas tree
 *
 * @param ornaments  symbols to use for the ornaments
 * @param height  height of the tree
 * @returns a string representation of a christmas tree
 * 
 * 
 * 
 */
export function createChristmasTree(ornaments: string, height: number): string {
	const charSeparator = ' '
	let tree = ''

	let ornamentIndex = 0

	const renderOrnaments = (ornaments: string[], max: number): string => {
		let ornamentsRendered = ''

		for (let iteration = 0; iteration < max; iteration++) {
			const isFinalIteration = iteration >= max - 1
			ornamentsRendered +=
				ornaments[ornamentIndex] + (isFinalIteration ? '' : charSeparator)

			if (ornamentIndex >= ornaments.length - 1) ornamentIndex = 0
			else ornamentIndex++
		}

		return ornamentsRendered
	}

	const splitOrnaments = ornaments.split('')

	let spaces = height - 1
	let ornamentsToRender = 1
	for (let i = height; i > 0; i--) {
		tree +=
			charSeparator.repeat(spaces) +
			renderOrnaments(splitOrnaments, ornamentsToRender) +
			'\n'
		spaces--
		ornamentsToRender += 1
	}

	tree += charSeparator.repeat(height - 1) + '|' + '\n'

	return tree
}

/*
Example
...1
..2.3
.1.2.3
1.2.3.1
...|...

 */

