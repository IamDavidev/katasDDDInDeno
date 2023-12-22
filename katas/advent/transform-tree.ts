export interface TreeNode {
  value: number
  left: TreeNode | null
  right: TreeNode | null
}

export type TreeArray = Array<number | null>

/**
 * Function to transform an array of numbers and nulls into a binary tree
 *
 * @param tree Array of numbers and nulls representing a binary tree
 * @returns  The root node of the binary tree
 */
export function transformTree(tree: TreeArray): TreeNode | null {
  if (tree.length === 0) return null

  /**
   * Function to create a node
   *
   * @param value
   * @returns
   */
  const createNode = (index: number): TreeNode | null => {
    /**
     *  if index is greater than or equal to the length of the tree, return null
     */
    if (index >= tree.length) return null
    /**
     * if the value at the index is null, return null
     */
    if (tree[index] === null) return null

    return {
      /**
       * {Value} : value at the index
       */
      value: tree[index] as number,
      /**
       * {Left} : We create a node at the index * 2 + 1
       * e.g  0 * 2 + 1 = 1
       */
      left: createNode(index * 2 + 1),
      /**
       * {Right} : We create a node at the index * 2 + 2
       * e.g  0 * 2 + 2 = 2
       */
      right: createNode(index * 2 + 2),
    }
  }

  const root = createNode(0)

  return root
}
