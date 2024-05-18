import { assertEquals } from '@testing/asserts.ts'
import { whoLikesIt } from '../katas/code/whoLikesIt.ts'


Deno.test('Who likes it?', async t => {
	const it = t.step

	await it('Should return no one likes this', () => {
		const expected = 'no one likes this'
		const current = whoLikesIt([])

		assertEquals(current, expected)
	})

	await it('Should return Peter likes this', () => {
		const expected = 'Peter likes this'
		const current = whoLikesIt(['Peter'])
		assertEquals(current, expected)
	})

	await it('Should return Jacob and Alex like this', () => {
		const expected = 'Jacob and Alex like this'
		const current = whoLikesIt(['Jacob', 'Alex'])
		assertEquals(current, expected)
	})

	await it('Should return Max, John and Mark like this', () => {
		const expected = 'Max, John and Mark like this'
		const current = whoLikesIt(['Max', 'John', 'Mark'])
		assertEquals(current, expected)
	})

	await it('Should return Alex, Jacob and 2 others like this', () => {
		const expected = 'Alex, Jacob and 2 others like this'
		const current = whoLikesIt(['Alex', 'Jacob', 'Mark', 'Max'])
		assertEquals(current, expected)
	})

	await it('Should return ASDF and JSDF like this', () => {
		const expected = 'ASDF and JSDF like this'
		const current = whoLikesIt(['ASDF', 'JSDF'])
		assertEquals(current, expected)
	})

	await it('Should return ASDF, JSDF and 2 others like this', () => {
		const expected = 'ASDF, JSDF and 2 others like this'
		const current = whoLikesIt(['ASDF', 'JSDF', 'Mark', 'Max'])
		assertEquals(current, expected)
	})
})
