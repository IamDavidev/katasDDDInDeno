/**
 * Interval :
 * [start, end]
 */
export type Interval = [number, number] //

/**
 * List of intervals :
 * [[start, end], [start, end], [start, end]]
 */
export type Intervals = Array<Interval>

export function optimizeIntervals(intervals: Intervals): Intervals {
  /**
   * Sort intervals to optimize the algorithm
   *
   */
  intervals.sort((a: Interval, b: Interval) => a[0] - b[0])

  /**
   * Add the first interval to the optimized list
   */
  const optimized = [intervals[0]] as Intervals

  /**
   *
   * Function to check if an interval is included in another interval
   *
   * @param interval Optimize interval
   * @param intervalToCheck  Interval to check if it's included in the optimized interval
   * @returns  true if the intervalToCheck is included in the interval
   */
  const isIncluded = (interval: Interval, intervalToCheck: Interval) => {
    const [start, end] = interval
    const [startToCheck, _] = intervalToCheck

    return startToCheck >= start && startToCheck <= end
  }

  /**
   *
   * @param interval Optimize interval
   * @param intervalToMerge  Interval to merge with the optimized interval
   * @returns
   */
  const mergeIntervals = (
    interval: Interval,
    intervalToMerge: Interval
  ): Interval => {
    /**
     * Get the start and end of the two intervals
     */
    const [start, end] = interval
    const [_, endToMerge] = intervalToMerge

    /**
     * Get the max end between the two intervals
     */
    const maxEnd = Math.max(end, endToMerge)

    /**
     * Start is the same because we sort the intervals before
     * and we know that is the smallest start
     */
    return [start, maxEnd]
  }

  for (let interIndex = 1; interIndex < intervals.length; interIndex++) {
    /**
     * Get the last interval of the optimized list
     */
    const currentInterval = optimized[optimized.length - 1]
    /**
     * Get the interval to check if it's included in the optimized interval
     */
    const intervalToCheck = intervals[interIndex]
    const canMerge = isIncluded(currentInterval, intervalToCheck)

    if (canMerge) {
      /**
       * If the interval is included in the optimized interval
       */
      optimized[optimized.length - 1] = mergeIntervals(
        currentInterval,
        intervalToCheck
      )
    } else optimized.push(intervalToCheck) // We add the interval to the optimized list
  }

  return optimized
}

// optimizeIntervals([
//   [3, 4],
//   [5, 8],
//   [2, 7],
// ])
// // => [[2, 8]]

// optimizeIntervals([
//   [1, 3],
//   [2, 6],
//   [8, 10],
// ])
// // -> [[1, 6], [8, 10]]

// optimizeIntervals([
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ])
// // -> [[1, 2], [3, 4], [5, 6]]

// optimizeIntervals([
//   [1, 5],
//   [6, 10],
//   [11, 15],
//   [16, 20],
// ])
// // -> [[1, 5], [6, 10], [11, 15], [16, 20]]

// optimizeIntervals([
//   [5, 7],
//   [6, 8],
// ])
// // -> [[5, 8]]
