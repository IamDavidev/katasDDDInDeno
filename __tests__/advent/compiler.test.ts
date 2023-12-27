import { assertEquals } from '@testing/asserts.ts'
import { compile } from '../../katas/advent/compiler.ts'

export function assertCompile(code: string, expectedCounter: number) {
  /**
   * @When
   */
  const counter = compile(code)

  /**
   * @Then
   */
  assertEquals(counter, expectedCounter)
}

Deno.test('Compiler Instruction', async t => {
  const it = t.step

  await it('+ should increment 1 counter', () => {
    /**
     * @Given
     */
    const code = '+'
    const expectedCounter = 1

    /**
     * @Assert
     */
    assertCompile(code, expectedCounter)
  })

  await it('- should decrement 1 counter', () => {
    /**
     * @Given
     */
    const code = '-'
    const expectedCounter = -1

    /**
     * @Assert
     */
    assertCompile(code, expectedCounter)
  })

  await it('* should multiply by 2 ', () => {
    /**
     * @Given
     */

    const codes = new Map<string, number>([
      ['*', 0],
      ['+*', 2],
      ['++*', 4],
      ['+**', 4],
    ])

    /**
     * @Assert
     */

    for (const [code, output] of codes) {
      assertCompile(code, output)
    }
  })

  await it("% should mark point of return and can't modify counter", () => {
    /**
     * @Given
     */
    const code = '+%+'
    const output = 2

    /**
     * @Assert
     */
    assertCompile(code, output)
  })

  await it('< should move of the last instruction with %', () => {
    /**
     * @Given
     */
    const code = '+%+<'
    const output = 3

    /**
     * @Assert
     */
    assertCompile(code, output)
  })

  await it('¿ init a conditional block if counter is greater than 0', () => {
    /**
     * @Given
     */
    const code = '+¿+?'
    const output = 2

    /**
     * @Assert
     */
    assertCompile(code, output)
  })
})
