export type Segment = 1 | 0
export type Message = Array<Segment>

/**
 * Function that finds the longest balanced segment of 1s and 0s
 *
 * @param message Array of 1s and 0s that represents a message
 * @returns  [start, end] of the longest balanced segment
 */
export function findBalancedSegment(message: Message): [number, number] {
  console.table(message)

  return [0, 0]
}

findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
//                         |________|
// posición del segmento:    [2, 5]
// más largo equilibrado
// de 0s y 1s

findBalancedSegment([1, 1, 0])
//                      |__|
//                     [1, 2]

findBalancedSegment([1, 1, 1])
// no hay segmentos equilibrados: []
