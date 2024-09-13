export function maxProfit(prices: number[]): number {
  let min = Infinity
  let maxProfit = 0

  for (let index = 0; index < prices.length; index++) {
    const price = prices[index]

    if (price < min) min = price

    const profit = price - min
    if (profit > maxProfit) maxProfit = profit
  }

  return maxProfit
}
