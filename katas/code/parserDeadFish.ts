/**
 * write a simple outputr that will output and run Deadfish.
 *
 * Deadfish has 4 commands, each 1 character long:
 *
 * @i increments the value (initially 0)
 * @d decrements the value
 * @s squares the value
 * @o outputs the value into the return array
 *
 */

type output = number[] | []

/**
 *
 * @param data  string
 * @returns  number[] | []
 */
export function parser(data: string): output {
	if (data.length === 0) return []

	const output: number[] = []
	let initialValue = 0

	const actions = {
		i: () => (initialValue += 1),
		d: () => (initialValue -= 1),
		s: () => (initialValue = initialValue ** 2),
		o: () => output.push(initialValue),
	}

	data.split('').forEach((action: string) => {
		if (action !== 'i' && action !== 'd' && action !== 's' && action !== 'o')
			return

		actions[action]()

		return
	})

	return output
}
