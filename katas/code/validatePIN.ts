export function validatePINWitRegex(pin: string): boolean {
	const regex = /^(\d{4}|\d{6})$/
	return regex.test(pin)
}

export function validatePIN(pin: string): boolean {
	if (pin.length !== 4 && pin.length !== 6) return false
	let containsLetter = false
	let times = 0
	const splitPin = pin.split('')

	splitPin.map(digit => {
		try {
			const isValid = Number(digit)
			if (Number.isNaN(isValid)) throw new Error('is nan')
			times += 1
		} catch (_e: unknown) {
			containsLetter = true
			return
		}
	})

	if (containsLetter) return false
	return times === 4 || times === 6 ? true : false
}

validatePIN('-1234 \n')
