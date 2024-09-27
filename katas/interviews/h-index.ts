export function hIndex(citations: number[]): number {
  let h = 0

  citations.sort((a, b) => b - a)

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i + 1) {
      h = i + 1
    } else {
      break
    }
  }

  return h
}
