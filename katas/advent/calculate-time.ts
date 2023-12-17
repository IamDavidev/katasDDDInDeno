export type Deliveries = Array<string>

/**
 *
 *
 *
 * @param deliveries  Array of strings with the format 'HH:MM:SS'
 * @returns  The total time to deliver all the presents in the format 'HH:MM:SS'
 */
export function calculateTime(deliveries: Deliveries): string {
	const maxTime = '07:00:00'
	const timeLimit = 60 // 60s -> 1m & 60m -> 1h

	const formatToStr = (hours: number, minutes: number, seconds: number) => {
		const fmtMinutes = minutes < 10 ? `0${minutes}` : minutes
		const fmtSeconds = seconds < 10 ? `0${seconds}` : seconds
		const fmtHours = hours < 10 ? `0${hours}` : hours
		return `${fmtHours}:${fmtMinutes}:${fmtSeconds}`
	}

	const restTime = (time: string) => {
		const [hours, minutes, seconds] = maxTime.split(':').map(Number)
		const [deliveryHours, deliveryMinutes, deliverySeconds] = time
			.split(':')
			.map(Number)

		const restSeconds = seconds - deliverySeconds
		const restMinutes = minutes - deliveryMinutes
		const restHours = hours - deliveryHours

		return formatToStr(restHours, restMinutes, restSeconds)
	}

	let totalSeconds = 0
	let totalMinutes = 0
	let totalHours = 0
	for (const delivery of deliveries) {
		const [hours, minutes, seconds] = delivery.split(':').map(Number)

		totalSeconds += seconds
		totalMinutes += minutes
		totalHours += hours
	}

	if (totalSeconds >= timeLimit) {
		totalMinutes += ~~(totalSeconds / timeLimit)
		totalSeconds = totalSeconds % timeLimit
	}
	if (totalMinutes >= timeLimit) {
		totalHours += ~~(totalMinutes / timeLimit)
		totalMinutes = totalMinutes % timeLimit
	}

	const restTimeStr = restTime(
		formatToStr(totalHours, totalMinutes, totalSeconds)
	)

	return restTimeStr
}
