import { assertEquals } from '@testing/asserts.ts'
import {
  type Movements,
  type Store,
  driveManagment,
} from '../../katas/advent/drive-managment.ts'

function checkFinalStore(
  store: Store,
  movements: Movements,
  expectedStore: Store
): void {
  /**
   * @When
   */
  const resultStore = driveManagment(store, movements)

  /**
   * @Then
   */
  assertEquals(resultStore, expectedStore)
}

Deno.test("Should return robot's position on same place", () => {
  /**
   * @Given
   */
  const store: Store = ['!..']
  const movements: Movements = []
  const expectedStore: Store = ['!..']

  /**
   * @Run
   */
  checkFinalStore(store, movements, expectedStore)
})

Deno.test(
  "Should return robot position in the same place after movements becuase it's a end",
  () => {
    /**
     * @Given
     */
    const cases = [
      /* Store - Movements - Store */
      [['.!'], ['R'], ['.!']],
      [['!.'], ['L'], ['!.']],
      [['...', '.!.'], ['D'], ['...', '.!.']],
      [['.!.', '...'], ['U'], ['.!.', '...']],
    ] as Array<[Store, Movements, Store]>

    /**
     * @Run
     */
    for (const [store, movements, expectedStore] of cases) {
      checkFinalStore(store, movements, expectedStore)
    }
  }
)

Deno.test(
  'Should return robot position in the same place after movements because there is a obstacle',
  () => {
    const cases = [
      /* Store - Movements - Store */
      [['.!*'], ['R'], ['.!*']],
      [['*!.'], ['L'], ['*!.']],
      [['*', '!', '*'], ['D'], ['*', '!', '*']],
      [['*', '!', '*'], ['U'], ['*', '!', '*']],
    ] as Array<[Store, Movements, Store]>

    /**
     * @Run
     */
    for (const [store, movements, expectedStore] of cases) {
      checkFinalStore(store, movements, expectedStore)
    }
  }
)

Deno.test('Should return robot position one step to the right', () => {
  /**
   * @Given
   */
  const store: Store = ['.!.']
  const movements: Movements = ['R']
  const expectedStore: Store = ['..!']

  /**
   * @Run
   */
  checkFinalStore(store, movements, expectedStore)
})

Deno.test('Should return robot position one step to the left', () => {
  /**
   * @Given
   */
  const store: Store = ['.!']
  const movements: Movements = ['L']
  const expectedStore: Store = ['!.']

  /**
   * @Run
   */
  checkFinalStore(store, movements, expectedStore)
})

Deno.test('Should return robot position one step down', () => {
  /**
   * @Given
   */
  const store: Store = ['!', '.', '.']
  const movements: Movements = ['D']
  const expectedStore: Store = ['.', '!', '.']

  /**
   * @Run
   */
  checkFinalStore(store, movements, expectedStore)
})

Deno.test('Should return robot position one step up', () => {
  /**
   * @Given
   */
  const store: Store = ['.', '!', '.']
  const movements: Movements = ['U']
  const expectedStore: Store = ['!', '.', '.']

  /**
   * @Run
   */
  checkFinalStore(store, movements, expectedStore)
})

Deno.test("Should return robot's position on the correct place", () => {
  const cases = [
    [
      ['..!....', '......*'],
      ['R', 'D', 'L'],
      ['.......', '..!...*'],
    ],
    [
      ['*..!..*', '*.....*'],
      ['R', 'R', 'D', 'D'],
      ['*.....*', '*....!*'],
    ],
    [
      ['***', '.!.', '***'],
      ['D', 'U', 'R', 'R', 'R'],
      ['***', '..!', '***'],
    ],
    [
      ['.**.*.*.', '.***....', '..!.....'],
      ['D', 'U', 'R', 'R', 'R'],
      ['.**.*.*.', '.***....', '.....!..'],
    ],
  ] as Array<[Store, Movements, Store]>
})
