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

export function trackAdjacentSymbols(store: Grid): Grid {
  const countAdjacentTracks = (
    grid: Grid,
    row: number,
    col: number
  ): number => {
    return [
      grid[row - 1]?.[col - 1],
      grid[row - 1]?.[col],
      grid[row - 1]?.[col + 1],
      grid[row][col - 1],
      grid[row][col + 1],
      grid[row + 1]?.[col - 1],
      grid[row + 1]?.[col],
      grid[row + 1]?.[col + 1],
    ].filter(cell => cell === '*').length
  }

  for (let colIndex = 0; colIndex < store.length; colIndex++) {
    for (let rowIndex = 0; rowIndex < store[colIndex].length; rowIndex++) {
      const cell = store[colIndex][rowIndex]
      if (cell === '*') continue

      const adjacentTracks = countAdjacentTracks(store, colIndex, rowIndex)

      if (adjacentTracks === 0) {
        store[colIndex][rowIndex] = ' '
        continue
      }

      store[colIndex][rowIndex] = String(adjacentTracks)
    }
  }

  return store
}
