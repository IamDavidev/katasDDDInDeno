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

  let maxZeros = 0
  let maxOnes = 0

  for (const segment of message) {
    if (segment === 0) maxZeros++
    else maxOnes++
  }

  const maxLength = Math.min(maxZeros, maxOnes)

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

      if (zeros > maxLength || ones > maxLength) break

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
