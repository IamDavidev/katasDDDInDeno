export function pascalTriangleGenerator(numRows: number): number[][] {
  if (numRows <= 0) return []

  const traingle = [[1]]

  let items = 1
  for (let i = 1; i < numRows; i++) {
    items++
    const row: number[] = []

    for (let item = 0; item < items; item++) {
      const left = traingle[i - 1][item - 1] ?? 0
      const right = traingle[i - 1][item] ?? 0

      row.push(left + right)
    }

    traingle.push(row)
  }

  return traingle
}

pascalTriangleGenerator(5)
