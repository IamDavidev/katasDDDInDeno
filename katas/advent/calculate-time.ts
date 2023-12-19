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

	const formatToStr = (
		hours: number,
		minutes: number,
		seconds: number,
		isNegative: boolean
	) => {
		const sign = isNegative ? '-' : ''
		const fmtMinutes = String(minutes).padStart(2, '0')
		const fmtSeconds = String(seconds).padStart(2, '0')
		const fmtHours = String(hours).padStart(2, '0')
		return sign + fmtHours + ':' + fmtMinutes + ':' + fmtSeconds
	}

	const restTime = (time: string) => {
		let restHours = 0
		let restMinutes = 0
		let restSeconds = 0

		const [hours, minutes, seconds] = maxTime.split(':').map(Number)
		const [deliveryHours, deliveryMinutes, deliverySeconds] = time
			.split(':')
			.map(Number)

		if (deliveryHours >= hours) {
			restHours = deliveryHours - hours
			restMinutes = deliveryMinutes
			restSeconds = deliverySeconds
			return formatToStr(restHours, restMinutes, restSeconds, false)
		}

		if (deliverySeconds > seconds) {
			restMinutes = restMinutes - 1
			restSeconds = timeLimit - deliverySeconds
		} else {
			restSeconds = seconds - deliverySeconds
		}

		if (deliveryMinutes > minutes) {
			restHours = restHours - 1
			restMinutes += timeLimit - deliveryMinutes
		} else {
			restMinutes = minutes - deliveryMinutes
		}

		restHours += hours - deliveryHours

		return formatToStr(restHours, restMinutes, restSeconds, true)
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

	totalMinutes += ~~(totalSeconds / timeLimit)
	totalSeconds = totalSeconds % timeLimit

	totalHours += ~~(totalMinutes / timeLimit)
	totalMinutes = totalMinutes % timeLimit

	const restTimeStr = restTime(
		formatToStr(totalHours, totalMinutes, totalSeconds, false)
	)
	console.log(restTimeStr)
	return restTimeStr
}
