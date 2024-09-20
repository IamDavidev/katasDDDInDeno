export function maxProfit(prices: number[]): number {
  if (prices.length === null) return 0

  let maxProfit = 0

  for (let index = 0; index < prices.length; index++) {
    if (prices[index] > prices[index - 1]) {
      maxProfit += prices[index] - prices[index - 1]
    }
  }

  return maxProfit
}