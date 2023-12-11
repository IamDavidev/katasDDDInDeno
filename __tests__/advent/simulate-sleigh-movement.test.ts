import { describe, it } from '@testing/bdd.ts'
import { simulateSleighMovement } from '../../katas/advent/simulate-sleigh-movement.ts'
import { assertEquals, assertNotEquals } from '@testing/asserts.ts'

function runSleighMovementTest(
	road: string,
	time: number,
	expectedRoad: string[]
): void {
	/**
	 * @When
	 */
	const resultRoad = simulateSleighMovement(road, time)

	/**
	 * @Then
	 */

	assertNotEquals(resultRoad, [])
	assertEquals(resultRoad, expectedRoad)
}

describe('Electronic Sleigh Movement', () => {
	it('should return the same road when the time is 1', () => {
		/**
		 * @Given
		 */
		const rawRoad = 'S...'
		const time = 1

		/**
		 * @When
		 */
		const resultRoad = simulateSleighMovement(rawRoad, time)

		/**
		 * @Then
		 */
		assertEquals(resultRoad, [rawRoad])
	})

	it('should move the sled three position without barriers', () => {
		/**
		 * @Given
		 */
		const road = 'S..'
		const time = 3
		const expectedRoad = ['S..', '.S.', '..S']

		/**
		 * @Run
		 */
		runSleighMovementTest(road, time, expectedRoad)
	})

	it('should open all closed barriers after 5 units of time', () => {
		/**
		 * @Given
		 */
		const road = 'S....|||'
		const time = 6
		const expectedRoad = [
			'S....|||',
			'.S...|||',
			'..S..|||',
			'...S.|||',
			'....S|||',
			'.....S**',
		]

		/**
		 * @Run
		 */
		runSleighMovementTest(road, time, expectedRoad)
	})

	it('case 1', () => {
		/**
		 * @Given
		 */
		const road = 'S..|...|..'
		const time = 10

		const expectedRoad = [
			'S..|...|..',
			'.S.|...|..',
			'..S|...|..',
			'..S|...|..',
			'..S|...|..',
			'...S...*..',
			'...*S..*..',
			'...*.S.*..',
			'...*..S*..',
			'...*...S..',
		]

		/**
		 * @Run
		 */
		runSleighMovementTest(road, time, expectedRoad)
	})

	it('case 2', () => {
		/**
		 * @Given
		 */
		const road = 'S.|.|.|......|.||.........'
		const time = 8

		const expectedRoad = [
			'S.|.|.|......|.||.........',
			'.S|.|.|......|.||.........',
			'.S|.|.|......|.||.........',
			'.S|.|.|......|.||.........',
			'.S|.|.|......|.||.........',
			'..S.*.*......*.**.........',
			'..*S*.*......*.**.........',
			'..*.S.*......*.**.........',
		]

		/**
		 * @Run
		 */
        runSleighMovementTest(road, time, expectedRoad)
	})
})
