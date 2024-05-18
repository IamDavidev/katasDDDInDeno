export function perimeter(n: number): number {
	const arr = [0, 1]

	for (let i = 0; i < n; i++) {
		arr.push(
			arr[arr.length - 1] + arr[arr.length - 2]
		)
	}

	return 4 * arr.reduce((curr, acc) => curr + acc)
}

const n = 7
perimeter(n)
