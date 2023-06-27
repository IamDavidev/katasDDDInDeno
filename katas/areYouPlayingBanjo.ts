export function areYouPlayingBanjo(name: string): string {
	const startLetter = 'r'

	return name[0].toLowerCase() === startLetter
		? name + ' plays banjo'
		: name + ' does not play banjo'
}
