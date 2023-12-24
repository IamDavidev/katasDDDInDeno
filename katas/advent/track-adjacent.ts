/**
 * Type to indicate a symbol in the grid.
 * * indicates a track
 * " " indicates a blank space that should be changed to a track
 * number indicates a track that is adjacent to that many tracks
 */
export type Symbol = '*' | ' ' | string

/**
 * Type to indicate a row in the grid.
 */
export type Cell = Array<Symbol>

/**
 * Type to indicate a grid of cells.
 */
export type Grid = Array<Cell>

export function trackAdjacentSymbols(grid: Grid): Grid {
  console.table(grid)

  const countAdjacentTracks = (
    grid: Grid,
    row: number,
    col: number
  ): number => {
    let count = 0

    // check row above
    if (grid[row - 1]) {
      if (grid[row - 1][col - 1] === '*') {
        count++
      }
      if (grid[row - 1][col] === '*') {
        count++
      }
      if (grid[row - 1][col + 1] === '*') {
        count++
      }
    }

    // check row below
    if (grid[row + 1]) {
      if (grid[row + 1][col - 1] === '*') {
        count++
      }
      if (grid[row + 1][col] === '*') {
        count++
      }
      if (grid[row + 1][col + 1] === '*') {
        count++
      }
    }

    // check lateral
    if (grid[row][col - 1] === '*') {
      count++
    }
    if (grid[row][col + 1] === '*') {
      count++
    }
    return count
  }

  for (let colIndex = 0; colIndex < grid.length; colIndex++) {
    for (let rowIndex = 0; rowIndex < grid[colIndex].length; rowIndex++) {
      const cell = grid[colIndex][rowIndex]
      if (cell === '*') {
        continue
      }

      const adjacentTracks = countAdjacentTracks(grid, colIndex, rowIndex)
      if (adjacentTracks === 0) {
        grid[colIndex][rowIndex] = ' '
        continue
      }

      grid[colIndex][rowIndex] = String(adjacentTracks)
    }
  }

  return grid
}
