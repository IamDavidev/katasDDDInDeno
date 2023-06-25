import { describe, it } from '@testing/bdd.ts'
import { assertEquals } from '@testing/asserts.ts'
import { persistentBugger } from '../katas/persistentBugger.ts'

describe('Persistent Bugger', () => {
	it('39 => 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit', () => {
		const expectedTimes = 3
		const currentTimes = persistentBugger(39)

		assertEquals(currentTimes, expectedTimes)
	})

	it('999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)', () => {
		const expectedTimes = 4
		const currentTimes = persistentBugger(999)

		assertEquals(currentTimes, expectedTimes)
	})

	it('4 --> 0 (because 4 is already a one-digit number)', () => {
		const expectedTimes = 4
		const currentTimes = persistentBugger(999)

		assertEquals(currentTimes, expectedTimes)
	})
})
