import { assertEquals } from '@testing/asserts.ts'
import {
	calculateTime,
	type Deliveries,
} from '../../katas/advent/calculate-time.ts'

export function checkRestTime(deliveries: Deliveries, expectedTime: string) {
	/**
	 * @When
	 */
	const currentTime = calculateTime(deliveries)

	/**
	 * @Then
	 */
	assertEquals(currentTime, expectedTime)
}

Deno.test('calculateTime', async t => {
	const it = t.step

	await it('should return -07:00:00 when the deliveries are empty', () => {
		/**
		 * @Given
		 */
		const deliveries: Deliveries = []
		const expectedTime = '-07:00:00'

		/**
		 * @Run
		 */
		checkRestTime(deliveries, expectedTime)
	})

	await it('should return -06:00:00 when the all deliveries sum 1 hour', () => {
		/**
		 * @Given
		 */
		const deliveries: Deliveries[] = [
			['00:15:00', '00:15:00', '00:15:00', '00:15:00'],
			['01:00:00'],
			['00:00:00', '01:00:00'],
			['00:00:00', '00:30:00', '00:30:00'],
		]
		const expectedTime = '-06:00:00'

		/**
		 * @Run
		 */

		for (const delivery of deliveries) {
			checkRestTime(delivery, expectedTime)
		}
	})
})
