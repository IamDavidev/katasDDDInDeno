import { twoSum } from '../katas/twoNum.ts'

import { describe, it } from '@testing/bdd.ts'
import { assertEquals } from '@testing/asserts.ts'

const nums = [2, 7, 11, 15]
const target = 9

describe('Two Number ', () => {})
it('Two Length  ', () => {
	const Length = twoSum(nums, target).length
	assertEquals(Length, 2)
})

it('Should the two numbers be different', () => {
	const sumValues: number[] = twoSum(nums, target)
	const isSameValue: boolean = sumValues[0] === sumValues[1]

	assertEquals(isSameValue, false)
})

it('Should return [0,1]', () => {
	const sum = twoSum(nums, target)
	assertEquals(sum, [0, 1])
})

it('Should return [1,2]', () => {
	const nums = [3, 2, 4],
		target = 6
	const sum = twoSum(nums, target)
	assertEquals(sum, [1, 2])
})

it('shoul return [0,1]', () => {
	const nums = [3, 3],
		target = 6
	const sum = twoSum(nums, target)
	assertEquals(sum, [0, 1])
})
