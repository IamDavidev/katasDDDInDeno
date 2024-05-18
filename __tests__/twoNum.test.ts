import { assertEquals } from '@testing/asserts.ts'
import { twoSum } from '../katas/code/twoNum.ts'

const nums = [2, 7, 11, 15]
const target = 9

Deno.test('Two Number ', async t => {
	const it = t.step

	await it('Two Length  ', () => {
		const Length = twoSum(nums, target).length
		assertEquals(Length, 2)
	})

	await it('Should the two numbers be different', () => {
		const sumValues: number[] = twoSum(nums, target)
		const isSameValue: boolean = sumValues[0] === sumValues[1]

		assertEquals(isSameValue, false)
	})

	await it('Should return [0,1]', () => {
		const sum = twoSum(nums, target)
		assertEquals(sum, [0, 1])
	})

	await it('Should return [1,2]', () => {
		const nums = [3, 2, 4],
			target = 6
		const sum = twoSum(nums, target)
		assertEquals(sum, [1, 2])
	})

	await it('shoul return [0,1]', () => {
		const nums = [3, 3],
			target = 6
		const sum = twoSum(nums, target)
		assertEquals(sum, [0, 1])
	})
})
