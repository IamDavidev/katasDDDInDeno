export type Weigth = number | null
export type Row = Array<Weigth>

export type Weigths = Array<Row>
/**
 * Function that distributes weights in a scale
 *
 * @param weights  Array of weights
 * @returns      Array of weights distributed
 */
export function distributeWeights(weights: Weigths): Weigths {
  const getDistributedWeight = (grid: Weigths, col: number, row: number) => {
    let cells = 0
    let distributedWeight = 0

    const increment = (weight: number) => {
      cells += 1
      distributedWeight += weight
    }

    if (grid[col][row] !== null) increment(grid[col][row] as number)

    if (row + 1 < grid[col].length && grid[col][row + 1] !== null)
      increment(grid[col][row + 1] as number)

    if (row - 1 >= 0 && grid[col][row - 1] !== null)
      increment(grid[col][row - 1] as number)

    if (col + 1 < grid.length && grid[col + 1][row] !== null)
      increment(grid[col + 1][row] as number)

    if (col - 1 >= 0 && grid[col - 1][row] !== null)
      increment(grid[col - 1][row] as number)

    const result = Math.round(distributedWeight / cells)
    return result
  }

  const distributedWeights = Array.from(weights, () => Array.from(weights[0]))

  for (let col = 0; col < weights.length; col++) {
    for (let row = 0; row < weights[col].length; row++) {
      distributedWeights[col][row] = getDistributedWeight(weights, col, row)
    }
  }

  return distributedWeights
}

// distributeWeights([
//   [2, 1, 1],
//   [3, 4, null],
// ])

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4],
]

distributeWeights(input)
