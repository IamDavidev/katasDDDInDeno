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
	 * Initial chars to simulate
	 */
	const chars = {
		"road": ".",
		"santa": "S",
		"closedBarrier": "|",
		"openBarrier": "*"
	}

	/**
	 * The result is a set of roads
	 */
	const snapshots: string[] = []
	/**
	 * Mantain the raw road
	 */
	let rawSplitRoad = road.split('')

	/**
	 * Open all barriers in the road
	 */
	const openAllBarriers = (): void => {
		rawSplitRoad = road.replaceAll(chars.closedBarrier, chars.openBarrier).split('')
	}

	/**
	 * Function to push a new state of the road
	 * @param index  index of the road to push
	 */
	const pushNewStateRoad = (index: number): void => {
		const rawRoad = [...rawSplitRoad]

		rawRoad[0] = chars.road
		rawRoad[index] = chars.santa

		snapshots.push(rawRoad.join(''))
	}

	/**
	 * Passed time
	 */
	let elapsedTime = 1
	let iteration = 0 
	while (elapsedTime <= time) {
		const step = rawSplitRoad[iteration]

		if (step === '|') {
			pushNewStateRoad(iteration - 1)
		} else {
			pushNewStateRoad(iteration)
			iteration++
		}

		if (elapsedTime === 5) openAllBarriers()

		elapsedTime++
	}
	return snapshots
}