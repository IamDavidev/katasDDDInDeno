/**
 *
 * @param size
 * @param symbol
 * @returns
 */
export function drawGift(size: number, symbol: string): string {
	let gift = ''

	let bgSize = size - 2

	bgSize += +!(bgSize + 1)

	let topCenter = ''
	let bottomCenter = ''

	for (const a of [...Array.from({ length: bgSize }).keys()]) {
		const c = '#' + symbol.repeat(bgSize) + '#' + symbol.repeat(a) + '#'
		bottomCenter = c + '\n' + bottomCenter
		topCenter += ' '.repeat(bgSize - a) + c + '\n'
	}

	gift =
		' '.repeat(size - 1) +
		'#'.repeat(size) +
		'\n' +
		(
			topCenter +
			'#'.repeat(size) +
			symbol.repeat(bgSize) +
			'#' +
			'\n' +
			bottomCenter +
			'#'.repeat(size) +
			'\n'
		).repeat(+!!(size - 1))

	return gift
}
