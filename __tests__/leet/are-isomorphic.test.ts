import { assertEquals } from '@testing/asserts.ts'
import { areIsomorphic } from '../../katas/leet/are-isomorphic.ts'

Deno.test('String isomorphism', async t => {
  const it = t.step

  await it('Given two empty strings then they are isomorphic', () => {
    const s = ''
    const t = ''
    const result = areIsomorphic(s, t)
    assertEquals(result, true)
  })

  await it('Given two isomorphic strings "egg" and "add" then they are isomorphic', () => {
    const s = 'egg'
    const t = 'add'
    const result = areIsomorphic(s, t)
    assertEquals(result, true)
  })

  await it('Given two non-isomorphic strings "foo" and "bar" then they are not isomorphic', () => {
    const s = 'foo'
    const t = 'bar'
    const result = areIsomorphic(s, t)
    assertEquals(result, false)
  })

  await it('Given two strings "paper" and "title" of same length and are isomorphic then they are isomorphic', () => {
    const s = 'paper'
    const t = 'title'
    const result = areIsomorphic(s, t)
    assertEquals(result, true)
  })

  await it('Given two strings of different lengths then they are not isomorphic', () => {
    const s = 'ab'
    const t = 'a'
    const result = areIsomorphic(s, t)
    assertEquals(result, false)
  })

  await it('Given two isomorphic strings with repeated characters "abcabc" and "xyzxyz" then they are isomorphic', () => {
    const s = 'abcabc'
    const t = 'xyzxyz'
    const result = areIsomorphic(s, t)
    assertEquals(result, true)
  })

  await it('Given two strings where the same character maps to multiple characters "abba" and "abab" then they are not isomorphic', () => {
    const s = 'abba'
    const t = 'abab'
    const result = areIsomorphic(s, t)
    assertEquals(result, false)
  })

  await it("can't replace the word two times", () => {
    const s = 'badc'
    const t = 'baba'
    const result = areIsomorphic(s, t)
    assertEquals(result, false)
  })
})
