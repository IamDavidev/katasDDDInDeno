/**
 * Type for movement
 * L - Left
 * R - Right
 * D - Down
 * U - Up
 */
const dicMovements = {
  Right: 'R',
  Left: 'L',
  Down: 'D',
  Up: 'U',
} as const
export type Movement = (typeof dicMovements)[keyof typeof dicMovements]

/**
 * Type of obstacle
 * . - free space
 * * - obstacle
 * ! - robot
 */
// export type Obstacle = "." | "*" | "!"

export type Movements = Array<Movement>
export type Store = Array<string>

export function driveManagment(store: Store, movements: Movements): Store {
  const obstacleChar = '*'
  /**
   * Transform store to array of matrix
   */
  const grid = store.map(row => row.split(''))

  /**
   * Robot position
   */
  const initialRobotPosition = {
    x: 0, // R & L
    y: 0, // U & D
  }

  /**
   * Get robot position
   */
  for (const [y, row] of grid.entries()) {
    for (const [x, col] of row.entries()) {
      if (col === '!') {
        initialRobotPosition.x = x
        initialRobotPosition.y = y
        break
      }
    }
  }


  const finalRobotPosition = {
    x: initialRobotPosition.x, // R & L
    y: initialRobotPosition.y, // U & D
  }

  const canMove = (nextChar: string): boolean => {
    return nextChar !== obstacleChar && nextChar !== undefined
  }

  for (const movement of movements) {
    if (movement === dicMovements.Right) {
      const nextChar = grid[finalRobotPosition.y][finalRobotPosition.x + 1]
      if (!canMove(nextChar)) {
        continue
      }
      finalRobotPosition.x += 1
    }

    if (movement === dicMovements.Left) {
      const nextChar = grid[finalRobotPosition.y][finalRobotPosition.x - 1]
      if (!canMove(nextChar)) {
        continue
      }
      finalRobotPosition.x -= 1
    }

    if (movement === dicMovements.Down) {
      if(finalRobotPosition.y === grid.length - 1) continue

      const nextChar = grid[finalRobotPosition.y + 1][finalRobotPosition.x]
      if (!canMove(nextChar)) {
        continue
      }
      finalRobotPosition.y += 1
    }

    if (movement === dicMovements.Up) {
      if(finalRobotPosition.y === 0) continue

      const nextChar = grid[finalRobotPosition.y - 1][finalRobotPosition.x]
      if (!canMove(nextChar)) {
        continue
      }
      finalRobotPosition.y -= 1
    }
  }

  /**
   * Swap robot position
   */
  grid[initialRobotPosition.y][initialRobotPosition.x] = '.'
  grid[finalRobotPosition.y][finalRobotPosition.x] = '!'


  /**
   * Transform array of matrix to store
   */
  return grid.map(row => row.join(''))
}
