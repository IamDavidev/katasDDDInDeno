import { assertEquals } from '@testing/asserts.ts'
import { isValid } from '../katas/code/validParentheses.ts'


const EXPECTED_FALSE = false
const EXPECTED_TRUE = true

Deno.test('Valid Parentheses', async t => {
	const it = t.step
	await it('should return by default false ', () => {
		const act = isValid('')
		assertEquals(act, EXPECTED_FALSE)
	})

	await it('should be return false if the string is not valid', () => {
		const act = isValid('()')
		assertEquals(act, EXPECTED_TRUE)
	})

	await it('Should be return false if bracket } is not closed', () => {
		const act = isValid('()}')
		assertEquals(act, EXPECTED_FALSE)
	})

	await it('should be return false if brakets are not closed corretly ', () => {
		const act = isValid('([])')
		assertEquals(act, EXPECTED_TRUE)
	})
})
