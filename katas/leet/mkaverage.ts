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
    //
    if (this.streamElements.length < this.m) return -1

    // Take m elements
    const elements = this.streamElements.slice(-this.m)

    // order elements
    const sortedElements = this.sort(elements)

    // remover the first k elements and the lasta k elements
    const elementsCleaned = sortedElements.slice(this.k, this.m - this.k)

    // sum elements
    let sum = 0
    elementsCleaned.forEach(num => (sum += num))

    // rounded value
    const result = Math.floor(sum / elementsCleaned.length)

    return result
  }

  private sort = (stream: Stream): Stream => stream.sort((a, b) => a - b)
}

const m = 3
const k = 1
const mkaverage = new MKAverage(m, k)

// When
mkaverage.addElement(3)
mkaverage.addElement(1)
mkaverage.addElement(10)
let average = mkaverage.calculateMKAverage()

console.log(average)

mkaverage.addElement(5)
mkaverage.addElement(6)
average = mkaverage.calculateMKAverage()
console.log(average)
