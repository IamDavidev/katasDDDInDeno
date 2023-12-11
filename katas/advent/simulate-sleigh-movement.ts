/*

Conditions

	. = Carretera = road
	S = Trineo de Santa = Santa's sleigh
	* = Barrera abierta = Open barrier
	| = Barrera cerrada = Closed barrier

	After 5 time units, all closed barriers are opened. 
*/

/**
 * Simulate Santa's sleigh movement
 *
 * @param road  road is a string of the form. eg: S...|....|.....
 * @param time  time units to simulate eg: 9
 */
export function simulateSleighMovement(
	road: string,
	time: number
): Array<string> {
	/**
	 * The result is a set of roads
	 */
	const result: string[] = []
	/**
	 * Mantain the raw road
	 */
	let rawSplitRoad = road.split('')



	/**
	 * Open all barriers in the road
	 */
	const openAllBarriers = (): void => {
		rawSplitRoad = rawSplitRoad.join('').replaceAll('|', '*').split('')
	}

	/**
	 * Function to push a new state of the road
	 * @param index  index of the road to push
	 */
	const pushNewStateRoad = (index: number): void => {
		const santaChar = 'S'
		const roadChar = '.'
		const rawRoad = [...rawSplitRoad]

		rawRoad[0] = roadChar
		rawRoad[index] = santaChar

		result.push(rawRoad.join(''))
	}

	/**
	 * Passed time
	 */
	let passedTime = 0
	let index = 0  
	while (passedTime < time) {
		const step = rawSplitRoad[index]

		if (step === '|') {
			pushNewStateRoad(index - 1)
		} else {
			pushNewStateRoad(index)
			index++
		}

		if (passedTime === 4) openAllBarriers()

		passedTime++
	}
	return [...result]
}