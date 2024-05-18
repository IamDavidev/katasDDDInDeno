export function persistentBugger(num: number): number {
	let times = 0
	const numToString = String(num)

	const numLength = numToString.split('').length
	if (numLength === 1) return times

	let newNum: number = num

	while (true) {
		const splitNum = String(newNum).split('')
		newNum = 1

		splitNum.forEach(numItem => {
			newNum = newNum * Number(numItem)
		})

		times += 1

		if (String(newNum).split('').length === 1) break
	}

	return times
}

persistentBugger(999)
