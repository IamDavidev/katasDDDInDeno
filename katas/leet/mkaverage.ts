interface MKAveragePort {
  /**
   *
   * @param num
   */
  addElement(num: number): void

  /**
   *
   * @returns
   */
  calculateMKAverage(): number
}

type Stream = Array<number>

export class MKAverage implements MKAveragePort {
  public streamElements: Stream

  /**
   *
   * @param m  - The number of most recent elements to consider for the MKAverage calculation
   * @param k  - The number of smallest and largest elements to remove from the calculation
   */
  constructor(private readonly m: number, private readonly k: number) {
    this.streamElements = []
  }

  /**
   *
   * @param num -
   */
  public addElement(num: number): void {
    this.streamElements.push(num)
  }

  /**
   *
   * @returns
   */
  public calculateMKAverage(): number {
    return -1
  }
}
