export type Segment = 1 | 0
export type Message = Array<Segment>

/**
 * Function that finds the longest balanced segment of 1s and 0s
 *
 * @param message Array of 1s and 0s that represents a message
 * @returns  [start, end] of the longest balanced segment
 */
export function findBalancedSegment(message: Message): [number, number] | [] {
  let longestSegment = [0, 0] as [number, number]
  let zeros = 0
  let ones = 0
  let max = 0

  const actions = {
    0: () => zeros++,
    1: () => ones++,
  }

  for (let outerIndex = 0; outerIndex < message.length; outerIndex++) {
    zeros = 0
    ones = 0
    for (
      let innerIndex = outerIndex;
      innerIndex < message.length;
      innerIndex++
    ) {
      const innerSegment = message[innerIndex]

      actions[innerSegment]()

      const isNewLongestSegment = zeros === ones && zeros > max

      if (isNewLongestSegment) {
        longestSegment = [outerIndex, innerIndex]
        max = zeros
      }
    }
  }
  if (longestSegment[0] === 0 && longestSegment[1] === 0) return []
  return longestSegment
}

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))
//                         |________|
// posición del segmento:    [2, 5]
// más largo equilibrado
// de 0s y 1s

console.log(findBalancedSegment([1, 1, 0]))
//                      |__|
//                     [1, 2]

console.log(findBalancedSegment([1, 1, 1]))
// no hay segmentos equilibrados: []

console.log(findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1]))
/*

Test: 

Expected:
[
  5,
  10
]

Actual:
[]

*/
