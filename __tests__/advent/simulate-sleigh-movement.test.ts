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

Deno.test('Electronic Sleigh Movement', async t => {
	const it = t.step

	await it('should return the same road when the time is 1', () => {
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

	await it('should move the sled three position without barriers', () => {
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

	await it('should open all closed barriers after 5 units of time', () => {
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

	await it('case 1', () => {
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

	await it('case 2', () => {
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
