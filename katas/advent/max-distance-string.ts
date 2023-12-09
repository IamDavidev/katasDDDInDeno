/**
 * This function calculates the max distance from the origin
 * movements is a string with the movements ">>><<<" means 3 movements to the right and 3 movements to the left
 * maxDistanceStr(movements) => 0
 *
 * @param movements List of movements in string format
 * @returns number of max distance
 */
export function maxDistanceStr(movements: string): number {
  /**
   * Counts the number of all movements
   */
  let movementsRight = 0, movementsLeft = 0, movementsAbsolute = 0;

  /**
   * This object contains the actions for each movement
   */
  const actionsMovents: { [key: string]: () => void } = {
    ">": () => movementsRight++,
    "<": () => movementsLeft++,
    "*": () => movementsAbsolute++,
  };

  /**
   * Iterate over the movements and execute the action
   * for each movement
   */
  for (let index = 0; index < movements.length; index++) {
    const action = movements[index];
    actionsMovents[action]();
  }

  /**
   * Calculate the max distance
   * Get the absolute value of the difference between the movements to the right and the movements to the left
   * Add the absolute movementsj
   */
  const maxDistance = Math.abs(movementsRight - movementsLeft) +
    movementsAbsolute;

  return maxDistance;
}

/*
Solution more simple and fast


export function maxDistanceStr(movements: string): number {
    let movementsRight = 0, movementsLeft = 0, movementsAbsolute = 0
    for (let index = 0; index < movements.length; index++) {
        const action = movements[index];
        if (action === ">") {
            movementsRight++
        } else if (action === "<") {
            movementsLeft++
        } else {
            movementsAbsolute++
        }
    }
    const maxDistance = Math.abs(movementsRight - movementsLeft) + movementsAbsolute
    return maxDistance
}


Solution with regular expresion




*/

function _maxDistanceStrWithRegExp(movements: string): number {
  const movementsRight = (movements.match(/>/g) || []).length;
  const movementsLeft = (movements.match(/</g) || []).length;
  const movementsAbsolute = (movements.match(/\*/g) || []).length;
  const maxDistance = Math.abs(movementsRight - movementsLeft) +
    movementsAbsolute;
  return maxDistance;
}
