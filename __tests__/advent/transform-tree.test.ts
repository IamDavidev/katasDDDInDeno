import { assertEquals } from '@testing/asserts.ts'
import {
  type TreeArray,
  type TreeNode,
  transformTree,
} from '../../katas/advent/transform-tree.ts'

function assertTransformTree(input: TreeArray, expected: TreeNode) {
  /**
   * @When
   */
  const tree = transformTree(input)

  /**
   * @Then
   */
  assertEquals(tree, expected)
}

Deno.test('Should return a tree with a single node', () => {
  /**
   * @Given
   */
  const input = [1]
  const expected = {
    value: 1,
    left: null,
    right: null,
  }

  /**
   * @Run
   */
  assertTransformTree(input, expected)
})

Deno.test('Should return a tree with a single node and a left node', () => {
  /**
   * @Given
   */
  const input = [1, 2]

  const expected = {
    value: 1,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: null,
  }

  /**
   * @Run
   */
  assertTransformTree(input, expected)
})

Deno.test('Should return a tree with a single node and a right node', () => {
  /**
   * @Given
   */
  const input = [1, null, 2]

  const expected = {
    value: 1,
    left: null,
    right: {
      value: 2,
      left: null,
      right: null,
    },
  }

  /**
   * @Run
   */
  assertTransformTree(input, expected)
})

Deno.test(
  'Should return a tree with a single node and a left and right node',
  () => {
    /**
     * @Given
     */
    const input = [1, 2, 3]

    const expected = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    }

    /**
     * @Run
     */
    assertTransformTree(input, expected)
  }
)

Deno.test('Should return a tree with a two levels', () => {
  /**
   * @Given
   */
  const input = [1, 2, 3, 4, 5, 6, 7]
  const expected = {
    value: 1,
    left: {
      value: 2,
      left: {
        value: 4,
        left: null,
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: null,
      },
    },
    right: {
      value: 3,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
  }
  /**
   * @Run
   */
  assertTransformTree(input, expected)
})
